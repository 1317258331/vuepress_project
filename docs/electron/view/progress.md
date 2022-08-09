### Progress 进度条
展示操作或任务的当前进度，比如上传文件。
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
#### 百分百内显
::: demo  设置属性 text-inside 可以将百分比显示在进度条内部。需要通过属性 stroke-width 设置一个足够的高度。
```html
<template>
    <Progress :percent="25" :stroke-width="20" text-inside />
    <Progress :percent="45" :stroke-width="20" status="active" text-inside />
    <Progress :percent="65" :stroke-width="20" status="wrong" text-inside />
    <Progress :percent="100" :stroke-width="20" text-inside />
</template>
<script>
    export default {
        
    }
</script>
```
:::
### API
#### Progress props
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
      <td>percent</td>
      <td>百分比</td>
      <td>Number</td>
      <td>0</td>
    </tr>
    <tr>
      <td>status</td>
      <td>状态，可选值为<code>normal</code>、<code>active</code>、<code>wrong</code>、<code>success</code></td>
      <td>String</td>
      <td>normal</td>
    </tr>
    <tr>
      <td>stroke-width</td>
      <td>进度条的线宽，单位 px</td>
      <td>Number</td>
      <td>10</td>
    </tr>
    <tr>
      <td>stroke-color <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">3.3.0</sup></span></td>
      <td>进度条的颜色，4.0.0 开始支持传入数组，显示为渐变色</td>
      <td>String | Array</td>
      <td>-</td>
    </tr>
    <tr>
      <td>hide-info</td>
      <td>隐藏数值或状态图标</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>vertical</td>
      <td>是否在垂直方向显示</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>success-percent</td>
      <td>已完成的分段百分比</td>
      <td>Number</td>
      <td>0</td>
    </tr>
    <tr>
      <td>text-inside <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.0.0</sup></span></td>
      <td>百分比是否置于进度条内</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
  </tbody>
</table>

#### Progress slot
<table>
  <thead>
    <tr>
      <th style="width: 162px">名称</th>
      <th style="width: 600px">说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>无</td>
      <td>自定义显示状态内容</td>
    </tr>
  </tbody>
</table>