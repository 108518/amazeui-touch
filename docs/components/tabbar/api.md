---
imports:
  '{ TabBar }': 'amazeui-touch'
---

# TabBar

页面底部工具栏组件。

## 默认

```demo
<TabBar>
  <TabBar.Item selected title="首页" />
  <TabBar.Item title="设置" />
  <TabBar.Item title="信息" />
</TabBar>
```

## icon 配置

```demo
<TabBar>
  <TabBar.Item selected icon="home" title="首页" />
  <TabBar.Item icon="setting" title="设置" />
  <TabBar.Item icon="message" title="信息"/>
</TabBar>
```

## badge 配置

```demo
<TabBar>
  <TabBar.Item selected icon="home" title="首页" />
  <TabBar.Item icon="setting" title="设置" />
  <TabBar.Item icon="message" title="信息" badge={5} />
</TabBar>
```

## 色彩配置

使用 amStyle 配置色彩：

```demo
<TabBar amStyle="primary">
  <TabBar.Item selected icon="home" title="首页" />
  <TabBar.Item icon="setting" title="设置" />
  <TabBar.Item icon="message" title="信息" />
</TabBar>
<br />
<TabBar amStyle="success">
  <TabBar.Item selected icon="home" title="首页" />
  <TabBar.Item icon="setting" title="设置" />
  <TabBar.Item icon="message" title="信息" />
</TabBar>
```


## 事件响应与状态

onAction 响应事件, 查看控制台：

```demo
class extends React.Component {
  state = {
      selected: "home"
  }

  handleClick = (key, e) => {
    e.preventDefault();

    this.setState({
      selected: key
    }, function() {
      console.log("选中了： %s", this.state.selected);
    })
  }

  render() {
    return (
      <TabBar
        onAction={this.handleClick}
      >
        <TabBar.Item
          eventKey="home"
          selected={this.state.selected === "home"}
          icon="home"
          title="首页"
        />
        <TabBar.Item
          selected={this.state.selected === "gear"}
          eventKey="gear"
          icon="setting"
          title="设置"
        />
        <TabBar.Item
          selected={this.state.selected === "info"}
          eventKey="info"
          icon="message"
          badge={5}
          title="信息"
        />
      </TabBar>
    )
  }
}
```




### API

| 名称                |  类型           | 默认值           | 含义           |
| -------------      | ------------- | --------------- | --------------- |
| `component`        |  `node`       |   `nav`         |  工具栏容器元素。   |
| `amStyle`          |  `string`     |                 | 工具栏颜色样式， `enum('primary', 'secondary', 'success', 'warning', 'alert', 'dark')` |
| `onAction`         |  `func`       |                 | 点击工具栏子项时的处理函数。 |


### &lt;TabBar.Item&gt;

| 名称                |  类型           | 默认值           | 含义           |
| -------------      | ------------- | --------------- | --------------- |
| `component`        | `node`        |   `span`        |   工具栏容器元素。 |
|  `icon`            | `string`      |                 |  图标名称，可选值参见 `Icon` 文档。 |
| `title`            | `string`      |                 |  子项标题。 |
| `href`             | `string`      |                 | 子项链接，设置 `href` 属性以后，子项会渲染为 `<a>` 元素。|
| `eventKey`         |  `any`        |                 | 事件处理标识符。   |
| `badge`            |  `string, number`  |            | 子项小徽章上显示的文字。**注意**：目前只有设置了 `icon`， 再设置 `badge` 才有效。 |
| `badgeStyle`      | `string`       |                 | 小徽章颜色样式，默认为 `alert`。 |
| `selected`        | `bool`         |                 | 子项是否被选中。                |


## 示例
