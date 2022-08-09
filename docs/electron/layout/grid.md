### Grid 栅格
采用24栅格系统,将区域进行24等分.
#### 基础用法。
::: demo  栅格
```html
<template>
    <Row>
        <Col span="12">col-12</Col>
        <Col span="12">col-12</Col>
    </Row>
    <br>
    <Row>
        <Col span="8">col-8</Col>
        <Col span="8">col-8</Col>
        <Col span="8">col-8</Col>
    </Row>
    <br>
    <Row>
        <Col span="6">col-6</Col>
        <Col span="6">col-6</Col>
        <Col span="6">col-6</Col>
        <Col span="6">col-6</Col>
    </Row>
</template>
<script>
    export default {
        
    }
</script>
```
:::

### API
#### Row props
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
      <td>gutter</td>
      <td>栅格间距，单位 px，左右平分</td>
      <td>Number</td>
      <td>0</td>
    </tr>
    <tr>
      <td>type</td>
      <td>布局模式，可选值为<code>flex</code>或不选，在现代浏览器下有效。<code>4.5.0</code> 版本起强制使用 flex 布局</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>align</td>
      <td>flex 布局下的垂直对齐方式，可选值为<code>top</code>、<code>middle</code>、<code>bottom</code></td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>justify</td>
      <td>flex 布局下的水平排列方式，可选值为<code>start</code>、<code>end</code>、<code>center</code>、<code>space-around</code>、<code>space-between</code></td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>class-name</td>
      <td>自定义的class名称</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>wrap <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.5.0</sup></span></td>
      <td>是否自动换行</td>
      <td>Boolean</td>
      <td>true</td>
    </tr>
  </tbody>
</table>

#### Col props
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
      <td>span</td>
      <td>栅格的占位格数，可选值为0~24的整数，为 0 时，相当于<code>display:none</code></td>
      <td>Number | String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>flex <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.5.0</sup></span></td>
      <td>flex 布局属性</td>
      <td>Number | String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>order</td>
      <td>栅格的顺序，在<code>flex</code>布局模式下有效</td>
      <td>Number | String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>offset</td>
      <td>栅格左侧的间隔格数，间隔内不可以有栅格</td>
      <td>Number | String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>push</td>
      <td>栅格向右移动格数</td>
      <td>Number | String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>pull</td>
      <td>栅格向左移动格数</td>
      <td>Number | String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>class-name</td>
      <td>自定义的class名称</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>xs</td>
      <td><code>&lt;576px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象</td>
      <td>Number | Object</td>
      <td>-</td>
    </tr>
    <tr>
      <td>sm</td>
      <td><code>≥576px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象</td>
      <td>Number | Object</td>
      <td>-</td>
    </tr>
    <tr>
      <td>md</td>
      <td><code>≥768px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象</td>
      <td>Number | Object</td>
      <td>-</td>
    </tr>
    <tr>
      <td>lg</td>
      <td><code>≥992px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象</td>
      <td>Number | Object</td>
      <td>-</td>
    </tr>
    <tr>
      <td>xl</td>
      <td><code>≥1200px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象</td>
      <td>Number | Object</td>
      <td>-</td>
    </tr>
    <tr>
      <td>xxl</td>
      <td><code>≥1600px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象</td>
      <td>Number | Object</td>
      <td>-</td>
    </tr>
  </tbody>
</table>