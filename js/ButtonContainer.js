import React, {
  cloneElement,
} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import classNameSpace from './utils/className';


export default class ButtonContainer extends React.Component {

  static propTypes = {
    classPrefix: PropTypes.string.isRequired,
    more: PropTypes.bool
  }

  static defaultProps = {
    classPrefix: 'btn-container',
  }

  render() {
    const classNS = classNameSpace(this.props);
    const classSet = classNS.classSet;

    let {
      className,
      more,
      ...props
    } = this.props;

    delete props.classPrefix;

    classSet[classNS.prefixClass('more')] = more;

    return (
      <div
        {...props}
        className={cx(className, classSet)}
      >
        {this.props.children}
      </div>
    );
  }
}
