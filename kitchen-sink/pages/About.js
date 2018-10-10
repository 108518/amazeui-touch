import React from 'react';
import ReactDOM from 'react-dom';

import {
  Container,
  NavBar,
  Group,
} from 'amazeui-touch';

 export default class extends React.Component {
  static defaultProps = {
      year: new Date().getFullYear(),
  }

  render() {
    const {
      year,
      ...props
    } = this.props;

    return (
      <Container {...props}>
        <Group
          header="关于"
          footer={`ver ${__VERSION__}`}
        >
          <p>Amaze UI for Studio 是基于 React.js 的移动端 Web 组件库。</p>
        </Group>
        <Group
          header="鸣谢"
        >
          <p>感谢所有参与、关注 Amaze UI 的用户。</p>
        </Group>
        <Group
          header="版权"
        >
          <p>MIT © 2015 - {year} AllMobilize Inc.</p>
        </Group>
        <Group
          header="UA"
        >
          <p><code>{navigator.userAgent}</code></p>
        </Group>
      </Container>
    )
  }
}
