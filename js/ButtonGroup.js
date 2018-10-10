import React, {
  cloneElement,
} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import classNameSpace from './utils/className';

export default class ButtonGroup extends React.Component {

  static propTypes = {
    classPrefix: PropTypes.string.isRequired,
    amStyle: PropTypes.string,
    amSize: PropTypes.string,
    hollow: PropTypes.bool,
    gapped: PropTypes.bool,
    justify: PropTypes.bool,
    stacked: PropTypes.bool,
  }

  static defaultProps = {
    classPrefix: 'btn-group',
  }

  render() {
    const classNS = classNameSpace(this.props);
    const classSet = classNS.classSet;
    const {
      className,
      amStyle,
      amSize,
      hollow,
      gapped,
      stacked,
      justify,
      ...props
    } = this.props;

    delete props.classPrefix;

    classSet[classNS.prefixClass('gapped')] = gapped;
    classSet[classNS.prefixClass('stacked')] = stacked;
    classSet[classNS.prefixClass('justify')] = justify;

    return (
      <div
        {...props}
        className={cx(className, classSet)}
      >
        {React.Children.map(this.props.children, (child, i) => {
          return cloneElement(child, Object.assign({
            amStyle,
            amSize,
            hollow,
          }, child.props));
        })}
      </div>
    );
  }
};
