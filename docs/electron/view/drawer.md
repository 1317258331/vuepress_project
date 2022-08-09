### Drawer 抽屉
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
### API
#### Drawer props
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
      <td>value</td>
      <td>抽屉是否显示，可使用 v-model 双向绑定数据</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>title</td>
      <td>抽屉标题，如果使用 slot 自定义了页头，则 title 无效</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>width</td>
      <td>抽屉宽度，左、右方向时可用。当其值不大于 100 时以百分比显示，大于 100 时为像素</td>
      <td>Number | String</td>
      <td>256</td>
    </tr>
    <tr>
      <td>height <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.6.0</sup></span></td>
      <td>抽屉高度，上、下方向时可用。当其值不大于 100 时以百分比显示，大于 100 时为像素</td>
      <td>Number | String</td>
      <td>256</td>
    </tr>
    <tr>
      <td>closable</td>
      <td>是否显示右上角的关闭按钮</td>
      <td>Boolean</td>
      <td>true</td>
    </tr>
    <tr>
      <td>mask-closable</td>
      <td>是否允许点击遮罩层关闭</td>
      <td>Boolean</td>
      <td>true</td>
    </tr>
    <tr>
      <td>mask</td>
      <td>是否显示遮罩层</td>
      <td>Boolean</td>
      <td>true</td>
    </tr>
    <tr>
      <td>mask-style</td>
      <td>遮罩层样式</td>
      <td>Object</td>
      <td>-</td>
    </tr>
    <tr>
      <td>styles</td>
      <td>抽屉中间层的样式</td>
      <td>Object</td>
      <td>-</td>
    </tr>
    <tr>
      <td>scrollable</td>
      <td>页面是否可以滚动</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>placement</td>
      <td>抽屉的方向，可选值为 left、right、top、bottom</td>
      <td>String</td>
      <td>right</td>
    </tr>
    <tr>
      <td>transfer</td>
      <td>是否将抽屉放置于 body 内</td>
      <td>Boolean</td>
      <td>true</td>
    </tr>
    <tr>
      <td>class-name</td>
      <td>设置抽屉容器.ivu-drawer-wrap的类名</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>inner</td>
      <td>是否设置抽屉在某个元素内打开，开启此属性时，应当关闭 transfer 属性</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>draggable <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">3.3.0</sup></span></td>
      <td>是否开启拖拽调整宽度</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>before-close <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">3.3.0</sup></span></td>
      <td>返回 Promise 可以阻止关闭</td>
      <td>Function</td>
      <td>-</td>
    </tr>
    <tr>
      <td>lock-scroll <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.4.0</sup></span></td>
      <td>是否禁止对页面滚动条的修改</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
  </tbody>
</table>

#### Drawer events
<table>
  <thead>
    <tr>
      <th>事件名</th>
      <th style="width: 463px">说明</th>
      <th>返回值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>on-close</td>
      <td>关闭抽屉时触发</td>
      <td>无</td>
    </tr>
    <tr>
      <td>on-visible-change</td>
      <td>显示状态发生变化时触发</td>
      <td>true / false</td>
    </tr>
    <tr>
      <td>on-resize-width <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">3.3.0</sup></span></td>
      <td>调整宽度时触发</td>
      <td>width</td>
    </tr>
  </tbody>
</table>

#### Drawer slot 
<table>
  <thead>
    <tr>
      <th style="width: 182px">名称</th>
      <th style="width: 582px">说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>header</td>
      <td>自定义标题栏</td>
    </tr>
    <tr>
      <td>close</td>
      <td>自定义右上角关闭内容</td>
    </tr>
    <tr>
      <td>trigger <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">3.3.0</sup></span></td>
      <td>自定义调整宽度节点</td>
    </tr>
    <tr>
      <td>默认</td>
      <td>抽屉主体内容</td>
    </tr>
  </tbody>
</table>