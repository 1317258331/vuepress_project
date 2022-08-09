### Affix 图钉
使用图钉，可以将内容固定在屏幕上，并且不随页面的滚动而滚动。常用于侧边菜单等。
#### 基础用法
::: demo 简单使用，当元素不可见时，直接固定在最顶端。
```html
<template>
    <Affix>
        <span class="demo-affix">Fixed at the top</span>
    </Affix>
</template>
<script>
    export default {
        
    }
</script>
```
:::
#### 固定在底部
::: demo 在屏幕下方固定，可以通过缩小浏览器窗口高度来查看效果。
```html
<template>
    <Affix :offset-bottom="20">
        <span class="demo-affix">Fix at the bottom 20px</span>
    </Affix>
</template>
<script>
    export default {
        
    }
</script>
```
:::
#### 固定状态改变时的回调 
::: demo 当固定状态发生改变时，会触发事件。
```html
<template>
    <Affix :offset-top="100" @on-change="change">
        <span class="demo-affix">Fix the position at the top of 100px at the top</span>
    </Affix>
</template>
<script>
    export default {
        methods: {
            change (status) {
                this.$Message.info(`Status: ${status}`);
            }
        }
    }
</script>
```
:::
### API
#### Affix props
<table >
  <thead >
    <tr >
      <th >属性</th>
      <th style="width: 425px">说明</th>
      <th >类型</th>
      <th >默认值</th>
    </tr>
  </thead>
  <tbody >
    <tr >
      <td >offset-top</td>
      <td >距离窗口顶部达到指定偏移量后触发</td>
      <td >Number</td>
      <td >0</td>
    </tr>
    <tr >
      <td >offset-bottom</td>
      <td >距离窗口底部达到指定偏移量后触发</td>
      <td >Number</td>
      <td >-</td>
    </tr>
    <tr >
      <td >use-capture <span  class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.1.0</sup></span></td>
      <td >addEventListener 原生的 useCapture 选项</td>
      <td >Boolean</td>
      <td >false</td>
    </tr>
  </tbody>
</table>

#### Affix events
<table >
  <thead >
    <tr >
      <th >事件名</th>
      <th style="width: 548px">说明</th>
      <th >返回值</th>
    </tr>
  </thead>
  <tbody >
    <tr >
      <td >on-change</td>
      <td >在固定状态发生改变时触发</td>
      <td >true | false</td>
    </tr>
  </tbody>
</table>