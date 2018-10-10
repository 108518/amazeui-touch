import React from 'react';
import {
  Container,
  Group,
  Divide
} from 'amazeui-touch';

const DivideExample = (props) => (
  <Container {...props}>
    <Group
      header="默认"
    >
      <Divide />
    </Group>
    <Group
      header="light"
    >
      <Divide light />
    </Group>
    <Group
      header="dashed"
    >
      <Divide dashed />
    </Group>
    <Group
      header="dotted"
    >
      <Divide dotted />
    </Group>
    <Group
      header="large"
    >
      <Divide large />
    </Group>
  </Container>
)

export default DivideExample
