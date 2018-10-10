import React from 'react';
import PropTypes from 'prop-types';import cx from 'classnames';
import classNameSpace from './utils/className';

export default class Title extends React.Component {

  static propTypes = {
    classPrefix: PropTypes.string,
    amStyle: PropTypes.oneOf([
      'primary',
      'secondary',
      'success',
      'warning',
      'alert',
      'dark',
    ]),
    text: PropTypes.node,
    icon: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node
    ]),
    more: PropTypes.node,
  }

  static defaultProps = {
    classPrefix: 'title',
  }

  renderIcon = (icon) => {
    if (typeof icon === 'string') {
      return <span className={this.prefixClass('left-icon')}>
        <img src={icon}/>
      </span>
    } else if (React.isValidElement(icon)) {
      return <span className={cx(this.prefixClass('left-icon'), this.prefixClass('left-icon-custom'))}>
        {icon}
      </span>;
    } else {
      return <span className={this.prefixClass('left-icon')}/>;
    }
  }

  renderText = (children) => {
    return (
      <h3 className={cx(this.prefixClass('left-text'))}>
        {children}
      </h3>
    );
  }

  renderRight = (more) => {
    if (Array.isArray(more)) {
      return (
        <nav className={cx(this.prefixClass('right'))}>
          {more.map((item, index) => {
            return <span key={index} className={this.prefixClass('right-item')}>{item}</span>
          })}
        </nav>
      );
    } else if (React.isValidElement(more)) {
      return (
        <nav className={cx(this.prefixClass('right'))}>
          <span className={this.prefixClass('right-item')}>{more}</span>
        </nav>
      );
    } else {
      return null;
    }
  }

  render() {
    this.classNS = classNameSpace(this.props);
    this.prefixClass = this.classNS.prefixClass;

    const classSet = this.classNS.getClassSet();
    const {
      children,
      className,
      icon,
      more,
      ...props
    } = this.props;

    delete props.classPrefix;
    delete props.amSize;
    delete props.amStyle;

    return (
      <header
        {...props}
        className={cx(classSet, className)}
      >
        <div className={cx(this.prefixClass('left'))}>
          {this.renderIcon(icon)}
          {this.renderText(children)}
        </div>
        {this.renderRight(more)}
      </header>
    );
  }
}
