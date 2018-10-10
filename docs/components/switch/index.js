const fs = require('fs');
import React from 'react';
import {
  Doc,
  Highlight,
} from '../../utils';

import Api from './api'

const switchDoc = () => (
  <Doc>
    <Api />
    <Highlight
      demo="switch"
    >
      {fs.readFileSync(`${__dirname}/../../../kitchen-sink/pages/switchExample.js`, 'utf-8')}
    </Highlight>
  </Doc>
);

export default switchDoc;
