import React from "react";
import { Container, CollapseCard, Title, Badge } from "amazeui-touch";

export default class extends React.Component {
  render() {
    return (
      <Container {...this.props} className={this.props.className + " ks-grid"}>
        <h2>基本演示</h2>

        <CollapseCard
          noMargin
          header="我是会折叠的卡片"
          subHeader={
            <div>
              <p>子标题</p>
              <Badge amStyle="success" text="Elements" />
              <Badge amStyle="primary" text="or or or" />
              <Badge amStyle="success" text="String" />
            </div>
          }
        >
          <p>第一行</p>
          <p>第二行</p>
          <p>第三行</p>
          <p>第四行</p>
          <p>第五行</p>
          <p>第六行</p>
          <p>第七行</p>
          <p>第八行</p>
        </CollapseCard>

        <h2>默认展开</h2>

        <CollapseCard
          collapseHeight={0}
          defaultCollapsed={false}
          header={<Title amStyle="primary">我是会折叠的卡片</Title>}
          subHeader="子标题"
        >
          <p>第一行</p>
          <p>第二行</p>
          <p>第三行</p>
          <p>第四行</p>
          <p>第五行</p>
          <p>第六行</p>
          <p>第七行</p>
          <p>第八行</p>
        </CollapseCard>
      </Container>
    );
  }
}
