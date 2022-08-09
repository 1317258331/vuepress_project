# 视图
## Alert 警告提示
静态地呈现一些警告信息，可手动关闭。
#### 基础用法
::: demo  
```html
<template>
  <div class="about">
 <Alert show-icon closable>An info prompt</Alert>
    <Alert type="success" show-icon>A success prompt</Alert>
    <Alert type="warning" show-icon>A warning prompt</Alert>
    <Alert type="error" show-icon>An error prompt</Alert>
    <Alert show-icon>
        An info prompt
        <template slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </template>
    </Alert>
    <Alert type="success" show-icon>
        A success prompt
        <span slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </span>
    </Alert>
    <Alert type="warning" show-icon>
        A warning prompt
        <template slot="desc">
        Content of prompt. Content of prompt. Content of prompt.
    </template>
    </Alert>
    <Alert type="error" show-icon>
        An error prompt
        <span slot="desc">
            Custom error description copywriting.
        </span>
    </Alert>
    <Alert show-icon>
        Custom icon
        <Icon type="ios-bulb-outline" slot="icon"></Icon>
        <template slot="desc">Custom icon copywriting. Custom icon copywriting. Custom icon copywriting. </template>
    </Alert>
  </div>
</template>

<script>
    export default {
        
    }
</script>
```
:::

## Message 全局提示
轻量级的信息反馈组件，在顶部居中显示，并自动消失。有多种不同的提示状态可选择。
#### 基础用法
::: demo  
```html
<template>
    <div>
        <Button @click="background('info')">显示普通提示</Button>
        <Button @click="background('success')">显示成功提示</Button>
        <Button @click="background('warning')">显示警告提示</Button>
        <Button @click="background('error')">显示错误提示</Button>
    </div>
</template>
<script>
    export default {
        methods: {
            background (type) {
                this.$Message[type]({
                    background: true,
                    content: '这是一条带背景色的通知'
                });
            }
        }
    }
</script>

```
:::
## Notice 通知提醒

#### 基础用法
::: demo  
```html
<template>
  <div class="about">
    <p>无title样式+button</p>
    <Button type="primary" @click="openNoTitle()">button</Button>
    <p>是否有desc</p>
    <Button type="primary" @click="open(false)">Open notice</Button>
    <Button @click="open(true)">Open notice(only title)</Button>
    <p>render</p>
    <Button type="primary" @click="renderFunc">Open notice</Button>
    <p>With desc</p>
    <Button @click="info(false)">Info</Button>
    <Button @click="success(false)">Success</Button>
    <Button @click="warning(false)">Warning</Button>
    <Button @click="error(false)">Error</Button>
    <p>Only title</p>
    <Button @click="info(true)">Info</Button>
    <Button @click="success(true)">Success</Button>
    <Button @click="warning(true)">Warning</Button>
    <Button @click="error(true)">Error</Button>
  </div>
</template>

<script>
export default {
  methods: {
    openNoTitle () {
      this.$Notice.info({
        desc: 'Here is the notification description. Here is the notification description. ',
        okMsg: 'ok'
      });
    },
    open (nodesc) {
      this.$Notice.open({
        title: 'Notification title',
        desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
      });
    },
    renderFunc () {
      this.$Notice.success({
        title: 'Notification title',
        desc: 'The desc will hide when you set render.',
        render: h => {
          return h('span', [
            'This is created by ',
            h('a', 'render'),
            ' function'
          ])
        }
      });
    },
    info (nodesc) {
      this.$Notice.info({
        title: 'Notification title',
        desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
      });
    },
    success (nodesc) {
      this.$Notice.success({
        title: 'Notification title',
        desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
      });
    },
    warning (nodesc) {
      this.$Notice.warning({
        title: 'Notification title',
        desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
      });
    },
    error (nodesc) {
      this.$Notice.error({
        title: 'Notification title',
        desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
      });
    }
  }
}
</script>

```
:::

## Modal 对话框
模态对话框，在浮层中显示，引导用户进行相关操作。
#### 基础用法
::: demo  
```html
<template>
  <div>
    <Button type="primary" @click="modal1 = true">显示对话框</Button>
    <br>
    <br>
    <Button style="margin-right: 20px;" type="primary" @click="instance('info')">info</Button>
    <Button style="margin-right: 20px;" type="primary" @click="instance('success')">success</Button>
    <Button style="margin-right: 20px;" type="primary" @click="instance('warning')">warning</Button>
    <Button style="margin-right: 20px;" type="primary" @click="instance('error')">error</Button>
    <!-- 描述信息content 非必填字段可填可不填 -->
    <Modal
      v-model="modal1"
      title="Common Modal dialog box title"
      content="描述信息"
      @on-ok="ok"
      @on-cancel="cancel"
    >
      <p>Content of dialog</p>
      <p>Content of dialog</p>
      <p>Content of dialog</p>
    </Modal>
  </div>
</template>

<script>
export default {
  data () {
    return {
      modal1: false
    }
  },
  methods: {
    ok () {
      this.$Message.info('Clicked ok')
    },
    cancel () {
      this.$Message.info('Clicked cancel')
    },
    instance (type) {
      const title = 'Title'
      const content = '描述信描'
      switch (type) {
        case 'info':
          this.$Modal.info({
            title: title,
            content: content,
            onOk () {
              console.log('ok')
            },
            onCancel () {
              console.log('cancel')
            }
          })
          break
        case 'success':
          this.$Modal.success({
            title: title,
            content: content
          })
          break
        case 'warning':
          this.$Modal.warning({
            title: title,
            content: content
          })
          break
        case 'error':
          this.$Modal.error({
            title: title,
            content: content
          })
          break
      }
    }
  }
}
</script>
```
:::
## Tree 树形控件

#### 基础用法
::: demo  
```html
<template>
    <Tree :data="data1"></Tree>
</template>
<script>
    export default {
        data () {
            return {
                data1: [
                    {
                        title: 'parent 1',
                        expand: true,
                        children: [
                            {
                                title: 'parent 1-1',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-1-1'
                                    },
                                    {
                                        title: 'leaf 1-1-2'
                                    }
                                ]
                            },
                            {
                                title: 'parent 1-2',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-2-1'
                                    },
                                    {
                                        title: 'leaf 1-2-1'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>
```
:::
#### 可勾选
::: demo  
```html
<template>
    <Tree :data="data2" show-checkbox></Tree>
</template>
<script>
    export default {
        data () {
            return {
                data2: [
                    {
                        title: 'parent 1',
                        expand: true,
                        children: [
                            {
                                title: 'parent 1-1',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-1-1'
                                    },
                                    {
                                        title: 'leaf 1-1-2'
                                    }
                                ]
                            },
                            {
                                title: 'parent 1-2',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-2-1'
                                    },
                                    {
                                        title: 'leaf 1-2-1'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>

```
:::
## Tooltip 文字提示
文字提示气泡框，在鼠标悬停时显示，代替了系统的title提示。
#### 基础用法
::: demo  
```html
<template>
  <div class="about">
     <div class="top">
        <Tooltip content="Top Left text" placement="top-start">
            <Button>Top Left</Button>
        </Tooltip>
        <Tooltip content="Top Center text" placement="top">
            <Button>Top Center</Button>
        </Tooltip>
        <Tooltip content="Top Right text" placement="top-end">
            <Button>Top Right</Button>
        </Tooltip>
    </div>
    <div class="center">
        <div class="center-left">
            <Tooltip content="Left Top text" placement="left-start">
                <Button>Left Top</Button>
            </Tooltip><br><br>
            <Tooltip content="Left Center text" placement="left">
                <Button>Left Center</Button>
            </Tooltip><br><br>
            <Tooltip content="Left Bottom text" placement="left-end">
                <Button>Left Bottom</Button>
            </Tooltip>
        </div>
        <div class="center-right">
            <Tooltip content="Right Top text" placement="right-start">
                <Button>Right Top</Button>
            </Tooltip><br><br>
            <Tooltip content="Right Center text" placement="right">
                <Button>Right Center</Button>
            </Tooltip><br><br>
            <Tooltip content="Right Bottom text" placement="right-end">
                <Button>Right Bottom</Button>
            </Tooltip>
        </div>
    </div>
    <div class="bottom">
        <Tooltip content="Bottom Left text" placement="bottom-start">
            <Button>Bottom Left</Button>
        </Tooltip>
        <Tooltip content="Bottom Center text" placement="bottom">
            <Button>Bottom Center</Button>
        </Tooltip>
        <Tooltip content="Bottom Right text" placement="bottom-end">
            <Button>Bottom Right</Button>
        </Tooltip>
    </div>
  </div>
</template>

```
:::
## Poptip 气泡提示

#### 基础用法
::: demo  
```html
<template>
  <div>
    <div style="margin-top: 30px;">
      <Poptip trigger="click" content="This is" :color="'#1890FF'">
        <p>纯文本提示</p>
      </Poptip>
    </div>

    <div style="margin-top: 30px;">
      <Poptip trigger="hover" title="Title" content="This is one of the looongest content in the popover ">
        <p>文本带标题提示</p>
      </Poptip>
    </div>

    <div style="margin-top: 30px;">
      <Poptip trigger="hover" title="Title" content="This is one of the looongest content in the popover " confirm ok-text="Button" cancel-text="Button">
        <p>文本带操作提示</p>
      </Poptip>
    </div>

    <div style="margin-top: 30px;">
      <Poptip trigger="click" content="This is one of" confirm ok-text="Button" cancel-text="Button" width="280">
        <p>文本带操作提示</p>
      </Poptip>
    </div>

    <div style="margin-top: 30px;">
      <Poptip trigger="click" word-wrap placement="right"  width="300" :color="'#1890FF'">
        <p>复杂样式</p>
        <div slot="content">
          <p style="color: #ffff">Title</p>
          <p style="color: #ffff">文本区域最大宽度为240px，长文案在文本区域内折行显示。最大宽度固定，高度随内容的多少自适应。</p>
          <div style="width: 100%;display: flex;justify-content: flex-end;">
            <Button type="primary">确定</Button>
          </div>
        </div>
      </Poptip>
    </div>
    <div style="margin-top: 30px;">
      <Poptip trigger="click" custom ref="ddd" width="120" :color="'#1890FF'">
        <div slot="content">
          <p @click="close">添加子部门</p>
          <p>编辑部门</p>
          <p>上移</p>
        </div>
        <p>点击操作</p>
      </Poptip>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    close () {
      this.$refs.ddd.visible = false
    }
  }
}
</script>
```
:::
## Progress 进度条

#### 基础用法
::: demo  
```html
<template>
    <Progress :percent="25" />
    <Progress :percent="45" status="active" />
    <Progress :percent="65" status="wrong" />
    <Progress :percent="100" />
    <Progress :percent="25" hide-info />
</template>
<script>
    export default {
        
    }
</script>
```
:::
## Avatar 头像

#### 基础用法
::: demo  
```html
<Avatar size="large" />
<Avatar />
<Avatar size="small" />
<Avatar size="min" />
```
:::
#### 类型
::: demo  
```html
<Avatar src='https://yunfanxiaossd-prod.oss-cn-beijing.aliyuncs.com/images/meinv2.png' />
<Avatar icon="oadesktop_share" />
<Avatar>你</Avatar>
```
:::
## Tag 标签

#### 基础用法
::: demo  
```html
<template>
  <div class="about">
    <p>属性标签</p>
    <Tag color="default">default</Tag>
    <Tag color="primary">primary</Tag>
    <Tag color="success">success</Tag>
    <Tag color="error">error</Tag>
    <Tag color="warning">warning</Tag>
    <p>状态标签</p>
    <Tag color="primary" circle>
      <Icon slot="prepend" type="icon_assembly-time" color="#1890FF"></Icon>
      Processing
    </Tag>
    <Tag v-if="show" closable @on-close="handleClose">标签三
      <Icon slot="prepend" type="icon_assembly-time"></Icon>
      <Icon slot="prefix" type="icon_assembly-time"></Icon>
    </Tag>
    <Tag type="dot" notBorder>无边框</Tag>
    <p>---</p>
    <Tag color="primary" circle :padding="2">
      <Icon slot="prepend" type="icon_assembly-time" color="#1890FF"></Icon>
      头像1
    </Tag>
    <Tag color="primary" circle closable :padding="2">
      <Icon slot="prepend" type="icon_assembly-time" color="#1890FF"></Icon>
      头像2
    </Tag>
    <p>------------</p>
    <Tag color="magenta">magenta</Tag>
    <Tag color="red">red</Tag>
    <Tag color="volcano">volcano</Tag>
    <Tag color="orange">orange</Tag>
    <Tag color="gold">gold</Tag>
    <Tag color="yellow">yellow</Tag>
    <Tag color="lime">lime</Tag>
    <Tag color="green">green</Tag>
    <Tag color="cyan">cyan</Tag>
    <Tag color="blue">blue</Tag>
    <Tag color="geekblue">geekblue</Tag>
    <Tag color="purple">purple</Tag>
    <Tag color="#FFA2D3">Custom Color</Tag>
    <br><br>
    <Tag type="dot" closable>标签默认</Tag>
    <Tag type="border" closable color="primary">标签一</Tag>
    <Tag type="border" closable color="success">标签二</Tag>
    <Tag type="border" closable color="error">标签三</Tag>
    <Tag type="border" closable color="warning">标签四</Tag>
    <br><br>
    <Tag type="dot" closable color="primary">标签一</Tag>
    <Tag type="dot" closable color="success">标签二</Tag>
    <Tag type="dot" closable color="error">标签三</Tag>
    <Tag type="dot" closable color="warning">标签四</Tag>
    <p>--------------------------</p>
    <Tag checkable color="primary">标签一</Tag>
    <Tag checkable color="success">标签二</Tag>
    <Tag checkable color="error">标签三</Tag>
    <Tag checkable color="warning">标签四</Tag>
  </div>
</template>
<script>
export default {
  data () {
    return {
      show: true
    }
  },
  methods: {
    handleClose () {
      this.show = false;
    }
  }
}
</script>

```
:::
## Carousel 走马灯

#### 基础用法
::: demo  
```html
<template>
    <Carousel v-model="value1" loop>
        <CarouselItem>
            <div class="demo-carousel">1</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">2</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">3</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">4</div>
        </CarouselItem>
    </Carousel>
</template>
<script>
    export default {
        data () {
            return {
                value1: 0
            }
        }
    }
</script>
```
:::
## Timeline 时间轴

#### 基础用法
::: demo  
```html
<template>
    <Timeline>
        <TimelineItem color="green">发布1.0版本</TimelineItem>
        <TimelineItem color="green">发布2.0版本</TimelineItem>
        <TimelineItem color="red">严重故障</TimelineItem>
        <TimelineItem color="blue">发布3.0版本</TimelineItem>
    </Timeline>
</template>
<script>
    export default {
        
    }
</script>

```
:::
## Drawer 抽屉
抽屉从父窗体边缘滑入，覆盖住部分父窗体内容。用户在抽屉内操作时不必离开当前任务，操作完成后，可以平滑地回到到原任务。
#### 基础用法
::: demo  基础抽屉，点击触发按钮抽屉从右滑出，点击遮罩区关闭。
```html
<template>
    <Button @click="value1 = true" type="primary">Open</Button>
    <Drawer title="Basic Drawer" :closable="false" v-model="value1">
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
    </Drawer>
    <br><br>
    <Button @click="value2 = true" type="primary">Left</Button>
    <Drawer title="Basic Drawer" placement="left" :closable="false" v-model="value2">
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
    </Drawer>
    <Button @click="value7 = true" type="primary">Top</Button>
    <Drawer title="Basic Drawer" placement="top" :closable="false" v-model="value7">
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
    </Drawer>
    <Button @click="value8 = true" type="primary">Bottom</Button>
    <Drawer title="Basic Drawer" placement="bottom" :closable="false" v-model="value8">
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
    </Drawer>
    <br><br>
    <div>
        <Button @click="value3 = true" type="primary">Create</Button>
        <Drawer
            title="Create"
            v-model="value3"
            width="720"
            :mask-closable="false"
            :styles="styles"
        >
            <Form :model="formData">
                <Row :gutter="32">
                    <Col span="12">
                        <FormItem label="Name" label-position="top">
                            <Input v-model="formData.name" placeholder="please enter user name" />
                        </FormItem>
                    </Col>
                    <Col span="12">
                        <FormItem label="Url" label-position="top">
                            <Input v-model="formData.url" placeholder="please enter url">
                                <span slot="prepend">http://</span>
                                <span slot="append">.com</span>
                            </Input>
                        </FormItem>
                    </Col>
                </Row>
                <Row :gutter="32">
                    <Col span="12">
                        <FormItem label="Owner" label-position="top">
                            <Select v-model="formData.owner" placeholder="please select an owner">
                                <Option value="jobs">Steven Paul Jobs</Option>
                                <Option value="ive">Sir Jonathan Paul Ive</Option>
                            </Select>
                        </FormItem>
                    </Col>
                    <Col span="12">
                        <FormItem label="Type" label-position="top">
                            <Select v-model="formData.type" placeholder="please choose the type">
                                <Option value="private">Private</Option>
                                <Option value="public">Public</Option>
                            </Select>
                        </FormItem>
                    </Col>
                </Row>
                <Row :gutter="32">
                    <Col span="12">
                        <FormItem label="Approver" label-position="top">
                            <Select v-model="formData.approver" placeholder="please choose the approver">
                                <Option value="jobs">Steven Paul Jobs</Option>
                                <Option value="ive">Sir Jonathan Paul Ive</Option>
                            </Select>
                        </FormItem>
                    </Col>
                    <Col span="12">
                        <FormItem label="DateTime" label-position="top">
                            <DatePicker v-model="formData.date" type="daterange" placeholder="please select the date" style="display: block" placement="bottom-end"></DatePicker>
                        </FormItem>
                    </Col>
                </Row>
                <FormItem label="Description" label-position="top">
                    <Input type="textarea" v-model="formData.desc" :rows="4" placeholder="please enter the description" />
                </FormItem>
            </Form>
            <div class="demo-drawer-footer">
                <Button style="margin-right: 8px" @click="value3 = false">Cancel</Button>
                <Button type="primary" @click="value3 = false">Submit</Button>
            </div>
        </Drawer>    
    </div>
    <br>
    <Button @click="value5 = true" type="primary">Open Drawer</Button>
    <Drawer title="Multi-level drawer" width="512" :closable="false" v-model="value5">
        <Button @click="value6 = true" type="primary">Two-level Drawer</Button>
    </Drawer>
    <Drawer title="Two-level Drawer" :closable="false" v-model="value6">
        This is two-level drawer.
    </Drawer>
</template>
<script>
    export default {
        data () {
            return {
                value1: false,
                value2: false,
                value7: false,
                value8: false,
                value3: false,
                value5: false,
                value6: false,
                styles: {
                    height: 'calc(100% - 55px)',
                    overflow: 'auto',
                    paddingBottom: '53px',
                    position: 'static'
                },
                formData: {
                    name: '',
                    url: '',
                    owner: '',
                    type: '',
                    approver: '',
                    date: '',
                    desc: ''
                }, 
            }
        }
    }
</script>
```
:::
## Time 相对时间
常用于表示几分钟前、几小时前等相对于此时此刻的时间描述。
#### 基础用法
::: demo  下列依次为基础用法、自动更新时间间隔、不同情况、锚点。
```html
<template>
    <div>
        <Time :time="time1" />
            <br>
        <Time :time="time2" />
    </div>
    <br>
    <Time :time="time3" :interval="1" />
    <br>
    <div>
        <Time :time="time2" />
        <br>
        <Time :time="time2" type="date" />
        <br>
        <Time :time="time2" type="datetime" />
    </div>
    <br>
    <Time :time="time2" hash="#hash" />
</template>
<script>
    export default {
        data () {
            return {
                time1: (new Date()).getTime() - 60 * 3 * 1000,
                time2: (new Date()).getTime() - 86400 * 3 * 1000,
                time3: new Date(),
                time2: (new Date()).getTime() - 86400 * 3 * 1000,
                time2: (new Date()).getTime() - 86400 * 3 * 1000
            }
        }
    }
</script>
```
:::