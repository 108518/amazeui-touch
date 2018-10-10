import React from 'react';
import {
  Doc,
} from '../../utils';

import README from './README.md'

export default class extends React.Component {
  render() {
    return (
      <Doc>
        <README />
      </Doc>
    );
  }
}


