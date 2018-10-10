import React, { propTypes } from 'react';
import cx from 'classnames';
import { setClassNS } from './utils/className';

import Field from './Field';

export default class InputBox extends React.Component {

  static propTypes = {
    classPrefix: PropTypes.string.isRequired,
  };

  static defaultProps = {
    classPrefix: 'inputbox'
  };

  constructor(props) {
    super(props)
  }

  render() {
    let {
      className,
      classPrefix,
      type,
      left,
      noborder,
      nopadding,
      ...props
    } = this.props;
    const nsPrefix = setClassNS(classPrefix);

    const inputboxClass = cx(nsPrefix,{
      [`${nsPrefix}-textarea`]: (type === 'textarea'),
      [`${nsPrefix}-text-left`]: left,
      [`${nsPrefix}-no-border`]: noborder,
      [`${nsPrefix}-no-padding`]: nopadding,
    },
    className)

    return (
      <div className={inputboxClass} >
        <Field {...props} type={type} />
      </div>
    )
  }
}
