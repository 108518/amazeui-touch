const fs = require('fs');
import React from 'react';
import {
  Doc,
  Highlight,
} from '../../utils';
import Api from './api'

const TreeDoc = () => (
  <Doc>
    <Api />
    <Highlight
      demo="Tree"
    >
      {fs.readFileSync(`${__dirname}/../../../kitchen-sink/pages/TreeExample.js`, 'utf-8')}
    </Highlight>
  </Doc>
);

export default TreeDoc;
