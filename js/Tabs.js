import React from 'react';
import PropTypes from 'prop-types';import cx from 'classnames';
import classNameSpace from './utils/className';

import Button from './Button';
import ButtonGroup from './ButtonGroup';
import Icon from './Icon';
import {getAbsoluteUrl} from './utils/tool'


class Tabs extends React.Component {

  static propTypes = {
    classPrefix: PropTypes.string,
    activeKey: PropTypes.any,
    defaultActiveKey: PropTypes.any,
    onAction: PropTypes.func,
    inset: PropTypes.bool,
    navStyle: PropTypes.object,
    navClassName: PropTypes.string,
    secondTab: PropTypes.bool,
    counter: PropTypes.number,
    animation: PropTypes.bool,
  }

  static defaultProps = {
      classPrefix: 'tabs',
      animation: true
  }

  constructor(props) {
    super(props)
    this.state = {
      activeKey: this.getDefaultActiveKey(),
      previousActiveKey: null,
     }
  }

  componentWillReceiveProps(nextProps) {
    let nextActiveKey = nextProps.activeKey;

    // update controlled Tabs' state
    if (nextActiveKey != null && nextActiveKey !== this.props.activeKey) {
      this.setState({
        activeKey: nextActiveKey,
        previousActiveKey: this.props.activeKey
      });
    }
  }

  getDefaultActiveKey = (children) => {
    let defaultActiveKey = this.props.defaultActiveKey;

    if (defaultActiveKey != null) {
      return defaultActiveKey;
    }

    React.Children.forEach(children, function(child) {
      if (defaultActiveKey == null) {
        defaultActiveKey = child.props.eventKey;
      }
    });

    return defaultActiveKey != null ? defaultActiveKey : 0;
  }

  getActiveKey = () => {
    return this.props.activeKey != null ?
      this.props.activeKey : this.state.activeKey;
  }

  handleClick = (key, disabled, href, e) => {
    e.preventDefault();
    let activeKey = this.state.activeKey;

    if (disabled) {
      return;
    }

    if (this.props.onAction) {
      this.props.onAction(key);
    }

    if (href) {
      window.location = getAbsoluteUrl(href);
      return;
    }

    // uncontrolled
    if (this.props.activeKey == null && activeKey !== key) {
      this.setState({
        activeKey: key,
        previousActiveKey: activeKey
      });
    }
  }

  renderNav = () => {
    const activeKey = this.getActiveKey();
    const navWrapStyle = this.props.navStyle;
    const navWrapClassName = this.props.navClassName;
    const secondTab = this.props.secondTab;
    const counter = this.props.counter;
    const basis = counter ? 1 / counter * 100 : null;
    const navPrefix = secondTab ? 'subnav' : 'nav';

    // Magic Number: 10 is margin of item defined in css.
    const marginPercent = counter && secondTab ? 10 / window.innerWidth * 100 : 0;

    // something is wrong with react
    const flexBasis = basis ? {
      flexBasis: `${basis - marginPercent}%`,
      WebkitFlexBasis: `${basis - marginPercent}%`,
      // msFlexBasis: `${basis}%`,
    } : {};

    const navClassNames = cx(this.prefixClass(`${navPrefix}`), navWrapClassName);

    const navs = React.Children.map(this.props.children, (child, index) => {
      let {
        href,
        eventKey,
        disabled,
        classPrefix,
        navStyle,
        navClassName,
      } = child.props;
      let key = index;

      eventKey = eventKey !== undefined ? eventKey : index;
      let active = eventKey === activeKey;
      const prefixClass = this.prefixClass(`${navPrefix}-item`);
      const itemWrapClass = this.prefixClass(`${navPrefix}-item-wrap`);
      const itemFixSkewClass = this.prefixClass(`${navPrefix}-item-fix-skew`);

      const itemCls = cx(prefixClass, {
        active,
        disabled,
      }, navClassName);

      const itemStyle = Object.assign(navStyle || {}, flexBasis);

      return !secondTab ? (
        <span
          ref={'tabNav' + key}
          key={key}
          onClick={this.handleClick.bind(this, key, disabled, href)}
          className={itemCls}
          style={flexBasis}
        >
          { child.props.title }
        </span>
      ) : (
        <span
          className={itemWrapClass}
          style={flexBasis}
        >
          <span
            ref={'tabNav' + key}
            key={key}
            onClick={this.handleClick.bind(this, key, disabled, href)}
            className={itemCls}
            style={navStyle}
          >
            <span className={itemFixSkewClass}>
              { child.props.title }
            </span>
          </span>
        </span>
      )
    })

    return (
      <div
        className={navClassNames}
        style={navWrapStyle}
      >
        {navs}
        { secondTab ? <div /> : null }
      </div>
    )
  }

  renderTabPanels = () => {
    let activeKey = this.getActiveKey();
    const animation = this.props.animation;

    let panels = React.Children.map(this.props.children, (child, index) => {
      let {
        eventKey,
        children,
        ...props
      } = child.props;

      if (eventKey === undefined) {
        eventKey = index;
      }

      const isActive = eventKey === activeKey;

      const Item = (
        <Tabs.Item
          active={isActive}
          eventKey={eventKey}
          key={'tabPanel' + index}
          animation={animation}
          {...props}
        >
          {children}
        </Tabs.Item>
      )

      if (this.props.render === 'current') {
        return isActive ? Item : null;
      } else {
        return Item;
      }
    })

    return (
      <div
        className={this.prefixClass('body')}
      >
        {panels}
      </div>
    );
  }

  render() {
    const classNS = classNameSpace(this.props);
    const classSet = classNS.classSet;
    this.prefixClass = classNS.prefixClass;

    const {
      className,
      ...props
    } = this.props;

    delete props.classPrefix;
    delete props.activeKey;
    delete props.defaultActiveKey;
    delete props.inset;
    delete props.onAction;
    delete props.secondTab;
    delete props.counter;
    delete props.animation;
    delete props.render;

    return (
      <div
        {...props}
        className={cx(classSet, className)}
      >
        {this.renderNav()}
        {this.renderTabPanels()}
      </div>
    );
  }
}

class TabsItem extends React.Component{

  static propTypes = {
    classPrefix: PropTypes.string,
    title: PropTypes.node,
    eventKey: PropTypes.any,
    disabled: PropTypes.bool,
    active: PropTypes.bool,
    noPadded: PropTypes.bool,
    navStyle: PropTypes.object,
  }

  static defaultProps = {
      classPrefix: 'tab',
  }

  render() {
    const classNS = classNameSpace(this.props);
    const classSet = classNS.getClassSet(true);
    this.prefixClass = classNS.prefixClass;

    const {
      className,
      children,
      noPadded,
      active,
      animation,
      ...props
    } = this.props;
    const elementName = 'panel';

    delete props.classPrefix;
    delete props.eventKey;
    delete props.active;
    delete props.noPadded;
    delete props.navStyle;
    delete props.counter;
    delete props.animation;

    classSet[this.prefixClass(elementName)] = true;
    classSet[this.prefixClass(`${elementName}-no-padded`)] = noPadded;
    classSet[this.prefixClass(`${elementName}-no-animation`)] = !animation;

    return (
      <div
        {...props}
        className={cx(classSet, className)}
      >
        {children}
      </div>
    );
  }
}

Tabs.Item = TabsItem;

export default Tabs;
