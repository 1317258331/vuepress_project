### LoadingBar 加载进度条
全局创建一个显示页面加载、异步请求、文件上传等的加载进度条。
#### 基础用法。
::: demo  点击 Start 开始进度，点击 Finish 结束。在调用start()方法后，组件会自动模拟进度，当调用finish()或error()时，补全进度并自动消失。
```html
<template>
    <Button @click="start">Start</Button>
    <Button @click="finish">Finish</Button>
    <Button @click="error">Error</Button>
</template>
<script>
    export default {
        methods: {
            start () {
                this.$Loading.start();
            },
            finish () {
                this.$Loading.finish();
            },
            error () {
                this.$Loading.error();
            }
        }
    }
</script>
```
:::
### API
#### LoadingBar instance
<table>
  <thead>
    <tr>
      <th style="width: 135px">函数名</th>
      <th style="width: 397px">说明</th>
      <th>参数</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>start</td>
      <td>开始从 0 显示进度条，并自动加载进度</td>
      <td>无</td>
    </tr>
    <tr>
      <td>finish</td>
      <td>结束进度条，自动补全剩余进度</td>
      <td>无</td>
    </tr>
    <tr>
      <td>error</td>
      <td>以错误的类型结束进度条，自动补全剩余进度</td>
      <td>无</td>
    </tr>
    <tr>
      <td>update</td>
      <td>精确加载到指定的进度</td>
      <td>percent，指定的进度百分比</td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th>属性</th>
      <th style="width: 444px">说明</th>
      <th>类型</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>color</td>
      <td>进度条的颜色，默认为 iView 主色</td>
      <td>String</td>
      <td>primary</td>
    </tr>
    <tr>
      <td>failedColor</td>
      <td>失败时的进度条颜色，默认为 iView 主色</td>
      <td>String</td>
      <td>error</td>
    </tr>
    <tr>
      <td>height</td>
      <td>进度条高度，单位 px</td>
      <td>Number</td>
      <td>2</td>
    </tr>
    <tr>
      <td>duration <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">3.4.0</sup></span></td>
      <td>隐藏时的持续时间，单位 ms</td>
      <td>Number</td>
      <td>800</td>
    </tr>
  </tbody>
</table>