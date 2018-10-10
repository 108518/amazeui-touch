import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import classNameSpace from './utils/className';


export default class extends React.Component {

  static defaultProps = {
    classPrefix: 'btn',
  }

  static propTypes = {
    classPrefix: PropTypes.string.isRequired,
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    href: PropTypes.string,
    target: PropTypes.string,
    amStyle: PropTypes.string,
    amSize: PropTypes.string,
    hollow: PropTypes.bool,
    rounded: PropTypes.bool,
    square: PropTypes.bool,
    block: PropTypes.bool,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
  }

  removeUnknownProp = (props) => {
    // For performance, just delete
    delete props.classPrefix;
    delete props.amStyle;
    delete props.amSize;
    delete props.square;
    delete props.rounded;
    delete props.hollow;
    delete props.block;
    delete props.active;

    return props;
  }

  // iOS active pesudo-class
  iOSTouchStart = () => {
    if (/CPU.+Mac OS X/.test(navigator.userAgent)) {
      return {
        onTouchStart: () => {}
      }
    } else {
      return {}
    }
  }

  renderAnchor= (classes) => {
    let {
      href,
      component: Component,
      children,
      ...props
    } = this.props;
    Component = Component || 'a';

    href = href || '#';

    return (
      <Component
        {...this.iOSTouchStart()}
        {...this.removeUnknownProp(props)}
        href={href}
        className={classes}
        role="button"
      >
        {children}
      </Component>
    );
  }

  renderButton = (classes) => {
    let {
      component: Component,
      children,
      ...props,
    } = this.props;
    Component = Component || 'button';

    return (
      <Component
        {...this.iOSTouchStart()}
        {...this.removeUnknownProp(props)}
        className={classes}
      >
        {children}
      </Component>
    );
  }

  render() {
    const classNS = classNameSpace(this.props);
    const classSet = classNS.classSet;

    const {
      href,
      target,
      block,
      className,
    } = this.props;

    const renderType = href || target ? 'renderAnchor' : 'renderButton';

    // block button
    classSet[classNS.prefixClass('block')] = block;

    return this[renderType](cx(classSet, className));
  }
}

