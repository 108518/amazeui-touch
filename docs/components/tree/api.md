# Tree

树选择组件

## 组件

### Tree

`<Tree>` 树容器组件。

#### 属性

| 名称                |  类型           | 默认值           | 含义            |
| -------------      | -------------  | --------------- | --------------  |
| `treeData`         |  `array`       |                 | 树数据，通过此项生成树。 |
| `multiple`          | `bool`        |  `true`         | 是否可以多选      |
| `selectable`        | `bool`        |  `true`         | 树节点是否可选中   |
| `checkable`         | `bool`        |  `true`         | 是否显示 `checkbox`    |
| `checkStrictly`     | `bool`        |  `false`        | 父子节点是否关联         |
| `defaultExpandAll`  | `bool`        |  `false`        | 是否默认展开全部节点      |
| `defaultExpandedKeys`  | `array`    |  `[]`           | 默认展开的一组节点， 值为节点的 `key` |
| `defaultCheckedKeys`   | `array`    |  `[]`           | 默认 `checkbox` 选中的一组节点， 值为节点的 `key` |
| `defaultSelectedKeys`   | `array`    |  `[]`           | 默认选中的一组节点， 值为节点的 `key` |
| `onExpand`          | `func`         |                | 当前节点展开后调用此函数 |
| `onSelect`          | `func`         |                | 选择树节点后调用此函数   |
| `onCheck`          | `func`         |                 | 点击 `checkbox` 后触发此函数 |


- `onExpand` `onSelect` `onCheck`
  - 3个回调函数的参数请参考控制台信息
- `treeData` 格式参考：

```js
[{
  label: 'Node1',
  value: '0-0',
  key: '0-0',
  children: [{
    label: 'Child Node1',
    value: '0-0-1',
    key: '0-0-1',
  }, {
    label: 'Child Node2',
    value: '0-0-2',
    key: '0-0-2',
  }],
}, {
  label: 'Node2',
  value: '0-1',
  key: '0-1',
}];
```


### TreeNode

`TreeNode` 树节点组件

#### 属性

| 名称                |  类型           | 默认值           | 含义            |
| -------------      | -------------  | --------------- | --------------  |
| `title`            | `string`       |                 | 树节点的标题      |
| `value`            | `string`       |                 | 树节点的值       |
| `key`              | `string`       |                 | `key` 必须按照格式设置。格式要求查看示例。|


## 示例
