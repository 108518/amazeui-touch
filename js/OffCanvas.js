import React, { cloneElement } from "react";
import PropTypes from "prop-types";
import {
  findDOMNode,
  createPortal,
} from "react-dom";
import classNameSpace, { setClassNS } from "./utils/className";
import CSSCore from "./utils/CSSCore";
import bodyElement from "./utils/bodyElement";

import OffCanvasWrap from "./OffCanvasWrap";
import className from "./utils/className";

class OffCanvas extends React.Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    container: PropTypes.node,
    defaultOffCanvasActive: PropTypes.bool,
    placement: PropTypes.oneOf(["left", "right"]),
    animation: PropTypes.oneOf(["slide", "push"]),
    pageContainer: PropTypes.node,
    onOpen: PropTypes.func,
    onClosed: PropTypes.func
  };

  static defaultProps = {
    isOpen: false,
    placement: "left",
    animation: "slide",
    onOpen: () => {},
    onClosed: () => {}
  };

  constructor(props) {
    super(props);
    this.state = {
      isClosing: false
    };

    this.node = document.createElement("div");
    this.node.className = "__overlay-portal";
  }

  // componentWillMount() {
  //   this.props.isOpen ? this.open() : this.close()
  // }

  componentDidMount() {
    this.setPageContainer();

    this.getContainerDOMNode().appendChild(this.node);
  }

  componentWillReceiveProps(nextProps) {
    let isOpen = this.props.isOpen;

    if (!isOpen && nextProps.isOpen) {
      this.open();
    } else if (isOpen && !nextProps.isOpen) {
      this.close();
    }
  }

  // Remove Overlay related DOM node
  componentWillUnmount() {
    if (this.node) {
      this.getContainerDOMNode().removeChild(this.node);
      this.node = null;
    }
  }

  getContainerDOMNode = () => {
    return findDOMNode(this.props.container) || bodyElement;
  };

  open = () => {
    if (this.props.isOpen) {
      return;
    }

    this.setState(
      {
        isClosing: false
      },
      function() {
        this.props.onOpen();
      }
    );

    if (this.isPush()) {
      CSSCore.addClass(this.getContainerDOMNode(), this.getWithClassName());
    }
  };

  close = () => {
    if (!this.props.isOpen || this.state.isClosing) {
      return;
    }

    this.setState({
      isClosing: true
    });

    if (this.isPush()) {
      let container = this.getContainerDOMNode();
      CSSCore.removeClass(container, this.getWithClassName());
      CSSCore.addClass(container, this.getClosingClassName());
    }
  };

  onDismiss = () => {
    this.props.onDismiss && this.props.onDismiss(this.props.isOpen)
  }

  handleClosed = () => {
    this.setState({
      isClosing: false
    });

    this.props.onClosed();

    if (this.isPush()) {
      CSSCore.removeClass(
        this.getContainerDOMNode(),
        this.getClosingClassName()
      );
    }
  };

  isPush = () => {
    return this.props.animation === "push";
  };

  getPageContainer = () => {
    let { pageContainer } = this.props;

    return typeof pageContainer === "string"
      ? bodyElement.querySelector(pageContainer)
      : findDOMNode(pageContainer);
  };

  setPageContainer = () => {
    let pageContainer = this.getPageContainer();

    if (pageContainer && this.isPush()) {
      CSSCore.addClass(pageContainer, this.setClassNS("offcanvas-push-target"));
    }
  };

  getWithClassName = () => {
    return "with-offcanvas-" + this.props.placement;
  };

  getClosingClassName = () => {
    return "with-offcanvas-closing";
  };

  handleClosing = () => {
    let { isClosing } = this.state;

    if (isClosing) {
      this.handleClosed();
    }
  };

  render() {
    this.setClassNS = setClassNS;

    if (!this.props.isOpen && !this.state.isClosing) {
      return null;
    }

    const { isClosing } = this.state;

    const {
      children,
      style,
      className,
      ...props
     } = this.props;

    return createPortal(
      <OffCanvasWrap
        isClosing={isClosing}
        placement={this.props.placement}
        animation={this.props.animation}
        onDismiss={this.onDismiss}
        onAnimationEnd={ () => {
          this.handleClosing();
        }}
        style={style}
        className={className}
      >{children}</OffCanvasWrap>,
      this.node
    );
  }
}

export default OffCanvas;
