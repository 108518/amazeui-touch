import React from 'react';
import {
  Link,
} from 'react-router';

const components = [
  {
    category: 'CSS',
    title: '样式',
    components: [
      {
        name: 'Normalize',
        title: '基础样式'
      },
      {
        name: 'Typography',
        title: '排版'
      },
      {
        name: 'Utility',
        title: '辅助类'
      }
    ]
  },
  {
    category: 'Layout',
    title: '布局组件',
    components: [
      {
        name: 'Grid',
        title: '网格'
      }
    ]
  },
  {
    category: 'Basic',
    title: '基础组件',
    components: [
      {
        name: 'Button',
        title: '按钮'
      },
      {
        name: 'ButtonGroup',
        title: '按钮组'
      },
      {
        name: 'Field',
        title: '输入框'
      },
      {
        name: 'Icon',
        title: '图标'
      },
      {
        name: 'List',
        title: '列表'
      },
      {
        name: 'Card',
        title: '卡片'
      },
      {
        name: 'Switch_',
        title: '开关'
      },
      {
        name: 'Badge',
        title: '小徽章'
      },
      {
        name: 'Choose',
        title: '按钮选择组'
      },
      {
        name: 'Select',
        title: '弹出列表选择组'
      },
      {
        name: 'NavBar',
        title: '导航条'
      },
      {
        name: 'Title',
        title: '标题'
      },
      {
        name: 'Divide',
        title: '分割线'
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
        name: 'TabBar',
        title: '工具栏'
      },
      {
        name: 'Loader',
        title: '加载动画'
      },
      {
        name: 'Table',
        title: '表格'
      },
      {
        name: 'Pagination',
        title: '分页'
      },
    ]
  },
  {
    category: 'Container',
    title: '容器组件',
    components: [
      {
        name: 'Accordion',
        title: '手风琴'
      },
      {
        name: 'Tabs',
        title: '选项卡'
      },
      {
        name: 'Group',
        title: '分组'
      },
      {
        name: 'CollapseCard',
        title: '折叠卡片'
      },
      {
        name: 'Slider',
        title: '轮播'
      },
    ]
  },
  {
    category: 'Behavior',
    title: '交互组件',
    components: [
      {
        name: 'Modal',
        title: '模态窗'
      },
      {
        name: 'Popover',
        title: '气泡框'
      },
      {
        name: 'OffCanvas',
        title: '侧边栏'
      },
      {
        name: 'Notification',
        title: '通知'
      },
      {
        name: 'ButtonAction',
        title: '按钮弹层'
      },
      {
        name: 'Tree',
        title: '树选择'
      },
    ]
  },
  {
    category: 'Template',
    title: '模板组件',
    components: [
      {
        name: 'ButtonBubble',
        title: '按钮气泡'
      },
      {
        name: 'ButtonContainer',
        title: '按钮容器'
      },
      {
        name: 'SelectableButton',
        title: '可选按钮'
      },
      {
        name: 'TodoItemTypeOne',
        title: '待办列表一'
      },
      {
        name: 'TodoItemTypeTwo',
        title: '待办列表二'
      },
      {
        name: 'ProcessLogs',
        title: '进程日志'
      }
    ]
  },
  {
    category: 'Template',
    title: '组合示例',
    components: [
      {
        name: 'FormCombinationExample',
        tilte: '表单组合示例'
      }
    ]
  }
];

class Sidebar extends React.Component {
  state = {
      filter: null
  }

  applyFilter = () => {
    this.setState({
      filter: this.refs.filter.value,
    });
  }

  renderNav = () => {
    let cNav = [
      (
      <li key="start" className="nav-header">
          开始使用
      </li>),
      (
      <li key="gettingStarted">
        <Link
          activeClassName="active"
          to="/docs/getting-started"
        >
          开始使用
        </Link>
      </li>),
      (
        <li key="modular">
          <Link
            activeClassName="active"
            to="/docs/advanced"
          >
            进阶使用
          </Link>
        </li>
      ),
      (
        <li key="changelog">
          <Link
            activeClassName="active"
            to="/docs/changelog"
          >
            变更日志*
          </Link>
        </li>
      )
    ];

    components.forEach((category, i) => {
      const {
        title: cTitle,
        components,
        } = category;

      cNav.push(
        <li
        key={`c${i}`}
        className="nav-header"
        >
          {cTitle}
        </li>
      );

      components.forEach((cpt, index) => {
        const {
          title,
          name,
          } = cpt;
        let filter = this.state.filter;
        filter = typeof filter === 'string' ?
          filter.toLowerCase() : null;
        const router = name.toLowerCase();

        if (!filter ||
          (name.toLowerCase().indexOf(filter) > -1) ||
          (title.toLowerCase().indexOf(filter) > -1)
        ) {
          let cptNav = (
            <li key={`c${i}-item${index}`}>
              <Link
                activeClassName="active"
                to={`/docs/${router}`}
              >
                {title} <span className="en">{name}</span>
              </Link>
            </li>);

          cNav.push(cptNav);
        }
      });
    });

    return (
      <ul>
        {cNav}
      </ul>
    );
  }

  render() {
    return (
      <div className={`amt-sidebar ${this.props.className}`}>
        <p className="am-margin-top am-margin-horizontal-sm">
          <input
            className="am-form-field am-input-sm"
            onChange={this.applyFilter}
            ref="filter"
            type="text"
            id="doc-filter"
            placeholder="查找组件" />
        </p>
        <nav
          role="navigation"
        >
          {this.renderNav()}
        </nav>
      </div>
    );
  }
}

export default Sidebar;
