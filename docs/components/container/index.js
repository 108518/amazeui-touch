import React from 'react';
import {
  Doc,
  Markdown,
  Highlight,
} from '../../utils';

import Api from './api'

export default class extends React.Component {
  render() {
    return (
      <Doc>
        <Api />
      </Doc>
    );
  }
}


