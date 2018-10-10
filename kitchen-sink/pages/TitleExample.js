import React from "react";
import { Container, Group, Title, Icon, Card } from "amazeui-touch";

export default class extends React.Component {
  render() {
    return (
      <Container {...this.props}>
        <h3>单独使用</h3>

        <Group header="默认样式">
          <Title>我是标题</Title>
        </Group>

        <Group header="颜色样式">
          <Title amStyle="primary">primary</Title>
          <Title amStyle="secondary">secondary</Title>
          <Title amStyle="success">success</Title>
          <Title amStyle="warning">warning</Title>
          <Title amStyle="alert">alert</Title>
          <Title amStyle="dark">dark</Title>
        </Group>

        <Group header="字体大小">
          <Title amSize="xl">我是 xl 标题</Title>
          <Title amSize="lg">我是 lg 标题</Title>
          <Title amSize="sm">我是 sm 标题</Title>
          <Title amSize="xs">我是 xs 标题</Title>
        </Group>

        <Group header="左侧带有图标">
          <Title icon="http://s.amazeui.org/assets/react/i/favicon.png">
            我是标题
          </Title>
        </Group>

        <Group header="左侧带有自定义元素">
          <Title icon={<Icon name="search" />}>我是标题</Title>
          <Title icon={<a href="javascript:void(0);">返回</a>}>我是标题</Title>
        </Group>

        <Group header="右侧带有自定义元素">
          <Title more={<Icon name="more-l" />}>我是标题</Title>
          <Title
            more={[
              <a href="javascript:void(0);">更多1</a>,
              <a href="javascript:void(0);">更多2</a>
            ]}
          >
            我是标题
          </Title>
        </Group>

        <Group header="左侧、右侧均带有自定义元素">
          <Title icon={<Icon name="star" />} more={<Icon name="elect" />}>
            我是标题
          </Title>
        </Group>

        <h3>与卡片组合</h3>

        <Card
          header={<Title more={<Icon name="more-l" />}>我是标题</Title>}
        >
          我本是个卡片，请注意我的头部，它包含自定义的标题
        </Card>

        <Card
          external
          header={<Title more={<Icon name="more-l" />}>我是标题</Title>}
        >
          我本是个卡片，请注意我的头部，它包含自定义的标题
        </Card>

        <Card
          noMargin
          header={<Title more={<Icon name="more-l" />}>我是标题</Title>}
        >
          我本是个卡片，请注意我的头部，它包含自定义的标题
        </Card>

        <Card
          noMargin
          external
          header={<Title more={<Icon name="more-l" />}>我是标题</Title>}
        >
          我本是个卡片，请注意我的头部，它包含自定义的标题
        </Card>
      </Container>
    );
  }
}
