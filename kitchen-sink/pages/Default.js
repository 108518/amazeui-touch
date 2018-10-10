import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router";

import { Container, List, NavBar, Group, View } from "amazeui-touch";

const components = [
  {
    category: "Basic",
    title: "基础组件",
    components: [
      {
        name: "Button",
        title: "按钮"
      },
      {
        name: "ButtonGroup",
        title: "按钮组"
      },
      {
        name: "Field",
        title: "输入框"
      },
      {
        name: "Icon",
        title: "图标"
      },
      {
        name: "NavBar",
        title: "导航条"
      },
      {
        name: "Title",
        title: "标题"
      },
      {
        name: "Switch",
        title: "开关"
      },
      {
        name: "Badge",
        title: "小徽章"
      },
      {
        name: "Divide",
        title: "分割线"
      },
      // {
      //   name: 'InputGroup',
      //   title: '输入框组'
      // },
      // {
      //   name: 'InputBox',
      //   title: '基础输入框'
      // },
      // {
      //   name: 'Info',
      //   title: '条信息'
      // },
      {
        name: "List",
        title: "列表"
      },
      {
        name: "TabBar",
        title: "工具栏"
      },
      {
        name: "Table",
        title: "表格"
      },
      {
        name: "Pagination",
        title: "分页"
      }
    ]
  },
  {
    category: "Layout",
    title: "布局组件",
    components: [
      {
        name: "Grid",
        title: "网格"
      }
    ]
  },
  {
    category: "Container",
    title: "容器组件",
    components: [
      {
        name: "Card",
        title: "卡片"
      },
      {
        name: "Modal",
        title: "模态窗"
      },
      {
        name: "Accordion",
        title: "手风琴"
      },
      {
        name: "Tabs",
        title: "选项卡"
      },
      {
        name: "Group",
        title: "分组"
      },
      {
        name: "CollapseCard",
        title: "折叠卡片"
      }
    ]
  },
  {
    category: "Behavior",
    title: "交互组件",
    components: [
      {
        name: "Tree",
        title: "树选择"
      },
      {
        name: "Notification",
        title: "通知"
      },
      {
        name: "ButtonAction",
        title: "按钮弹层"
      },
      {
        name: "Loader",
        title: "加载图标"
      },
      {
        name: "OffCanvas",
        title: "侧边栏"
      },
      {
        name: "Popover",
        title: "弹出层"
      },
      {
        name: "Slider",
        title: "轮播"
      }
    ]
  },
  {
    category: "Template",
    title: "模板组件",
    components: [
      {
        name: "ButtonBubble",
        title: "按钮气泡"
      },
      {
        name: "ButtonContainer",
        title: "按钮容器"
      },
      {
        name: "Choose",
        title: "按钮选择组"
      },
      {
        name: "Select",
        title: "弹出列表选择组"
      },
      {
        name: "SelectableButton",
        title: "可选按钮"
      },
      {
        name: "TodoItemTypeOne",
        title: "待办列表一"
      },
      {
        name: "TodoItemTypeTwo",
        title: "待办列表二"
      },
      {
        name: "ProcessLogs",
        title: "流程日志"
      }
    ]
  },
  {
    category: "Combination",
    title: "组件组合示例",
    components: [
      {
        name: "FormCombination"
      }
    ]
  }
];

export default class extends React.Component {
  static defaultProps = {
    transition: "rfr"
  };

  render() {
    const ListItem = (item, i) => (
      <List.Item
        linkComponent={Link}
        linkProps={{ to: `/${item.toLowerCase()}` }}
        title={item}
        key={i}
      />
    );

    const items = components.map((item, i) => (
      <Group header={item.title} noPadded key={i}>
        {item.components.map((component, j) => ListItem(component.name, j))}
      </Group>
    ));

    return (
      <View id="app-index">
        <NavBar amStyle="primary" title="Amaze UI Touch" />
        <Container scrollable>{items}</Container>
      </View>
    );
  }
}
