import React from 'react';
import {
  Container,
  Grid,
  Col,
  Card,
  Group,
  Icon,
  List,
  Field,
  Button,
  Switch,
  Divide,
  Choose,
  Select,
  Tabs,
  Title,
  ButtonGroup,
  ButtonBubble,
  ButtonContainer,
  ButtonAction,
} from 'amazeui-touch';

const loginFields = [
  {
    label: '用户名',
    type: 'text',
    icon: 'person'
  },
  {
    label: '密码',
    type: 'password',
    icon: 'info'
  },
  {
    label: '验证码',
    type: 'input',
    icon: 'refresh',
    btnAfter: <Button>获取验证码</Button>,
  }
];

const fields = [
  {
    label: '用户名',
    type: 'text',
    icon: 'person'
  },
  {
    label: '密码',
    type: 'password',
    icon: 'info'
  },
  {
    label: '生日',
    type: 'date',
    icon: 'refresh'
  }
];

const devices = ['iPhone 6', 'MacBook Pro Retina', 'iMac 5K'];

const select1 = (
  <Choose amSize="xs">
    <Choose.Item value={1}>洗衣机</Choose.Item>
    <Choose.Item value={2} defaultSelected>全自动抽油烟机</Choose.Item>
    <Choose.Item value={3}>电冰箱</Choose.Item>
    <Choose.Item value={4} defaultChecked>智能空调</Choose.Item>
    <Choose.Item value={5}>发光键盘</Choose.Item>
    <Choose.Item value={6} disabled>吸尘器</Choose.Item>
  </Choose>
);

const select2 = (
  <Select onValueChange={(value)=>{console.log(value)}}>
    <Select.Item value={101} defaultSelected>电脑</Select.Item>
    <Select.Item value={102} defaultSelected>笔记本</Select.Item>
    <Select.Item value={103} disabled>主机</Select.Item>
    <Select.Item value={104} defaultSelected>内存</Select.Item>
    <Select.Item value={105} defaultSelected>鼠标</Select.Item>
    <Select.Item value={106} defaultSelected>独立显卡</Select.Item>
    <Select.Item value={107}>影响</Select.Item>
    <Select.Item value={109}>键盘</Select.Item>
    <Select.Item value={110}>集成显卡</Select.Item>
    <Select.Item value={111}>数位板</Select.Item>
    <Select.Item value={112}>手机</Select.Item>
  </Select>
)

const choose1 = (
  <Choose amSize="xs" multiple={false} onValueChange={(value)=>{console.log(value)}}>
    <Choose.Item value="s1">选项 1</Choose.Item>
    <Choose.Item value="s2" defaultSelected>选项 2</Choose.Item>
    <Choose.Item value="s3" disabled>选项 3</Choose.Item>
    <Choose.Item value="s4">选项 4</Choose.Item>
    <Choose.Item value="s5">选项 5</Choose.Item>
  </Choose>
)

const FormExample1 = (
  <div>
    <div style={{background: '#fff',marginTop: '20px', marginBottom: '20px'}}>
    <Title text="基本信息" amStyle="primary" />
      <Field
        label="项目名称"
        value="浙江三花"
        disabled
      />

      <Field
        label="项目地点"
        tip="（选填）"
        placeholder="请输入项目地点"
      />

      <Field
        label="项目简述"
        placeholder="简述"
      />

      <Field
        label="项目目标"
        defaultValue="当地时间2017年6月5日至9日于加州圣何塞的McEnery会议中心举行。在本次WWDC 2017上，全新的  iOS 11。"
        type="textarea"
        rows={3}
      />

      <Field
        label="项目日期"
        type="date"
      />

      <Field
        label="产品"
        tip="（可多选）"
        type="custom"
      >
        {select1}
      </Field>

      <Field
        label="选择产品"
        tip="（可多选）"
        type="custom"
      >
        {select2}
      </Field>

      <Field
        label="项目级别"
        type="custom"
      >
        {choose1}
      </Field>
    </div>
  </div>
)

const FormExample2 = (
  <div>
    <div style={{background: '#fff',marginTop: '20px', marginBottom: '20px'}}>
      <Title text="基本信息" amStyle="primary" />

      <Field
        label="项目名称"
        placeholder="请输入项目名称"
        underline="part"
        single
      />

      <Field
        label="公司地址"
        defaultValue="北京市海淀区27号天使大厦3层"
        underline="part"
        single
      />

      <Field
        label="项目简述"
        tip="(选填)"
        underline="part"
        single
      />

      <Field
        label="事件详情"
        defaultValue="当地时间2017年6月5日至9日于加州圣何塞的McEnery会议中心举行。在本次WWDC 2017上，全新的  iOS 11"
        type="textarea"
        underline="part"
        single
      />

      <Field
        label="费用承担成本中心"
        placeholder="请输入费用承担成本中心"
        underline="part"
        single
      />

      <Field
        label="项目日期"
        underline="part"
        single
        type="date"
      />

      <Field
        label="起始日期"
        underline="part"
        type="date"
        single
      />

      <Field
        label="截止日期"
        type="date"
        single
      />

    </div>

    <div style={{background: '#fff', marginBottom: '20px'}}>
      <Title text="选择产品" amStyle="primary" />
      <Field
        label="选择产品"
        tip="(多选)"
        type="custom"
        underline="part"
        single
      >
        {select1}
      </Field>

      <Field
        label="选择产品"
        tip="(多选)"
        type="custom"
        underline="part"
        single
      >
        {select2}
      </Field>

      <Field
        label="长文本框"
        type="custom"
        underline="part"
        single
      >
        {choose1}
      </Field>

      <Field
        label="跟踪"
        type="switch"
        underline="part"
        defaultChecked
        single
      />

      <Field
        label="审批记录"
        type="switch"
        single
      />
    </div>
  </div>
)

const LoginExample = (
  <div>
  <Title amStyle="primary">primary</Title>
    <Card>
      <Field
        placeholder="You domain."
        labelBefore="www."
        labelAfter=".com"
      />

      <Field
        placeholder="Your email."
        labelBefore={<Icon name="person" />}
        btnAfter={<Button>Subscribe</Button>}
      />

      <Field
        placeholder="Keywords..."
        labelBefore={<Icon name="search" />}
        btnAfter={<Button amStyle="primary">Search</Button>}
      />
    </Card>

    <Title amStyle="primary">primary</Title>
    <Card >
      <div>
        <Field
          placeholder="用户名"
          required
          labelBefore={<Icon name="person" />}
        />

        <Field
          type="password"
          placeholder="密码"
          labelBefore={<Icon name="home" />}
        />

        <Field
          placeholder="验证码"
          labelBefore={<Icon name="search" />}
          btnAfter={<Button amStyle="primary">获取验证码</Button>}
        />
      </div>
      <Button
        block
        amStyle="primary"
      >
        登录
      </Button>

    </Card>
  </div>
)

const actions = [
  {
    title: '取消',
    hollow: true
  },
  {
    title: '提交'
  }
]

const wrapStyle = {
  margin: '8px 4px',
  padding: 0,
  background: '#fff',
  borderRadius: '4px'
}

const ListStyle = {
  listStyle: 'none',
  color: '#3d8cf8',
  padding: 0,
  marginLeft: '15px',
  marginRight: '15px'
}

const listStyle = {
  borderBottom: '1px solid #d8d8d8',
  paddingTop: '14px',
  paddingBottom: '14px',
  lineHeight: 1,
}

const listLastStyle = {
  paddingTop: '14px',
  paddingBottom: '14px',
  lineHeight: 1,
}


function handleSwitch() {
  console.log(this.getValue());
}

export default class FormCombinationExample extends React.Component {
  constructor() {
    super();
    this.state = {
      checked: true,
      checked1: true,
      checked2: false,
      checked3: false,
      showPop: false
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.refs.select.getValue());
  }

  handleClick = () => {
    this.setState({
      showPop: !this.state.showPop
    })
  }

  render() {
    return (
      <Container {...this.props} style={{paddingTop: 0}}>

        <Tabs
          activeKey={this.state.activeTab}
          onAction={this.handleAction}
          style={{marginBottom: '160px', marginTop: 0}}
        >
          <Tabs.Item
            title="信息填写"
            noPadded
          >
            <Tabs
              secondTab
            >
              <Tabs.Item
                title="表单一"
                style={{background: '#f4f4f4'}}
                noPadded
              >
                {FormExample2}
              </Tabs.Item>
              <Tabs.Item
                title="表单二"
                noPadded
              >
                {FormExample1}
              </Tabs.Item>
              <Tabs.Item
                title="登录框组"
                noPadded
              >
                {LoginExample}
              </Tabs.Item>
              <Tabs.Item
                title="Something"
              >
                <h1>11111</h1>
              </Tabs.Item>
              <Tabs.Item
                title="不要点我"
              >
                <h1>22222</h1>
              </Tabs.Item>
            </Tabs>
          </Tabs.Item>
          <Tabs.Item
            title="综合事务"
          >
            <h1>综合事务</h1>
          </Tabs.Item>
          <Tabs.Item
            title="财经事务"
          >
            <h1>财经事务</h1>
          </Tabs.Item>
        </Tabs>

        <ButtonAction
          actions={actions}
        >
          <div style={wrapStyle}>
            <ul style={ListStyle}>
              <li style={listStyle}>转交上级</li>
              <li style={listStyle}>提交医疗审查员审核</li>
              <li style={listStyle}>提交费用审核员审核</li>
              <li style={listLastStyle}>提交部门经理审核</li>
            </ul>
          </div>
        </ButtonAction>

      </Container>
    );
  }
};
