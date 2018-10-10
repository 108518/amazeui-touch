import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import classNameSpace, {setClassNS} from './utils/className';


export default class Popover extends React.Component {

  static propTypes = {
    classPrefix: PropTypes.string,
    placement: PropTypes.oneOf(['top', 'bottom', 'horizontal']),
    positionLeft: PropTypes.number,
    positionTop: PropTypes.number,
    angleLeft: PropTypes.number,
    angleTop: PropTypes.number,
    anglePosition: PropTypes.string,
    onDismiss: PropTypes.func,
  }

  static defaultProps = {
    classPrefix: 'popover',
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
    this.setClassNS = setClassNS;

    const {
      className,
      children,
      positionLeft,
      positionTop,
      angleLeft,
      angleTop,
      anglePosition,
      isClosing,
      placement,
      ...props
    } = this.props;
    const style = {
      left: positionLeft,
      top: positionTop,
    };
    const angleStyle = {
      left: angleLeft,
      top: angleTop,
    };

    delete props.classPrefix;
    delete props.onDismiss;

    classSet[this.prefixClass('out')] = isClosing;
    classSet[this.prefixClass(placement)] = placement;

    let popover = (
      <div
        {...props}
        style={style}
        ref="overlay"
        className={cx(classSet, className)}
      >
        <div className={this.prefixClass('inner')}>
          {children}
        </div>
        <div
          style={angleStyle}
          className={cx(this.prefixClass('angle'),
          anglePosition ? this.prefixClass('angle-' + anglePosition) : null
          )}
        />
      </div>
    );

    return this.renderBackdrop(popover);
  }
}
