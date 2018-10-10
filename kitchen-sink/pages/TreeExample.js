import React from 'react';
import {
  Container,
  Tree,
  Card,
  Field,
  Title,
} from 'amazeui-touch';
const TreeNode = Tree.TreeNode;

const onExpand = (keys, node) => {
  console.log('Expand:::', keys, node)
}
const onSelect = (keys, node) => {
  console.log('Select:::', keys, node)
}
const onCheck = (keys, node) => {
  console.log('Check:::', keys, node)
}

const treeData = [{
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

const TreeDemo = (props) => (
  <Tree
    onExpand={onExpand}
    onSelect={onSelect}
    onCheck={onCheck}
    {...props}>
  <TreeNode title="一级菜单一" key="0-0" value="一级菜单一">
    <TreeNode title="二级菜单二" key="0-0-0" value="二级菜单二">
      <TreeNode title="三级菜单一" key="0-0-0-0" value="三级菜单一">
        <TreeNode title="四级菜单一" key="0-0-0-0-0" value="四级菜单一" />
        <TreeNode title="四级菜单二" key="0-0-0-0-1" value="四级菜单二" />
      </TreeNode>
      <TreeNode title="三级菜单二" key="0-0-0-1" value="三级菜单二" />
    </TreeNode>
    <TreeNode title="二级菜单 三" key="0-0-1" value="二级菜单 三" >
      <TreeNode title="三级菜单 四" key="0-0-1-0" value="二级菜单 四"/>
      <TreeNode title="三级菜单 五" key="0-0-1-1" value="二级菜单 五" />
    </TreeNode>
  </TreeNode>
  <TreeNode title="一级菜单二" key="0-1" value="Value0" >
    <TreeNode title="parent 0-1-0" key="0-1-0" value="Value1" />
    <TreeNode title="parent 0-1-1" key="0-1-1" value="Value2" />
    <TreeNode title="parent 0-1-2" key="0-1-2" value="Value3" />
    <TreeNode title="parent 0-1-3" key="0-1-3" value="Value4" />
    <TreeNode title="parent 0-1-4" key="0-1-4" value="Value5" />
  </TreeNode>
  <TreeNode title="一级菜单三" key="0-2" value="Value0" >
    <TreeNode title="parent 0-2-0" key="0-2-0" value="Value1" />
    <TreeNode title="parent 0-2-1" key="0-2-1" value="Value2" />
    <TreeNode title="parent 0-2-2" key="0-2-2" value="Value3" />
    <TreeNode title="parent 0-2-3" key="0-2-3" value="Value4" />
    <TreeNode title="parent 0-2-4" key="0-2-4" value="Value5" />
  </TreeNode>
</Tree>
)


export default class TreeExample extends React.Component {

  static defaultProps = {
    keys: ['0-0-0-0'],
  };

  constructor(props) {
    super(props);
    const keys = this.props.keys;
    this.state = {
      value: undefined,
      switchIt: true,
      checkedValue: []
    }
  }

  onCheck = ( currentTreeNode, checkedKeys, filterValues, info) => {
    console.log('onCheck', currentTreeNode, checkedKeys);

    this.setState({checkedValue: checkedKeys});
  }

  render() {

    return (
      <Container scrollable>
        <Title>单选</Title>
        <Card
          noMargin
        >
          <TreeDemo multiple={false} />
        </Card>
        <Title>多选</Title>
        <Card
          noMargin
        >
          <TreeDemo />
        </Card>
        <Title>不显示 checkbox</Title>
        <Card
          noMargin
        >
          <TreeDemo checkable={false} />
        </Card>
        <Title>默认展开 0-0-0-0-0</Title>
        <Card
          noMargin
        >
          <TreeDemo checkable={false} defaultExpandedKeys={['0-0-0-0-0']} />
        </Card>
        <Title>通过数据生成树</Title>
        <Card noMargin>
          <Tree
           treeData={treeData}
          />
        </Card>
      </Container>
    );
  }
}



