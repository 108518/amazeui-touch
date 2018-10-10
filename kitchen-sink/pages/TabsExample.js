import React from 'react';
import {
  Container,
  Tabs,
  Card,
  Button,
} from 'amazeui-touch';

const albums = [
  {
    title: '选项',
    desc: `
    广义相对论用一个对称的二阶张量替换了经典力学中的引力标量势，不过前者在某些极限情形下会退化为后者。在弱引力场并且速度远小于光速的前提下，相对论的结果和牛顿经典理论的结果是重合的。`
  },
  {
    title: '选项一',
    desc: `
    弱引力场和电磁场相比有一个重要类同之处：类似于随时间变化的电磁场会辐射电磁波，引力场也有可能会辐射引力波。引力波有如时空度规的涟漪，以光速在空间中传播。`
  },
  {
    title: '选项二二',
    desc: `广义相对论中，任意轨道的拱点（轨道上最接近或最远离系统质心的点）会发生进动，这使得轨道不再是椭圆，而是一个绕着质心旋转的准椭圆轨道，其总体上看接近于玫瑰线的形状。`
  },
    {
    title: '选项三',
    desc: `高斯定律描述电场是怎样由电荷生成。电场线开始于正电荷，终止于负电荷。从估算穿过某给定闭曲面的电场线数量，即电通量，可以得知包含在这闭曲面内的总电荷。更详细地说，该定律描述穿过任意闭曲面的电通量与这闭曲面内的电荷数量之间的关系。`
  },
  {
    title: '选项四',
    desc: `高斯磁定律表明，磁单极子（磁荷）并不存在于宇宙。在实验方面，物理学者迄今仍尚未发现磁单极子存在的明确证据。[8]由物质产生的磁场是被一种称为偶极子的位形所生成。磁偶极子最好是用电流回路来表示。磁偶极子好似不可分割地被束缚在一起的正磁荷和负磁荷，其净磁荷为零。磁场线没有初始点，也没有终止点。磁场线会形成循环或延伸至无穷远。换句话说，进入任何区域的磁场线，也必须从那区域离开。以术语来说，通过任意闭曲面的磁通量等于零，磁场是一个螺线矢量场。`
  },
  {
    title: '选项五',
    desc: `法拉第感应定律描述随时间变化的磁场怎样生成（感应出）电场。电磁感应是许多发电机的运作原理。例如，一块旋转的条形磁铁会产生时变磁场，这又会生成电场，使得邻近的闭循环因而感应出电流。`
  }

];

 export default class extends React.Component {
  state = {
      activeTab: 0,
      activeSecondTab: 1,
  }

  handleAction = (key) => {
    this.setState({
      activeTab: key
    });
  }

  handleSecondAction = (key) => {
    this.setState({
      activeSecondTab: key
    });
  }

  handleClick = (key) => {
    if (key === 1) {
      alert(`当前项: ${key}`)
    }
  }

  changeTab = (e) => {
    e.preventDefault();

    if (this.state.activeTab !== 1) {
      this.setState({
        activeTab: 1,
      });
    } else {
      console.warn('已经激活第二个 Tab 了!');
    }
  }

  render() {
    return (
      <Container {...this.props}>
        <h3>默认</h3>
        <Tabs counter={3}>
          {albums.map((ablum, i) => {
            return (
              <Tabs.Item
                title={ablum.title}
                key={i}
              >
                {ablum.desc}
              </Tabs.Item>
            )
          })}
        </Tabs>

        <h3>二级菜单演示</h3>

        <Tabs
          activeKey={this.state.activeTab}
          onAction={this.handleAction}
          render="current"
        >
          <Tabs.Item
            title="一级菜单"
            noPadded
          >
            <Tabs
              activeKey={this.state.activeSecondTab}
              onAction={this.handleSecondAction}
              counter={4}
              secondTab
            >
            {albums.map((ablum, i) => {
              return (
                <Tabs.Item
                  title={ablum.title}
                  key={i}
                >
                  {i}
                  {ablum.desc}
                </Tabs.Item>
              )
            })}
            </Tabs>
          </Tabs.Item>

          <Tabs.Item
            title="一级菜单一"
            noPadded
          >
            <Tabs
              activeKey={this.state.activeSecondTab}
              onAction={this.handleSecondAction}
              secondTab
            >
              <Tabs.Item
                title="二级菜单"
              >
                <img src="https://placeimg.com/480/320/nature" />
              </Tabs.Item>
              <Tabs.Item
                title="二级菜单一"
              >
                <img src="https://placeimg.com/480/320/tech" />
              </Tabs.Item>
              <Tabs.Item
                title="二级菜单二"
              >
                <img src="https://placeimg.com/480/320/people" />
              </Tabs.Item>
            </Tabs>
          </Tabs.Item>

          <Tabs.Item
            title="一级菜单二"
            noPadded
          >
            <Card>
              二级菜单为自定义添加的 Tab，所以可设置可添加其他组件
            </Card>
          </Tabs.Item>

        </Tabs>
        <div className="padding">
          <Button
            amStyle="primary"
            amSize="sm"
            onClick={this.changeTab}
          >
            切换到第二个 Tab
          </Button>
        </div>

        <h3>选项卡切换无动画</h3>
        <Tabs
          animation={false}
        >
          {albums.map((ablum, i) => {
            return (
              <Tabs.Item
                title={ablum.title}
                key={i}
              >
                {ablum.desc}
              </Tabs.Item>
            )
          })}
        </Tabs>

        <h3>Inset</h3>
        <Tabs
          inset
          defaultActiveKey={1}
        >
          {albums.map((ablum, i) => {
            return (
              <Tabs.Item
                title={ablum.title}
                key={i}
              >
                {ablum.desc}
              </Tabs.Item>
            )
          })}
        </Tabs>

        <h3>链接跳转演示</h3>
          <Tabs
            onAction={this.handleClick}
          >
            <Tabs.Item
              title='选项一'
            >
              我是正常选项卡内容
            </Tabs.Item>
            <Tabs.Item
              title='事件触发'
            >
              回调函数
            </Tabs.Item>
            <Tabs.Item
              title='绝对路径'
              href="http://bing.com"
            />
            <Tabs.Item
              title='相对路径'
              href='#button'
            />
          </Tabs>

        <h3>只使用导航栏</h3>
          <Tabs
            onAction={this.handleClick}
            secondTab
          >
            {
              new Array(7).fill(1).map((i, j) => (
                <Tabs.Item
                  key={j}
                  title={`选项 ${j}`}
                />
              ))
            }
          </Tabs>
      </Container>
    );
  }
 }


