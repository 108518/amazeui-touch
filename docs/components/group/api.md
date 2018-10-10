# Group

分组组件，用于分隔不同的内容块。

## 属性

### &lt;Group&gt;

| 名称                |  类型           | 默认值           | 含义           |
| -------------      | ------------- | --------------- | --------------- |
| `component`        | `node`        | `'div'`         | 分组容器元素。     |
| `header`           | `node`        |                 | 分组标题。        |
| `footer`           | `node`        |                 | 分组脚注。        |
| `noPadded`         | `bool`        | `false`         | 是否移除分组内容的 `padding`。|
| `bodyClass`        | `string`      |                 | Group body 样式类名。|


## 示例

```javascript
import React from 'react';
import {
  Group,
} from 'amazeui-touch';

export default class extends React.Component {
  render() {
    return (
      <div>
        <Group
          header="默认"
          noPadded
        >
          {sliderIntance}
        </Group>

        <Group
          header="缩略图"
          noPadded
        >
          {sliderThumbs}
        </Group>

        <Group
          header="标题"
          noPadded
        >
          {sliderCaption}
        </Group>
      </Container>
    );
  }
}

 
```
