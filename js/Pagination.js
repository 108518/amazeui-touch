import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import classNameSpace, {setClassNS} from './utils/className';
import Icon from './Icon';

export default class Pagination extends React.Component {

  static propTypes = {
    total: PropTypes.number,
    active: PropTypes.number,
    showHead: PropTypes.bool,
    showEnd: PropTypes.bool,
    onPrevious: PropTypes.func,
    onNext: PropTypes.func,
    onChange: PropTypes.func,
  }

  static defaultProps = {
    classPrefix: 'pagination',
    total: 5,
    current: 1,
    amStyle: 'primary',
    showHead: false,
    showEnd: false,
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.current < 1 || nextProps.current > nextProps.total ) {
      return false
    }
    return true
  }

  onItemClick = (event, item) => {
    const onChange = this.props.onChange

    if (item < 1) {
      event.preventDefault()
      event.stopPropagation()
      return
    } else {
      onChange && onChange(item)
    }
  }

  onPrevious = (event) => {
    event.preventDefault();
    this.props.onPrevious && this.props.onPrevious()
  }

  onNext = (event) => {
    event.preventDefault();
    this.props.onNext && this.props.onNext()
  }

  renderItem = () => {
    const {
      total,
      current
    } = this.props;

    const items = []
    for (let i = 0; i < 5; i++) {
      items[i] = current - 2 + i
    }
    const distance = total - current

    if (distance === 0) {
      items[3] = 0
      items[4] = 0
    } else if (distance === 1) {
      items[4] = 0
    }

    return (
      <ul>
        {
          items.map((item, index) => (
            <Item
              key={index}
              onClick={(event) => this.onItemClick(event, item)}
              active={item === current ? true : false}
              children={item > 0 ? item : ' '}
            />

          ))
        }
      </ul>
    )
  }

  renderTotal = () => {
    const {
      total,
      showTotal
    } = this.props;

    if ( typeof showTotal === 'function') {
      return showTotal(total)
    }
  }

  render() {
    const classNS = classNameSpace(this.props);
    const classSet = classNS.classSet;
    this.prefixClass = classNS.prefixClass;
    const {
      className,
      total,
      showTotal,
      showHead,
      showEnd
    } = this.props
    const navCls = cx(this.prefixClass("nav"))
    const totalCls = cx(this.prefixClass("total"))

    return (
      <div>
        <div className={cx(
          classSet,
          className,
        )}>
          <div className={navCls}>
            {
              showHead ? <a><Icon name="extrem-left" /></a> : null
            }
            <a onClick={this.onPrevious}><Icon name="left" /></a>
          </div>
          {this.renderItem()}
          <div className={navCls}>
            <a onClick={this.onNext}><Icon name="right" /></a>
            {
              showEnd ? <a><Icon name="extrem-right" /></a> : null
            }
          </div>
        </div>
        {
          showTotal ? <p className={totalCls}>
          {this.renderTotal()}
          </p> : null
        }
      </div>
    )
  }
}


class Item extends React.Component {
  render() {
    const {
      children,
      active,
      ...otherProps
    } = this.props
    const cls = setClassNS('pagination-item')
    const activeCls = active ? setClassNS('active') : null

    return (
      <li className={cx(cls, activeCls)} {...otherProps}>
        <a>{children}</a>
      </li>
    )
  }
}

Item.propTypes = {
  active: PropTypes.bool
}
