const fs = require('fs');
import React from 'react';
import {
  Doc,
  Highlight,
} from '../../utils';

import Api from './api'

const InfoDoc = () => (
  <Doc>
    <Api />
    <Highlight
      demo="info"
    >
      {fs.readFileSync(`${__dirname}/../../../kitchen-sink/pages/InfoExample.js`, 'utf-8')}
    </Highlight>
  </Doc>
);

export default InfoDoc;
