import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import classNameSpace from './utils/className';


export default class Col extends React.Component {

  static propTypes = {
    classPrefix: PropTypes.string.isRequired,
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    cols: PropTypes.number,
    offset: PropTypes.number,
    shrink: PropTypes.bool,
  }

  static defaultProps = {
      classPrefix: 'col',
      component: 'div'
 }

  render() {
    const classNS = classNameSpace(this.props);
    const classSet = classNS.classSet;
    this.prefixClass = classNS.prefixClass;

    let {
      component: Component,
      cols,
      offset,
      shrink,
      className,
      ...props,
    } = this.props;

    delete props.classPrefix;

    if (cols) {
      classSet[this.prefixClass(cols)] = true;
    }

    if (offset) {
      classSet[this.prefixClass('offset-' + offset)] = true;
    }

    classSet[this.prefixClass('shrink')] = shrink;

    return (
      <Component
        {...props}
        className={cx(className, classSet)}
      >
        {this.props.children}
      </Component>
    );
  }
}
