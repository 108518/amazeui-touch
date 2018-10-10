---
imports:
  '{ Select }': 'amazeui-touch'
---


# Select

弹出列表选择组。

## 默认

```demo
<Select
  onValueChange={value => {
    console.log(value);
  }}
>
  <Select.Item value={101}>选项 1</Select.Item>
  <Select.Item value={102}>选项 2</Select.Item>
  <Select.Item value={103}>选项 3</Select.Item>
  <Select.Item value={104}>选项 4</Select.Item>
  <Select.Item value={105}>选项 5</Select.Item>
  <Select.Item value={106}>选项 6</Select.Item>
  <Select.Item value={107}>选项 7</Select.Item>
  <Select.Item value={108}>选项 8</Select.Item>
</Select>
```

## 单选

```demo
<Select
  multiple={false}
  onValueChange={value => {
    console.log(value);
  }}
>
  <Select.Item value="s1">选项 1</Select.Item>
  <Select.Item value="s2" defaultSelected>
    选项 2
  </Select.Item>
  <Select.Item value="s3" disabled>
    选项 3
  </Select.Item>
  <Select.Item value="s4">选项 4</Select.Item>
  <Select.Item value="s5">选项 5</Select.Item>
  <Select.Item value="s6">选项 6</Select.Item>
</Select>
```


### &lt;Select&gt;

| 属性              | 类型          | 默认值           | 含义                                      |
| ---------------- | ------------- | --------------- | ---------------------------------------- |
| `multiple`       | `bool`    | `true`     | 弹出列表选择组是否多选。 |
| `defaultValue`   | `string`&#124;`number`&#124;`array`    |            | 弹出列表选择组默认值。如果是多选，值可以为数组。 |
| `onValueChange`  | `func`    |            | 弹出列表选择组选择状态改变时的回调方法。 |

### &lt;Select.Item&gt;

| 属性               | 类型          | 默认值           | 含义                                      |
| ----------------- | ------------- | --------------- | ---------------------------------------- |
| `value`           | `string`&#124;`number`  |            | 弹出列表选择条目的值。 |
| `disabled`        | `bool`    | `false`    | 是否应用「禁用」样式。 |

## 示例
