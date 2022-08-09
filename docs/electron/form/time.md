### TimePicker 时间选择器
选择或输入标准时间，支持选择范围。
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
### API
#### TimePicker props
<table>
  <colgroup>
  <col>
  <col>
  <col>
  <col width="200">
  </colgroup>
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
      <td>type</td>
      <td>显示类型，可选值为 <code>time</code>、<code>timerange</code></td>
      <td>String</td>
      <td>time</td>
    </tr>
    <tr>
      <td>value</td>
      <td> 时间，可以是 JavaScript 的 Date，例如 <strong>new Date()</strong>，也可以是标准的时间格式，点击右边查看<br>
        注意：value 使用 v-model 时，值是 Date 类型，可以配合 @on-change 使用 </td>
      <td><a href="javascript:void(0)"><i class="ivu-icon ivu-icon-information-circled"></i> Date</a></td>
      <td>-</td>
    </tr>
    <tr>
      <td>format</td>
      <td>展示的时间格式</td>
      <td><a href="javascript:void(0)"><i class="ivu-icon ivu-icon-information-circled"></i> Date</a></td>
      <td>HH:mm:ss</td>
    </tr>
    <tr>
      <td>steps</td>
      <td>下拉列表的时间间隔，数组的三项分别对应小时、分钟、秒。例如设置为 [1, 15] 时，分钟会显示：00、15、30、45。</td>
      <td>Array</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>placement</td>
      <td>时间选择器出现的位置，可选值为<code>top</code><code>top-start</code><code>top-end</code><code>bottom</code><code>bottom-start</code><code>bottom-end</code><code>left</code><code>left-start</code><code>left-end</code><code>right</code><code>right-start</code><code>right-end</code>，2.12.0 版本开始支持自动识别</td>
      <td>String</td>
      <td>bottom-start</td>
    </tr>
    <tr>
      <td>placeholder</td>
      <td>占位文本</td>
      <td>String</td>
      <td>空</td>
    </tr>
    <tr>
      <td>confirm</td>
      <td>是否显示底部控制栏</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>open</td>
      <td>手动控制时间选择器的显示状态，true 为显示，false 为收起。使用该属性后，选择器不会主动关闭。建议配合 slot 及 confirm 和相关事件一起使用</td>
      <td>Boolean</td>
      <td>null</td>
    </tr>
    <tr>
      <td>size</td>
      <td>尺寸，可选值为<code>large</code>、<code>small</code>、<code>default</code>或者不设置</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>是否禁用选择器</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>clearable</td>
      <td>是否显示清除按钮</td>
      <td>Boolean</td>
      <td>true</td>
    </tr>
    <tr>
      <td>readonly</td>
      <td>完全只读，开启后不会弹出选择器，只在没有设置 open 属性下生效</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>editable</td>
      <td>文本框是否可以输入，只在没有使用 slot 时有效</td>
      <td>Boolean</td>
      <td>true</td>
    </tr>
    <tr>
      <td>transfer</td>
      <td>是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>element-id</td>
      <td>给表单元素设置 <code>id</code>，详见 Form 用法。</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>separator <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">3.3.0</sup></span></td>
      <td>两个日期间的分隔符</td>
      <td>String</td>
      <td> - </td>
    </tr>
    <tr>
      <td>capture <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.0.0</sup></span></td>
      <td>是否开启 capture 模式，也可通过全局配置</td>
      <td>Boolean</td>
      <td>true</td>
    </tr>
    <tr>
      <td>transfer-class-name <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.4.0</sup></span></td>
      <td>开启 transfer 时，给浮层添加额外的 class 名称</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>events-enabled <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.6.0</sup></span></td>
      <td>是否开启 Popper 的 eventsEnabled 属性，开启可能会牺牲一定的性能</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
  </tbody>
</table>

#### TimePicker events
<table>
  <thead>
    <tr>
      <th>事件名</th>
      <th style="width: 322px">说明</th>
      <th>返回值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>on-change</td>
      <td>时间发生变化时触发</td>
      <td>已经格式化后的时间，比如 09:41:00</td>
    </tr>
    <tr>
      <td>on-open-change</td>
      <td>弹出浮层和关闭浮层时触发</td>
      <td>true | false</td>
    </tr>
    <tr>
      <td>on-ok</td>
      <td>点击确定按钮时触发</td>
      <td>-</td>
    </tr>
    <tr>
      <td>on-clear</td>
      <td>在清空日期时触发</td>
      <td>-</td>
    </tr>
  </tbody>
</table>