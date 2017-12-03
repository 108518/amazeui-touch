import PropTypes from 'prop-types';
import React from 'react';
import createReactClass from 'create-react-class';
import cx from 'classnames';
import {component} from './InternalPropTypes';
import ClassNameMixin from './mixins/ClassNameMixin';

import '../scss/components/_icon.scss';

const Icon = createReactClass({
  displayName: 'Icon',
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: PropTypes.string.isRequired,
    component: component,
    name: PropTypes.string.isRequired,
    href: PropTypes.string,
    // amStyle: PropTypes.string,
    // button: PropTypes.bool,
    // size: PropTypes.string,
  },

  getDefaultProps() {
    return {
      classPrefix: 'icon',
      component: 'span'
    };
  },

  render() {
    let classSet = this.getClassSet();
    let {
      component: Component,
      className,
      name,
      ...props
    } = this.props;

    delete props.classPrefix;

    Component = props.href ? 'a' : Component;

    // icon-[iconName]
    classSet[this.prefixClass(name)] = true;

    return (
      <Component
        {...props}
        className={cx(classSet, className)}
      >
        {this.props.children}
      </Component>
    );
  },
});

export default Icon;
