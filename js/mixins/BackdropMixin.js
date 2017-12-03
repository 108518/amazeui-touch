import React from 'react';
import cx from 'classnames';

export default {
  renderBackdrop(children) {
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
          ref={backdrop => (this.backdrop = backdrop)}
          className={cx(classSet)}
        />
      </span>
    );
  },
};
