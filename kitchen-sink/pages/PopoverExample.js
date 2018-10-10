import React from "react";
import {
  Container,
  Group,
  Button,
  Popover,
  PopoverTrigger,
  Field,
  List,
  Divide,
} from "amazeui-touch";

export default class extends React.Component {

  handleClick = () => {
    this.ins.open()
  }

  render() {
    return (
      <Container {...this.props}>
        <Group header="默认">
          <PopoverTrigger
            popover={
              <Popover>
                <p>Popover 内容</p>
              </Popover>
            }
          >
            <Button amStyle="primary">显示 Popover</Button>
          </PopoverTrigger>

          <Divide />

          <Button
            amStyle="primary"
            onClick={this.handleClick}
          >实例方法控制 Popover</Button>

          <PopoverTrigger
            ref={ref => {
              this.ins = ref;
            }}
            popover={
              <Popover>
                <p style={{width:'100%'}}>Popover default open</p>
              </Popover>
            }
          >
            <Button amStyle="primary">默认显示 Popover</Button>
          </PopoverTrigger>
        </Group>
      </Container>
    );
  }
}
