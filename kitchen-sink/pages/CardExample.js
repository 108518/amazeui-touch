import React from "react";
import { Container, Card, Grid, Col, Switch } from "amazeui-touch";

const header = (
  <Card.Child cover="http://lorempixel.com/1000/625/people/">
    <h3 className="card-title" style={{ color: "white" }}>
      我思念的城市
    </h3>
  </Card.Child>
);

const footer = (
  <Card.Child role="footer">
    <Grid>
      <Col>
        <a href="javascript: void(0)">Like</a>
      </Col>
      <Col>
        <a href="javascript: void(0)">Comment</a>
      </Col>
      <Col>
        <a href="javascript: void(0)">ReadMore</a>
      </Col>
    </Grid>
  </Card.Child>
);

export default class extends React.Component {
  state = {
    isLayoyt: false,
    isNoline: false
  };

  render() {
    return (
      <Container {...this.props}>
        <h3>
          试试通栏效果
          <Switch
            onValueChange={() => {
              this.setState({ isLayoyt: !this.state.isLayoyt });
            }}
          />
        </h3>

        <h3>
          试试去掉横线
          <Switch
            onValueChange={() => {
              this.setState({ isNoline: !this.state.isNoline });
            }}
          />
        </h3>

        <h3>默认</h3>

        <Card noMargin={this.state.isLayoyt}>
          怎能就让这不停燃烧的心， 就这样耗尽消失在平庸里。
        </Card>

        <h3>带标题</h3>

        <Card
          noMargin={this.state.isLayoyt}
          noLine={this.state.isNoline}
          header="箴言"
        >
          怎能就让这不停燃烧的心， 就这样耗尽消失在平庸里。
        </Card>

        <h3>外置标题</h3>

        <Card
          external
          noMargin={this.state.isLayoyt}
          noLine={this.state.isNoline}
          header="箴言"
        >
          怎能就让这不停燃烧的心， 就这样耗尽消失在平庸里。
        </Card>

        <h3>带头部、底部</h3>

        <Card
          noMargin={this.state.isLayoyt}
          noLine={this.state.isNoline}
          header="头部"
          footer="底部"
        >
          风路过的时候 没能吹走 <br />
          这个城市太厚的灰尘 <br />
          多少次的雨水 从来没有 <br />
          冲掉你那沉重的忧伤 <br />
          你的忧伤 像我的绝望 <br />
          那样漫长
        </Card>

        <h3>外置头部、底部</h3>

        <Card
          external
          noMargin={this.state.isLayoyt}
          noLine={this.state.isNoline}
          header="头部"
          footer="底部"
        >
          风路过的时候 没能吹走 <br />
          这个城市太厚的灰尘 <br />
          多少次的雨水 从来没有 <br />
          冲掉你那沉重的忧伤 <br />
          你的忧伤 像我的绝望 <br />
          那样漫长
        </Card>

        <h3>自定义头部、底部</h3>

        <Card
          noMargin={this.state.isLayoyt}
          noLine={this.state.isNoline}
          header={header}
          footer={footer}
        >
          风路过的时候 没能吹走 <br />
          这个城市太厚的灰尘 <br />
          多少次的雨水 从来没有 <br />
          冲掉你那沉重的忧伤 <br />
          你的忧伤 像我的绝望 <br />
          那样漫长
        </Card>
      </Container>
    );
  }
}
