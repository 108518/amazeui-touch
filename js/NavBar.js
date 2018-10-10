import React from 'react';
import PropTypes from 'prop-types';import cx from 'classnames';
import classNameSpace from './utils/className';
import Icon from './Icon';

export default class NavBar extends React.Component {

  static propTypes = {
    classPrefix: PropTypes.string,
    amStyle: PropTypes.oneOf([
      'primary',
      'secondary',
      'success',
      'warning',
      'alert',
      'dark',
    ]),
    title: PropTypes.node,
    leftNav: PropTypes.array,
    rightNav: PropTypes.array,
    titleOnLeft: PropTypes.bool,
    onAction: PropTypes.func,
  }

  static defaultProps = {
    classPrefix: 'navbar',
    onAction: () => {
    },
  }

  renderTitle = () => {
    let {
      titleOnLeft,
      title,
    } = this.props;
    let titlePosition = this.prefixClass(titleOnLeft ? 'left' : 'center');

    return title ? (
      <h2
        className={cx(this.prefixClass('title'), titlePosition)}
      >
        {title}
      </h2>
    ) : this.props.children;
  }

  renderNav = (position) => {
    let nav = this.props[position + 'Nav'];
    this._navPosition = position;

    return nav && Array.isArray(nav) ? (
      <div
        className={cx(this.prefixClass('nav'),
        this.prefixClass(position))}
      >
        {nav.map(this.renderNavItem)}
      </div>
    ) : null;
  }

  renderNavItem = (item, index) => {
    let {
      component: Component,
      title,
      customIcon,
      icon,
      isClone,
      // href,
      className,
      ...otherProps,
    } = item;

    const children = [];

    const itemClassName = cx(this.prefixClass('nav-item'), className);
    const itemProps = {
      key: 'navbarNavItem' + index,
      onClick: this.props.onAction.bind(this, item),
      ...otherProps,
      className: itemClassName,
    };

    Component = Component || 'a';

    title && children.push(
      <span
        className={this.prefixClass('nav-title')}
        key='title'
      >
        {title}
      </span>
    );

    const navIconKey = 'icon';
    const iconClassName = {
      [this.prefixClass('icon')]: true,
      // affected by order and icon order changing
      // .navbar-nav-title ~ .navbar-icon not works
      // add an className to set styles
      [this.prefixClass('icon-sibling-of-title')]: !!title,
    };
    const navIcon = customIcon ? (
      <img
        src={customIcon}
        className={cx(iconClassName)}
        alt={title || null}
        key={navIconKey}
      />
    ) : icon ? (
      <Icon
        className={cx(iconClassName)}
        name={icon}
        key={navIconKey}
      />
    ) : null;

    // adjust title and icon order for Android UC
    // @see ../scss/helper/_mixins.scss `navbar-item-android-uc-fallback` mixin
    // if (navIcon) {
    //   const action = this._navPosition === 'left' ? 'unshift' : 'push';
    //   Array.prototype[action].call(children, navIcon);
    // }
    // just for Enterplorer
    navIcon && children.push(navIcon);

    let renderChildren = () => {
      // #40
      // if `Component` is a clone type like OffCanvasTrigger,
      // this should return a element with the className.
      // TBC: should other props be transferred to the span element?
      return isClone ? (
        <span
          className={itemClassName}
        >
          {children}
        </span>
      ) : children;
    };

    return (
      <Component {...itemProps}>
        {renderChildren()}
      </Component>
    );
  }

  render() {
    this.classNS = classNameSpace(this.props);
    this.prefixClass = this.classNS.prefixClass;

    const classSet = this.classNS.classNames;
    const {
      className,
      ...props
    } = this.props;

    delete props.title;
    delete props.classPrefix;
    delete props.leftNav;
    delete props.rightNav;
    delete props.amStyle;
    delete props.onAction;
    delete props.titleOnLeft;

    return (
      <header
        {...props}
        className={cx(classSet, className)}
      >
        {this.renderTitle()}
        {this.renderNav('left')}
        {this.renderNav('right')}
      </header>
    );
  }
}

