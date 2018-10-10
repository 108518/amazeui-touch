import React from 'react';
import PropTypes from 'prop-types';
export default class Pair extends React.Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  }

  render() {

    const style = {
      dl: {
        fontSize: 14,
        marginTop: 0,
        marginBottom: 0,
        lineHeight: 2
      },
      dt: {
        display: 'inline-block',
        marginRight: '.8em',
        marginBottom: 0,
        color: '#666666',
        fontWeight: 'normal'
      },
      dd: {
        display: 'inline-block',
        marginBottom: 0,
        color: '#414e79'
      }
    };

    const {
      name,
      value
    } = this.props;

    return (
      <dl style={style.dl}>
        <dt style={style.dt}>{name}</dt>
        <dd style={style.dd}>{value}</dd>
      </dl>
    );
  }
}
