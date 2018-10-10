import React from 'react';
import PropTypes from 'prop-types';import ReactDOM from 'react-dom';
import List from './List';
import Modal from './Modal';
import NavBar from './NavBar';
import Switch from './Switch';
import cx from 'classnames';
import classNameSpace, {setClassNS}from './utils/className';


class Select extends React.Component {

  static propTypes = {
    classPrefix: PropTypes.string.isRequired,
    multiple: PropTypes.bool,
    onValueChange: PropTypes.func,
  }

  static defaultProps = {
      classPrefix: 'select',
      multiple: true
  }

  state = {
    isModalOpen: false
  }

  componentWillMount() {
    let {
      children,
      multiple,
      defaultValue
    } = this.props;

    this.filteredChildren = this.getFilteredChildren(children);

    if (multiple) {
      const itemSelectedRecord = [];
      const childrenList = [];
      React.Children.forEach(this.filteredChildren, (child, index) => {
        let defaultSelected = false;
        if (!Array.isArray(defaultValue)) {
          defaultValue = [defaultValue];
        }
        if (typeof child.props.defaultSelected === 'boolean') {
          defaultSelected = child.props.defaultSelected;
        } else if (defaultValue.includes(child.props.value)) {
          defaultSelected = true;
        }
        itemSelectedRecord[index] = defaultSelected;
        if (defaultSelected) {
          childrenList.push(child.props.children);
        }
      });
      this.initShowCaseArgs = [childrenList, multiple];
      this.setState({
        itemSelectedRecord
      });
    } else {
      const itemSelectedRecordOne = {};
      let children;
      let allDisabled = false;
      React.Children.forEach(this.filteredChildren, (child, index) => {
        if (child.props.defaultSelected || defaultValue === child.props.value) {
          itemSelectedRecordOne.index = index;
          itemSelectedRecordOne.value = child.props.value;
          children = child.props.children;
          allDisabled = Boolean(child.props.disabled);
        }
      });
      this.initShowCaseArgs = [children, multiple];
      this.setState({
        allDisabled,
        itemSelectedRecordOne
      });
    }
  }

  componentDidMount() {
    this.changeShowCase(...this.initShowCaseArgs);
  }

  record = (index, value, callback) => {
    let itemSelectedRecord = Object.assign([], this.state.itemSelectedRecord);
    itemSelectedRecord[index] = value;
    this.setState({
      itemSelectedRecord
    }, () => {
      callback && callback();
    });
  }

  recordOne = (index, value, callback) => {
    this.setState({
      itemSelectedRecordOne: {
        index,
        value
      }
    }, () => {
      callback && callback();
    });
  }

  getFilteredChildren = (children) => {
    const filteredChildren = [];
    React.Children.forEach(children, (child) => {
      if (child.type.displayName === 'SelectItem') {
        filteredChildren.push(child);
      }
    });
    return filteredChildren;
  }

  handleItemValueChange = (index, value, children) => {
    const {
      multiple
    } = this.props;
    if (multiple) {
      this.record(index, !value, () => {
        if (this.props.onValueChange) {
          const valueList = [];
          const childrenList = [];
          React.Children.forEach(this.filteredChildren, (child, index) => {
            if (this.state.itemSelectedRecord[index]) {
              valueList.push(child.props.value);
              childrenList.push(child.props.children);
            }
          });
          this.props.onValueChange(valueList);
          this.changeShowCase(childrenList, multiple);
        }
      });
    } else {
      this.recordOne(index, value, () => {
        this.props.onValueChange && this.props.onValueChange(value);
        this.changeShowCase(children, multiple);
      });
    }
  }

  changeShowCase = (children, multiple) => {
    const li = ReactDOM.findDOMNode(this.showCase);
    if (li && li.tagName === 'LI') {
      const a = li.children[0];
      if (a && a.tagName === 'A') {
        const div = a.children[0];
        if (div && div.tagName === 'DIV') {
          div.innerText = (multiple ? children.join(', ') : children) || "请选择";
        }
      }
    }
  }

  render() {
    const classNS = classNameSpace(this.props);
    this.prefixClass = classNS.prefixClass;
    this.setClassNS = setClassNS;

    let {
      classPrefix,
      children,
      className,
      multiple,
      defaultValue,
      onValueChange,
      ...others
    } = this.props;

    const navbarProps = {
      title: multiple ? '已选择 ' + this.state.itemSelectedRecord.reduce(function(pre, cur){return pre + cur}) + ' 项' : '请选择',
      leftNav: [{
        title: '',
        onClick: () => this.setState({ isModalOpen: false }),
        icon: 'left'
      }],
    };

    const newChildren = React.Children.map(this.filteredChildren, (child, index) => {
      if (multiple) {
        return React.cloneElement(child, Object.assign({}, child.props, {
          shape: 'checkbox',
          checked: this.state.itemSelectedRecord[index],
          onClick: (e, checked) => this.handleItemValueChange(index, checked)
        }));
      } else {
        return React.cloneElement(child, Object.assign({}, child.props, {
          shape: 'radio',
          disabled: this.state.allDisabled || child.props.disabled,
          checked: this.state && this.state.itemSelectedRecordOne && this.state.itemSelectedRecordOne.index === index,
          onClick: e => this.handleItemValueChange(index, child.props.value, child.props.children)
        }));
      }
    });

    return(
      <div
        className={cx(className, this.setClassNS())}
        {...others}
      >
        <List>
          <List.Item
            ref={elem => this.showCase = elem}
            href="javascript:void(0);"
            after="请选择"
            onClick={() => this.setState({ isModalOpen: true })}
          />
        </List>
        <Modal
          ref={modal => {this.modal = modal}}
          role="page"
          header={<NavBar {...navbarProps} amStyle="primary" />}
          isOpen={this.state.isModalOpen}
        >
          <div className={this.prefixClass('list')}>
            <List>
              {newChildren}
            </List>
          </div>
        </Modal>
      </div>
    )
  }
}

class SelectItem extends React.Component {

  static propTypes = {
    classPrefix: PropTypes.string.isRequired,
    shape: PropTypes.string,
    checked: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    disabled: PropTypes.bool,
  }

  static defaultProps = {
      classPrefix: 'select-item'
  }

  static displayName = 'SelectItem'

  constructor(props) {
    super(props)
    const {
      selected,
      defaultSelected
    } = this.props;

    this.state = {
      selected: typeof selected === 'boolean' ? selected : defaultSelected
    }
  }

  render() {
    const classNS = classNameSpace(this.props);
    this.prefixClass = classNS.prefixClass;
    this.setClassNS = setClassNS

    const {
      classPrefix,
      children,
      shape,
      checked,
      disabled,
      onClick,
      ...others
    } = this.props;

    const after = (
      <Switch
        className={this.prefixClass('switch')}
        shape={shape}
        checked={checked}
        disabled={disabled}
      />
    );

    return (
      <List.Item
        className={cx(this.setClassNS(), disabled && this.prefixClass('disabled'))}
        title={children}
        after={after}
        onClick={e => !disabled && onClick(e, checked)}
      />
    );
  }
}

Select.Item = SelectItem;

export default Select;
