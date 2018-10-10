import React from 'react';
import PropTypes from 'prop-types'
import cx from 'classnames';
import { setClassNS } from './utils/className';

import List from './List';
import Field from './Field';
import Icon from './Icon';

class Info extends React.Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    classPrefix: PropTypes.string.isRequired,
  };

  static defaultProps = {
    classPrefix: 'info'
  };

  render() {
    let {
      className,
      classPrefix,
      ...props
    } = this.props;

    const nsPrefix = setClassNS(classPrefix)

    return (
      <List className={cx(nsPrefix, className)}>
        {
          React.Children.map(this.props.children, (child, i) => {
            let {
              key,
              className,
              ...props
            } = child.props;
            key = key ? key : i;

            return (
              <InfoItem
                {...props}
                className={cx({[`${nsPrefix}-item`]:true}, className)}
                key={key} />
            )
          })
        }
      </List>
    )
  }
}

class InfoItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {show: true}
  }

  handleClick = () => {
    this.props.onClick ? this.props.onClick() : null;
    this.setState({show: false});
  }

  render() {
    return this.state.show ? (
      <List.Item
        {...this.props}
        after={<Icon name={'cancel'} onClick={this.handleClick}></Icon>}
      />
    ) : null
  }
}

Info.Item = InfoItem;

export default Info;
