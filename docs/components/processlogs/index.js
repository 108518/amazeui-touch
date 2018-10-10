const fs = require('fs');
import React from 'react';
import {
  Doc,
  Highlight,
} from '../../utils';

import Api from './api.md';

const ProcessLogsDoc = () => (
  <Doc>
    <Api />
    <Highlight
      demo="processlogs"
    >
      {fs.readFileSync(`${__dirname}/../../../kitchen-sink/pages/ProcessLogsExample.js`, 'utf-8')}
    </Highlight>
  </Doc>
);

export default ProcessLogsDoc;
