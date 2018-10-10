const fs = require('fs');
import React from 'react';
import {
  Doc,
  Markdown,
  Highlight,
} from '../../utils';

const InputGroupDoc = () => (
  <Doc>
    <Markdown>{require('./api.md')}</Markdown>
    <Highlight
      demo="InputGroup"
    >
      {fs.readFileSync(`${__dirname}/../../../kitchen-sink/pages/InputGroupExample.js`, 'utf-8')}
    </Highlight>
  </Doc>
);

export default InputGroupDoc
