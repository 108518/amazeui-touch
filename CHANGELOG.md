# Change Log


## 2.0.0 【released】

这是一个正式版。Studio 版本需要在 V2.2.0 以上。


## 2.0.0-beta.8

- [optimize] 优化 Tabs 性能：去除激活状态的字体变更，避免宽高大小变更引起 reflow。
- [optimize] 优化 Modal， Popover 样式

## 2.0.0-beta.7【released】

- [add] 移除外部图标库，使用 UED 提供的图标字体库。

## 2.0.0-beta.6【released】

> 这是一个不向下兼容版本
说明： css 命名空间更改为 `amt-`; 使用全局变量 `AMUITouch` 访问组件

### Bugfixes

- [bug] 修复 Slider active 样式不生效的问题
- [bug] 修复 Divide 样式表现不一致
- [bug] 修复 Button 在 IOS 下 `active` 伪类失效的问题
- [bug] 修复在 Studio 内 Modal、Popover、Offcanvas、ButtonAction、Notification 组件不可用的问题
- [bug] 修复 Navbar 组合 Offcanvas 不可用的问题
- [bug] 修复 Tabs 的二级菜单 counter 属性不生效的问题
- [bug] 修复 Slider 中 autoPlay={false} 不生效的问题

### Features

- [optimize] React 升级到 v16.0.0, 移除旧版本 API, 并优化性能
- [optimize] Title 组件 api 修改: displayLevel 改为 amSize(与其它组件保持统一，即样式大小的配置)；移除 `text` `level` 属性，简化复杂度
- [optimize] Switch 支持 amStyle 颜色配置
- [optimize] 设置 Field 下 `input` 和 `textarea` 默认为非受控模式
- [optimize] 优化 Tabs 二级菜单的显示问题
- [optimize] Card组件： 移除 Card title 属性，统一使用 header（API 内敛）；增加 `bodyClassName` 和 `bodyStyle` 属性; 修改属性名 `layout` 为 `noMargin`; 增加 `noPadding` 属性;  修改属性名 `noline` 为 `noLine`;
- [add] Group 增加 bodyClass 属性
- [refactor] 重构 OffCanvas 组件，详细 API 和说明见文档
- [refactor] 重构 Popover 组件，详细 API 和说明见文档
- [refactor] 重构 Modal 组件，API 无改动
- [refactor] 重构 CollapseCard 组件，详细 API 参见文档
- [refactor] 重构 Badge 组件: 提供两种展现形式；可以直接设置图标；提供小圆点模式

## 2.0.0-beta.5【released】

- [add] 提供简单模式的树，树选择
- [optimize] TodoItemTypeOne
- [add] 增加 FontAwesome 图标组件

## 2.0.0-beta.1【released】

- [√] 2.0.0： 组件以满足 Studio 开发需求为准则进行开发。详细 Change Log 会在接下来的日志中体现。
