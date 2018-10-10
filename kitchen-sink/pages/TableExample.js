import React from "react";
import { Container, Table, Group, Button } from "amazeui-touch";

const data = [
  {
    title: "name",
    fixed: true,
    data: ["john", "jack", "mark"]
  },
  {
    title: "age",
    data: [12, 342, 33]
  },
  {
    title: "job",
    data: ['前端工程师', '产品经理', '测试工程师']
  }
];

const fakeData = (name, count) => {
  return [...Array(count)].map((item, index) => `${name}-${index}`)
}

const bigData = (name) => {
  return [...Array(20)].map((item, index) => {
    return {
      title: `${name}-${index}`,
      data: fakeData(`${name}-${index}`, 20),
      columnWidth: 100
    }
  })
}

const NASA = bigData('nasa')


export default class extends React.Component {
  render() {
    return (
      <Container {...this.props}>
        <Group header="基础表格">
          <Table source={data} />
        </Group>

        <Group header="居右显示" >
          <Table
            source={data}
            textAlign="left"
          />
        </Group>

        <Group header="表头固定" >
          <Table
            source={NASA}
            textAlign="left"
            fixedHeader
          />
        </Group>

        <Group header="全屏展示" >
          <Table
            source={NASA}
            textAlign="left"
            fixedHeader
            title="产品列表"
            showFullScreen
          />
        </Group>
      </Container>
    );
  }
}
