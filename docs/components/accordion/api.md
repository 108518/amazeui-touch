---
imports:
  '{ Accordion }': 'amazeui-touch'
---

# Accordion

手风琴效果的折叠内容组件。

## 默认

```demo
<Accordion>
  <Accordion.Item title="独坐敬亭山">
  <p>  众鸟高飞尽，孤云独去闲。 </p>
  <p>  相看两不厌，只有敬亭山。</p>
  </Accordion.Item>
  <Accordion.Item title="侠客行">
    <p>赵客缦胡缨，吴钩霜雪明。</p>
    <p>银鞍照白马，飒沓如流星。</p>
    <p>十步杀一人，千里不留行。</p>
    <p>事了拂衣去，深藏身与名。</p>
  </Accordion.Item>
  <Accordion.Item title="将进酒·君不见黄河之水天上来">
    <p>君不见黄河之水天上来，奔流到海不复回。</p>
    <p>君不见高堂明镜悲白发，朝如青丝暮成雪。</p>
    <p>人生得意须尽欢，莫使金樽...</p>
  </Accordion.Item>
</Accordion>
```

### &lt;Accordion&gt; API

| 名称                |  类型           | 默认值           | 含义           |
| -------------      | ------------- | --------------- | --------------- |
| `activeKey`        | `any`         |                 | 激活的面板的 `key`。|
| `defaultActiveKey` | `any`         |                 | 默认激活的面板的 `key`，与 `<Accordion.Item>` 的 `eventKey` 相同时，该项目激活（展开）。|
| `onAction`         | `func`        |                 | 点击子项触发此回调函数，默认参数`(event, eventKey)`。|
| `inset`            | `bool`        | false           | 是否添加边距。默认为全宽填满容器，设置 `inset` 属性以后添加 `15px` 的边距。|


### &lt;Accordion.Item&gt; API

| 名称                |  类型           | 默认值           | 含义           |
| -------------      | ------------- | --------------- | --------------- |
| `title`            | `node`        |                 | 子项的标题。 |
| `eventKey`         | `any`         |                 | 子项的事件标识符，当父级 `<Accordion>` 的 `defaultActiveKey` 与当前 `eventKey` 相等时，该项激活。

## 示例
