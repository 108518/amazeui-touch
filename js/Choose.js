import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import SelectableButton from './SelectableButton';
import cx from 'classnames';
import classNameSpace from './utils/className';


class Choose extends React.Component {

  static propTypes = {
    classPrefix: PropTypes.string.isRequired,
    amStyle: PropTypes.string,
    amSize: PropTypes.string,
    multiple: PropTypes.bool,
    onValueChange: PropTypes.func,
  }

  static defaultProps = {
      classPrefix: 'choose',
      multiple: true,
      amStyle: 'warning',
      amSize: 'sm'
  }

  componentWillMount() {
    const {
      children,
      multiple,
      defaultValue
    } = this.props;
    if (!multiple) {
      const itemSelectedRecord = {};
      const filteredChildren = this.getFilteredChildren(children);
      React.Children.forEach(filteredChildren, (child, index) => {
        if (child.props.defaultSelected || defaultValue === child.props.value) {
          itemSelectedRecord.index = index;
          itemSelectedRecord.value = child.props.value;
        }
      });
      this.setState({
        itemSelectedRecord
      });
    }
  }

  record = (index, value) => {
    if (!Array.isArray(this.itemSelectedRecord)) {
      this.itemSelectedRecord = [];
    }
    this.itemSelectedRecord[index] = value;
  }

  recordOne = (index, value) => {
    this.setState({
      itemSelectedRecord: {
        index,
        value
      }
    });
  }

  getFilteredChildren = (children) => {
    const filteredChildren = [];
    React.Children.forEach(children, (child) => {
      if (child.type.displayName === 'ChooseItem') {
        filteredChildren.push(child);
      }
    });
    return filteredChildren;
  }

  handleItemValueChange = (index, value, filteredChildren) => {
    const {
      multiple
    } = this.props;
    if (multiple) {
      this.record(index, value);
      if (this.props.onValueChange) {
        const currentValue = [];
        React.Children.forEach(filteredChildren, (child, index) => {
          if (this.itemSelectedRecord[index]) {
            currentValue.push(child.props.value);
          }
        });
        this.props.onValueChange(currentValue);
      }
    } else {
      this.recordOne(index, value);
      this.props.onValueChange(value);
    }
  }

  render() {
    const classNS = classNameSpace(this.props);
    const classSet = classNS.classSet;
    this.prefixClass = classNS.prefixClass;

    let {
      classPrefix,
      className,
      children,
      amStyle,
      amSize,
      multiple,
      defaultValue,
      ...others
    } = this.props;

    const filteredChildren = this.getFilteredChildren(children);

    const newChildren = React.Children.map(filteredChildren, (child, index) => {
      if (multiple) {
        let defaultSelected;
        if (!Array.isArray(defaultValue)) {
          defaultValue = [defaultValue];
        }
        if (typeof child.props.defaultSelected === 'boolean') {
          defaultSelected = child.props.defaultSelected;
        } else if (defaultValue.includes(child.props.value)) {
          defaultSelected = true;
        }
        this.record(index, defaultSelected);
        return React.cloneElement(child, Object.assign({}, child.props, {
          amStyle,
          amSize,
          defaultSelected,
          onValueChange: value => this.handleItemValueChange(index, value, filteredChildren)
        }));
      } else {
        const {className} = child.props;
        return (
          <li className={cx(this.prefixClass('item'), className)}>
            <Button
              amStyle={this.state && this.state.itemSelectedRecord && this.state.itemSelectedRecord.index === index ? amStyle : ''}
              amSize={amSize}
              disabled={child.props.disabled}
              data-value={child.props.value}
              onClick={()=>{this.handleItemValueChange(index, child.props.value)}}
            >
              {child.props.children}
            </Button>
          </li>
        );
      }
    });

    return (
      <div className={cx(classSet, className)}>
        <ul className={this.prefixClass('list')}>
          {newChildren}
        </ul>
      </div>
    );
  }
}

class ChooseItem extends React.Component {

  static propTypes = {
    classPrefix: PropTypes.string.isRequired,
    multiple: PropTypes.bool,
    amStyle: PropTypes.string,
    amSize: PropTypes.string,
    disabled: PropTypes.bool,
    selected: PropTypes.bool,
    defaultSelected: PropTypes.bool,
    onClick: PropTypes.func,
    onValueChange: PropTypes.func,
  }

  static defaultProps = {
      classPrefix: 'choose'
  }

  static displayName = 'ChooseItem'

  render() {
    const classNS = classNameSpace(this.props);

    let {
      classPrefix,
      className,
      children,
      ...others
    } = this.props;

    return (
      <li className={cx(classNS.prefixClass('item'), className)}>
        <SelectableButton
          {...others}
        >
          {children}
        </SelectableButton>
      </li>
    );
  }
}

Choose.Item = ChooseItem;

export default Choose;
