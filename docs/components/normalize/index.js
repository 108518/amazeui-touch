const fs = require('fs');
import React from 'react';
import {
  Doc,
  Markdown,
  Highlight,
} from '../../utils';

class NormalizeDoc extends React.Component {
  render() {
    return (
      <Doc>
        <Markdown>{require('./api.md')}</Markdown>
        <Highlight language="sass">
          {fs.readFileSync(`${__dirname}/../../../scss/vendor/_normalize.scss`, 'utf-8')}
        </Highlight>
      </Doc>
    );
  }
}

export default NormalizeDoc;
