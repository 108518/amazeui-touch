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
          demo="formcombination"
        >
          {fs.readFileSync(`${__dirname}/../../../kitchen-sink/pages/FormCombinationExample.js`, 'utf-8')}
        </Highlight>
      </Doc>
    );
  }
}


