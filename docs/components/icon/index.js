const fs = require('fs');
import React from 'react';
import {
  Doc,
  Highlight,
} from '../../utils';

import Api from './api.md';

export default class extends React.Component {
  render() {
    return (
      <Doc>
        <Api />
        <Highlight
          demo="icon"
        >
          {fs.readFileSync(`${__dirname}/../../../kitchen-sink/pages/IconExample.js`, 'utf-8')}
        </Highlight>
      </Doc>
    );
  }
}


