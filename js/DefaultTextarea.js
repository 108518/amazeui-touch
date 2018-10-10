/**
 * 移除 React 对原生 textarea 的包装
 * 非受控组件
 */

import React from 'react';
import PropTypes from 'prop-types';

export default class DefaultTextarea extends React.Component {

  static defaultProps = {
    value: ''
  }

  componentWillReceiveProps(nextProps) {
    this.input.value = nextProps.value;
  }

  componentDidMount() {
    const {
      value
    } = this.props;
    this.input.value = value;
  }

  render() {
    const {
      value,
      ...props
    } = this.props;

    return (
      <textarea ref={ref => {this.input = ref}} {...props} />
    );
  }
}
