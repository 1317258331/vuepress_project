### Divider 分割线
区隔内容的分割线。
#### 基础用法。
::: demo  可将一片区域，分割为可以拖拽调整宽度或高度的两部分区域。
```html
<template>
    <div>
        <Divider plain>Text</Divider>
        <p>Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple Inc.</p>
        <Divider plain orientation="left">Left Text</Divider>
        <p>Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple Inc.</p>
        <Divider plain orientation="right">Right Text</Divider>
        <p>Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple Inc.</p>
    </div>
</template>
<script>
    export default {
        
    }
</script>
```
:::
### API
#### Divider props
<table>
  <thead>
    <tr>
      <th>属性</th>
      <th style="width: 450px">说明</th>
      <th>类型</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>type</td>
      <td>水平还是垂直类型，可选值为 horizontal 或 vertical</td>
      <td>String</td>
      <td>horizontal</td>
    </tr>
    <tr>
      <td>orientation</td>
      <td>分割线标题的位置，可选值为 left、right 或 center</td>
      <td>String</td>
      <td>center</td>
    </tr>
    <tr>
      <td>dashed</td>
      <td>是否虚线</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>plain <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.5.0</sup></span></td>
      <td>文字是否显示为普通正文样式</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>size <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">3.3.0</sup></span></td>
      <td>尺寸，可选值为 small 或 default</td>
      <td>String</td>
      <td>default</td>
    </tr>
  </tbody>
</table>