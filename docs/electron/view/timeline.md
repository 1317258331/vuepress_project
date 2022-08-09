### Timeline 时间轴
对一系列信息进行时间排序时，垂直地展示。
#### 基础用法
::: demo  
```html
<template>
    <Timeline>
        <TimelineItem color="green">发布1.0版本</TimelineItem>
        <TimelineItem color="green">发布2.0版本</TimelineItem>
        <TimelineItem color="red">严重故障</TimelineItem>
        <TimelineItem color="blue">发布3.0版本</TimelineItem>
    </Timeline>
</template>
<script>
    export default {
        
    }
</script>
```
:::
### API
#### Timeline props
<table >
  <thead >
    <tr >
      <th >属性</th>
      <th style="width: 500px">说明</th>
      <th >类型</th>
      <th >默认值</th>
    </tr>
  </thead>
  <tbody >
    <tr >
      <td >pending</td>
      <td >指定是否最后一个节点为幽灵节点</td>
      <td >Boolean</td>
      <td >false</td>
    </tr>
  </tbody>
</table>

#### TimelineItem props
<table >
  <thead >
    <tr >
      <th style="width: 100px">属性</th>
      <th style="width: 505px">说明</th>
      <th >类型</th>
      <th >默认值</th>
    </tr>
  </thead>
  <tbody >
    <tr >
      <td >color</td>
      <td >圆圈颜色，可选值为<code >blue</code>、<code >red</code>、<code >green</code>，或自定义色值</td>
      <td >String</td>
      <td >blue</td>
    </tr>
  </tbody>
</table>

#### TimelineItem slot
<table >
  <thead >
    <tr >
      <th style="width: 100px">名称</th>
      <th style="width: 660px">说明</th>
    </tr>
  </thead>
  <tbody >
    <tr >
      <td >dot</td>
      <td >自定义时间轴点内容</td>
    </tr>
    <tr >
      <td >无</td>
      <td >基本内容</td>
    </tr>
  </tbody>
</table>