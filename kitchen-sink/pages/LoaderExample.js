import React from "react";
import { Container, Group, Loader, Field } from "amazeui-touch";

export default class LoaderExample extends React.Component {
  state = {
    amStyle: "primary",
    rounded: true
  };

  handleChange = () => {
    this.setState({
      amStyle: this.amStyle.getValue(),
      rounded: !!this.amShape.getValue()
    });
  };

  render() {
    const { amStyle } = this.state;
    let style = {};

    if (amStyle === "white") {
      style = {
        background: "#0e90d2",
        display: "block"
      };
    }

    return (
      <Container {...this.props}>
        <Group header="Loader 演示">
          <div style={style}>
            <Loader {...this.state} />
          </div>
          <hr />
          <Field
            type="select"
            label="颜色"
            ref={ref => {
              this.amStyle = ref;
            }}
            onChange={this.handleChange}
          >
            <option value="">default</option>
            <option value="primary">primary</option>
            <option value="secondary">secondary</option>
            <option value="success">success</option>
            <option value="warning">warning</option>
            <option value="alert">alert</option>
            <option value="dark">dark</option>
            <option value="white">white</option>
          </Field>
          <Field
            onChange={this.handleChange}
            type="select"
            label="形状"
            ref={ref => {
              this.amShape = ref;
            }}
          >
            <option value="">default (square)</option>
            <option value="rounded">rounded</option>
          </Field>
        </Group>
      </Container>
    );
  }
}
