---
imports:
  '{ Field }': 'amazeui-touch'
  'Basic': './basic'
  'Types': './types'
  'InputGroup': './inputgroup'
  'Events': './events'
---

# Field

输入框的扩展组件。用于创建各种类型的输入框。

## &lt;Field&gt;

`<Field>` 组件， 包含 `label`（输入框标签，及输入框前的辅助说明） 和 `<input>`（包含不同类型的 `input`， `select`， `texteara`, `switch` ） 两部分。

输入框为非受控模式（即可直接设置 value 并且修改），不遵循 React 对 form 的处理。

如果你不想直接用 `Field` 输入框，可以直接使用 `DefaultInput` 组件。
`DefaultInput` 是在原生 `input` 上的一层封装，但它是非受控模式。
`textarea` 原理类似。


```run
<Basic />
<Types />
<InputGroup />
<Events />
```



## API

| 名称                 | 类型       | 默认值   | 含义                                                                                      |
| -------------------- | ---------- | -------- | ----------------------------------------------------------------------------------------- |
| `type`               | `string`   | `'text'` | 输入框类型，参考: [input 类型][1] &#124; `'select'` &#124; `'textarea'` &#124; `'switch'` |
| `value`              |            |          | 输入框值, 可直接设置                                                                      |
| `label`              | `node`     |          | 输入框标签。不设置 label 即为输入框组                                                     |
| `labelWidth`         | `string`   | `4em`    | 输入框标签宽度，可设置为百分比，固定值。                                                  |
| `labelStyle`         | `object`   |          | 输入框标签样式。                                                                          |
| `labelClassName`     | `string`   |          | 输入框标签类名                                                                            |
| `single`             | `bool`     | `false`  | 是否单行显示                                                                              |
| `tip`                | `string`   |          | 输入框标签提示性文字                                                                      |
| `underline`          | `string`   | `'full'` | 底部下划线样式，`enum('full', 'part')`。 full 下划线为全宽; part 下划线为输入框部分       |
| `containerClassName` | `string`   |          | 输入框容器 className，设置在 **field** 容器上。                                           |
| `right`              | `bool`     |          | `input` 输入框文字右对齐。                                                                |
| `disabled`           | `bool`     |          | 禁用 `input`。                                                                            |
| `onChange`           | `function` |          | 输入框值改变时的回调函数， `function(event: object) =>: void`                             |
| `btnBefore`          | `node`     |          | 组建 **输入框组** 时输入框前面的按钮。                                                    |
| `btnAfter`           | `node`     |          | 组建 **输入框组** 时输入框后面的按钮。                                                    |
| `labelBefore`        | `node`     |          | 组建 **输入框组** 时输入框前面的文字。                                                    |
| `labelAfter`         | `node`     |          | 组建 **输入框组** 时输入框后面的文字。                                                    |

* 你可以添加其他的原生属性或者事件到 Field 上
* 使用 `Select` `Choose` 或者其他自定义组件时，需要将 type 设为 'custom'
* 不设定 `label` 即为输入框组


## 方法

### Field 的实例

| 名称                    | 含义                                                            |
| ----------------------- | --------------------------------------------------------------- |
| `.getValue()`           | 返回输入框的值。                                                |
| `.getChecked()`         | 返回输入框是否选中，当 `type` 为 `radio` 或 `checkbox` 时有效。 |
| `.getSelectedOptions()` | 返回 `<select>` 的值，`type` 为 `'select'` 时有效。             |


## 示例
