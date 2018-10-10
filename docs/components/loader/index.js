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
          demo="loader"
        >
          {fs.readFileSync(`${__dirname}/../../../kitchen-sink/pages/LoaderExample.js`, 'utf-8')}
        </Highlight>
      </Doc>
    );
  }
}


