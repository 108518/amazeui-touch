import React from 'react';
import PropTypes from 'prop-types';import cx from 'classnames';
import classNameSpace from './utils/className';


export default class Group extends React.Component {

  static propTypes = {
    classPrefix: PropTypes.string.isRequired,
    component: PropTypes.node.isRequired,
    header: PropTypes.node,
    footer: PropTypes.node,
    noPadded: PropTypes.bool,
  }

  static defaultProps = {
      classPrefix: 'group',
      component: 'div'
  }

  renderAddon = (role) => {
    role = role || 'header';
    return this.props[role] ?
      React.createElement(role, {
        className: this.prefixClass(role)
      }, this.props[role]) : null;
  }

  render() {
    const classNS = classNameSpace(this.props);
    const classSet = classNS.classSet;
    this.prefixClass = classNS.prefixClass;

    const {
      component: Component,
      className,
      bodyClass,
      noPadded,
      ...props,
    } = this.props;

    delete props.classPrefix;
    delete props.header;
    delete props.footer;

    classSet[this.prefixClass('no-padded')] = noPadded;

    let bodyClasses = {
      [this.prefixClass('body')]: true,
    };

    return (
      <Component
        {...props}
        className={cx(className, classSet)}
      >
        {this.renderAddon('header')}
        <div className={cx(bodyClasses, bodyClass)}>
          {this.props.children}
        </div>
        {this.renderAddon('footer')}
      </Component>
    );
  }
}
