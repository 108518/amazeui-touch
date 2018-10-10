import React from 'react';
import PropTypes from 'prop-types';
import cx from "classnames";
import classNameSpace from "./utils/className";


class Card extends React.Component {
  static propTypes = {
    classPrefix: PropTypes.string.isRequired,
    bodyClassName: PropTypes.string,
    bodyStyle: PropTypes.object,
    header: PropTypes.node,
    footer: PropTypes.node,
    noMargin: PropTypes.bool,
    noPadding: PropTypes.bool,
    external: PropTypes.bool,
    noLine: PropTypes.bool
  };

  static defaultProps = {
    classPrefix: "card",
    noMargin: false,
    noPadding: false,
    external: false,
    noLine: false
  };

  renderItem = (element, role) => {
    if (!element) {
      return null;
    }

    return element.type && element.type === Card.Child ? (
      element
    ) : (
      <Card.Child role={role}>{element}</Card.Child>
    );
  };

  renderHeader = header => {
    return this.renderItem(header, "header");
  };

  renderFooter = footer => {
    return this.renderItem(footer, "footer");
  };

  renderTitle = (title, noMargin, external) => {
    return this.renderItem(
      <h2
        className={cx(
          this.prefixClass("title"),
          noMargin && this.prefixClass("title-noMargin"),
          external && this.prefixClass("title-external")
        )}
      >
        {title}
      </h2>
    );
  };

  renderTitleOrHeader = (header, noMargin, external) => {
    return typeof header == "string"
      ? this.renderTitle(header, noMargin, external)
      : this.renderHeader(header);
  };

  render() {
    const classNS = classNameSpace(this.props);
    const classSet = classNS.classSet;
    this.prefixClass = classNS.prefixClass;

    const {
      children,
      className,
      header,
      footer,
      noMargin,
      noPadding,
      external,
      noLine,
      bodyStyle,
      bodyClassName,
      ...props
    } = this.props;

    delete props.classPrefix;

    const bodyCls = cx(bodyClassName, this.prefixClass("body"), {
      [this.prefixClass("body-noPadding")]: noPadding,
    })

    classSet[this.prefixClass("external")] = external
    classSet[this.prefixClass("noMargin")] = noMargin
    classSet[this.prefixClass("noline")] = noLine

    return (
      <div
        {...props}
        className={cx(
          classSet,
          className,
        )}
      >
        {this.renderTitleOrHeader(header, noMargin, external)}

        <div
          className={bodyCls}
          style={bodyStyle}
        >{children}</div>

        {this.renderFooter(footer)}
      </div>
    );
  }
}

class CardChild extends React.Component {
  static propTypes = {
    classPrefix: PropTypes.string.isRequired,
    role: PropTypes.oneOf(["header", "footer"]),
    cover: PropTypes.string
  };

  static defaultProps = {
    classPrefix: "card",
    role: "header"
  };

  render() {
    const classNS = classNameSpace(this.props);
    this.prefixClass = classNS.prefixClass;

    const { role, className, cover, ...props } = this.props;

    let classSet = {
      [this.prefixClass(role)]: true,
      [this.prefixClass("cover")]: cover
    };

    let style = null;

    if (cover) {
      style = {
        backgroundImage: "url(" + cover + ")"
      };
    }

    delete props.classPrefix;

    return (
      <div
        {...props}
        className={cx(className, classSet)}
        role={`card-${role}`}
        style={style}
      >
        {this.props.children}
      </div>
    );
  }
}

Card.Child = CardChild;

export default Card;
