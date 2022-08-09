### Breadcrumb 面包屑
显示网站的层级结构，告知用户当前所在位置，以及在需要向上级导航时使用。
#### 基础用法。
::: demo  最基础的用法，通过设置**to**属性添加链接。
```html
<template>
    <Breadcrumb>
        <BreadcrumbItem to="/">Home</BreadcrumbItem>
        <BreadcrumbItem to="/components/breadcrumb">Components</BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
    </Breadcrumb>
</template>
<script>
    export default {
        
    }
</script>
```
:::
### API
#### Breadcrumb props
<table>
  <thead>
    <tr>
      <th style="width: 135px">属性</th>
      <th style="width: 355px">说明</th>
      <th>类型</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>separator</td>
      <td>自定义分隔符</td>
      <td>String | Element String</td>
      <td>/</td>
    </tr>
  </tbody>
</table>

#### BreadcrumbItem props
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
      <td>to</td>
      <td>链接，不传则没有链接，支持 vue-router 对象</td>
      <td>String | Object</td>
      <td>-</td>
    </tr>
    <tr>
      <td>replace</td>
      <td>路由跳转时，开启 replace 将不会向 history 添加新记录</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>target</td>
      <td>相当于 a 链接的 target 属性</td>
      <td>String</td>
      <td>_self</td>
    </tr>
    <tr>
      <td>append <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">3.4.0</sup></span></td>
      <td>同 vue-router append</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
  </tbody>
</table>