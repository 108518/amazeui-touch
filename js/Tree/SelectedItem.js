import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { setClassNS } from '../utils/className'

export default class SelectedItem extends React.Component {

  static propTypes = {
    prefixCls: PropTypes.string,
    value: PropTypes.string,
    checkedKey: PropTypes.string.isRequired,
  };

  constructor() {
    super();
    this.state = {
      show: true,
    }
  }

  handleClick = () => {
    this.setState({
      show: false
    })
    this.props.triggerOnCheck(this.props.checkedKey)
  }

  render() {
    let {
      prefixCls,
      value,
      ...props
    } = this.props;

    return this.state.show ? (
      <span
        onClick={this.handleClick}
        className={prefixCls + '-selected-item'}
      >
        {value}
      </span>
    ) : null;
  }
}
