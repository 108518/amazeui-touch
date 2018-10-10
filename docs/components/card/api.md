---
imports:
  '{ Card, Grid, Col }': 'amazeui-touch'
---

# Card

卡片容器。用于信息展示的容器。


## 默认

```demo
<Card
  noMargin={false}
  noLine={false}
  header="箴言"
>  
  怎能就让这不停燃烧的心， 就这样耗尽消失在平庸里。
</Card>
```


## 自定义

```demo
<Card
  header={
    <Card.Child  cover="https://picsum.photos/800/160/?random">
      <h3 className="card-title" style={{ color: "white" }}>
        我思念的城市
      </h3>
    </Card.Child>
  }
>
  风路过的时候 没能吹走 <br />
  这个城市太厚的灰尘 <br />
  多少次的雨水 从来没有 <br />
  冲掉你那沉重的忧伤 <br />
  你的忧伤 像我的绝望 <br />
  那样漫长
</Card>
```



### &lt;Card&gt; API

| 属性          | 类型           | 默认值           | 含义                                      |
| ------------- | ------------- | --------------- | ---------------------------------------- |
| `title`       | `string`             |             | 卡片标题。使用时卡片头部无效。 |
| `header`      | `string`&#124;`node` |             | 卡片头部。可自定义。 |
| `footer`      | `string`&#124;`node` |             | 卡片底部。可自定义。 |
| `noMargin`    | `bool`               | `false`     | 是否去除 Card 外边距。 |
| `noPadding`   | `bool`               | `false`     | 是否去除 Card 内容区域内边距。 |
| `external`    | `bool`               | `false`     | 是否外置头部、标题等。 |
| `noLine`      | `bool`               | `false`     | 是否去掉头部、底部的横线。 |
| `bodyClassName` | `string`           |             | 卡片内容区域类名 |
| `bodyStyle`     | `obj`              |             | 卡片内容区域样式 |

_注：卡片 `<Card>` 的 `header` 和 `footer` 可用 `<Card.Child>` 组装（见示例代码），也可自行组织。_



### &lt;Card.Child&gt; API

> 用于组装 `<Card>` 的 `header` 和 `footer`。

| 属性          | 类型           | 默认值           | 含义                                      |
| ------------- | ------------- | --------------- | ---------------------------------------- |
| `role`       | `'header'`&#124;`'footer'`      | `'header'` | 充当的角色。 |
| `cover`      | `string`                        | `undefined` | 卡片封面图片 URL，仅在 `role` 为 `'header'` 时有效。 |


## 示例
