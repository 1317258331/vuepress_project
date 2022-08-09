### Switch 开关
在两种状态间切换时用到的开关选择器。
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
### API
#### Switch props
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
      <td>指定当前是否选中，可以使用 v-model 双向绑定数据</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>size</td>
      <td>开关的尺寸，可选值为<code>large</code>、<code>small</code>、<code>default</code>或者不写。建议开关如果使用了2个汉字的文字，使用 large。</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>禁用开关</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>true-value</td>
      <td>选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用</td>
      <td>String, Number, Boolean</td>
      <td>true</td>
    </tr>
    <tr>
      <td>false-value</td>
      <td>没有选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用</td>
      <td>String, Number, Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>true-color <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.0.0</sup></span></td>
      <td>自定义打开时的背景色</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>false-color <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.0.0</sup></span></td>
      <td>自定义关闭时的背景色</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>before-change <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.0.0</sup></span></td>
      <td>返回 Promise 可以阻止切换</td>
      <td>Function</td>
      <td>-</td>
    </tr>
    <tr>
      <td>loading</td>
      <td>加载中的开关</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
  </tbody>
</table>

#### Switch events
<table>
  <thead>
    <tr>
      <th style="width: 135px">事件名</th>
      <th style="width: 520px">说明</th>
      <th>返回值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>on-change</td>
      <td>开关变化时触发，返回当前的状态</td>
      <td>true | false</td>
    </tr>
  </tbody>
</table>

#### Switch slot 
<table>
  <thead>
    <tr>
      <th style="width: 135px">名称</th>
      <th style="width: 625px">说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>open</td>
      <td>自定义显示打开时的内容</td>
    </tr>
    <tr>
      <td>close</td>
      <td>自定义显示关闭时的内容</td>
    </tr>
  </tbody>
</table>