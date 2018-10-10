const fs = require('fs');
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
        <Highlight
          demo="buttonbubble"
        >
          {fs.readFileSync(`${__dirname}/../../../kitchen-sink/pages/ButtonBubbleExample.js`, 'utf-8')}
        </Highlight>
      </Doc>
    );
  }
}

