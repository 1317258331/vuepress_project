### Form 表单
具有数据收集、校验和提交功能的表单，包含复选框、单选框、输入框、下拉选择框等元素。
#### 表单控件
::: demo 
```html
<template>
    <Form :model="formItem" :label-width="80">
        <FormItem label="Input">
            <Input v-model="formItem.input" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="Select">
            <Select v-model="formItem.select">
                <Option value="beijing">New York</Option>
                <Option value="shanghai">London</Option>
                <Option value="shenzhen">Sydney</Option>
            </Select>
        </FormItem>
        <FormItem label="DatePicker">
            <Row>
                <Col span="11">
                    <DatePicker type="date" placeholder="Select date" v-model="formItem.date"></DatePicker>
                </Col>
                <Col span="2" style="text-align: center">-</Col>
                <Col span="11">
                    <TimePicker type="time" placeholder="Select time" v-model="formItem.time"></TimePicker>
                </Col>
            </Row>
        </FormItem>
        <FormItem label="Radio">
            <RadioGroup v-model="formItem.radio">
                <Radio label="male">Male</Radio>
                <Radio label="female">Female</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="Checkbox">
            <CheckboxGroup v-model="formItem.checkbox">
                <Checkbox label="Eat"></Checkbox>
                <Checkbox label="Sleep"></Checkbox>
                <Checkbox label="Run"></Checkbox>
                <Checkbox label="Movie"></Checkbox>
            </CheckboxGroup>
        </FormItem>
        <FormItem label="Switch">
            <i-switch v-model="formItem.switch" size="large">
                <span slot="open">On</span>
                <span slot="close">Off</span>
            </i-switch>
        </FormItem>
        <FormItem label="Slider">
            <Slider v-model="formItem.slider" range></Slider>
        </FormItem>
        <FormItem label="Text">
            <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem>
            <Button type="primary">Submit</Button>
            <Button style="margin-left: 8px">Cancel</Button>
        </FormItem>
    </Form>
</template>
<script>
    export default {
        data () {
            return {
                formItem: {
                    input: '',
                    select: '',
                    radio: 'male',
                    checkbox: [],
                    switch: true,
                    date: '',
                    time: '',
                    slider: [20, 50],
                    textarea: ''
                }
            }
        }
    }
</script>
```
:::
#### 表单验证
::: demo 
```html
<template>
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <FormItem label="Name" prop="name">
            <Input v-model="formValidate.name" placeholder="Enter your name"></Input>
        </FormItem>
        <FormItem label="E-mail" prop="mail">
            <Input v-model="formValidate.mail" placeholder="Enter your e-mail"></Input>
        </FormItem>
        <FormItem label="City" prop="city">
            <Select v-model="formValidate.city" placeholder="Select your city">
                <Option value="beijing">New York</Option>
                <Option value="shanghai">London</Option>
                <Option value="shenzhen">Sydney</Option>
            </Select>
        </FormItem>
        <FormItem label="Date">
            <Row>
                <Col span="11">
                    <FormItem prop="date">
                        <DatePicker type="date" placeholder="Select date" v-model="formValidate.date"></DatePicker>
                    </FormItem>
                </Col>
                <Col span="2" style="text-align: center">-</Col>
                <Col span="11">
                    <FormItem prop="time">
                        <TimePicker type="time" placeholder="Select time" v-model="formValidate.time"></TimePicker>
                    </FormItem>
                </Col>
            </Row>
        </FormItem>
        <FormItem label="Gender" prop="gender">
            <RadioGroup v-model="formValidate.gender">
                <Radio label="male">Male</Radio>
                <Radio label="female">Female</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="Hobby" prop="interest">
            <CheckboxGroup v-model="formValidate.interest">
                <Checkbox label="Eat"></Checkbox>
                <Checkbox label="Sleep"></Checkbox>
                <Checkbox label="Run"></Checkbox>
                <Checkbox label="Movie"></Checkbox>
            </CheckboxGroup>
        </FormItem>
        <FormItem label="Desc" prop="desc">
            <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
            <Button @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
        </FormItem>
    </Form>
</template>
<script>
    export default {
        data () {
            return {
                formValidate: {
                    name: '',
                    mail: '',
                    city: '',
                    gender: '',
                    interest: [],
                    date: '',
                    time: '',
                    desc: ''
                },
                ruleValidate: {
                    name: [
                        { required: true, message: 'The name cannot be empty', trigger: 'blur' }
                    ],
                    mail: [
                        { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
                        { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
                    ],
                    city: [
                        { required: true, message: 'Please select the city', trigger: 'change' }
                    ],
                    gender: [
                        { required: true, message: 'Please select gender', trigger: 'change' }
                    ],
                    interest: [
                        { required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
                        { type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
                    ],
                    date: [
                        { required: true, type: 'date', message: 'Please select the date', trigger: 'change' }
                    ],
                    time: [
                        { required: true, type: 'string', message: 'Please select time', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
                        { type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        }
    }
</script>
```
:::

### API
#### Form props
<table>
  <thead>
    <tr>
      <th>属性</th>
      <th>说明</th>
      <th>类型</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>model</td>
      <td>表单数据对象</td>
      <td>Object</td>
      <td>-</td>
    </tr>
    <tr>
      <td>rules</td>
      <td>表单验证规则，具体配置查看 <a href="https://github.com/yiminghe/async-validator" target="_blank"><i class="ivu-icon ivu-icon-social-github"></i> async-validator</a></td>
      <td>Object</td>
      <td>-</td>
    </tr>
    <tr>
      <td>inline</td>
      <td>是否开启行内表单模式</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>label-position</td>
      <td>表单域标签的位置，可选值为 <code>left</code>、<code>right</code>、<code>top</code></td>
      <td>String</td>
      <td>right</td>
    </tr>
    <tr>
      <td>label-width</td>
      <td>表单域标签的宽度，所有的 FormItem 都会继承 Form 组件的 label-width 的值</td>
      <td>Number</td>
      <td>-</td>
    </tr>
    <tr>
      <td>show-message</td>
      <td>是否显示校验错误信息</td>
      <td>Boolean</td>
      <td>true</td>
    </tr>
    <tr>
      <td>autocomplete</td>
      <td>原生的 autocomplete 属性，可选值为 off 或 on</td>
      <td>String</td>
      <td>off</td>
    </tr>
    <tr>
      <td>hide-required-mark <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.0.0</sup></span></td>
      <td>是否隐藏所有表单项的必选标记</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>label-colon <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.0.0</sup></span></td>
      <td>是否自动在 label 名称后添加冒号</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>disabled <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.0.0</sup></span></td>
      <td>是否禁用该表单内的所有组件（适用于具有 disabled 属性的表单类组件）</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
  </tbody>
</table>

#### Form events
<table>
  <thead>
    <tr>
      <th>事件名</th>
      <th>说明</th>
      <th>返回值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>on-validate <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.0.0</sup></span></td>
      <td>任一表单项被校验后触发，返回表单项 prop、校验状态、错误消息</td>
      <td>prop, status, error</td>
    </tr>
  </tbody>
</table>

#### Form methods
<table>
  <thead>
    <tr>
      <th>方法名</th>
      <th>说明</th>
      <th>参数</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>validate</td>
      <td>对整个表单进行校验，参数为检验完的回调，会返回一个 Boolean 表示成功与失败，支持 Promise</td>
      <td>callback</td>
    </tr>
    <tr>
      <td>validateField</td>
      <td>对部分表单字段进行校验的方法，参数1为需校验的 prop，参数2为检验完回调，返回错误信息</td>
      <td>callback</td>
    </tr>
    <tr>
      <td>resetFields</td>
      <td>对整个表单进行重置，将所有字段值重置为空并移除校验结果</td>
      <td>无</td>
    </tr>
  </tbody>
</table>

#### FormItem props
<table>
  <thead>
    <tr>
      <th>属性</th>
      <th>说明</th>
      <th>类型</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>prop</td>
      <td>对应表单域 model 里的字段</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>label</td>
      <td>标签文本</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>label-width</td>
      <td>表单域标签的的宽度</td>
      <td>Number</td>
      <td>-</td>
    </tr>
    <tr>
      <td>label-for</td>
      <td>指定原生的 label 标签的 for 属性，配合控件的 <code>element-id</code> 属性，可以点击 label 时聚焦控件。</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>required</td>
      <td>是否必填，如不设置，则会根据校验规则自动生成</td>
      <td>Boolean</td>
      <td>-</td>
    </tr>
    <tr>
      <td>rules</td>
      <td>表单验证规则</td>
      <td>Object | Array</td>
      <td>-</td>
    </tr>
    <tr>
      <td>error</td>
      <td>表单域验证错误信息, 设置该值会使表单验证状态变为error，并显示该错误信息</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>show-message</td>
      <td>是否显示校验错误信息</td>
      <td>Boolean</td>
      <td>true</td>
    </tr>
  </tbody>
</table>

#### FormItem slot
<table>
  <thead>
    <tr>
      <th style="width: 155px">名称</th>
      <th style="width: 610px">说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>无</td>
      <td>内容</td>
    </tr>
    <tr>
      <td>label</td>
      <td>label 内容</td>
    </tr>
  </tbody>
</table>