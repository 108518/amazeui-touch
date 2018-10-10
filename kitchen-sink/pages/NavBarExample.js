import React from "react";
import {
  Container,
  Group,
  NavBar,
  amStyles,
  OffCanvas,
} from "amazeui-touch";

const clickHandler = (item, e) => {
  // e.preventDefault();
  console.log(item);
};

const itemLeft = {
  href: "http://baidu.com",
  title: "返回"
};

const itemRight = {
  href: "#",
  title: "保存"
};

const dataAll = {
  title: "日常报销",
  leftNav: [{ ...itemLeft, icon: "left-nav" }],
  rightNav: [{ ...itemRight, icon: "right-nav" }],
  onAction: clickHandler
};

const dataLeft = {
  title: "Navbar",
  leftNav: [{ ...itemLeft, icon: "left-nav" }],
  onAction: clickHandler
};

const dataRight = {
  title: "Navbar",
  rightNav: [itemRight],
  onAction: clickHandler
};

export default class extends React.Component {

  state = {
    isOpen: false
  }

  renderStyles = (style, index) => {
    return (
      <div key={index}>
        <NavBar {...dataAll} amStyle={style.toLowerCase()} />
        <br />
      </div>
    );
  };

  handleOffCanvas = () => {
    this.setState({
      isOpen: true
    })
  }

  closeOffCanvas = () => {
    this.setState({
      isOpen: false
    })
  }

  render() {
    const withOffCanvas = {
      title: "With OffCanvas",
      rightNav: [
        {
          icon: "bars",
          title: "Menu",
        }
      ],
      onAction: this.handleOffCanvas
    };

    return (
      <Container {...this.props}>
        <Group header="颜色样式">
          <NavBar {...dataAll} />

          <br />

          {amStyles.map(this.renderStyles)}
        </Group>

        <Group header="图标">
          <NavBar {...dataLeft} />
        </Group>

        <Group header="标题居左">
          <NavBar {...dataRight} title="Title on Left" titleOnLeft />
        </Group>

        <Group header="With OffCanvas">
          <NavBar {...withOffCanvas} amStyle="primary" />
        </Group>

        <OffCanvas
          isOpen={this.state.isOpen}
          onDismiss={this.closeOffCanvas}
        >
          <p>OffCanvas 内容</p>
        </OffCanvas>
      </Container>
    );
  }
}
