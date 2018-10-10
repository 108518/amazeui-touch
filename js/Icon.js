import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import classNameSpace from './utils/className';


export default class Icon extends React.Component {

  static propTypes = {
    classPrefix: PropTypes.string.isRequired,
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    name: PropTypes.string.isRequired,
    href: PropTypes.string,
    // amStyle: PropTypes.string,
    // button: PropTypes.bool,
    // size: PropTypes.string,
  }

  static defaultProps = {
    classPrefix: 'icon',
    component: 'span'
  }

  render() {
    const classNS = classNameSpace(this.props);
    const classSet = classNS.classSet;

    let {
      component: Component,
      className,
      name,
      ...props
    } = this.props;

    delete props.classPrefix;

    Component = props.href ? 'a' : Component;

    // icon-[iconName]
    classSet[classNS.prefixClass(name)] = true;

    return (
      <Component
        {...props}
        className={cx(classSet, className)}
      >
        {this.props.children}
      </Component>
    );
  }
}
