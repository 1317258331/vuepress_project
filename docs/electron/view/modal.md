### Modal 对话框
模态对话框，在浮层中显示，引导用户进行相关操作。
#### 基础用法
::: demo  
```html
<template>
  <div>
    <Button type="primary" @click="modal1 = true">显示对话框</Button>
    <br>
    <br>
    <Button style="margin-right: 20px;" type="primary" @click="instance('info')">info</Button>
    <Button style="margin-right: 20px;" type="primary" @click="instance('success')">success</Button>
    <Button style="margin-right: 20px;" type="primary" @click="instance('warning')">warning</Button>
    <Button style="margin-right: 20px;" type="primary" @click="instance('error')">error</Button>
    <!-- 描述信息content 非必填字段可填可不填 -->
    <Modal
      v-model="modal1"
      title="Common Modal dialog box title"
      content="描述信息"
      @on-ok="ok"
      @on-cancel="cancel"
    >
      <p>Content of dialog</p>
      <p>Content of dialog</p>
      <p>Content of dialog</p>
    </Modal>
  </div>
</template>
<script>
export default {
  data () {
    return {
      modal1: false
    }
  },
  methods: {
    ok () {
      this.$Message.info('Clicked ok')
    },
    cancel () {
      this.$Message.info('Clicked cancel')
    },
    instance (type) {
      const title = 'Title'
      const content = '描述信描'
      switch (type) {
        case 'info':
          this.$Modal.info({
            title: title,
            content: content,
            onOk () {
              console.log('ok')
            },
            onCancel () {
              console.log('cancel')
            }
          })
          break
        case 'success':
          this.$Modal.success({
            title: title,
            content: content
          })
          break
        case 'warning':
          this.$Modal.warning({
            title: title,
            content: content
          })
          break
        case 'error':
          this.$Modal.error({
            title: title,
            content: content
          })
          break
      }
    }
  }
}
</script>
```
:::
### API
#### Modal props
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
      <td>value</td>
      <td>对话框是否显示，可使用 v-model 双向绑定数据。</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>title</td>
      <td>对话框标题，如果使用 slot 自定义了页头，则 title 无效</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>closable</td>
      <td>是否显示右上角的关闭按钮，关闭后 Esc 按键也将关闭</td>
      <td>Boolean</td>
      <td>true</td>
    </tr>
    <tr>
      <td>mask-closable</td>
      <td>是否允许点击遮罩层关闭</td>
      <td>Boolean</td>
      <td>true</td>
    </tr>
    <tr>
      <td>loading</td>
      <td>点击确定按钮时，确定按钮是否显示 loading 状态，开启则需手动设置<code>value</code>来关闭对话框</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>scrollable</td>
      <td>页面是否可以滚动</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>fullscreen</td>
      <td>是否全屏显示</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>draggable</td>
      <td>是否可以拖拽移动</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>sticky <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.6.0</sup></span></td>
      <td>拖拽时，是否吸附屏幕边缘</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>sticky-distance <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.6.0</sup></span></td>
      <td>拖拽时，自动吸附屏幕边缘的临界距离</td>
      <td>Number</td>
      <td>10</td>
    </tr>
    <tr>
      <td>reset-drag-position <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.6.0</sup></span></td>
      <td>Modal 再次打开时，是否重置拖拽的位置</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>mask</td>
      <td>是否显示遮罩层，<s>开启 draggable 时，强制不显示(4.6.0不再强制)</s></td>
      <td>Boolean</td>
      <td>true</td>
    </tr>
    <tr>
      <td>ok-text</td>
      <td>确定按钮文字</td>
      <td>String</td>
      <td>确定</td>
    </tr>
    <tr>
      <td>cancel-text</td>
      <td>取消按钮文字</td>
      <td>String</td>
      <td>取消</td>
    </tr>
    <tr>
      <td>width</td>
      <td>对话框宽度，对话框的宽度是响应式的，当屏幕尺寸小于 768px 时，宽度会变为自动<code>auto</code>。当其值不大于 100 时以百分比显示，大于 100 时为像素</td>
      <td>Number | String</td>
      <td>520</td>
    </tr>
    <tr>
      <td>footer-hide</td>
      <td>不显示底部</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>styles</td>
      <td>设置浮层样式，调整浮层位置等，该属性设置的是<code>.ivu-modal</code>的样式</td>
      <td>Object</td>
      <td>-</td>
    </tr>
    <tr>
      <td>class-name</td>
      <td>设置对话框容器<code>.ivu-modal-wrap</code>的类名，可辅助实现垂直居中等自定义效果</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>z-index</td>
      <td>层级</td>
      <td>Number</td>
      <td>1000</td>
    </tr>
    <tr>
      <td>transition-names</td>
      <td>自定义显示动画，第一项是模态框，第二项是背景</td>
      <td>Array</td>
      <td>['ease', 'fade']</td>
    </tr>
    <tr>
      <td>transfer</td>
      <td>是否将弹层放置于 body 内</td>
      <td>Boolean</td>
      <td>true</td>
    </tr>
    <tr>
      <td>lock-scroll <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.4.0</sup></span></td>
      <td>是否禁止对页面滚动条的修改</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>before-close <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.7.0</sup></span></td>
      <td>返回 Promise 可以阻止关闭</td>
      <td>Function</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

#### Modal events
<table>
  <thead>
    <tr>
      <th>事件名</th>
      <th style="width: 493px">说明</th>
      <th>返回值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>on-ok</td>
      <td>点击确定的回调</td>
      <td>无</td>
    </tr>
    <tr>
      <td>on-cancel</td>
      <td>点击取消的回调</td>
      <td>无</td>
    </tr>
    <tr>
      <td>on-visible-change</td>
      <td>显示状态发生变化时触发</td>
      <td>true / false</td>
    </tr>
  </tbody>
</table>

#### Modal slot
<table>
  <thead>
    <tr>
      <th style="width: 162px">名称</th>
      <th style="width: 604px">说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>header</td>
      <td>自定义页头</td>
    </tr>
    <tr>
      <td>footer</td>
      <td>自定义页脚内容</td>
    </tr>
    <tr>
      <td>close</td>
      <td>自定义右上角关闭内容</td>
    </tr>
    <tr>
      <td>无</td>
      <td>对话框主体内容</td>
    </tr>
  </tbody>
</table>

#### Modal instance
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
      <td>标题</td>
      <td>String | Element String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>content</td>
      <td>内容</td>
      <td>String | Element String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>render</td>
      <td>自定义内容，使用后不再限制类型， content 也无效。<span><a href="https://segmentfault.com/ls/1650000011074057" target="_blank"><i class="ivu-icon ivu-icon-social-youtube-outline"></i> <span> 学习 Render 函数的内容</span></a> <!----> <!----></span></td>
      <td>Function</td>
      <td>-</td>
    </tr>
    <tr>
      <td>width</td>
      <td>宽度，单位 px</td>
      <td>Number | String</td>
      <td>416</td>
    </tr>
    <tr>
      <td>okText</td>
      <td>确定按钮的文字</td>
      <td>String</td>
      <td>确定</td>
    </tr>
    <tr>
      <td>cancelText</td>
      <td>取消按钮的文字，只在<code>Modal.confirm()</code>下有效</td>
      <td>String</td>
      <td>取消</td>
    </tr>
    <tr>
      <td>loading</td>
      <td>点击确定按钮时，确定按钮是否显示 loading 状态，开启则需手动调用<code>Modal.remove()</code>来关闭对话框</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>scrollable</td>
      <td>页面是否可以滚动</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>closable</td>
      <td>是否可以按 Esc 键关闭</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>onOk</td>
      <td>点击确定的回调</td>
      <td>Function</td>
      <td>-</td>
    </tr>
    <tr>
      <td>onCancel</td>
      <td>点击取消的回调，只在<code>Modal.confirm()</code>下有效</td>
      <td>Function</td>
      <td>-</td>
    </tr>
    <tr>
      <td>lock-scroll <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.4.0</sup></span></td>
      <td>是否禁止对页面滚动条的修改</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
  </tbody>
</table>