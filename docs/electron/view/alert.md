### Alert 警告提示
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
### API
#### Alert props
<table>
  <thead>
    <tr>
      <th>属性</th>
      <th style="width: 480px">说明</th>
      <th>类型</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>type</td>
      <td>警告提示样式，可选值为<code>info</code>、<code>success</code>、<code>warning</code>、<code>error</code></td>
      <td>String</td>
      <td>info</td>
    </tr>
    <tr>
      <td>closable</td>
      <td>是否可关闭</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>show-icon</td>
      <td>是否显示图标</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>fade <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.7.0</sup></span></td>
      <td>是否应用动画，动画时长可能会引起占位的闪烁</td>
      <td>Boolean</td>
      <td>true</td>
    </tr>
  </tbody>
</table>

#### Alert events
<table>
  <thead>
    <tr>
      <th style="width: 130px">事件名</th>
      <th style="width: 552px">说明</th>
      <th>返回值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>on-close</td>
      <td>关闭时触发</td>
      <td>event</td>
    </tr>
  </tbody>
</table>

#### Alert slot
<table>
  <thead>
    <tr>
      <th style="width: 130px">名称</th>
      <th style="width: 632px">说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>无</td>
      <td>警告提示内容</td>
    </tr>
    <tr>
      <td>desc</td>
      <td>警告提示辅助性文字介绍</td>
    </tr>
    <tr>
      <td>icon</td>
      <td>自定义图标内容</td>
    </tr>
    <tr>
      <td>close</td>
      <td>自定义关闭内容</td>
    </tr>
  </tbody>
</table>