import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { setClassNS } from './utils/className'

export default class Divide extends React.Component {

  static propTypes = {
    classPrefix: PropTypes.string.isRequired,
    dashed: PropTypes.bool,
    dotted: PropTypes.bool,
    light: PropTypes.bool,
    large: PropTypes.bool,
  };

  static defaultProps = {
    classPrefix: 'divide',
  };

  render() {
    let {
      className,
      classPrefix,
      dashed,
      dotted,
      light,
      large,
      ...props
    } = this.props;

    const nsPrefix = setClassNS(classPrefix);

    const classes = cx(nsPrefix, {
      [`${nsPrefix}-dashed`]: dashed,
      [`${nsPrefix}-dotted`]: dotted,
      [`${nsPrefix}-light`]: light,
      [`${nsPrefix}-large`]: large,
    }, className);

    return (
      <div {...props} className={classes}>
      </div>
    );
  }
}
