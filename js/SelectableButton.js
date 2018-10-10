import React from 'react';
import PropTypes from 'prop-types';import Button from './Button';
import Icon from './Icon';
import cx from 'classnames';
import classNameSpace from './utils/className';

export default class SelectableButton extends React.Component {

  constructor(props) {
    super(props)
    const {
      selected,
      defaultSelected
    } = this.props;
    this.state = {
      selected: typeof selected === 'boolean' ? selected : defaultSelected
    };
  }

  static propTypes = {
    classPrefix: PropTypes.string.isRequired,
    amStyle: PropTypes.string,
    amSize: PropTypes.string,
    disabled: PropTypes.bool,
    selected: PropTypes.bool,
    defaultSelected: PropTypes.bool.isRequired,
    onClick: PropTypes.func,
    onValueChange: PropTypes.func,
  }

  static defaultProps = {
    classPrefix: 'btn',
    defaultSelected: false,
    amStyle: 'warning',
  }

  render() {
    const classNS = classNameSpace(this.props);
    this.prefixClass = classNS.prefixClass;

    let {
      classPrefix,
      children,
      className,
      selected,
      defaultSelected,
      amStyle,
      disabled,
      onClick,
      onValueChange,
      href,
      target,
      square,
      rounded,
      hollow,
      active,
      ...others
    } = this.props;

    selected = typeof selected === 'boolean' ? selected : this.state.selected;

    return(
      <Button
        className={cx(this.prefixClass('selectable'), className)}
        hollow
        disabled={disabled}
        amStyle={disabled ? '' : amStyle}
        data-selected={this.state.selected}
        {...others}
        onClick={()=>{
          this.setState({
            selected: !this.state.selected
          }, () => {
            onClick && onClick();
            onValueChange && onValueChange(this.state.selected);
          });
        }}
      >
        {children}
        <span className={this.prefixClass('selectable-helper')}>
          {selected && <div>
            <i className={this.prefixClass('selectable-helper-traingle')}/>
            <small className={this.prefixClass('selectable-helper-check')}>
              <Icon name="elect"/>
            </small>
          </div>}
        </span>
      </Button>
    )
  }
}

