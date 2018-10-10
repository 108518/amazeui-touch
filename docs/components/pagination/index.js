const fs = require('fs');
import React from 'react';
import {
  Doc,
  Highlight,
} from '../../utils';

import Api from './api.md';

const PaginationDoc = () => (
  <Doc>
    <Api />
    <Highlight
      demo="Pagination"
    >
      {fs.readFileSync(`${__dirname}/../../../kitchen-sink/pages/PaginationExample.js`, 'utf-8')}
    </Highlight>
  </Doc>
);

export default PaginationDoc;
