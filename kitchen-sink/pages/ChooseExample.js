import React from "react";
import { Container, Choose, Group } from "amazeui-touch";

export default class extends React.Component {
  state = {
    isLayoyt: false,
    isNoline: false
  }

  render() {
    return (
      <Container {...this.props}>
        <h3>默认</h3>

        <Group header="普通">
          <Choose>
            <Choose.Item value={1}>选项 1</Choose.Item>
            <Choose.Item value={2} defaultSelected>
              选项 2
            </Choose.Item>
            <Choose.Item value={3} disabled>
              选项 3
            </Choose.Item>
          </Choose>
        </Group>

        <Group header="多个">
          <Choose
            defaultValue={[4, 5, 6]}
            onValueChange={value => {
              console.log(value);
            }}
          >
            <Choose.Item value={1}>选项 1</Choose.Item>
            <Choose.Item value={2} defaultSelected>
              选项 2
            </Choose.Item>
            <Choose.Item value={3} disabled>
              选项 3
            </Choose.Item>
            <Choose.Item value={4}>选项 4</Choose.Item>
            <Choose.Item value={5}>选项 5</Choose.Item>
            <Choose.Item value={6}>选项 6</Choose.Item>
          </Choose>
        </Group>

        <Group header="颜色">
          <Choose amStyle="primary">
            <Choose.Item value={1}>选项 1</Choose.Item>
            <Choose.Item value={2} defaultSelected>
              选项 2
            </Choose.Item>
            <Choose.Item value={3} disabled>
              选项 3
            </Choose.Item>
          </Choose>
        </Group>

        <Group header="大小">
          <Choose amSize="xs">
            <Choose.Item value={1}>选项 1</Choose.Item>
            <Choose.Item value={2} defaultSelected>
              选项 2
            </Choose.Item>
            <Choose.Item value={3} disabled>
              选项 3
            </Choose.Item>
          </Choose>
        </Group>

        <Group header="单选">
          <Choose
            multiple={false}
            onValueChange={value => {
              console.log(value);
            }}
          >
            <Choose.Item value="s1">选项 1</Choose.Item>
            <Choose.Item value="s2" defaultSelected>
              选项 2
            </Choose.Item>
            <Choose.Item value="s3" disabled>
              选项 3
            </Choose.Item>
            <Choose.Item value="s4">选项 4</Choose.Item>
            <Choose.Item value="s5">选项 5</Choose.Item>
            <Choose.Item value="s6">选项 6</Choose.Item>
          </Choose>
        </Group>
      </Container>
    );
  }
}
