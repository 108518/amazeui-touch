import PropTypes from 'prop-types';

const {
  func,
  oneOfType,
  string,
} = PropTypes;

export const component = oneOfType([func, string]);
