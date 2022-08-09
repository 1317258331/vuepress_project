### Card 卡片
基础容器，用来显示文字、列表、图文等内容，也可以配合其它组件一起使用。
#### 基础用法。
::: demo  基础容器，用来显示文字、列表、图文等内容，也可以配合其它组件一起使用。
```html
<template>
    <Row style="background:#eee;padding:20px">
        <Col span="11">
            <Card :bordered="false">
                <p slot="title">Borderless card</p>
                <p>Content of card</p>
                <p>Content of card</p>
                <p>Content of card</p>
            </Card>
        </Col>
        <Col span="11" offset="2">
            <Card shadow>
                <p slot="title">Use a card with a shadow effect</p>
                <p>Content of card</p>
                <p>Content of card</p>
                <p>Content of card</p>
            </Card>
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
####  Card props
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
      <td>bordered</td>
      <td>是否显示边框，建议在灰色背景下使用</td>
      <td>Boolean</td>
      <td>true</td>
    </tr>
    <tr>
      <td>dis-hover</td>
      <td>禁用鼠标悬停显示阴影</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>shadow</td>
      <td>卡片阴影，建议在灰色背景下使用</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>padding</td>
      <td>卡片内部间距，单位 px</td>
      <td>Number</td>
      <td>16</td>
    </tr>
    <tr>
      <td>title</td>
      <td>标题，2.12.0 新增</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>icon</td>
      <td>标题前的图标，2.12.0 新增</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>to <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.0.0</sup></span></td>
      <td>跳转的链接，支持 vue-router 对象</td>
      <td>String | Object</td>
      <td>-</td>
    </tr>
    <tr>
      <td>replace <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.0.0</sup></span></td>
      <td>路由跳转时，开启 replace 将不会向 history 添加新记录</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>target <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.0.0</sup></span></td>
      <td>相当于 a 链接的 target 属性</td>
      <td>String</td>
      <td>_self</td>
    </tr>
    <tr>
      <td>append <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.0.0</sup></span></td>
      <td>同 vue-router append</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
  </tbody>
</table>

####  Card slot
<table>
  <thead>
    <tr>
      <th style="width: 130px">名称</th>
      <th style="width: 650px">说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>title</td>
      <td>自定义卡片标题，如果是简单文字，可以使用<code>&lt;p&gt;</code>标签包裹</td>
    </tr>
    <tr>
      <td>extra</td>
      <td>额外显示的内容，默认位置在右上角</td>
    </tr>
    <tr>
      <td>无</td>
      <td>卡片主体内容</td>
    </tr>
  </tbody>
</table>