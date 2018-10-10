const fs = require('fs');
import React from 'react';
import {
  Doc,
} from '../../utils';

import GettingStarted from './getting-started.md'

export default class extends React.Component {
  render() {
    return (
      <Doc>
        <GettingStarted />
      </Doc>
    );
  }
}


