### Tag 标签
对不同维度进行简单的标记和分类。
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
### API
#### Tag props
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
      <td>closable</td>
      <td>标签是否可以关闭</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>checkable</td>
      <td>标签是否可以选择</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>checked</td>
      <td>标签的选中状态</td>
      <td>Boolean</td>
      <td>true</td>
    </tr>
    <tr>
      <td>type</td>
      <td>标签的样式类型，可选值为 <code>border</code>、<code>dot</code>或不填</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>color</td>
      <td>标签颜色，预设颜色值为<code>default</code>、<code>primary</code>、<code>success</code>、<code>warning</code>、<code>error</code>、<code>blue</code>、<code>green</code>、<code>red</code>、<code>yellow</code>、<code>pink</code>、<code>magenta</code>、<code>volcano</code>、<code>orange</code>、<code>gold</code>、<code>lime</code>、<code>cyan</code>、<code>geekblue</code>、<code>purple</code>，你也可以自定义颜色值。</td>
      <td>String</td>
      <td>default</td>
    </tr>
    <tr>
      <td>name</td>
      <td>当前标签的名称，使用 v-for，并支持关闭时，会比较有用</td>
      <td>String | Number</td>
      <td>-</td>
    </tr>
    <tr>
      <td>fade</td>
      <td>是否在出现和消失时使用渐变的动画，动画时长可能会引起占位的闪烁</td>
      <td>Boolean</td>
      <td>true</td>
    </tr>
    <tr>
      <td>size <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.0.0</sup></span></td>
      <td>尺寸，可选值为 large、medium、default</td>
      <td>String</td>
      <td>default</td>
    </tr>
  </tbody>
</table>

#### Tag events
<table>
  <thead>
    <tr>
      <th>事件名</th>
      <th style="width: 514px">说明</th>
      <th>返回值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>on-close</td>
      <td>关闭时触发</td>
      <td>event, name</td>
    </tr>
    <tr>
      <td>on-change</td>
      <td>切换选中状态时触发</td>
      <td>checked, name</td>
    </tr>
  </tbody>
</table>