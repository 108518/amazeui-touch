import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import classNameSpace from './utils/className';
import Icon from './Icon';

export default class CheckBox extends React.Component {

  static propTypes = {
    classPrefix: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    disabled: PropTypes.bool.isRequired,
    label: PropTypes.string,
  }

  static defaultProps = {
    classPrefix: 'checkbox',
    label: '选项',
    checked: false,
    disabled: false,
  }

  render() {
  	const { classPrefix, text, checked, disabled, readOnly, changeEvent, ...other } = this.props;
  	return (
  		<label className={cx(this.prefixClass('container'))} >
        <input {...other} checked={checked} disabled={disabled} readOnly={readOnly} type="checkbox" />
        <span className={this.prefixClass('label')}>
          {text}
        </span>
        <Icon className={this.prefixClass('icon')} name="elect" />
      </label>
  	);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.checked != prevProps.checked || this.props.text != prevProps.text) {
      this.props.changeEvent && this.props.changeEvent();
    }
  }
}
