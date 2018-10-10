import React from 'react';
import PropTypes from 'prop-types';
import cx from "classnames";
import TransitionEvents from "./utils/TransitionEvents";
import classNameSpace, { setClassNS } from "./utils/className";
import Icon from "./Icon";


class Accordion extends React.Component {
  static propTypes = {
    classPrefix: PropTypes.string,
    activeKey: PropTypes.any,
    defaultActiveKey: PropTypes.any,
    inset: PropTypes.bool,
    onAction: PropTypes.func
  };

  static defaultProps = {
    classPrefix: "accordion"
  };

  state = {
    activeKey: this.props.defaultActiveKey || null
  };

  shouldComponentUpdate() {
    // Defer any updates to this component during the `onAction` handler.
    return !this._isChanging;
  }

  handleSelect = (e, key) => {
    e.preventDefault();

    if (this.props.onAction) {
      this._isChanging = true;
      this.props.onAction(key);
      this._isChanging = false;
    }

    if (this.state.activeKey === key) {
      key = null;
    }

    this.setState({
      activeKey: key
    });
  };

  renderItems = () => {
    let activeKey =
      this.props.activeKey != null
        ? this.props.activeKey
        : this.state.activeKey;

    return React.Children.map(this.props.children, (child, index) => {
      let { eventKey } = child.props;

      const props = {
        key: index,
        onAction: this.handleSelect
      };

      if (eventKey === undefined) {
        props.eventKey = eventKey = index;
      }
      props.expanded = eventKey === activeKey;

      return React.cloneElement(child, props);
    });
  };

  render() {
    const classNS = classNameSpace(this.props);
    const classSet = classNS.classSet;
    this.prefixClass = classNS.prefixClass;

    const { className, inset, ...props } = this.props;

    delete props.classPrefix;
    delete props.activeKey;
    delete props.defaultActiveKey;
    delete props.onAction;

    classSet[this.prefixClass("inset")] = inset;

    return (
      <section {...props} className={cx(classSet, className)}>
        {this.renderItems()}
      </section>
    );
  }
}

class AccordionItem extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    eventKey: PropTypes.any
  };

  constructor(props) {
    super(props);

    const defaultExpanded =
      this.props.defaultExpanded != null
        ? this.props.defaultExpanded
        : this.props.expanded != null ? this.props.expanded : false;

    this.state = {
      expanded: defaultExpanded,
      collapsing: false
    };
  }

  componentWillUpdate(nextProps, nextState) {
    const willExpanded =
      nextProps.expanded != null ? nextProps.expanded : nextState.expanded;

    if (willExpanded === this.isExpanded()) {
      return;
    }

    // if the expanded state is being toggled, ensure node has a dimension value
    // this is needed for the animation to work and needs to be set before
    // the collapsing class is applied (after collapsing is applied the in class
    // is removed and the node's dimension will be wrong)

    const node = this.getCollapsibleDOMNode();
    const dimension = this.dimension();
    let value = "0";

    if (!willExpanded) {
      // get height
      value = this.getCollapsibleDimensionValue();
    }

    node.style[dimension] = value + "px";

    this._afterWillUpdate();
  }

  componentDidUpdate(prevProps, prevState) {
    // check if expanded is being toggled; if so, set collapsing
    this._checkToggleCollapsing(prevProps, prevState);

    // check if collapsing was turned on; if so, start animation
    this._checkStartAnimation();
  }

  // helps enable test stubs
  _afterWillUpdate = () => {};

  _checkStartAnimation = () => {
    if (!this.state.collapsing) {
      return;
    }

    const node = this.getCollapsibleDOMNode();
    const dimension = this.dimension();
    const value = this.getCollapsibleDimensionValue();

    // setting the dimension here starts the transition animation
    let result;

    if (this.isExpanded()) {
      result = value + "px";
    } else {
      result = "0px";
    }
    node.style[dimension] = result;
  };

  _checkToggleCollapsing = (prevProps, prevState) => {
    const wasExpanded =
      prevProps.expanded != null ? prevProps.expanded : prevState.expanded;
    const isExpanded = this.isExpanded();

    if (wasExpanded !== isExpanded) {
      if (wasExpanded) {
        this._handleCollapse();
      } else {
        this._handleExpand();
      }
    }
  };

  _handleExpand = () => {
    const node = this.getCollapsibleDOMNode();
    const dimension = this.dimension();

    const complete = function() {
      this._removeEndEventListener(node, complete);
      // remove dimension value - this ensures the collapsible item can grow
      // in dimension after initial display (such as an image loading)
      node.style[dimension] = "";
      this.setState({
        collapsing: false
      });
    }.bind(this);

    this._addEndEventListener(node, complete);

    this.setState({
      collapsing: true
    });
  };

  _handleCollapse = () => {
    const node = this.getCollapsibleDOMNode();
    const _this = this;
    const complete = function() {
      _this._removeEndEventListener(node, complete);
      _this.setState({
        collapsing: false
      });
    };

    this._addEndEventListener(node, complete);

    this.setState({
      collapsing: true
    });
  };

  // helps enable test stubs
  _addEndEventListener = (node, complete) => {
    TransitionEvents.on(node, complete);
  };

  // helps enable test stubs
  _removeEndEventListener = (node, complete) => {
    TransitionEvents.off(node, complete);
  };

  dimension = () => {
    return typeof this.getCollapsibleDimension === "function"
      ? this.getCollapsibleDimension()
      : "height";
  };

  isExpanded = () => {
    return this.props.expanded != null
      ? this.props.expanded
      : this.state.expanded;
  };

  getCollapsibleClassSet = className => {
    const classSet = {};

    if (typeof className === "string") {
      className.split(" ").forEach(function(subClass) {
        if (subClass) {
          classSet[subClass] = true;
        }
      });
    }

    classSet[this.setClassNS("collapsing")] = this.state.collapsing;
    classSet[this.setClassNS("collapse")] = !this.state.collapsing;
    classSet[this.setClassNS("in")] =
      this.isExpanded() && !this.state.collapsing;

    return classSet;
  };

  handleClick = e => {
    // @see https://facebook.github.io/react/docs/events.html#event-pooling
    // e.persist();
    // e.selected = true;
    this.selected = true;

    if (this.props.onAction) {
      this.props.onAction(e, this.props.eventKey);
    } else {
      e.preventDefault();
    }

    if (this.selected) {
      this.handleToggle();
    }
  };

  handleToggle = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  getCollapsibleDimensionValue = () => {
    return this.panel.scrollHeight;
  };

  getCollapsibleDOMNode = () => {
    // if (!this.isMounted() || !this.panel) {
    if (!this.panel) {
      return null;
    }

    return this.panel;
  };

  render() {
    this.setClassNS = setClassNS;

    return (
      <dl
        className={cx(
          this.setClassNS("accordion-item"),
          this.isExpanded() ? this.setClassNS("active") : null
        )}
      >
        <dt
          onClick={this.handleClick}
          className={this.setClassNS("accordion-title")}
        >
          {this.props.title}
          <Icon className={this.setClassNS("accordion-icon")} name="down" />
        </dt>
        <dd
          className={cx(
            this.setClassNS("accordion-body"),
            this.getCollapsibleClassSet()
          )}
          ref={ref => {this.panel = ref}}
        >
          <div
            className={this.setClassNS("accordion-content")}
          >
            {this.props.children}
          </div>
        </dd>
      </dl>
    );
  }
}

Accordion.Item = AccordionItem;

export default Accordion;
