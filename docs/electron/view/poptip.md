### Poptip 气泡提示
Poptip 与 Tooltip 类似，具有很多相同配置，不同点是 Poptip 以卡片的形式承载了更多的内容，比如链接、表格、按钮等。
#### 基础用法
::: demo  
```html
<template>
  <div>
    <div style="margin-top: 30px;">
      <Poptip trigger="click" content="This is" :color="'#1890FF'">
        <p>纯文本提示</p>
      </Poptip>
    </div>

    <div style="margin-top: 30px;">
      <Poptip trigger="hover" title="Title" content="This is one of the looongest content in the popover ">
        <p>文本带标题提示</p>
      </Poptip>
    </div>

    <div style="margin-top: 30px;">
      <Poptip trigger="hover" title="Title" content="This is one of the looongest content in the popover " confirm ok-text="Button" cancel-text="Button">
        <p>文本带操作提示</p>
      </Poptip>
    </div>

    <div style="margin-top: 30px;">
      <Poptip trigger="click" content="This is one of" confirm ok-text="Button" cancel-text="Button" width="280">
        <p>文本带操作提示</p>
      </Poptip>
    </div>

    <div style="margin-top: 30px;">
      <Poptip trigger="click" word-wrap placement="right"  width="300" :color="'#1890FF'">
        <p>复杂样式</p>
        <div slot="content">
          <p style="color: #ffff">Title</p>
          <p style="color: #ffff">文本区域最大宽度为240px，长文案在文本区域内折行显示。最大宽度固定，高度随内容的多少自适应。</p>
          <div style="width: 100%;display: flex;justify-content: flex-end;">
            <Button type="primary">确定</Button>
          </div>
        </div>
      </Poptip>
    </div>
    <div style="margin-top: 30px;">
      <Poptip trigger="click" custom ref="ddd" width="120" :color="'#1890FF'">
        <div slot="content">
          <p @click="close">添加子部门</p>
          <p>编辑部门</p>
          <p>上移</p>
        </div>
        <p>点击操作</p>
      </Poptip>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    close () {
      this.$refs.ddd.visible = false
    }
  }
}
</script>
```
:::
### API
#### Poptip props
<table >
  <thead >
    <tr >
      <th >属性</th>
      <th >说明</th>
      <th >类型</th>
      <th >默认值</th>
    </tr>
  </thead>
  <tbody >
    <tr >
      <td >trigger</td>
      <td >触发方式，可选值为<code >hover</code>（悬停）<code >click</code>（点击）<code >focus</code>（聚焦）,在 confirm 模式下，只有 click 有效</td>
      <td >String</td>
      <td >click</td>
    </tr>
    <tr >
      <td >title</td>
      <td >显示的标题</td>
      <td >String | Number</td>
      <td >-</td>
    </tr>
    <tr >
      <td >content</td>
      <td >显示的正文内容，只在非 confirm 模式下有效</td>
      <td >String | Number</td>
      <td >空</td>
    </tr>
    <tr >
      <td >placement</td>
      <td >提示框出现的位置，可选值为<code >top</code><code >top-start</code><code >top-end</code><code >bottom</code><code >bottom-start</code><code >bottom-end</code><code >left</code><code >left-start</code><code >left-end</code><code >right</code><code >right-start</code><code >right-end</code>，2.12.0 版本开始支持自动识别</td>
      <td >String</td>
      <td >top</td>
    </tr>
    <tr >
      <td >width</td>
      <td >宽度，最小宽度为 150px，在 confirm 模式下，默认最大宽度为 300px</td>
      <td >String | Number</td>
      <td >-</td>
    </tr>
    <tr >
      <td >confirm</td>
      <td >是否开启对话框模式</td>
      <td >Boolean</td>
      <td >false</td>
    </tr>
    <tr >
      <td >disabled <span  class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">3.4.0</sup></span></td>
      <td >是否禁用</td>
      <td >Boolean</td>
      <td >false</td>
    </tr>
    <tr >
      <td >ok-text</td>
      <td >确定按钮的文字，只在 confirm 模式下有效</td>
      <td >String</td>
      <td >确定</td>
    </tr>
    <tr >
      <td >cancel-text</td>
      <td >取消按钮的文字，只在 confirm 模式下有效</td>
      <td >String</td>
      <td >取消</td>
    </tr>
    <tr >
      <td >transfer</td>
      <td >是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果</td>
      <td >Boolean</td>
      <td >false</td>
    </tr>
    <tr >
      <td >popper-class</td>
      <td >给 Poptip 设置 class-name，在使用 transfer 时会很有用</td>
      <td >String</td>
      <td >-</td>
    </tr>
    <tr >
      <td >word-wrap</td>
      <td >开启后，超出指定宽度文本将自动换行，并两端对齐</td>
      <td >Boolean</td>
      <td >false</td>
    </tr>
    <tr >
      <td >padding</td>
      <td >自定义间距值</td>
      <td >String</td>
      <td >8px 16px</td>
    </tr>
    <tr >
      <td >offset</td>
      <td >出现位置的偏移量</td>
      <td >Number</td>
      <td >0</td>
    </tr>
    <tr >
      <td >options</td>
      <td >自定义 popper.js 的配置项，具体配置见 <a  href="https://popper.js.org/popper-documentation.html" target="_blank">popper.js 文档</a></td>
      <td >Object</td>
      <td ><div >
          <pre style="background-color: #fff" class=""><code style="color: #000" >{
    <span >modifiers</span>: {
        <span >computeStyle</span>:{
            <span >gpuAcceleration</span>: <span >false</span>,
        },
        <span >preventOverflow</span> :{
            <span >boundariesElement</span>: <span>'window'</span>
        }
    }
}
</code></pre>
          <span class="scale">
          <div class="ivu-tooltip">
            <div class="ivu-tooltip-rel"><i class="ivu-icon ivu-icon-md-qr-scanner" style="font-size: 18px;"></i></div>
          </div>
          </span> <span class="copy">
          <div class="ivu-tooltip">
            <div class="ivu-tooltip-rel"><i class="ivu-icon ivu-icon-md-copy" style="font-size: 18px;"></i> <i class="ivu-icon ivu-icon-md-checkmark" style="font-size: 18px; color: rgb(92, 184, 92); display: none;"></i></div>
          </div>
          </span></div></td>
    </tr>
    <tr >
      <td >transfer-class-name <span  class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.4.0</sup></span></td>
      <td >开启 transfer 时，给浮层添加额外的 class 名称</td>
      <td >String</td>
      <td >-</td>
    </tr>
    <tr >
      <td >events-enabled <span  class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.6.0</sup></span></td>
      <td >是否开启 Popper 的 eventsEnabled 属性，开启可能会牺牲一定的性能</td>
      <td >Boolean</td>
      <td >false</td>
    </tr>
  </tbody>
</table>

#### Poptip events
<table >
  <thead >
    <tr >
      <th >事件名</th>
      <th style="width: 526px">说明</th>
      <th >返回值</th>
    </tr>
  </thead>
  <tbody >
    <tr >
      <td >on-popper-show</td>
      <td >在提示框显示时触发</td>
      <td >无</td>
    </tr>
    <tr >
      <td >on-popper-hide</td>
      <td >在提示框消失时触发</td>
      <td >无</td>
    </tr>
    <tr >
      <td >on-ok</td>
      <td >点击确定的回调，只在 confirm 模式下有效</td>
      <td >无</td>
    </tr>
    <tr >
      <td >on-cancel</td>
      <td >点击取消的回调，只在 confirm 模式下有效</td>
      <td >无</td>
    </tr>
  </tbody>
</table>

#### Poptip slot
<table >
  <thead >
    <tr >
      <th style="width: 155px">名称</th>
      <th >说明</th>
    </tr>
  </thead>
  <tbody >
    <tr >
      <td >无</td>
      <td >主体内容</td>
    </tr>
    <tr >
      <td >title</td>
      <td >提示框标题，定义此 slot 时，会覆盖 props <code >title</code></td>
    </tr>
    <tr >
      <td >content</td>
      <td >提示框内容，定义此 slot 时，会覆盖 props <code >content</code>，只在非 confirm 模式下有效</td>
    </tr>
  </tbody>
</table>