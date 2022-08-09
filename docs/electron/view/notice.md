### Notice 通知提醒
通知内容带有描述信息、系统主动推送
#### 基础用法
::: demo  
```html
<template>
  <div class="about">
    <p>无title样式+button</p>
    <Button type="primary" @click="openNoTitle()">button</Button>
    <p>是否有desc</p>
    <Button type="primary" @click="open(false)">Open notice</Button>
    <Button @click="open(true)">Open notice(only title)</Button>
    <p>render</p>
    <Button type="primary" @click="renderFunc">Open notice</Button>
    <p>With desc</p>
    <Button @click="info(false)">Info</Button>
    <Button @click="success(false)">Success</Button>
    <Button @click="warning(false)">Warning</Button>
    <Button @click="error(false)">Error</Button>
    <p>Only title</p>
    <Button @click="info(true)">Info</Button>
    <Button @click="success(true)">Success</Button>
    <Button @click="warning(true)">Warning</Button>
    <Button @click="error(true)">Error</Button>
  </div>
</template>

<script>
export default {
  methods: {
    openNoTitle () {
      this.$Notice.info({
        desc: 'Here is the notification description. Here is the notification description. ',
        okMsg: 'ok'
      });
    },
    open (nodesc) {
      this.$Notice.open({
        title: 'Notification title',
        desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
      });
    },
    renderFunc () {
      this.$Notice.success({
        title: 'Notification title',
        desc: 'The desc will hide when you set render.',
        render: h => {
          return h('span', [
            'This is created by ',
            h('a', 'render'),
            ' function'
          ])
        }
      });
    },
    info (nodesc) {
      this.$Notice.info({
        title: 'Notification title',
        desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
      });
    },
    success (nodesc) {
      this.$Notice.success({
        title: 'Notification title',
        desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
      });
    },
    warning (nodesc) {
      this.$Notice.warning({
        title: 'Notification title',
        desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
      });
    },
    error (nodesc) {
      this.$Notice.error({
        title: 'Notification title',
        desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
      });
    }
  }
}
</script>
```
:::
### API
#### Notice instance
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
      <td>title</td>
      <td>通知提醒的标题</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>desc</td>
      <td>通知提醒的内容，为空或不填时，自动应用仅标题模式下的样式</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>render</td>
      <td>自定义描述内容，使用 Vue 的 Render 函数，如果同时设置了 render 和 desc，则只显示 render 的内容</td>
      <td>Function</td>
      <td>-</td>
    </tr>
    <tr>
      <td>duration</td>
      <td>自动关闭的延时，单位秒，不关闭可以写 0</td>
      <td>Number</td>
      <td>4.5</td>
    </tr>
    <tr>
      <td>name</td>
      <td>当前通知的唯一标识</td>
      <td>String</td>
      <td>自动</td>
    </tr>
    <tr>
      <td>onClose</td>
      <td>关闭时的回调</td>
      <td>Function</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

另外提供了全局配置、全局关闭某个通知和全局销毁的方法：
<table>
  <thead>
    <tr>
      <th>属性</th>
      <th style="width: 497px">说明</th>
      <th>类型</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>top</td>
      <td>通知组件距离顶端的距离，单位像素</td>
      <td>Number</td>
      <td>24</td>
    </tr>
    <tr>
      <td>duration</td>
      <td>默认自动关闭的延时，单位秒</td>
      <td>Number</td>
      <td>4.5</td>
    </tr>
  </tbody>
</table>