# TodoItemTypeTwo

采用第二种样式的待办列表。

## 属性

### &lt;TodoItemTypeTwo&gt;

| 属性               | 类型         | 默认值     | 含义               |
| ------------------ | ----------- | --------- | ----------------- |
| `title`            | `string`    |           | 待办列表的标题。 |
| `subtitle`         | `node`      |           | 待办列表的副标题。可以是自定义组件。 |
| `after`            | `node`      |           | 待办列表标题右侧的部分。可以是自定义组件。 |
| `defaultCollapsed` | `bool`      | `true`    | 是否默认折叠。 |
| `onTitleClick`         | `func`      |           | 待办列表标题点击时的回调方法。 |
| `actions`          |  `array`    |           | 底部按钮组    |

`actions` 属性: 

```js
[
  {
    label: '编辑',
    icon: 'edit',
    onClick: () => {console.log('点我')},
    onDoubleClick: () => {console.log('双击我')},
  },
  {
    label: '删除',
    icon: 'trash'
  }
]
```

## 示例
