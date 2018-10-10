import React from "react";
import {
  Container,
  Group,
  Button,
  ButtonGroup,
  Grid,
  Col
} from "amazeui-touch";

export default class extends React.Component {
  render() {
    return (
      <Container {...this.props}>
        <h2>基本样式</h2>

        <Group header="默认形状">
          <ButtonGroup>
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </Group>

        <Group header="颜色样式">
          <ButtonGroup amStyle="primary">
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
          </ButtonGroup>
          <div style={{ height: "1px" }} />
          <ButtonGroup amStyle="secondary">
            <Button square>Left</Button>
            <Button square>Center</Button>
            <Button square>Right</Button>
          </ButtonGroup>
        </Group>

        <Group header="镂空">
          <ButtonGroup amStyle="primary" hollow>
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
          </ButtonGroup>
          <div style={{ height: "1px" }} />
          <ButtonGroup amStyle="secondary" hollow>
            <Button square>Left</Button>
            <Button square>Center</Button>
            <Button square>Right</Button>
          </ButtonGroup>
        </Group>

        <Group header="大小">
          <ButtonGroup amSize="xs">
            <Button amStyle="primary">Left</Button>
            <Button amStyle="primary">Center</Button>
            <Button amStyle="primary">Right</Button>
          </ButtonGroup>
          <div style={{ height: "1px" }} />
          <ButtonGroup amSize="xs">
            <Button square amStyle="secondary">
              Left
            </Button>
            <Button square amStyle="secondary">
              Center
            </Button>
            <Button square amStyle="secondary">
              Right
            </Button>
          </ButtonGroup>
        </Group>

        <Group header="有间隙的">
          <ButtonGroup gapped>
            <Button amStyle="primary">Left</Button>
            <Button amStyle="primary">Center</Button>
            <Button amStyle="primary">Right</Button>
          </ButtonGroup>
          <div style={{ height: "1px" }} />
          <ButtonGroup gapped>
            <Button square amStyle="secondary">
              Left
            </Button>
            <Button square amStyle="secondary">
              Center
            </Button>
            <Button square amStyle="secondary">
              Right
            </Button>
          </ButtonGroup>
        </Group>

        <Group header="宽度自适应">
          <ButtonGroup amStyle="primary" justify>
            <Button>Left</Button>
            <Button>Right</Button>
          </ButtonGroup>
          <ButtonGroup amStyle="secondary" justify>
            <Button square>Left</Button>
            <Button square>Center</Button>
            <Button square>Right</Button>
          </ButtonGroup>
        </Group>

        <Group header="有间隙的宽度自适应">
          <ButtonGroup amStyle="primary" gapped justify>
            <Button>Left</Button>
            <Button>Right</Button>
          </ButtonGroup>
          <ButtonGroup amStyle="secondary" gapped justify>
            <Button square>Left</Button>
            <Button square>Center</Button>
            <Button square>Right</Button>
          </ButtonGroup>
        </Group>

        <Group header="垂直堆叠">
          <Grid>
            <Col>
              <ButtonGroup amStyle="primary" stacked>
                <Button>Left</Button>
                <Button>Center</Button>
                <Button>Right</Button>
              </ButtonGroup>
            </Col>
            <Col>
              <ButtonGroup amStyle="secondary" stacked>
                <Button square>Left</Button>
                <Button square>Center</Button>
                <Button square>Right</Button>
              </ButtonGroup>
            </Col>
          </Grid>
        </Group>

        <Group header="有间隙的垂直堆叠">
          <Grid>
            <Col>
              <ButtonGroup amStyle="primary" gapped stacked>
                <Button>Left</Button>
                <Button>Center</Button>
                <Button>Right</Button>
              </ButtonGroup>
            </Col>
            <Col>
              <ButtonGroup amStyle="secondary" gapped stacked>
                <Button square>Left</Button>
                <Button square>Center</Button>
                <Button square>Right</Button>
              </ButtonGroup>
            </Col>
          </Grid>
        </Group>
      </Container>
    );
  }
}
