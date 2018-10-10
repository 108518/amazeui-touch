---
imports:
  '{ Tabs }': 'amazeui-touch'
---

# Tabs

选项卡组件。

## 默认

```demo
<Tabs>
  <Tabs.Item
    title="独坐敬亭山"
  >
    <p>众鸟高飞尽，孤云独去闲。</p>
    <p>相看两不厌，只有敬亭山。</p>
  </Tabs.Item>
  <Tabs.Item
    title="侠客行"
  >
    <p>赵客缦胡缨，吴钩霜雪明。</p>
    <p>银鞍照白马，飒沓如流星。</p>
    <p>十步杀一人，千里不留行。</p>
    <p>事了拂衣去，深藏身与名。</p>
  </Tabs.Item>
  <Tabs.Item
    title="将进酒"
  >
    <p>君不见黄河之水天上来，奔流到海不复回。</p>
    <p>君不见高堂明镜悲白发，朝如青丝暮成雪。</p>
    <p>人生得意须尽欢，莫使金樽...</p>
  </Tabs.Item>
</Tabs>
```

## 二级菜单


可以在 Tabs.Item 内直接嵌套另一个 Tab， 使用 secondTab 属性标注为二级菜单：

```demo
<Tabs>
  <Tabs.Item
    title="一级菜单"
    noPadded
  >
    <Tabs secondTab>
      <Tabs.Item
        title="独坐敬亭山"
      >
        <p>众鸟高飞尽，孤云独去闲。</p>
        <p>相看两不厌，只有敬亭山。</p>
      </Tabs.Item>
      <Tabs.Item
        title="侠客行"
      >
        <p>赵客缦胡缨，吴钩霜雪明。</p>
        <p>银鞍照白马，飒沓如流星。</p>
        <p>十步杀一人，千里不留行。</p>
        <p>事了拂衣去，深藏身与名。</p>
      </Tabs.Item>
      <Tabs.Item
        title="将进酒"
      >
        <p>君不见黄河之水天上来，奔流到海不复回。</p>
        <p>君不见高堂明镜悲白发，朝如青丝暮成雪。</p>
        <p>人生得意须尽欢，莫使金樽...</p>
      </Tabs.Item>
    </Tabs>
  </Tabs.Item>
  <Tabs.Item
    title="一级菜单一"
    noPadded
  >
    <Tabs
      secondTab
    >
      <Tabs.Item
        title="二级菜单"
      >
        <img src="https://placeimg.com/480/320/nature" />
      </Tabs.Item>
      <Tabs.Item
        title="二级菜单一"
      >
        <img src="https://placeimg.com/480/320/tech" />
      </Tabs.Item>
      <Tabs.Item
        title="二级菜单二"
      >
        <img src="https://placeimg.com/480/320/people" />
      </Tabs.Item>
    </Tabs>
  </Tabs.Item>
</Tabs>
```



### &lt;Tabs&gt; API

| 名称                |  类型           | 默认值           | 含义           |
| -------------      | ------------- | --------------- | --------------- |
| `defaultActiveKey` | `any`         |         |   激活选项卡的 `eventKey`。|
| `onAction`         | `func`        |         |　点击选项卡时的回调函数。　｜
| `navStyle`         | `string`      |         |  导航栏样式  |
| `navClassName`     |  `string`     |         | 导航栏类名   |
| `secondTab`        |  `bool`       |  false  | 是否是二级 Tab |
| `counter`          | `number`      |         | 设定导航栏显示数量（即使数值过大，每项最小宽度不会小于其自身的宽度） |
| `animation`        |  `bool`       |  true   | 是否在选项卡切换时启用动画 |
| `render`           |  `string`     |         | 渲染模式： 只渲染当前选项卡内容（DOM），启用后切换动画也会关闭。建议在选项卡选项内容过多时启用。可选值： `current` |

* counter 是一个弹性属性，当导航栏内 `title` 内容过少（宽度较小），会自动扩展满足 counter 的设置。但是当内容过多（宽度过长）时，不可能同时满足宽度需求又满足 counter 数量上的要求，所以会弹性变化：首先满足`显示`（完整显示导航项的 title），再会满足 `counter`。


### &lt;Tabs.Item&gt; API

| 名称                |  类型           | 默认值           | 含义           |
| -------------      | ------------- | --------------- | --------------- |
| `title`            | `node`        |                 | 选项卡标题。|
| `eventKey`         | `any`         |                | 事件处理标识符。|
| `disabled`         | `bool`        |    false       | 是否禁用该选项卡。 |
| `href`             | `string`      |                |  设置当前项为跳转链接。 |
| `noPadded`         | `bool`        |   false        |  是否设置内边距 |
| `navStyle`         | `obj`         |                | 导航栏当前项样式 |
| `navClassName`     | `string`      |                | 为导航栏当前项添加类名 |


## 示例
