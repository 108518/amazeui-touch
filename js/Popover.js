import PropTypes from 'prop-types';
import React from 'react';
import createReactClass from 'create-react-class';
import cx from 'classnames';
import ClassNameMixin from './mixins/ClassNameMixin';
import BackdropMixin from './mixins/BackdropMixin';

import '../scss/components/_popover.scss';

const Popover = createReactClass({
  displayName: 'Popover',
  mixins: [ClassNameMixin, BackdropMixin],

  propTypes: {
    classPrefix: PropTypes.string,
    placement: PropTypes.oneOf(['top', 'bottom', 'horizontal']),
    positionLeft: PropTypes.number,
    positionTop: PropTypes.number,
    angleLeft: PropTypes.number,
    angleTop: PropTypes.number,
    anglePosition: PropTypes.string,
    onDismiss: PropTypes.func,
  },

  getDefaultProps() {
    return {
      classPrefix: 'popover',
    };
  },

  handleBackdropClick(e) {
    if (e && e.target === this.backdrop) {
      const {
        onDismiss,
      } = this.props;

      onDismiss && onDismiss();
    }
  },

  render() {
    let classSet = this.getClassSet();
    let {
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
    let style = {
      left: positionLeft,
      top: positionTop,
    };
    let angleStyle = {
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
        // ref={overlay => (this.overlay = overlay)}
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
  },
});

export default Popover;
