import React from 'react';
import PropTypes from 'prop-types';import cx from 'classnames';
import classNameSpace from './utils/className';

import Button from './Button';
import Icon from './Icon';
import Switch from './Switch';
import DefaultInput from './DefaultInput';
import DefaultTextarea from './DefaultTextarea';

export default class Field extends React.Component {

  static propTypes = {
    classPrefix: PropTypes.string.isRequired,
    type: PropTypes.string,
    right: PropTypes.bool,
    label: PropTypes.node,
    btnBefore: PropTypes.node,
    btnAfter: PropTypes.node,
    labelBefore: PropTypes.node,
    labelAfter: PropTypes.node,
    containerClassName: PropTypes.string,
    single: PropTypes.bool,
    tip: PropTypes.string,
    labelWidth: PropTypes.string,
    underline: PropTypes.string,
    labelStyle: PropTypes.string,
    labelClassName: PropTypes.string,
    disabled: PropTypes.bool,
  }

  static defaultProps = {
    classPrefix: 'field',
    type: 'text',
    underline: 'full'
  }

  componentDidMount() {
    // Reference: https://stackoverflow.com/questions/23757345/android-does-not-correctly-scroll-on-input-focus-if-not-body-element
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
    if (/Android/.test(navigator.appVersion)) {
      window.addEventListener('resize', () => {
        if (/INPUT|TEXTAREA/.test(document.activeElement.tagName)) {
           window.setTimeout(() => {
              document.activeElement.scrollIntoViewIfNeeded();
           }, 0);
        }
      })
    }
  }

  getFieldDOMNode = () => {
    return this.refs.field;
  }

  getValue = () => {
    if (this.props.type === 'select' && this.props.multiple) {
      return this.getSelectedOptions();
    } else {
      return this.getFieldDOMNode().value;
    }
  }

  getChecked = () => {
    return this.getFieldDOMNode().checked;
  }

  getSelectedOptions = () => {
    let values = [];
    // see http://www.w3schools.com/jsref/coll_select_options.asp
    let options = this.getFieldDOMNode().options;

    Array.from(options).forEach((option) => {
      if (option.selected) {
        let value = option.getAttribute('value') || option.innerHtml;

        values.push(value);
      }
    });

    return values;
  }

  isCheckboxOrRadio = () => {
    return this.props.type === 'radio' || this.props.type === 'checkbox';
  }

  isFile = () => {
    return this.props.type === 'file';
  }

  // convert `value`/`defaultValue` to `checked`/`defaultChecked` when `type` is `radio`/checkbox``
  convertValueToChecked = () => {
    let checkedProps = {};

    if (this.isCheckboxOrRadio()) {
      const propsMap = {
        checked: 'value',
        defaultChecked: 'defaultValue',
      };

      Object.keys(propsMap).forEach((checked) => {
        let value = propsMap[checked];

        if (!this.props[checked] && this.props[value]) {
          checkedProps[checked] = value;
        }
      });
    }

    return checkedProps;
  }

  renderField = () => {
    let field = null;
    let fieldClassName = this.isCheckboxOrRadio() || this.isFile() ?
      '' : this.classNS.classNames;
    let classes = cx(this.props.className, fieldClassName);
    let commonProps = {
      ref: 'field',
      key: 'formField',
      className: classes,
    };
    let assignedProps = {
      ...this.props,
      ...commonProps,
    };

    delete assignedProps.classPrefix;
    delete assignedProps.containerClassName;
    delete assignedProps.label;
    delete assignedProps.right;
    delete assignedProps.btnBefore;
    delete assignedProps.btnAfter;
    delete assignedProps.labelBefore;
    delete assignedProps.labelAfter;
    delete assignedProps.single;
    delete assignedProps.labelWidth;
    delete assignedProps.tip;
    delete assignedProps.underline;

    switch (this.props.type) {
      case 'select':
        field = (
          <select
            {...assignedProps}
          >
            {this.props.children}
          </select>
        );
        break;
      case 'textarea':
        field = (
          <DefaultTextarea
            {...assignedProps}
          />
        );
        break;
      case 'submit':
      case 'reset':
        let {
          classPrefix,
          underline,
          ...others
        } = this.props;
        field = (
          <Button
            {...commonProps}
            className={null}
            {...others}
            component="input"
          />
        );
        break;
      case 'file':
        let {
          className,
          ...otherss
        } = assignedProps;
        field = (
          <label className={this.prefixClass('file')}>
            <span className={this.prefixClass('file-title')}>上传</span>
            <input
              {...otherss}
              {...this.convertValueToChecked()}
              className={this.prefixClass('file-input')}
            />
          </label>
        );
        break;
      case 'switch':
        field = (
          <Switch {...assignedProps} />
        );
        break;
      case 'custom':
        field = this.props.children;
        break;
      default:
        field = (
          <DefaultInput
            {...assignedProps}
            {...this.convertValueToChecked()}
          />
        );
    }

    return field;
  }

  renderContainer = (children) => {
    const {
      id,
      label,
      labelWidth,
      labelStyle,
      labelClassName,
      containerClassName,
      single,
      tip,
      underline,
      disabled,
    } = this.props;

    const containerClass = cx(
      { [this.prefixClass('container')]: !single },
      { [this.prefixClass('single')]: single },
      { [this.prefixClass('disabled')]: disabled },
      { [this.prefixClass(`underline-${underline}`)]: underline === 'part'},
      containerClassName,
    );

    const labelClass = cx(
      this.prefixClass('label'),
      labelClassName,
    );

    const labelStyles = Object.assign({}, {
      width: labelWidth,
    }, labelStyle);

    const wrapClass = cx(this.prefixClass('wrap'), {
      [this.prefixClass('wrap-custom')]: this.props.type === 'custom',
    });

    return label ? (
      <label
        className={containerClass}
        key="label"
      >
        <div
          className={labelClass}
          style={labelStyles}
        >
          <div>{label}</div>
          {tip ? <span className={this.prefixClass('tip')}>{tip}</span> : null }
        </div>
        <div className={wrapClass}>{children}</div>
        {this.isCheckboxOrRadio() ? (
          <Icon
            className={this.prefixClass('icon')}
            name="elect"
          />
        ) : null}
      </label>
    ) : children;
  }

  renderFieldGroup = (children) => {
    const groupPrefix = this.classNS.prefixClass('group');
    const labelClassName = groupPrefix + '-label';
    const {
      labelBefore,
      labelAfter,
      btnBefore,
      btnAfter,
      containerClassName,
    } = this.props;
    const renderFiledLabel = (type) => {
      return this.props[type] ? (
        <span
          className={labelClassName}
          key={type}
        >
          {this.props[type]}
        </span>
      ) : null;
    };

    return labelBefore || labelAfter || btnBefore || btnAfter ? (
      <div
        className={cx(groupPrefix, containerClassName)}
        key="fieldGroup"
      >
        {renderFiledLabel('labelBefore')}
        {btnBefore}
        {children}
        {renderFiledLabel('labelAfter')}
        {btnAfter}
      </div>
    ) : children;
  }

  render() {
    this.classNS = classNameSpace(this.props);
    this.prefixClass = this.classNS.prefixClass;

    const field = this.renderField();

    if (this.props.label) {
      return this.renderContainer(field);
    }

    return this.renderFieldGroup(field);
  }
};
