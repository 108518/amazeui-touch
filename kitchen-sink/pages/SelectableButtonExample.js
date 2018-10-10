import React from "react";
import {
  Container,
  Group,
  Button,
  SelectableButton,
  Icon
} from "amazeui-touch";

export default class extends React.Component {
  render() {
    return (
      <Container {...this.props}>
        <h2>基本样式</h2>

        <Group header="普通">
          <SelectableButton>可选按钮</SelectableButton>
        </Group>

        <Group header="默认已选">
          <SelectableButton defaultSelected>可选按钮</SelectableButton>
        </Group>

        <Group header="禁用状态">
          <SelectableButton disabled>可选按钮</SelectableButton>
          <SelectableButton defaultSelected disabled>
            可选按钮
          </SelectableButton>
        </Group>

        <Group header="固定选择状态">
          <SelectableButton selected={false}>可选按钮</SelectableButton>
          <SelectableButton selected>可选按钮</SelectableButton>
        </Group>

        <Group header="块级显示">
          <SelectableButton block defaultSelected>
            可选按钮
          </SelectableButton>
        </Group>

        <Group header="大小">
          <SelectableButton defaultSelected amSize="xs">
            可选按钮 (xs)
          </SelectableButton>
          <SelectableButton defaultSelected amSize="sm">
            可选按钮 (sm)
          </SelectableButton>
          <SelectableButton defaultSelected amSize="lg">
            可选按钮 (lg)
          </SelectableButton>
          <SelectableButton defaultSelected amSize="xl">
            可选按钮 (xl)
          </SelectableButton>
        </Group>

        <Group header="颜色">
          <SelectableButton defaultSelected amStyle="primary">
            Primary
          </SelectableButton>
          <SelectableButton defaultSelected amStyle="secondary">
            Secondary
          </SelectableButton>
          <SelectableButton defaultSelected amStyle="success">
            Success
          </SelectableButton>
          <SelectableButton defaultSelected amStyle="warning">
            Warning
          </SelectableButton>
          <SelectableButton defaultSelected amStyle="alert">
            Alert
          </SelectableButton>
          <SelectableButton defaultSelected amStyle="dark">
            Dark
          </SelectableButton>
        </Group>
      </Container>
    );
  }
}
