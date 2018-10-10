import React from "react";
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
  DefaultInput,
  DefaultSelect,
} from "amazeui-touch";

let loginFields = [
  {
    label: "用户名",
    type: "text",
    icon: "person"
  },
  {
    label: "密码",
    type: "password",
    icon: "info"
  },
  {
    label: "验证码",
    type: "input",
    icon: "refresh",
    btnAfter: <Button>获取验证码</Button>
  }
];

let fields = [
  {
    label: "用户名",
    type: "text",
    icon: "user-l"
  },
  {
    label: "密码",
    type: "password",
    icon: "password"
  },
  {
    label: "生日",
    type: "date",
    icon: "time-l"
  }
];

const devices = ["iPhone 6", "MacBook Pro Retina", "iMac 5K"];

function handleSwitch() {
  console.log(this.getValue());
}

export default class extends React.Component {

  state = {
    checked: true,
    checked1: true,
    checked2: false,
    checked3: false
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <Container {...this.props}>

        <Group header="基本样式" noPadded>
          <Field
            label="用户名"
            containerClassName="my-label"
            placeholder="输入用户名"
            onChange={e => console.log(e.target.value)}
            ref={ref => {this.ff = ref}}
          />

          <Field label="用户密码" placeholder="输入密码" type="password" />

          <Field
            label="年龄"
            placeholder="输入年龄"
            type="number"
            tip="(数字)"
          />

          <Field
            label="下拉 Select"
            type="select"
            ref="select"
            defaultValue="m"
          >
            <option value="m">电脑</option>
            <option value="f">手机</option>
          </Field>

          <Field
            label="文本框"
            placeholder="维尔纳·海森堡的矩阵力学和埃尔温·薛定谔的波动力学"
            type="textarea"
            rows={4}
          />

          <Field
            value="提交"
            type="submit"
            amStyle="secondary"
            block
            onClick={this.handleSubmit}
          />
        </Group>

        <Group header="自定义组件" noPadded>
          <Field label="多选" type="custom" single>
            <Choose amSize="xs">
              <Choose.Item value={1}>选项 1</Choose.Item>
              <Choose.Item value={2} defaultSelected>
                选项 2
              </Choose.Item>
              <Choose.Item value={3} disabled>
                选项 3 啊
              </Choose.Item>
            </Choose>
          </Field>

          <Field label="单选" type="custom" single>
            <Choose
              amSize="xs"
              multiple={false}
              onValueChange={value => {
                console.log(value);
              }}
            >
              <Choose.Item value="s1">选项 1</Choose.Item>
              <Choose.Item value="s2" defaultSelected>
                选项 2
              </Choose.Item>
              <Choose.Item value="s3" disabled>
                选项 3
              </Choose.Item>
              <Choose.Item value="s4">选项 4</Choose.Item>
              <Choose.Item value="s5">选项 5</Choose.Item>
              <Choose.Item value="s6">选项 6</Choose.Item>
            </Choose>
          </Field>

          <Field label="多选" type="custom">
            <Select
              defaultValue={[101, 103]}
              onValueChange={value => {
                console.log(value);
              }}
            >
              <Select.Item value={101}>选项 1</Select.Item>
              <Select.Item value={102} defaultSelected>
                选项 2
              </Select.Item>
              <Select.Item value={103} disabled>
                选项 3
              </Select.Item>
              <Select.Item value={104}>选项 4</Select.Item>
              <Select.Item value={105}>选项 5</Select.Item>
              <Select.Item value={106}>选项 6</Select.Item>
              <Select.Item value={107}>选项 7</Select.Item>
              <Select.Item value={108}>选项 8</Select.Item>
            </Select>
          </Field>

          <Field label="单选" type="custom">
            <Select
              multiple={false}
              onValueChange={value => {
                console.log(value);
              }}
            >
              <Select.Item value="s1">选项 1</Select.Item>
              <Select.Item value="s2" defaultSelected>
                选项 2
              </Select.Item>
              <Select.Item value="s3" disabled>
                选项 3
              </Select.Item>
              <Select.Item value="s4">选项 4</Select.Item>
              <Select.Item value="s5">选项 5</Select.Item>
              <Select.Item value="s6">选项 6</Select.Item>
            </Select>
          </Field>
        </Group>

        <Group header="单行显示" noPadded>
          <Field label="用户名" placeholder="输入用户名." single />

          <Field label="默认值" defaultValue="默认不可修改" disabled single />

          <Field
            label="用户密码"
            placeholder="输入密码"
            type="password"
            tip="(多选)"
            single
          />

          <Field
            label="年龄"
            placeholder="输入年龄哦"
            type="number"
            tip="输入数字"
            single
          />

          <Field label="时间选择" placeholder="date time" type="date" single />

          <Field
            label="文字过多选择跨行行为"
            placeholder="不确定性原理"
            type="text"
            single
          />

          <Field label="开关" type="switch" single />

          <Field label="开关" type="switch" defaultChecked single />

          <Field label="开关" type="switch" defaultChecked disabled single />

          <Field
            label="下拉选择"
            type="select"
            ref="select"
            defaultValue="m"
            single
          >
            <option value="m">电脑</option>
            <option value="f">手机</option>
          </Field>

          <Field
            label="文本框"
            type="textarea"
            placeholder="维尔纳·海森堡的矩阵力学和埃尔温·薛定谔的波动力学"
            single
          />
        </Group>

        <Group header="下划线部分显示" noPadded>
          <Field
            label="用户名"
            placeholder="输入用户名."
            underline="part"
            single
          />

          <Field
            label="密码"
            placeholder="输入密码"
            type="password"
            tip="(多选)"
            underline="part"
            single
          />

          <Field
            label="长文本框"
            placeholder="维尔纳·海森堡的矩阵力学和埃尔温·薛定谔的波动力学"
            type="textarea"
            single
          />
        </Group>

        <Group header="宽度控制" noPadded>
          <Field
            label="设置为 50%"
            placeholder="输入用户名."
            underline="part"
            labelWidth="50%"
            single
          />

          <Field
            label="默认为 4 字体宽度"
            placeholder="输入密码"
            type="text"
            underline="part"
            single
          />
        </Group>

        <Group header="输入框组">
          <Field
            placeholder="You domain."
            labelBefore="www."
            labelAfter=".com"
          />

          <Field
            placeholder="Your email."
            labelBefore={<Icon name="user-l" />}
            btnAfter={<Button>Subscribe</Button>}
          />

          <Field
            placeholder="Keywords..."
            labelBefore={<Icon name="search" />}
            btnAfter={<Button amStyle="primary">Search</Button>}
          />
        </Group>

        <Card title="登录框组">
          <div>
            <Field
              placeholder="You domain."
              labelBefore="www."
              labelAfter=".com"
            />

            <Field
              placeholder="用户名"
              required
              labelBefore={<Icon name="user-l" />}
            />

            <Field
              type="password"
              placeholder="密码"
              labelBefore={<Icon name="password-l" />}
            />

            <Field
              placeholder="验证码"
              labelBefore={<Icon name="search" />}
              btnAfter={<Button amStyle="primary">获取验证码</Button>}
            />
          </div>
          <Button block amStyle="primary">
            登录
          </Button>
        </Card>

        <h2>Form in List</h2>

        <Group header="List with Icon" noPadded>
          <List>
            {fields.map((field, i) => {
              return (
                <List.Item
                  key={i}
                  media={<Icon name={field.icon} />}
                  nested="input"
                >
                  <Field
                    {...field}
                    label={null}
                    placeholder={field.label + "..."}
                  />
                </List.Item>
              );
            })}
          </List>
        </Group>

        <Group header="List with Label & Icon" noPadded>
          <List>
            {fields.map((field, i) => {
              return (
                <List.Item
                  key={i}
                  media={<Icon name={field.icon} />}
                  nested="input"
                >
                  <Field {...field} placeholder={field.label + "..."} single />
                </List.Item>
              );
            })}
          </List>
        </Group>
      </Container>
    );
  }
}
