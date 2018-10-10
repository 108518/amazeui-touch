import React from 'react';
import PropTypes from 'prop-types';import Icon from './Icon';
import Card from './Card';
import cx from 'classnames';
import classNameSpace from './utils/className';


export default class CollapseCard extends React.Component {

  static propTypes = {
    classPrefix: PropTypes.string.isRequired,
    title: PropTypes.string,
    header: PropTypes.node,
    noMargin: PropTypes.bool,
    noLine: PropTypes.bool,
    collapseHeight: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
    defaultCollapsed: PropTypes.bool
  }

  static defaultProps = {
    classPrefix: 'card',
    noMargin: false,
    defaultCollapsed: true,
    collapsedText: '显示更多',
    uncollapsedText: '收起全部',
  }

  constructor(props) {
    super(props)
    this.state = {
      collapsed: this.props.defaultCollapsed
    }
  }

  handleOpen = () => {
    this.setState({
      collapsed: false
    })
  }

  handleClose = () => {
    this.setState({
      collapsed: true
    })
  }

  renderFooter = () => {
    const footer_more = (
      <div
        className={this.prefixClass('footer-more')}
        onClick={this.handleOpen}
      >
        <Icon name="down"/>
        &nbsp;{this.props.collapsedText}
      </div>
    );

    const footer_less = (
      <div
        className={this.prefixClass('footer-more')}
        onClick={this.handleClose}
      >
        <Icon name="up"/>
        &nbsp;{this.props.uncollapsedText}
      </div>
    );

    return this.state.collapsed ? footer_more : footer_less
  }

  render() {
    const classNS = classNameSpace(this.props);
    const classSet = classNS.classSet;
    this.prefixClass = classNS.prefixClass;

    const {
      subHeader,
      classPrefix,
      children,
      collapseHeight,
      defaultCollapsed,
      footer,
      external,
      noPadding,
      ...props
    } = this.props;

    let isPadding
    if (noPadding || subHeader) {
      isPadding = true;
    } else {
      isPadding = this.state.collapsed ? false : true
    }

    delete props.collapsedText
    delete props.uncollapsedText

    return (
      <Card
        {...props}
        noPadding={!isPadding}
        footer={this.renderFooter()}
      >
        <div>{subHeader}</div>
        {!this.state.collapsed ? children : null}
      </Card>
    );
  }
}

// TODO: use height=0 or null to hide children?
