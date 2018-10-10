/**
 * @see https://github.com/yuanyan/boron
 */

import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import cx from 'classnames';
import TransitionEvents from '../utils/TransitionEvents';
import classNameSpace, {setClassNS} from '../utils/className';
import Button from '../Button';
import Icon from '../Icon';
import Loader from '../Loader';
import View from '../View';
import Container from '../Container';

// MUST be equal to $modal-duration in _modal.scss
const TRANSITION_TIMEOUT = 300;

function noop() {
}

class Modal extends React.Component {

  static propTypes = {
    classPrefix: PropTypes.string,
    role: PropTypes.oneOf(['alert', 'confirm', 'prompt', 'loading',
      'actions', 'popup', 'page']),
    title: PropTypes.node,
    confirmText: PropTypes.string,
    cancelText: PropTypes.string,
    closeBtn: PropTypes.bool,
    closeViaBackdrop: PropTypes.bool,
    onAction: PropTypes.func,
    onOpen: PropTypes.func,
    onClosed: PropTypes.func,
    onDismiss: PropTypes.func,
    header: PropTypes.node,
    footer: PropTypes.node,
  }

  static defaultProps = {
      classPrefix: 'modal',
      confirmText: '确定',
      cancelText: '取消',
      closeBtn: true,
      closeViaBackdrop: true,
      onAction: noop,
      onOpen: noop,
      onClosed: noop,
      onDismiss: noop,
  }

  state = {
      closed: true,
      isClosing: false,
  }

  componentDidMount() {
    if (this.props.isOpen) {
      this.open();
    }
  }

  componentWillReceiveProps(nextProps) {
    let isOpen = this.props.isOpen;

    if (!isOpen && nextProps.isOpen) {
      this.open();
    } else if (isOpen && !nextProps.isOpen) {
      this.close();
    }
  }

  isClosed = () => {
    return this.state.closed;
  }

  isPopup = () => {
    return this.props.role === 'popup';
  }

  isActions = () => {
    return this.props.role === 'actions';
  }

  isPage = () => {
    return this.props.role === 'page';
  }

  // Get input data for prompt modal
  getFieldData = () => {
    let data = [];
    let inputs = ReactDOM.findDOMNode(this)
      .querySelectorAll('input[type=text]');

    if (inputs) {
      for (let i = 0; i < inputs.length; i++) {
        data.push(inputs[i].value);
      }
    }

    return (data.length === 0) ? null : ((data.length === 1) ? data[0] : data);
  }

  // data === null: prompt -> canceled
  // data === true: confirm -> confirmed
  // data === false: confirm -> canceled
  handleAction = (data, e) => {
    let {
      role,
      onAction,
    } = this.props;
    let willClose = true;

    if (role === 'prompt' && data) {
      data = this.getFieldData();

      willClose = onAction.call(this, data, e);
    } else {
      onAction.call(this, data, e);
    }

    willClose && this.requestClose(e);
  }

  handleBackdropClick = (e) => {
    if (e.target !== e.currentTarget || !this.props.closeViaBackdrop) {
      return;
    }

    this.requestClose(e);
  }

  open = () => {
    if (this.isClosed()) {
      this.setState({
        isClosing: false,
        closed: false
      });

      this.props.onOpen();
    }
  }

  // Only for instance self calling
  close = () => {
    if (this.isClosed() || this.state.isClosing) {
      return;
    }

    this.setState({
      isClosing: true
    });
  }

  // for user actions
  requestClose = (e) => {
    this.props.onDismiss(e);
  }

  handleClosed = () => {
    this.setState({
      closed: true,
      isClosing: false,
    });
    this.props.onClosed();
  }

  removeUnknownProp = (props) => {
    delete props.isOpen;
    delete props.onDismiss;
    delete props.onOpen;
    delete props.onClosed;
    delete props.onAction;
    delete props.classPrefix;
    delete props.confirmText;
    delete props.cancelText;
    delete props.closeBtn;
    delete props.closeViaBackdrop;
    delete props.page;

    return props;
  }

  renderActions = (classSet) => {
    classSet[this.props.classPrefix] = false;

    return (
      <div
        className={cx(this.props.className, classSet)}
        key="modalActions"
        ref={modal => {this.modal = modal}}
      >
        {this.props.children}
        <div className={this.prefixClass('actions-group')}>
          <Button
            onClick={this.requestClose}
            block
            className={this.props.btnClassName}
            amStyle={this.props.btnStyle || 'secondary'}
          >
            {this.props.cancelText}
          </Button>
        </div>
      </div>
    );
  }

  renderPopup = (classSet) => {
    classSet[this.props.classPrefix] = false;

    let {
      className,
      title,
      children,
      ...props
    } = this.props;

    return (
      <div
        {...this.removeUnknownProp(props)}
        className={cx(className, classSet, this.setClassNS('popup'))}
        key="modalPopup"
        ref={modal => {this.modal = modal}}
      >
        <div className={this.setClassNS('popup-inner')}>
          <div className={this.setClassNS('popup-header')}>
            {title ? (
              <h4 className={this.setClassNS('popup-title')}>
                {title}
              </h4>
            ) : null}
            <Icon
              name="cancel"
              className={this.setClassNS('popup-icon')}
              onClick={this.requestClose}
            />
          </div>
          <div className={this.setClassNS('popup-body')}>
            {children}
          </div>
        </div>
      </div>
    );
  }

  renderHeader = () => {
    let {
      title,
      closeBtn,
      role
    } = this.props;
    let closeIcon = closeBtn && !role ? (
      <Icon
        name="cancel"
        className={this.prefixClass('icon')}
        onClick={this.requestClose}
      />
    ) : null;

    return (title || closeIcon) ? (
      <div
        className={this.prefixClass('header')}
        key="modalHeader"
      >
        {title ? (
          <h4
            className={this.prefixClass('title')}
          >
            {title}
          </h4>) : null}
        {closeIcon}
      </div>) : null;
  }

  // Render alert/confirm/prompt buttons
  renderFooter = () => {
    let buttons;
    let btnClass = this.prefixClass('btn');
    let {
      role,
      confirmText,
      cancelText,
    } = this.props;

    switch (role) {
      case 'alert':
        buttons = (
          <span
            key="modalBtn"
            onClick={this.handleAction.bind(this, null)}
            className={btnClass}
          >
            {confirmText}
          </span>);
        break;
      case 'confirm':
      case 'prompt':
        let cancel = (role === 'prompt') ? null : false;
        buttons = [cancelText, confirmText].map((text, i) => {
          return (
            <span
              key={'modalBtn' + i}
              onClick={this.handleAction.bind(this, i === 0 ? cancel : true)}
              className={btnClass}
            >
              {text}
            </span>
          );
        });
        break;
      default:
        buttons = null;
    }

    return buttons ? (
      <div className={this.prefixClass('footer')}>
        {buttons}
      </div>
    ) : null;
  }

  renderPage = (classSet) => {
    let {
      header,
      footer,
      children,
      className,
      ...props
    } = this.props;

    return (
      <div
        ref={modal => {this.modal = modal}}
        className={cx(className, classSet)}
      >
        {header}
        <div className={`${this.prefixClass('page')}-main`}>
          {children}
        </div>
        {footer}
      </div>
    )
  }

  // Using transition appear to fix animation issue on iOS Safari
  // @see https://github.com/amazeui/amazeui-touch/issues/11
  renderTransition= (children) => {
    return (
      <span>
        {children}
      </span>
    );
  }

  renderBackdrop = (children) => {
    const onClick = this.handleBackdropClick || null;
    const preventDefault = (e) => {
      // prevent window scroll when touch backdrop
      e.preventDefault();
    };

    let classSet = {};

    classSet[this.prefixClass('backdrop')] = true;
    classSet[this.setClassNS('active')] = true;
    classSet[this.prefixClass('backdrop-out')] = this.state.isClosing;

    return (
      <span>
        {children}
        <div
          className={cx(classSet)}
          style={{height: window.innerHeight}}
          ref={backdrop => {this.backdrop = backdrop}}
          onClick={onClick}
          onTouchMove={preventDefault}
        />
      </span>
    );
  }

  render() {
    let {
      closed,
      isClosing,
    } = this.state;

    if (closed) {
      return null;
    }

    // listen out animation end envent
    if (isClosing) {
      let node = this.modal;

      if (node) {
        let closedHandler = (e) => {
          if (e && e.target !== node) {
            return;
          }

          TransitionEvents.off(node, closedHandler);
          this.handleClosed();
        };

        TransitionEvents.on(node, closedHandler);
      }
    }

    const classNS = classNameSpace(this.props);
    const classSet = classNS.classSet;
    this.prefixClass = classNS.prefixClass;
    this.setClassNS = setClassNS;

    let {
      role,
      className,
      title,
      children,
      modalWidth,
      modalHeight,
      ...props
    } = this.props;
    let modal;

    classSet[this.prefixClass('out')] = isClosing;
    role && (classSet[this.prefixClass(role)] = true);

    if (this.isActions()) {
      modal = this.renderTransition(this.renderActions(classSet));
    } else if (this.isPopup()) {
      modal = this.renderTransition(this.renderPopup(classSet));
    } else if (this.isPage()) {
      modal = this.renderPage(classSet);
    } else {
      let style = {
        width: modalWidth,
        height: modalHeight
      };

      modal = (
        <div
          {...this.removeUnknownProp(props)}
          style={style}
          ref={modalContainer => {this.modalContainer = modalContainer}}
          className={cx(classSet, className)}
        >
          <div
            className={this.prefixClass('inner')}
            ref={modal => {this.modal = modal}}
          >
            <div
              className={this.prefixClass('dialog')}
            >
              {this.renderHeader()}
              <div
                className={this.prefixClass('body')}
                ref={modalBody => {this.modalBody = modalBody}}
              >
                {role === 'loading' ?
                  (children ? children : <Loader />) :
                  children}
              </div>
              {this.renderFooter()}
            </div>
          </div>
        </div>
      );
    }

    return this.renderBackdrop(modal);
  }
}

export default Modal;
