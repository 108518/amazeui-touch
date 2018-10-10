const fs = require('fs');
import React from 'react';
import {
  Doc,
  Highlight,
} from '../../utils';

import Api from './api'

const selectDoc = () => (
  <Doc>
    <Api />
    <Highlight
      demo="select"
    >
      {fs.readFileSync(`${__dirname}/../../../kitchen-sink/pages/selectExample.js`, 'utf-8')}
    </Highlight>
  </Doc>
);

export default selectDoc;
