import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import classNameSpace from './utils/className';
import Card from './Card';

export default class ProcessLogs extends React.Component {

  static propTypes = {
    classPrefix: PropTypes.string.isRequired,
    source: PropTypes.array,
  };

  static defaultProps = {
    classPrefix: 'process-logs',
  };

  constructor(props) {
    super(props)
  }

  renderLogsItem=(data) =>{
    return data.map((item,index)=>{
      return <Card
        header={
          <Card.Child role="header" className={this.prefixClass('content-title')}>
            <div>{item.title} <span>|</span> {item.time}</div>
            <div>{item.after}</div>
          </Card.Child>
        }
        key={index}
        noLine={true}
      >
        {item.content}
      </Card>
    })
  }

  render() {
    const classNS = classNameSpace(this.props);
    this.prefixClass = classNS.prefixClass;

    const {
      source,
    } = this.props;
    const logsWrapCls = cx(this.prefixClass('logs-wrap'));
    return(
      <div>
        {source.map((item,index)=>{
          return <div className={logsWrapCls} key={index}>
            <span>{item.date}</span>
            {this.renderLogsItem(item.process)}
          </div>
        })}
      </div>
    )
  }
}
