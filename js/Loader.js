import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import classNameSpace from './utils/className';

export default class Loader extends React.Component {

  static propTypes = {
    classPrefix: PropTypes.string,
    component: PropTypes.node,
    amStyle: PropTypes.string,
    rounded: PropTypes.bool,
  }

  static defaultProps = {
      classPrefix: 'loader',
      component: 'div',
      rounded: true,
  }

  render() {
    const classNS = classNameSpace(this.props);
    const classSet = classNS.classSet;
    this.prefixClass = classNS.prefixClass;

    const {
      className,
      component: Component,
      ...props,
    } = this.props;

    delete props.classPrefix;
    delete props.amStyle;
    delete props.rounded;

    return (
      <Component
        {...props}
        className={cx(classSet, className)}
      >
        <div className={this.prefixClass('bounce1')} />
        <div className={this.prefixClass('bounce2')} />
        <div className={this.prefixClass('bounce3')} />
      </Component>
    )
  }
}
