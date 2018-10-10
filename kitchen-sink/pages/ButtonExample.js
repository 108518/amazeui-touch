import React from "react";
import Link from "react-router/lib/Link";
import { Container, Group, Button, Icon } from "amazeui-touch";

export default class extends React.Component {
  render() {
    return (
      <Container {...this.props}>
        <h2>基本样式</h2>
        <Group header="默认样式">
          <Button>按钮</Button>
        </Group>

        <Group header="颜色样式">
          <Button amStyle="primary">Primary</Button>
          <Button amStyle="secondary">Secondary</Button>
          <Button amStyle="success">Success</Button>
          <Button amStyle="warning">Warning</Button>
          <Button amStyle="alert">Alert</Button>
          <Button amStyle="dark">Dark</Button>
        </Group>

        <Group header="跳转链接">
          <Button amStyle="primary" component={Link} to="/">
            返回
          </Button>
        </Group>

        <Group header="块级显示">
          <Button block>按钮</Button>
        </Group>

        <Group header="按钮大小">
          <Button amSize="xs">按钮 (xs)</Button>
          <Button amSize="sm">按钮 (sm)</Button>
          <Button amSize="lg">按钮 (lg)</Button>
          <Button amSize="xl">按钮 (xl)</Button>
        </Group>

        <Group header="圆角大小">
          <Button square>按钮 (quare)</Button>
          <Button rounded>按钮 (rounded)</Button>
        </Group>

        <Group header="按钮状态">
          <Button amStyle="primary" disabled>
            按钮 (disabled)
          </Button>
          <Button amStyle="primary" active>
            按钮 (active)
          </Button>
        </Group>

        <Group header="镂空">
          <Button hollow>按钮</Button>
          <Button hollow amStyle="primary">
            Primary
          </Button>
          <Button hollow amStyle="secondary">
            Secondary
          </Button>
          <Button hollow amStyle="success">
            Success
          </Button>
          <Button hollow amStyle="warning">
            Warning
          </Button>
          <Button hollow amStyle="alert">
            Alert
          </Button>
          <Button hollow amStyle="dark">
            Dark
          </Button>
        </Group>

        <Group header="与 Icon 组合">
          <Button>
            <Icon name="left" />
            上一页
          </Button>
          <Button amStyle="primary">
            下一页
            <Icon name="right" />
          </Button>

          <Button amStyle="secondary">
            搜索
            <Icon name="search" />
          </Button>
        </Group>
      </Container>
    );
  }
}
