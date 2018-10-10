const fs = require('fs');
import React from 'react';
import {
  Doc,
  Markdown,
  Highlight,
} from '../../utils';

const InputBoxDoc = () => (
  <Doc>
    <Markdown>{require('./api.md')}</Markdown>
    <Highlight
      demo="inputbox"
    >
      {fs.readFileSync(`${__dirname}/../../../kitchen-sink/pages/inputboxExample.js`, 'utf-8')}
    </Highlight>
  </Doc>
);

export default InputBoxDoc
