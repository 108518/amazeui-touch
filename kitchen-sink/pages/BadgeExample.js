import React from "react";
import {
  Container,
  Badge,
  Group,
  Button,
  Card,
  Icon,
  Title,
  NavBar
} from "amazeui-touch";

const styles = [
  null,
  "primary",
  "secondary",
  "success",
  "warning",
  "alert",
  "dark"
];

const itemLeft = {
  href: "http://baidu.com",
  title: "返回"
};

const itemRight = {
  href: "#",
  title: "保存"
};

const dataRight = {
  title: "Navbar",
  rightNav: [itemRight, itemRight],
};

const customStyle = {
  padding: '20px',
  background: 'skyblue',
  borderRadius: '5px',
  color: '#fff'
}

export default class extends React.Component {
  render() {
    return (
      <Container {...this.props}>
        <Group header="默认形状">
          {styles.map((amStyle, i) => {
            return (
              <Badge amStyle={amStyle} key={i} text={amStyle || "default"} />
            );
          })}
        </Group>

        <Group header="圆形">
          {styles.map((amStyle, i) => {
            return (
              <Badge amStyle={amStyle} key={i} rounded text={i} />
            );
          })}
        </Group>

        <Group header="图标">
          <Badge rounded icon="elect" />
          <Badge amStyle="primary" rounded icon="elect" />
          <Badge amStyle="success" rounded icon="elect" />
          <Badge amStyle="warning" rounded icon="elect" />
          <Badge amStyle="alert" rounded icon="elect" />

          <br />

          <Badge icon="elect" />
          <Badge amStyle="primary" icon="elect" />
          <Badge amStyle="success" icon="elect" />
          <Badge amStyle="warning" icon="elect" />
          <Badge amStyle="alert" icon="elect" />
        </Group>

        <Group header="圆点">
          <Badge rounded />
          <Badge amStyle="primary" rounded />
          <Badge amStyle="success" rounded />
          <Badge amStyle="warning" rounded />
          <Badge amStyle="alert" rounded />
        </Group>

        <Group header="方点">
          <Badge />
          <Badge amStyle="primary" />
          <Badge amStyle="success" />
          <Badge amStyle="warning" />
          <Badge amStyle="alert" />
        </Group>

        <Group header="容器型">
          <Badge amStyle="primary" rounded text="333">
            <Button amStyle="primary" hollow>
              按钮
            </Button>
          </Badge>

          <Badge amStyle="primary" rounded icon="elect">
            <Button amStyle="success" hollow>
              按钮
            </Button>
          </Badge>

          <Badge amStyle="primary" icon="elect">
            <Button amStyle="warning" hollow>
              按钮
            </Button>
          </Badge>

          <br />
          <br />

          <Badge rounded amStyle="alert">
            <Button hollow>
              按钮
            </Button>
          </Badge>
        </Group>

        <Group header="包裹卡片">
          <Badge amStyle="primary" rounded text="1">
            <Card header="箴言">
              怎能就让这不停燃烧的心， 就这样耗尽消失在平庸里。
            </Card>
          </Badge>
        </Group>

        <Group header="自定义组件">
          <Badge amStyle="primary" rounded text="1">
            <div style={customStyle}>自定义组件</div>
          </Badge>
        </Group>
      </Container>
    );
  }
}
