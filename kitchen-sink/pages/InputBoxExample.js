import React from "react";
import { Container, InputBox, Card, Field, Tree } from "amazeui-touch";

const TreeNode = Tree.TreeNode;

const InputBoxExample = props => (
  <Container {...props}>
    <Card title="以放在通栏卡片中为例" layout>
      <InputBox label="填表人" placeholder="张三" />
      <InputBox label="填表部门" placeholder="云适配科技部" />
      <InputBox label="填表时间" type="date" />
      <InputBox label="选择附件" type="file" />
      <Tree label="选择处理人">
        <TreeNode title="一级菜单一" key="0-0" value="一级菜单一">
          <TreeNode title="二级菜单二" key="0-0-0" value="二级菜单二">
            <TreeNode title="三级菜单一" key="0-0-0-0" value="三级菜单一">
              <TreeNode title="四级菜单一" key="0-0-0-0-0" value="四级菜单一" />
              <TreeNode title="四级菜单二" key="0-0-0-0-1" value="四级菜单二" />
            </TreeNode>
            <TreeNode title="三级菜单二" key="0-0-0-1" value="三级菜单二" />
          </TreeNode>
          <TreeNode title="二级菜单 三" key="0-0-1" value="二级菜单 三">
            <TreeNode title="三级菜单 四" key="0-0-1-0" value="二级菜单 四" />
            <TreeNode title="三级菜单 五" key="0-0-1-1" value="二级菜单 五" />
          </TreeNode>
        </TreeNode>
        <TreeNode title="parent 0-1 value 0" key="0-1" value="Value0">
          <TreeNode title="parent 0-1-0" key="0-1-0" value="Value1" />
          <TreeNode title="parent 0-1-1" key="0-1-1" value="Value2" />
          <TreeNode title="parent 0-1-2" key="0-1-2" value="Value3" />
          <TreeNode title="parent 0-1-3" key="0-1-3" value="Value4" />
          <TreeNode title="parent 0-1-4" key="0-1-4" value="Value5" />
        </TreeNode>
        <TreeNode title="parent 0-1 value 0" key="0-2" value="Value0">
          <TreeNode title="parent 0-2-0" key="0-2-0" value="Value1" />
          <TreeNode title="parent 0-2-1" key="0-2-1" value="Value2" />
          <TreeNode title="parent 0-2-2" key="0-2-2" value="Value3" />
          <TreeNode title="parent 0-2-3" key="0-2-3" value="Value4" />
          <TreeNode title="parent 0-2-4" key="0-2-4" value="Value5" />
        </TreeNode>
      </Tree>
      <InputBox label="备注信息" type="textarea" placeholder="请填写备注信息" />
    </Card>
  </Container>
);

export default InputBoxExample;
