import React from 'react';
import PropTypes from 'prop-types';
import cx from "classnames";
import classNameSpace from "./utils/className";
import Icon from './Icon';

export default class Badge extends React.Component {
  static propTypes = {
    classPrefix: PropTypes.string.isRequired,
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    href: PropTypes.string,
    amStyle: PropTypes.string,
    // radius: PropTypes.bool,
    rounded: PropTypes.bool,
    icon: PropTypes.string,
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }

  static defaultProps = {
    classPrefix: "badge",
    component: "span"
  }

  renderWrap = () => {
    const {
      wrapClassName,
      children
    } = this.props;
    const wrapCls = cx(
      this.prefixClass('wrap'),
      wrapClassName
    )

    return (
      <div className={wrapCls}>
        {children}
        {
          this.renderBadge()
        }
      </div>
    )
  }

  renderBadge() {
    let {
      component: Component,
      className,
      href,
      icon,
      text,
      children,
      ...props
    } = this.props;

    delete props.classPrefix;
    delete props.amStyle;
    delete props.rounded;

    Component = href ? "a" : Component;

    const pointCls = this.prefixClass('point')

    if (icon || text !== undefined) {
      return (
        <Component {...props} className={cx(this.classSet, className)}>
          {text !== undefined ? text: <Icon name={icon} /> }
        </Component>
      );
    } else {
      return (
        <span {...props} className={cx(pointCls, this.classSet, className)} />
      )
    }
  }

  renderPoint = () => {

  }

  render() {
    const {
      children
    } = this.props;

    const classNS = classNameSpace(this.props);
    this.classSet = classNS.classSet;
    this.prefixClass = classNS.prefixClass;


    return children ? this.renderWrap() : this.renderBadge()
  }
}
