const fs = require('fs');
import React from 'react';
import {
  Doc,
  Highlight,
} from '../../utils';
import Api from './api'

const ButtonActionDoc = () => (
  <Doc>
    <Api />
    <Highlight
      demo="Buttonaction"
    >
      {fs.readFileSync(`${__dirname}/../../../kitchen-sink/pages/ButtonActionExample.js`, 'utf-8')}
    </Highlight>
  </Doc>
);

export default ButtonActionDoc
