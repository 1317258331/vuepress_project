# 表单
## Form 表单
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
## Input 输入框
基本表单组件，支持 input 和 textarea，并在原生控件基础上进行了功能扩展，可以组合使用。
#### 基础用法。
::: demo  
```html
<template>
<div style="padding-bottom: 50px;text-align: left;">
    <div class="item">
      <span>基础输入框</span>
      <Input
        disabled
        v-model="value"
        placeholder="Enter something..."
        style="width: 300px"
      />
    </div>
    <br>
    <div class="item">
      <span>可清空</span>
      <Input
        v-model="value"
        placeholder="Enter something..."
        clearable
        style="width: 200px"
      />
    </div>
    <br>
    <div class="item">
      <span>输入长度限制</span>
      <Input
        v-model="value"
        maxlength="10"
        show-word-limit
        placeholder="Enter something..."
        style="margin-right: 20px; width: 200px"
      />
      <Input
        v-model="value"
        maxlength="100"
        show-word-limit
        type="textarea"
        placeholder="Enter something..."
        style="width: 200px"
      />
    </div>
    <br>
    <div class="item">
      <span>密码框</span>
      <Input
        v-model="value"
        type="password"
        password
        placeholder="Enter something..."
        style="width: 200px"
      />
    </div>
    <br>
    <div class="item">
      <span>带icon输入框</span>
      <Input
        v-model="value"
        icon="icon_assembly-sreach"
        placeholder="Enter something..."
        style="width: 300px"
      />
    </div>
    <br>
    <div class="item">
      <span>icon（props方式）</span>
      <Input prefix="icon_assembly-sreach" placeholder="Enter name" style="width: auto" />
      <Input suffix="icon_share" placeholder="Enter text" style="width: auto" />
    </div>
    <br>
    <div class="item">
      <span>icon（slot方式）</span>
      <Input placeholder="Enter name" style="width: auto">
        <Icon type="icon_share" slot="prefix" />
      </Input>
      <Input placeholder="Enter text" style="width: auto">
        <Icon type="icon_share" slot="suffix" />
      </Input>
    </div>
    <br>
    <div class="item flex">
      <span>搜索框</span>
      <Input
        search
        placeholder="Enter something..."
        style="margin-right: 20px; width: 300px"
      /><br><br>
      <Input
        search
        enter-button
        placeholder="Enter something..."
        style="margin-right: 20px; width: 300px"
      />
      <br>
      <Input
        search
        enter-button="Search"
        placeholder="Enter something..."
        style="width: 300px"
      />
    </div>
    <br>
    <div class="item">
      <span>文本域</span>
      <Input
        v-model="value"
        type="textarea"
        placeholder="Enter something..."
        style="margin-right: 20px; width: 300px"
      /><br>
      <br>
      <Input
        v-model="value"
        type="textarea"
        :rows="3"
        placeholder="Enter something..."
        style="width: 300px"
      />
    </div>
    <br>
    <div class="item">
      <span>适应文本高度的文本域</span>
      <Input
        v-model="value"
        type="textarea"
        placeholder="Enter something..."
        style="margin-right: 20px; width: 300px"
      /><br><br>
      <Input
        v-model="value"
        type="textarea"
        :rows="3"
        placeholder="Enter something..."
        style="width: 300px"
      />
    </div>
    <br>
    <div class="item flex">
      <span>组合输入框</span>
      <Input v-model="value" style="margin-right: 20px; width: 300px">
        <span slot="prepend">http://</span>
        <span slot="append" style="width: 100px">.com</span>
      </Input><br>
      <Input v-model="value" style="margin-right: 20px; width: 500px">
        <Select v-model="select1" slot="prepend" style="width: 100px">
          <Option value="http">http://</Option>
          <Option value="https">https://</Option>
        </Select>
        <Select v-model="select2" slot="append" style="width: 100px">
          <Option value="com">.com</Option>
          <Option value="org">.org</Option>
          <Option value="io">.io</Option>
        </Select>
      </Input><br>
      <Input v-model="value" style="width: 300px">
        <Select v-model="select3" slot="prepend" style="width: 80px">
          <Option value="day">Day</Option>
          <Option value="month">Month</Option>
        </Select>
        <Button slot="append" icon="icon_assembly-sreach"></Button>
      </Input>
    </div>

  </div>
</template>
<script>
export default {
  data () {
    return {
      value: '',
      select1: '',
      select2: '',
      select3: '',
    }
  },
  methods: {
  }
}
</script>
```
:::
## Radio 单选框

#### 基础用法。
::: demo  
```html
<template>
    <Radio v-model="disabledSingle" disabled>Radio</Radio>
    <br>
    <RadioGroup v-model="disabledGroup">
        <Radio label="金斑蝶" disabled></Radio>
        <Radio label="爪哇犀牛"></Radio>
        <Radio label="印度黑羚"></Radio>
    </RadioGroup>
</template>
<script>
    export default {
        data () {
            return {
                disabledSingle: true,
                disabledGroup: '爪哇犀牛'
            }
        }
    }
</script>
```
:::
## Checkbox 多选框

#### 基础用法。
::: demo  
```html
<template>
    <Checkbox v-model="disabledSingle" disabled>Checkbox</Checkbox>
    <CheckboxGroup v-model="disabledGroup">
        <Checkbox label="香蕉" disabled></Checkbox>
        <Checkbox label="苹果" disabled></Checkbox>
        <Checkbox label="西瓜"></Checkbox>
    </CheckboxGroup>
</template>
<script>
    export default {
        data () {
            return {
                disabledSingle: true,
                disabledGroup: ['苹果']
            }
        }
    }
</script>
```
:::
## Switch 开关

#### 基础用法。
::: demo  
```html
<template>
  <div class="about">
    <div>
   <p>基本用法，状态切换时会触发事件。</p>
     <i-switch v-model="switch1" @on-change="change" />
     </div>
<div>
<p>自定义内容，建议如果使用2个汉字，将开关尺寸设置为 large。</p>
     <i-switch>
        <span slot="open">开</span>
        <span slot="close">关</span>
    </i-switch>
    <i-switch>
        <Icon type="md-checkmark" slot="open"></Icon>
        <Icon type="md-close" slot="close"></Icon>
    </i-switch>
    <br><br>
    <i-switch size="large">
        <span slot="open">开启</span>
        <span slot="close">关闭</span>
    </i-switch>
    <i-switch size="large">
        <span slot="open">ON</span>
        <span slot="close">OFF</span>
    </i-switch>
    </div>
    <div>
    禁用开关。
    <i-switch :disabled="disabled" />
    </div>
    <div>
    标识开关操作仍在执行中。
     <i-switch loading :value="true" />
    <i-switch loading :value="false" size="small" />
    </div>
    <div>
    设置属性 true-color 和 false-color 可以自定义背景色。
    <i-switch true-color="#13ce66" false-color="#ff4949" />
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      switch1: false,
      disabled: true
    }
  },
  methods: {
    change (status) {
      this.$Message.info('开关状态：' + status)
    }
  }
}
</script>
```
:::
## Table 表格

#### 可选择
::: demo  
```html
<template>
  <Table :columns="columns1" :data="data1"></Table>
</template>

<script>
export default {
  data () {
    return {
      columns1: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        }
      ],
      data1: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ]
    }
  }
}
</script>

```
:::
#### 基础用法。
::: demo  
```html
<template>
    <Table :columns="columns1" :data="data1"></Table>
</template>
<script>
    export default {
        data () {
            return {
                columns1: [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
            }
        }
    }
</script>

```
:::
## Select 选择器

#### 基础用法。
::: demo  
```html
<template>
    <Select v-model="model1" style="width:200px">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
</template>
<script>
    export default {
        data () {
            return {
                cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],
                model1: ''
            }
        }
    }
</script>

```
:::
#### 多选
::: demo  
```html
<template>
    <Select v-model="model10" multiple style="width:260px">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
</template>
<script>
    export default {
        data () {
            return {
                cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],
                model10: []
            }
        }
    }
</script>
```
:::
## Slider 滑块

#### 基础用法
::: demo  
```html
<template>
    <Slider v-model="value1"></Slider>
    <Slider v-model="value2" range></Slider>
    <Slider v-model="value3" range disabled></Slider>
</template>
<script>
    export default {
        data () {
            return {
                value1: 25,
                value2: [20, 50],
                value3: [20, 50]
            }
        }
    }
</script>

```
:::
## DatePicker 日期选择器

#### 基础用法
::: demo  
```html
<template>
    <Row>
        <Col span="12">
            <DatePicker type="date" placeholder="Select date" style="width: 300px"></DatePicker>
        </Col>
        <Col span="12">
            <DatePicker type="daterange" placement="bottom-end" placeholder="Select date" style="width: 300px"></DatePicker>
        </Col>
    </Row>
</template>
<script>
    export default {
        
    }
</script>
```
:::
## TimePicker 时间选择器

#### 基础用法
::: demo  
```html
<template>
    <Row>
        <Col span="12">
            <TimePicker type="time" placeholder="Select time" style="width: 168px"></TimePicker>
        </Col>
        <Col span="12">
            <TimePicker type="timerange" placement="bottom-end" placeholder="Select time" style="width: 168px"></TimePicker>
        </Col>
    </Row>
</template>
<script>
    export default {
        
    }
</script>

```
:::
## Cascader 级联选择

#### 基础用法
::: demo  
```html
<template>
    <Cascader :data="data" v-model="value1"></Cascader>
</template>
<script>
    export default {
        data () {
            return {
                value1: [],
                data: [{
                    value: 'beijing',
                    label: '北京',
                    children: [
                        {
                            value: 'gugong',
                            label: '故宫'
                        },
                        {
                            value: 'tiantan',
                            label: '天坛'
                        },
                        {
                            value: 'wangfujing',
                            label: '王府井'
                        }
                    ]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [
                        {
                            value: 'nanjing',
                            label: '南京',
                            children: [
                                {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                }
                            ]
                        },
                        {
                            value: 'suzhou',
                            label: '苏州',
                            children: [
                                {
                                    value: 'zhuozhengyuan',
                                    label: '拙政园',
                                },
                                {
                                    value: 'shizilin',
                                    label: '狮子林',
                                }
                            ]
                        }
                    ],
                }]
            }
        }
    }
</script>

```
:::
## Transfer 穿梭框

#### 基础用法
::: demo  
```html
<template>
    <Transfer
        :data="data1"
        :target-keys="targetKeys1"
        :render-format="render1"
        @on-change="handleChange1"></Transfer>
</template>
<script>
    export default {
        data () {
            return {
                data1: this.getMockData(),
                targetKeys1: this.getTargetKeys()
            }
        },
        methods: {
            getMockData () {
                let mockData = [];
                for (let i = 1; i <= 20; i++) {
                    mockData.push({
                        key: i.toString(),
                        label: 'Content ' + i,
                        description: 'The desc of content  ' + i,
                        disabled: Math.random() * 3 < 1
                    });
                }
                return mockData;
            },
            getTargetKeys () {
                return this.getMockData()
                        .filter(() => Math.random() * 2 > 1)
                        .map(item => item.key);
            },
            render1 (item) {
                return item.label;
            },
            handleChange1 (newTargetKeys, direction, moveKeys) {
                console.log(newTargetKeys);
                console.log(direction);
                console.log(moveKeys);
                this.targetKeys1 = newTargetKeys;
            }
        }
    }
</script>

```
:::
## ColorPicker 颜色选择器

#### 基础用法
::: demo  
```html
<template>
    <Row>
        <Col span="12">
            有默认值
            <ColorPicker v-model="color1" />
        </Col>
        <Col span="12">
            无默认值
            <ColorPicker v-model="color2" />
        </Col>
    </Row>
</template>
<script>
    export default {
        data () {
            return {
                color1: '#19be6b',
                color2: ''
            }
        }
    }
</script>
```
:::
## InputNumber 数字输入框
使用鼠标或键盘输入一定范围的标准数值。
#### 可选择
::: demo  
```html
<template>
    <InputNumber :max="10" :min="1" v-model="value1"></InputNumber>
</template>
<br>
<template>
    <InputNumber :max="10" :min="1" :step="1.2" v-model="value2"></InputNumber>
</template>
<br>
<template>
    <div>
        <InputNumber
            :max="10000"
            v-model="value9"
            :formatter="value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
            :parser="value => value.replace(/\$\s?|(,*)/g, '')"></InputNumber>
        <InputNumber
            :max="100"
            v-model="value10"
            :formatter="value => `${value}%`"
            :parser="value => value.replace('%', '')"></InputNumber>
    </div>
<br>
    <InputNumber v-model="value3" size="small"></InputNumber>
    <InputNumber v-model="value4"></InputNumber>
    <InputNumber v-model="value5" size="large"></InputNumber>
<br>
    <InputNumber v-model="value6" :disabled="disabled"></InputNumber>
    <Button type="primary" @click="disabled = !disabled">Toggle Disabled</Button>
<br>
    <InputNumber v-model="value7" readonly></InputNumber>
<br>
    <InputNumber v-model="value8" :editable="false"></InputNumber>
<br>
    <InputNumber v-model="value11" controls-outside></InputNumber>
</template>
<script>
    export default {
        data () {
            return {
                value1: 1,
                value2: 1,
                value9: 1000,
                value10: 100,
                value3: 2,
                value4: 2,
                value5: 2,
                disabled: true,
                value6: 1,
                value7: 1,
                value8: 1,
                value8: 11
            }
        }
    }
</script>
```
:::
## Rate 评分
对事物进行快速的评级操作，或对评价进行展示。
#### 基础用法
::: demo  
```html
<template>
    <Rate v-model="value" />
    <br>
    <Rate allow-half v-model="valueHalf" />
    <br>
    <Row>
        <Col span="12">
                <Rate show-text v-model="valueText" />
        </Col>
        <Col span="12">
            <Rate show-text allow-half v-model="valueCustomText">
                <span style="color: #f5a623">{{ valueCustomText }}</span>
            </Rate>
        </Col>
    </Row>
    <br>
    <Rate disabled v-model="valueDisabled" />
    <br>
    <Rate clearable v-model="value1" /> clearable: true
    <br>
    <Rate v-model="value2" /> clearable: false
    <br>
    <Rate v-model="value3" character="A" />
    <Rate v-model="value4" character="好" />
    <Rate v-model="value5" icon="ios-heart" />
</template>
<script>
    export default {
        data () {
            return {
                value: 0,//基础
                valueHalf: 2.5,//半星
                valueText: 3,
                valueCustomText: 3.8,//显示提示
                valueDisabled: 2,//只读
                value1: 3,
                value2: 3,//清除
                value3: 3,
                value4: 3,
                value5: 3//自定义
            }
        }
    }
</script>
```
:::
## Upload 上传
文件选择上传和拖拽上传控件。
#### 基础用法
::: demo  下列依次为单选上传、多选上传、手动上传、拖拽上传。
```html
<template>
    <Upload action="//jsonplaceholder.typicode.com/posts/">
        <Button icon="ios-cloud-upload-outline">Upload files</Button>
    </Upload>
    <br>
    <Upload
        multiple
        action="//jsonplaceholder.typicode.com/posts/">
        <Button icon="ios-cloud-upload-outline">Upload files</Button>
    </Upload>
    <br>
    <div>
        <Upload
            :before-upload="handleUpload"
            action="//jsonplaceholder.typicode.com/posts/">
            <Button icon="ios-cloud-upload-outline">Select the file to upload</Button>
        </Upload>
        <div v-if="file !== null">Upload file: {{ file.name }} <Button type="text" @click="upload" :loading="loadingStatus">{{ loadingStatus ? 'Uploading' : 'Click to upload' }}</Button></div>
    </div>
    <br>
    <Upload
        multiple
        type="drag"
        action="//jsonplaceholder.typicode.com/posts/">
        <div style="padding: 20px 0">
            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
            <p>Click or drag files here to upload</p>
        </div>
    </Upload>
</template>
<script>
    export default {
        data () {
            return {
                //拖拽上传
                file: null,
                loadingStatus: false
            }
        },
        methods: {
            //拖拽上传
            handleUpload (file) {
                this.file = file;
                return false;
            },
            upload () {
                this.loadingStatus = true;
                setTimeout(() => {
                    this.file = null;
                    this.loadingStatus = false;
                    this.$Message.success('Success')
                }, 1500);
            }
        }
    }
</script>
```
:::
## AutoComplete 自动完成
输入框自动完成功能。
::: demo  
```html
<template>
    <AutoComplete
        v-model="value1"
        :data="data1"
        @on-search="handleSearch1"
        placeholder="input here"
        style="width:200px">
    </AutoComplete>
    <br><br>
    <AutoComplete
        v-model="value2"
        @on-search="handleSearch2"
        placeholder="input here"
        style="width:200px">
        <Option v-for="item in data2" :value="item" :key="item">{{ item }}</Option>
    </AutoComplete>
    <br><br>
    <AutoComplete
        v-model="value3"
        :data="data3"
        :filter-method="filterMethod"
        placeholder="input here"
        style="width:200px">
    </AutoComplete>
</template>
<script>
    export default {
        data () {
            return {
                //基础用法
                value1: '',
                data1: [],
                //自定义选项
                value2: '', 
                data2: [],
                //不区分大小写
                value3: '',
                data3: ['Steve Jobs', 'Stephen Gary Wozniak', 'Jonathan Paul Ive'],
            }
        },
        methods: {
            handleSearch1 (value) {
                this.data1 = !value ? [] : [
                    value,
                    value + value,
                    value + value + value
                ];
            },
            //
            handleSearch2 (value) {
                this.data2 = !value || value.indexOf('@') >= 0 ? [] : [
                    value + '@qq.com',
                    value + '@sina.com',
                    value + '@163.com'
                ];
            },
            //
            filterMethod (value, option) {
                return option.toUpperCase().indexOf(value.toUpperCase()) !== -1;
            },
        }
    }
</script>
```
:::