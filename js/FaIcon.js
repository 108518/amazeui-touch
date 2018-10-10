import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import classNameSpace from './utils/className';


export default class FaIcon extends React.Component {

  static propTypes = {
    classPrefix: PropTypes.string.isRequired,
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    name: PropTypes.string.isRequired,
    href: PropTypes.string,
    size: PropTypes.string,
    fw: PropTypes.bool,
    spin: PropTypes.bool,
    pulse: PropTypes.bool,
    rotate: PropTypes.number,
  }

  static defaultProps = {
    classPrefix: 'fa-icon',
    component: 'span'
  }

  render() {
    let classSet = classNameSpace(this.props).classNames;

    let {
      component: Component,
      className,
      name,
      size,
      spin,
      pulse,
      fw,
      rotate,
      ...props
    } = this.props;

    delete props.classPrefix;
    delete props.amStyle;

    Component = props.href ? 'a' : Component;

    // Use font-awesome classname, so do not change this
    const cls = cx('fa', `fa-${name}`, {
      [`fa-${size}`]: size,
      'fa-fw': fw,
      'fa-spin': spin,
      'fa-pulse': pulse,
      [`fa-rotate-${rotate}`]: rotate,
    }, className)

    return (
      <Component
        {...props}
        className={cx(classSet)}
      >
        <i className={cls}/>
      </Component>
    );
  }
}
