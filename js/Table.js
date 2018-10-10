import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import classNameSpace from './utils/className';

import Icon from './Icon';
import Title from './Title';

// 按照 Table 语义设置数据源


export default class Table extends React.Component {

  static propTypes = {
    classPrefix: PropTypes.string.isRequired,
    source: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      columnWidth: PropTypes.number,
      data: PropTypes.array.isRequired
    }))
  }

  static defaultProps = {
    classPrefix: 'table',
    source: [], // TODO: need to validate data format
    textAlign: 'center',
    fixedHeader: false,
    border: true,
    colWidth: 150, // default column width
    tableHeight: 300, // when table height is big than this, scroll.
    title:'',
    fullScreen: false,
  }

  state = {
    bodyWidth: 0,
    showFullScreen: false,
    landscape: false,
  }

  componentDidMount() {
    this.tableBody && this.setState({
      bodyWidth: this.tableBody.clientWidth
    })
  }

  renderHeader = (data) => {
    return (
      <thead>
        <tr>
          {
            data.map((item, i) => (
              <th key={i}><span>{item.title}</span></th>
            ))
          }
        </tr>
      </thead>
    )
  }

  renderBody = (source) => {
    const length = source[0].data.length;

    const trs = []
    for (let i =0; i < length; i++) {
      const tr = source.map((column, j) => {
        return (
          <td key={`td-${i}-${j}`}>{column.data[i]}</td>
        )
      })
      trs.push(tr)
    }

    return (
      <tbody>
        {
          trs.map((tr, index) => {
            return <tr key={index} style={{background: index%2 ==0 ? '#fff' : '#f4f4f4'}}>
              { tr }
            </tr>
          })
        }
      </tbody>
    )
  }

  renderColGroup = (source) => {
    const styles = {
      width: '100px',
      minWidth: '100px'
    }
    return (
      <colgroup>
        {
          source.map((item, i) => (
            <col width={item.columnWidth ? item.columnWidth : null} key={i} />
          ))
        }
      </colgroup>
    )
  }

  // renderFixedColumn = (source) => {
  //   return source.map((column, index) => {
  //     if (column.fixed) {
  //       const tr = column.data.map((item, key) => (
  //         <tr key={key}>
  //           <td>{ item }</td>
  //         </tr>
  //       ))
  //       tr.unshift(<th>{column.title}</th>)
  //       return tr
  //     }
  //   })
  // }

  handleToggleScreen=() =>{
    this.setState({
      fullScreen: !this.state.fullScreen,
    })
  }

  handleToggleLandscape=()=>{
    this.setState({
      landscape: !this.state.landscape
    })
  }

  render() {
    const classNS = classNameSpace(this.props);
    const classSet = classNS.classSet;
    this.prefixClass = classNS.prefixClass;
    const {
      source,
      textAlign,
      fixedHeader,
      title,
      showFullScreen
    } = this.props;
    const fullTableWidth = window.screen.availWidth;
    const fullTableHeight = window.screen.availHeight;


    const wrapCls = cx(classSet, this.prefixClass(`text-algin-${textAlign}`))
    const headerCls = cx(this.prefixClass('header'))
    const bodyCls = cx(this.prefixClass('body'))
    const oprIconCls=cx(this.prefixClass('opr-icon'))

    const bodyWrapStyle = this.state.bodyWidth && fixedHeader ? {
      width: this.state.bodyWidth + 'px',
      maxHeight: this.state.fullScreen ? (fullTableHeight - 45) + 'px' : '300px',
    } : null;
    const fullScreenStyle= this.state.fullScreen ?{
      position:'fixed',
      top: 0,
      left:0,
      width: this.state.landscape ? window.screen.availHeight : fullTableWidth,
      height: this.state.landscape ? fullTableWidth : window.screen.availHeight,
      background: '#fff',
      transform: this.state.landscape ? `rotate(-90deg) translate(${(fullTableWidth - fullTableHeight)/2}px, ${(fullTableWidth - fullTableHeight)/2}px)` : 'rotate(0deg)',
      zIndex: '99',
    }: null;


    /* const tableBodyStyle= this.state.fullScreen && this.state.landscape ? {
      transform: `rotate(-90deg) translate(${(fullTableWidth - fullTableHeight)/2}px, ${(fullTableWidth - fullTableHeight)/2}px)`,
      width: fullTableHeight,
      height: fullTableWidth,
    }: null; */



    const fullScreenIconName = this.state.fullScreen ? 'arrows-shrink-l' : 'arrows-alt-l';
    const landscapeIconName = this.state.fullScreen && this.state.landscape ? 'transfer' : 'revocation';

    return (
      <div style={fullScreenStyle}>
        {title ?
          showFullScreen ? <Title amStyle="primary" more={<Icon name={fullScreenIconName} onClick={this.handleToggleScreen}/>}>{title}</Title>
            : <Title amStyle="primary">{title}</Title>
          : ''
        }
        <div className={wrapCls}>
          { fixedHeader ?
            <div >
              <div className={headerCls}>
              <table>
                {
                  this.renderColGroup(source)
                }
                {
                  this.renderHeader(source)
                }
              </table>
              </div>
              <div className={bodyCls} style={bodyWrapStyle}>
              <table ref={(ref) => {this.tableBody = ref}}>
                {
                  this.renderColGroup(source)
                }
                {
                  this.renderBody(source)
                }
              </table>
              </div>
          </div>
           :
            <table>
              {
                this.renderHeader(source)
              }
              {
                this.renderBody(source)
              }
            </table>
            }
        </div>
        {this.state.fullScreen?
          <div className={oprIconCls} onClick={this.handleToggleLandscape}><Icon name={landscapeIconName} /></div>
          : ''
        }

    </div>
    )
  }
}
