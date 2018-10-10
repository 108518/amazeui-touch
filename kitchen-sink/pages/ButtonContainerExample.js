import React from "react";
import {
  Container,
  Group,
  Button,
  ButtonGroup,
  ButtonBubble,
  ButtonContainer,
  Icon
} from "amazeui-touch";

export default class extends React.Component {
  render() {
    return (
      <Container {...this.props}>
        <h2>基本样式</h2>

        <Group header="1个按钮">
          <ButtonContainer>
            <ButtonGroup amStyle="primary" gapped justify>
              <Button>Button1</Button>
            </ButtonGroup>
          </ButtonContainer>
        </Group>

        <Group header="2个按钮">
          <ButtonContainer>
            <ButtonGroup amStyle="primary" gapped justify>
              <Button>Button1</Button>
              <Button>Button2</Button>
            </ButtonGroup>
          </ButtonContainer>
        </Group>

        <Group header="2个按钮（带更多）">
          <ButtonContainer more>
            <ButtonGroup amStyle="primary" gapped justify>
              <Button>Button1</Button>
              <Button>Button2</Button>
            </ButtonGroup>
            <Button className="am2-btn-more">
              <Icon name="more-l" />
            </Button>
          </ButtonContainer>
        </Group>

        <h2>与 ButtonBubble 组合</h2>

        <div className="am2-group">
          <ButtonBubble>
            <ButtonGroup amStyle="primary" gapped justify>
              <Button>Button1</Button>
            </ButtonGroup>
          </ButtonBubble>
          <ButtonContainer more>
            <ButtonGroup amStyle="primary" gapped justify>
              <Button>Button1</Button>
              <Button>Button2</Button>
            </ButtonGroup>
            <Button className="am2-btn-more">
              <Icon name="more-l" />
            </Button>
          </ButtonContainer>
        </div>
      </Container>
    );
  }
}
