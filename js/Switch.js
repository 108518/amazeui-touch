import React from 'react';
import PropTypes from 'prop-types';import cx from 'classnames';
import classNameSpace from './utils/className';

export default class Switch extends React.Component {

  static propTypes = {
    classPrefix: PropTypes.string.isRequired,
    name: PropTypes.string,
    shape: PropTypes.string,
    amStyle: PropTypes.string,
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    onValueChange: PropTypes.func,
  }

  static defaultProps = {
    classPrefix: 'switch',
    onValueChange: () => {},
  }

  getValue = () => this.field.checked

  render() {
    const classNS = classNameSpace(this.props);
    const classSet = classNS.classSet;
    this.prefixClass = classNS.prefixClass;

    const {
      name,
      shape,
      className,
      onValueChange,
      checked,
      defaultChecked,
      disabled,
      ...props
    } = this.props;

    delete props.classPrefix;
    delete props.amStyle;

    return (
      <label
        {...props}
        className={cx(classSet, className)}
      >
        <input
          onChange={onValueChange.bind(this)}
          name={name}
          type="checkbox"
          ref={input => { this.field = input; }}
          checked={checked}
          defaultChecked={defaultChecked}
          disabled={disabled}
        />
        <span className={this.prefixClass(shape ? shape : 'label')} />
      </label>
    );
  }
}

