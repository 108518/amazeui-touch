import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM, {
  createPortal,
} from 'react-dom';
import cx from 'classnames';
import classNameSpace from './utils/className';
import bodyElement from './utils/bodyElement';
import Icon from './Icon';

// @see https://facebook.github.io/react/blog/2015/09/10/react-v0.14-rc1.html
// To improve reliability, CSSTransitionGroup will no longer listen to
// transition events. Instead, you should specify transition durations
// manually using props such as `transitionEnterTimeout={500}`.
// NOTE: It should less than CSS animation duration, if not, the animation
// be not smooth. It maybe a bug of React.
const TRANSITION_TIMEOUT = 250;

class Notification extends React.Component {

  static propTypes = {
    classPrefix: PropTypes.string.isRequired,
    title: PropTypes.string,
    amStyle: PropTypes.string,
    closeBtn: PropTypes.bool,
    animated: PropTypes.bool,
    visible: PropTypes.bool,
    onDismiss: PropTypes.func,
  }

  static defaultProps = {
      classPrefix: 'notification',
      closeBtn: true,
      onDismiss: () => {
      },
  }

  renderCloseBtn = () => {
    return this.props.closeBtn ? (
      <Icon
        className={this.prefixClass('icon')}
        name="cancel"
        onClick={this.props.onDismiss}
      />
    ) : null;
  }

  render() {
    const classNS = classNameSpace(this.props);
    const classSet = classNS.classSet;
    this.prefixClass = classNS.prefixClass;

    const {
      title,
      className,
      animated,
      visible,
      ...props
    } = this.props;

    delete props.classPrefix;
    delete props.amStyle;
    delete props.static;
    delete props.closeBtn;
    delete props.onDismiss;

    classSet[this.prefixClass('animated')] = animated;

    let notificationBar = visible ? (
      <div
        {...props}
        className={cx(classSet, className)}
        key="notification"
      >
        <div className={this.prefixClass('content')}>
          {title ? (
            <h3 className={this.prefixClass('title')}>
              {title}
            </h3>
          ) : null}
          {this.props.children}
        </div>
        {this.renderCloseBtn()}
      </div>
    ) : null;

    return animated ? (
      <div>
        {notificationBar}
      </div>
    ) : notificationBar;
  }
}

class NotificationPortal extends React.Component {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
  }

  static efaultProps = {
    visible: false,
  }

  constructor(props) {
    super(props)
    if (!this.isStatic) {
      this.node = document.createElement('div');
      this.node.className = '__notification-portal';
    }
  }

  componentDidMount() {
    if (!this.isStatic) {
      bodyElement.appendChild(this.node);
    }
  }

  componentWillUnmount() {
    if (!this.isStatic) {
      bodyElement.removeChild(this.node);
    }
  }

  get isStatic(){
    return this.props.static;
  }

  renderNotification = () => {
    return createPortal(
      <Notification {...this.props} />,
      this.node
    );
  }

  render() {
    return this.isStatic ?
      <Notification {...this.props} /> :
      this.renderNotification();
  }
}

export default NotificationPortal;
