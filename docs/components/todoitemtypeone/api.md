---
imports:
  '{ TodoItemTypeOne }': 'amazeui-touch'
---

# TodoItemTypeOne

采用第一种样式的待办列表。


### &lt;TodoItemTypeOne&gt;

| 属性               | 类型         | 默认值     | 含义               |
| ------------------ | ----------- | --------- | ----------------- |
| `title`            | `string`    |           | 待办列表的标题。 |
| `subtitle`         | `node`      |           | 待办列表的副标题。可以是自定义组件。 |
| `defaultCollapsed` | `bool`      | `true`    | 是否默认折叠。 |
| `withBottom`       | `bool`      | `false`   | 是否带有底部栏（包含编辑和删除按钮）。 |
| `onEdit`           | `func`      |           | 待办列表底部栏编辑按钮点击时的回调方法。 |
| `onDelete`         | `func`      |           | 待办列表底部栏删除按钮点击时的回调方法。 |
| `onTitleClick`         | `func`      |           | 待办列表标题点击时的回调方法。 |

## 示例
