import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM, {
  createPortal,
} from 'react-dom';
import CSSCore from '../utils/CSSCore';
import bodyElement from '../utils/bodyElement';
import Modal from './Modal';

const bodyClassName = 'has-modal-open';


class ModalPortal extends React.Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    isOpen: false,
  }

  constructor() {
    super()
    this.node = document.createElement('div');
    this.node.className = '__modal-portal';
  }

  componentDidMount() {
    bodyElement.appendChild(this.node);
  }

  componentWillUnmount() {
    bodyElement.removeChild(this.node);
    CSSCore.removeClass(bodyElement, bodyClassName);
  }

  render() {
    const {
      isOpen,
      ...props
    } = this.props;
    CSSCore[(isOpen ? 'add' : 'remove') + 'Class'](bodyElement, bodyClassName);

    return createPortal(
      <Modal {...this.props} />,
      this.node
    );
  }
}

export default ModalPortal;
