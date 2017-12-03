const fs = require('fs');
import React from 'react';
import {
  Doc,
  Markdown,
  Highlight,
} from '../../utils';

class ModalDoc extends React.Component {
  render() {
    return (
      <Doc>
        <Markdown>{require('./api.md')}</Markdown>
        <Highlight
          demo="tabbar"
        >
          {fs.readFileSync(`${__dirname}/../../../kitchen-sink/pages/TabbarExample.js`, 'utf-8')}
        </Highlight>
      </Doc>
    );
  }
}

export default ModalDoc;
