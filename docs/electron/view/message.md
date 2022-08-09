### Message 全局提示
轻量级的信息反馈组件，在顶部居中显示，并自动消失。有多种不同的提示状态可选择。
#### 基础用法
::: demo  
```html
<template>
    <div>
        <Button @click="background('info')">显示普通提示</Button>
        <Button @click="background('success')">显示成功提示</Button>
        <Button @click="background('warning')">显示警告提示</Button>
        <Button @click="background('error')">显示错误提示</Button>
    </div>
</template>
<script>
    export default {
        methods: {
            background (type) {
                this.$Message[type]({
                    background: true,
                    content: '这是一条带背景色的通知'
                });
            }
        }
    }
</script>
```
:::
### API
#### Message instance
<table>
  <thead>
    <tr>
      <th>属性</th>
      <th style="width: 422px">说明</th>
      <th>类型</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>content</td>
      <td>提示内容</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>render</td>
      <td>自定义描述内容，使用 Vue 的 Render 函数</td>
      <td>Function</td>
      <td>-</td>
    </tr>
    <tr>
      <td>duration</td>
      <td>自动关闭的延时，单位秒，不关闭可以写 0</td>
      <td>Number</td>
      <td>1.5</td>
    </tr>
    <tr>
      <td>onClose</td>
      <td>关闭时的回调</td>
      <td>Function</td>
      <td>-</td>
    </tr>
    <tr>
      <td>closable</td>
      <td>是否显示关闭按钮</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>background <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.0.0</sup></span></td>
      <td>是否显示背景色</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
  </tbody>
</table>

另外提供了全局配置和全局销毁的方法：
<table>
  <thead>
    <tr>
      <th style="width: 165px">属性</th>
      <th style="width: 422px">说明</th>
      <th>类型</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>top</td>
      <td>提示组件距离顶端的距离，单位像素</td>
      <td>Number</td>
      <td>24</td>
    </tr>
    <tr>
      <td>duration</td>
      <td>默认自动关闭的延时，单位秒</td>
      <td>Number</td>
      <td>1.5</td>
    </tr>
  </tbody>
</table>
