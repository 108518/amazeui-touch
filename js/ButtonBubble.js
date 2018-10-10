import React, {
  cloneElement,
} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import classNameSpace from './utils/className';


export default class ButtonBubble extends React.Component {
  static propTypes = {
    classPrefix: PropTypes.string.isRequired
  }

  static defaultProps = {
    classPrefix: 'btn-bubble',
  }

  render() {
    const classNS = classNameSpace(this.props);
    const classSet = classNS.classSet;

    const {
      className,
      ...props
    } = this.props;

    delete props.classPrefix;

    return (
      <div
        {...props}
        className={cx(className, classSet)}
      >
        <div>
          {this.props.children}
        </div>
        <div className={`${cx(classSet)}-triangle`}/>
      </div>
    );
  }
}
