const fs = require('fs');
import React from 'react';
import {
  Doc,
  Markdown,
  Highlight,
} from '../../utils';

import Api from './api'

const TodoItemTypeOneDoc = () => (
  <Doc>
    <Api />
    <Highlight
      demo="Todoitemtypeone"
    >
      {fs.readFileSync(`${__dirname}/../../../kitchen-sink/pages/TodoItemTypeOneExample.js`, 'utf-8')}
    </Highlight>
  </Doc>
);

export default TodoItemTypeOneDoc;
