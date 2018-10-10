/**
 * @see https://github.com/negomi/react-burger-menu
 */

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import classNameSpace, {setClassNS} from './utils/className';


class OffCanvasWrap extends React.Component {

  static propTypes = {
    classPrefix: PropTypes.string,
    placement: PropTypes.oneOf(['left', 'right']),
    onDismiss: PropTypes.func,
  }

  static defaultProps = {
      classPrefix: 'offcanvas',
      placement: 'left',
  }

  renderBackdrop = (children) => {
    let onClick = this.handleBackdropClick || null;
    let classSet = {
      [this.setClassNS('modal-backdrop')]: true,
      [this.setClassNS('modal-backdrop-out')]: this.props.isClosing,
    };

    return (
      <span>
        {children}
        <div
          onClick={onClick}
          ref="backdrop"
          className={cx(classSet)}
        ></div>
      </span>
    );
  }

  handleBackdropClick = (e) => {
    if (e && e.target === this.refs.backdrop) {
      let {
        onDismiss,
      } = this.props;

      onDismiss && onDismiss();
    }
  }

  render() {
    const classNS = classNameSpace(this.props);
    const classSet = classNS.classSet;
    this.prefixClass = classNS.prefixClass;
    this.setClassNS = setClassNS

    const {
      placement,
      animation,
      className,
      children,
      isClosing,
      ...props
    } = this.props;

    delete props.classPrefix;
    delete props.onDismiss;

    classSet[this.prefixClass('out')] = isClosing;
    classSet[this.prefixClass(placement)] = !!placement;
    classSet[this.prefixClass(animation)] = !!animation;

    const offCanvas = (
      <div
        {...props}
        className={cx(classSet, className)}
        ref="overlay"
      >
        {children}
      </div>
    );

    return this.renderBackdrop(offCanvas);
  }
}

export default OffCanvasWrap;
