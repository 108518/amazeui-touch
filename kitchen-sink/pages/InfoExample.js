import React from 'react';
import {
  Container,
  Info,
  Card
} from 'amazeui-touch';

const img = <img width="32" src="http://lorempixel.com/128/128/cats/" />;

const InfoExample = (props) => (
  <Container {...props}>
    <Info>
      <Info.Item title="XXXX.jpg" />
      <Info.Item title="文件.excited" />
      <Info.Item title="MEGL-X34.xx" media={img} />
    </Info>

    <Card title="title">
      <Info>
        <Info.Item title="XXXX.jpg" />
        <Info.Item title="文件.excited" />
        <Info.Item title="MEGL-X34.xx" media={img} />
      </Info>
    </Card>
  </Container>
)

export default InfoExample
