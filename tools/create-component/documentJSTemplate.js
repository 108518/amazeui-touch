const fs = require('fs');
import React from 'react';
import {
  Doc,
  Highlight,
} from '../../utils';

import Api from './api.md';

const cptNameDoc = () => (
  <Doc>
    <Api />
    <Highlight
      demo="cptName"
    >
      {fs.readFileSync(`${__dirname}/../../../kitchen-sink/pages/cptNameExample.js`, 'utf-8')}
    </Highlight>
  </Doc>
);

export default cptNameDoc;
