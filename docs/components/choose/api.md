---
imports:
  '{ Choose }': 'amazeui-touch'
---

# Choose

按钮选择组。

## 默认

```demo
<Choose
  amStyle="primary"
>
  <Choose.Item value={1}>选项 1</Choose.Item>
  <Choose.Item value={2}>选项 2</Choose.Item>
  <Choose.Item value={3}>选项 3</Choose.Item>
</Choose>
```

## 状态

`defaultSelected` 默认选中，`disabled` 禁选：

```demo
<Choose
  amStyle="primary"
>
  <Choose.Item value={1}>选项 1</Choose.Item>
  <Choose.Item value={2} defaultSelected>选项 2</Choose.Item>
  <Choose.Item value={3} disabled>选项 3</Choose.Item>
</Choose>
```

### &lt;Choose&gt;

| 属性              | 类型           | 默认值           | 含义                                      |
| ---------------- | ------------- | --------------- | ---------------------------------------- |
| `amStyle`        | `string`  |            | 按钮选择条目颜色样式。 |
| `amSize`         | `string`  |            | 按钮选择条目尺寸。可选值：`'xs'`、`'sm'`、`'lg'`、`'xl'` |
| `multiple`       | `bool`    | `true`     | 按钮选择组是否多选。 |
| `defaultValue`   | `string`&#124;`number`&#124;`array`    |            | 按钮选择组默认值。如果是多选，值可以为数组。 |
| `onValueChange`  | `func`    |            | 按钮选择组选择状态改变时的回调方法。 |

### &lt;Choose.Item&gt;

| 属性               | 类型           | 默认值           | 含义                                      |
| ----------------- | ------------- | --------------- | ---------------------------------------- |
| `amStyle`         | `string`  |            | 按钮选择条目颜色样式。 |
| `amSize`          | `string`  |            | 按钮选择条目尺寸。可选值：`'xs'`、`'sm'`、`'lg'`、`'xl'` |
| `value`           | `string`&#124;`number`  |            | 按钮选择条目的值。 |
| `selected`        | `bool`    | `false`    | 是否已选（作为被控组件使用）。 |
| `defaultSelected` | `bool`    | `false`    | 是否默认已选（作为不被控组件使用）。 |
| `disabled`        | `bool`    | `false`    | 是否应用「禁用」样式。 |

## 示例
