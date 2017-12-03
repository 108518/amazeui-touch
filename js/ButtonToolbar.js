import PropTypes from 'prop-types';
import React from 'react';
import createReactClass from 'create-react-class';
import cx from 'classnames';
import ClassNameMixin from './mixins/ClassNameMixin';

import '../scss/components/_button-group.scss';

const ButtonToolbar = createReactClass({
  displayName: 'ButtonToolbar',
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: PropTypes.string.isRequired,
  },

  getDefaultProps() {
    return {
      classPrefix: 'btn-toolbar',
    };
  },

  render() {
    let classSet = this.getClassSet();
    let {
      className,
      children,
      ...props
    } = this.props;

    delete props.classPrefix;

    return (
      <div
        {...props}
        className={cx(className, classSet)}
      >
        {children}
      </div>
    );
  },
});

export default ButtonToolbar;
