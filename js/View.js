import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import classNameSpace from './utils/className';


export default class View extends React.Component {

  static propTypes = {
    classPrefix: PropTypes.string.isRequired,
    component: PropTypes.node.isRequired,
  }

  static defaultProps = {
      classPrefix: 'view',
      component: 'div',
  }

  render() {
    const classNS = classNameSpace(this.props);
    const classSet = classNS.classSet;

    const {
      component,
      className,
      ...props,
    } = this.props;

    delete props.classPrefix;

    return React.createElement(component, {
      ...props,
      className: cx(className, classSet),
    });
  }
}

