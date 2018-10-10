import React from "react";
import { Link } from "react-router";
import {
  Container,
  Group,
  Button,
  OffCanvas,
  List
} from "amazeui-touch";

export default class extends React.Component {

  state = {
    isOpena: false,
    isOpenb: false,
    isOpenc: false,
    isOpend: false,
  }

  renderOC = () => {
    return (
        <div>
          <h3 className="margin">OffCanvas 内容</h3>
          <p className="margin-h">在 OffCanvas 内放置 React Router Link 演示</p>
          <List>
            <List.Item
              linkComponent={Link}
              linkProps={{
                to: `/`,
                onClick: this.onDismiss
              }}
              title="组件"
            />
            <List.Item
              linkComponent={Link}
              linkProps={{
                to: "/about",
                onClick: this.onDismiss
              }}
              title="关于"
            />
            <List.Item
              href="https://github.com/amazeui/amazeui-touch"
              title="GitHub"
              target="_blank"
              onClick={this.onDismiss}
            />
          </List>
        </div>
    );
  };

  handleOpen = (which) => {
    this.setState({
      [which]: true
    })
  }

  handleChange = (which) => {
    this.setState({
      [which]: !this.state[which]
    })
  }

  handleOpenCB = () => {
    console.log('opend')
  }

  handleClosedCB = () => {
    console.log('closed')
  }

  render() {
    return (
      <Container {...this.props}>
        <h2>Overlay</h2>

        <Group header="左侧显示 OffCanvas">
          <Button onClick={() => {this.handleChange('isOpena') }} amStyle="primary">左侧显示 OffCanvas</Button>
          <OffCanvas
          isOpen={this.state.isOpena}
          onDismiss={() => {this.handleChange('isOpena') }}
          onOpen={this.handleOpenCB}
          onClosed={this.handleClosedCB}
        >
            {this.renderOC()}
            <Button onClick={() => {this.handleChange('isOpena') }} amStyle="primary">关闭 OffCanvas</Button>
          </OffCanvas>
        </Group>

       <Group header="右侧显示 OffCanvas">
          <Button onClick={() => {this.handleChange('isOpenb') }} amStyle="primary">左侧显示 OffCanvas</Button>
          <OffCanvas
            placement="right"
            isOpen={this.state.isOpenb}
            onDismiss={() => {this.handleChange('isOpenb') }}
          >
            <p>右侧边栏 OffCanvas 内容</p>
          </OffCanvas>
        </Group>

        <h2>Push</h2>

        <Group header="左侧显示 OffCanvas">
          <Button onClick={() => {this.handleChange('isOpenc') }} amStyle="primary">右侧显示 OffCanvas</Button>
          <OffCanvas
          animation="push"
          pageContainer="#sk-root"
          isOpen={this.state.isOpenc}
          onDismiss={() => {this.handleChange('isOpenc') }}
          >
          <p>OffCanvas 内容</p>
          </OffCanvas>
          </Group>

        <Group header="右侧显示 OffCanvas">
          <Button onClick={() => {this.handleChange('isOpend') }} amStyle="primary">右侧显示 OffCanvas</Button>
          <OffCanvas
            animation="push"
            pageContainer="#sk-root"
            placement="right"
            isOpen={this.state.isOpend}
            onDismiss={() => {this.handleChange('isOpend') }}
            >
            <p>右侧边栏 OffCanvas 内容</p>
          </OffCanvas>
        </Group>

        <Group header="自定义样式">
          <Button onClick={() => {this.handleChange('isOpene') }} amStyle="primary">左侧显示 OffCanvas</Button>
          <OffCanvas
            placement="right"
            isOpen={this.state.isOpene}
            onDismiss={() => {this.handleChange('isOpene') }}
            style={{
              width: '80%',
              background: 'skyblue'
            }}
          >
            <p>我的宽度变了哦</p>
            <p>我的颜色也变了哦</p>
          </OffCanvas>
        </Group>
      </Container>
    );
  }
}
