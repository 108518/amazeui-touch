import React from "react";
import { Container, Group, Select } from "amazeui-touch";

export default class extends React.Component {
  state = {
    checked: false
  };

  render() {
    return (
      <Container {...this.props}>
        <h2>基本样式</h2>

        <Group header="多选">
          <Select
            defaultValue={[101, 103, 104]}
            onValueChange={value => {
              console.log(value);
            }}
          >
            <Select.Item value={101}>选项 1</Select.Item>
            <Select.Item value={102}>
              选项 2
            </Select.Item>
            <Select.Item value={103} disabled>
              选项 3
            </Select.Item>
            <Select.Item value={104}>选项 4</Select.Item>
            <Select.Item value={105}>选项 5</Select.Item>
            <Select.Item value={106}>选项 6</Select.Item>
            <Select.Item value={107}>选项 7</Select.Item>
            <Select.Item value={108}>选项 8</Select.Item>
          </Select>
        </Group>

        <Group header="单选">
          <Select
            multiple={false}
            onValueChange={value => {
              console.log(value);
            }}
          >
            <Select.Item value="s1">选项 1</Select.Item>
            <Select.Item value="s2" defaultSelected>
              选项 2
            </Select.Item>
            <Select.Item value="s3" disabled>
              选项 3
            </Select.Item>
            <Select.Item value="s4">选项 4</Select.Item>
            <Select.Item value="s5">选项 5</Select.Item>
            <Select.Item value="s6">选项 6</Select.Item>
          </Select>
        </Group>
      </Container>
    );
  }
}
