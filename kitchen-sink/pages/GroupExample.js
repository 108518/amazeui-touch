import React from "react";
import { Link } from "react-router";
import { Container, Group, Title } from "amazeui-touch";


const GridExample = props => (
  <Container
    {...props}
  >
    <Group
      header={<Title amStyle="primary">Header A</Title>}
    >
      你大可以认为，电子的轨道并不是真正的轨道。实际上，在每一时刻电子总有一个属性是我们无法确定的，要嘛是动量，要嘛是它的位置，这是不确定关系得出的结论。只有接受了这种理念，我们才可能描述电子的轨道是什么，而它的确是这样的。
    </Group>
    <Group
      header={<Title>Header B</Title>}
      footer="Footer B"
    >
      泡利不相容原理表明了一个原子里的每一个费米子（自旋不为整数的粒子）必然具有不相同的量子状态。
    </Group>
    <Group
      header={<Title>Header C</Title>}
      noPadded
    >
      电场是能够对空间中任意位置的任何带电粒子施加作用力的场。
    </Group>
  </Container>
);

export default GridExample
