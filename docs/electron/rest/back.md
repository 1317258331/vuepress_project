### BackTop 返回顶部
当页面内容冗长，需要快捷返回顶部时使用，一般放置在页面右下角位置。
#### 基础用法
向下滚动页面，灰色的按钮为默认效果。
::: demo
```html
<template>
    <BackTop></BackTop>
</template>
<script>
    export default {
        
    }
</script>
```
:::
#### 自定义样式
向下滚动页面，按钮为自定义效果。
::: demo 
```html
<style scoped>
    .top{
        padding: 10px;
        background: rgba(0, 153, 229, .7);
        color: #fff;
        text-align: center;
        border-radius: 2px;
    }
</style>
<template>
    <BackTop :height="100" :bottom="200">
        <div class="top">返回顶端</div>
    </BackTop>
</template>
<script>
    export default {
        
    }
</script>
```
:::
### API
#### BackTop props
<table >
  <thead >
    <tr >
      <th >属性</th>
      <th style="width: 497px">说明</th>
      <th >类型</th>
      <th >默认值</th>
    </tr>
  </thead>
  <tbody >
    <tr >
      <td >height</td>
      <td >页面滚动高度达到该值时才显示<code >BackTop</code>组件</td>
      <td >Number</td>
      <td >400</td>
    </tr>
    <tr >
      <td >bottom</td>
      <td >组件距离底部的距离</td>
      <td >Number</td>
      <td >30</td>
    </tr>
    <tr >
      <td >right</td>
      <td >组件距离右部的距离</td>
      <td >Number</td>
      <td >30</td>
    </tr>
    <tr >
      <td >duration</td>
      <td >滚动动画持续时间，单位 毫秒</td>
      <td >Number</td>
      <td >1000</td>
    </tr>
  </tbody>
</table>

#### BackTop events
<table >
  <thead >
    <tr >
      <th >事件名</th>
      <th style="width: 592px">说明</th>
      <th >返回值</th>
    </tr>
  </thead>
  <tbody >
    <tr >
      <td >on-click</td>
      <td >点击按钮时触发</td>
      <td >无</td>
    </tr>
  </tbody>
</table>