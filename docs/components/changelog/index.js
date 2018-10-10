const fs = require('fs');
import React from 'react';
import {
  Doc,
} from '../../utils';

import ChangeLog from '../../../CHANGELOG.md'

export default class extends React.Component {
  render() {
    return (
      <Doc>
        <ChangeLog />
      </Doc>
    );
  }
}


