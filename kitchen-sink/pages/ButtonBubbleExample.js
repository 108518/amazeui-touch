import React from "react";
import { Container, Button, ButtonGroup, ButtonBubble } from "amazeui-touch";

export default class extends React.Component {
  render() {
    return (
      <Container {...this.props}>
        <h3>1个按钮</h3>

        <div className="am2-group">
          <ButtonBubble>
            <ButtonGroup amStyle="primary" gapped justify>
              <Button>Button1</Button>
            </ButtonGroup>
          </ButtonBubble>
        </div>

        <h3>2个按钮</h3>

        <div className="am2-group">
          <ButtonBubble>
            <ButtonGroup amStyle="primary" gapped justify>
              <Button>Button1</Button>
              <Button>Button2</Button>
            </ButtonGroup>
          </ButtonBubble>
        </div>

        <h3>3个按钮</h3>

        <div className="am2-group">
          <ButtonBubble>
            <ButtonGroup amStyle="primary" gapped justify>
              <Button>Button3</Button>
            </ButtonGroup>
            <ButtonGroup amStyle="primary" gapped justify>
              <Button>Button1</Button>
              <Button>Button2</Button>
            </ButtonGroup>
          </ButtonBubble>
        </div>
      </Container>
    );
  }
}
