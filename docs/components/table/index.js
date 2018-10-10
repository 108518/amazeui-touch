const fs = require('fs');
import React from 'react';
import {
  Doc,
  Highlight,
} from '../../utils';

import Api from './api.md';

const TableDoc = () => (
  <Doc>
    <Api />
    <Highlight
      demo="Table"
    >
      {fs.readFileSync(`${__dirname}/../../../kitchen-sink/pages/TableExample.js`, 'utf-8')}
    </Highlight>
  </Doc>
);

export default TableDoc;
