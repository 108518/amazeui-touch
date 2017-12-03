import React from 'react';
import {
  Doc,
  Markdown,
} from '../../utils';

class GettingStarted extends React.Component {
  render() {
    return (
      <Doc>
        <Markdown>{require('./README.md')}</Markdown>
      </Doc>
    );
  }
}

export default GettingStarted;
