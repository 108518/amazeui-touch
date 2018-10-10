const fs = require('fs');
import React from 'react';
import {
  Doc,
  Highlight,
} from '../../utils';

import Api from './api.md';

export default class extends React.Component {
  render() {
    return (
      <Doc>
        <Api />
        <Highlight language="sass">
          {fs.readFileSync(`${__dirname}/../../../scss/vendor/_normalize.scss`, 'utf-8')}
        </Highlight>
      </Doc>
    );
  }
}


