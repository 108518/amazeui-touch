const fs = require('fs');
import React from 'react';
import {
  Doc,
  Markdown,
  Highlight,
} from '../../utils';

import Api from './api.md';

export default class extends React.Component {
  render() {
    return (
      <Doc>
        <Api />
        <Highlight
          demo="grid"
        >
          {fs.readFileSync(`${__dirname}/../../../kitchen-sink/pages/GridExample.js`, 'utf-8')}
        </Highlight>
      </Doc>
    );
  }
}


