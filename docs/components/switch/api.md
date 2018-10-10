---
imports:
  '{ Switch, List }': 'amazeui-touch'
---

# Switch

开关。

## 默认

```demo
<Switch />
```

## 状态

```demo
<List.Item title="固定选中" after={<Switch checked />} />
<List.Item title="固定不选中" after={<Switch checked={false} />} />
<List.Item
  title="禁用且选中"
  after={<Switch disabled defaultChecked />}
/>
<List.Item title="禁用且不选中" after={<Switch disabled />} />
```

## 样式配置

使用 amStyle 配置样式：

```demo
<Switch amStyle="primary" defaultChecked />
<Switch amStyle="success" defaultChecked />
<Switch amStyle="secondary" defaultChecked />
<Switch amStyle="warning" defaultChecked />
<Switch amStyle="alert" defaultChecked />
```

## 事件

响应事件，查看控制台：

```demo
class extends React.Component {
  onChange = (e) => {
    console.log(e.target.checked)
  }

  render() {
    return (
      <Switch 
        amStyle="primary"
        defaultChecked
        onValueChange={this.onChange}
      />
    )
  }
}
```


## API

| 属性               |  类型           | 默认值     | 含义                                      |
| -------           |  ----------     |  -------  | ------                                    |
| `name`            |  `string`       |           | 开关名称。该属性应用到内部的 `input` 元素上，可用于传统的表单提交。|
| `shape`           |  `string`       |           | 开关形状。默认为普通开关形状，可选值：`'checkbox'`、`'radio'`，分别在外观上模仿复选按钮和单选按钮。|
| `amStyle`         |  `string`       |           | 开关颜色。默认为不设置 `primary`，可选值：`'primary', 'secondary', 'success', 'warning', 'alert', 'dark'` |
| `checked`         |  `bool`         | false     | 是否已选（作为被控组件使用）。|
| `defaultChecked`  |  `bool`         | false     | 是否默认已选（作为不被控组件使用）。|
| `disabled`        |  `bool`         | false     | 是否禁用。|
| `onValueChange`   |  `function`     |           | 开关选择状态改变时的回调方法。|

## 示例
