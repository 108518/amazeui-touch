const fs = require('fs');
import React from 'react';
import {
  Doc,
  Highlight,
} from '../../utils';

import Api from './api'

const TodoItemTypeTwoDoc = () => (
  <Doc>
    <Api />
    <Highlight
      demo="Todoitemtypetwo"
    >
      {fs.readFileSync(`${__dirname}/../../../kitchen-sink/pages/TodoItemTypeTwoExample.js`, 'utf-8')}
    </Highlight>
  </Doc>
);

export default TodoItemTypeTwoDoc;
