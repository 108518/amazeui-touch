import React from "react";
import { Container, Group, List, Switch } from "amazeui-touch";

export default class extends React.Component {
  state = {
    checked: false
  };

  render() {
    return (
      <Container {...this.props}>
        <h2>基本样式</h2>

        <Group header="默认" noPadded>
          <List>
            <List.Item title="默认" after={<Switch defaultChecked />} />
            <List.Item
              title="正常"
              after={<Switch amStyle="primary" defaultChecked />}
            />
            <List.Item
              title="正常"
              after={<Switch amStyle="success" defaultChecked />}
            />
            <List.Item
              title="正常"
              after={<Switch amStyle="secondary" defaultChecked />}
            />
            <List.Item
              title="正常"
              after={<Switch amStyle="warning" defaultChecked />}
            />
            <List.Item
              title="正常"
              after={<Switch amStyle="alert" defaultChecked />}
            />
            <List.Item title="固定选中" after={<Switch checked />} />
            <List.Item title="固定不选中" after={<Switch checked={false} />} />
            <List.Item
              title="禁用且选中"
              after={<Switch disabled defaultChecked />}
            />
            <List.Item title="禁用且不选中" after={<Switch disabled />} />
          </List>
        </Group>

        <Group header="变形为 checkbox" noPadded>
          <List>
            <List.Item
              title="正常"
              after={<Switch shape="checkbox" defaultChecked />}
            />
            <List.Item
              title="正常"
              after={
                <Switch amStyle="success" shape="checkbox" defaultChecked />
              }
            />
            <List.Item
              title="正常"
              after={
                <Switch amStyle="secondary" shape="checkbox" defaultChecked />
              }
            />
            <List.Item
              title="正常"
              after={
                <Switch amStyle="warning" shape="checkbox" defaultChecked />
              }
            />
            <List.Item
              title="正常"
              after={<Switch amStyle="alert" shape="checkbox" defaultChecked />}
            />
            <List.Item
              title="固定选中"
              after={<Switch shape="checkbox" checked />}
            />
            <List.Item
              title="固定不选中"
              after={<Switch shape="checkbox" checked={false} />}
            />
            <List.Item
              title="禁用且选中"
              after={<Switch shape="checkbox" disabled defaultChecked />}
            />
            <List.Item
              title="禁用且不选中"
              after={<Switch shape="checkbox" disabled />}
            />
          </List>
        </Group>

        <Group header="变形为 radio" noPadded>
          <List>
            <List.Item
              title="正常"
              after={<Switch shape="radio" defaultChecked />}
            />
            <List.Item
              title="正常"
              after={<Switch amStyle="success" shape="radio" defaultChecked />}
            />
            <List.Item
              title="正常"
              after={
                <Switch amStyle="secondary" shape="radio" defaultChecked />
              }
            />
            <List.Item
              title="正常"
              after={<Switch amStyle="warning" shape="radio" defaultChecked />}
            />
            <List.Item
              title="正常"
              after={<Switch amStyle="alert" shape="radio" defaultChecked />}
            />
            <List.Item
              title="固定选中"
              after={<Switch shape="radio" checked />}
            />
            <List.Item
              title="固定不选中"
              after={<Switch shape="radio" checked={false} />}
            />
            <List.Item
              title="禁用且选中"
              after={<Switch shape="radio" disabled defaultChecked />}
            />
            <List.Item
              title="禁用且不选中"
              after={<Switch shape="radio" disabled />}
            />
          </List>
        </Group>
      </Container>
    );
  }
}
