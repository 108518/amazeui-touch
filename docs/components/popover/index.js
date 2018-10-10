const fs = require('fs');
import React from 'react';
import {
  Doc,
  Highlight,
} from '../../utils';
import Api from './api'

export default class extends React.Component {
  render() {
    return (
      <Doc>
        <Api />
        <Highlight
          demo="popover"
        >
          {fs.readFileSync(`${__dirname}/../../../kitchen-sink/pages/PopoverExample.js`, 'utf-8')}
        </Highlight>
      </Doc>
    );
  }
}


