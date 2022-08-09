### Tooltip 文字提示
文字提示气泡框，在鼠标悬停时显示，代替了系统的title提示。
#### 基础用法
::: demo  
```html
<template>
  <div class="about">
     <div class="top">
        <Tooltip content="Top Left text" placement="top-start">
            <Button>Top Left</Button>
        </Tooltip>
        <Tooltip content="Top Center text" placement="top">
            <Button>Top Center</Button>
        </Tooltip>
        <Tooltip content="Top Right text" placement="top-end">
            <Button>Top Right</Button>
        </Tooltip>
    </div>
    <div class="center">
        <div class="center-left">
            <Tooltip content="Left Top text" placement="left-start">
                <Button>Left Top</Button>
            </Tooltip><br><br>
            <Tooltip content="Left Center text" placement="left">
                <Button>Left Center</Button>
            </Tooltip><br><br>
            <Tooltip content="Left Bottom text" placement="left-end">
                <Button>Left Bottom</Button>
            </Tooltip>
        </div>
        <div class="center-right">
            <Tooltip content="Right Top text" placement="right-start">
                <Button>Right Top</Button>
            </Tooltip><br><br>
            <Tooltip content="Right Center text" placement="right">
                <Button>Right Center</Button>
            </Tooltip><br><br>
            <Tooltip content="Right Bottom text" placement="right-end">
                <Button>Right Bottom</Button>
            </Tooltip>
        </div>
    </div>
    <div class="bottom">
        <Tooltip content="Bottom Left text" placement="bottom-start">
            <Button>Bottom Left</Button>
        </Tooltip>
        <Tooltip content="Bottom Center text" placement="bottom">
            <Button>Bottom Center</Button>
        </Tooltip>
        <Tooltip content="Bottom Right text" placement="bottom-end">
            <Button>Bottom Right</Button>
        </Tooltip>
    </div>
  </div>
</template>
```
:::
### API
#### Tooltip props
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
      <td >content</td>
      <td >显示的内容</td>
      <td >String | Number</td>
      <td >空</td>
    </tr>
    <tr >
      <td >placement</td>
      <td >提示框出现的位置，可选值为<code >top</code><code >top-start</code><code >top-end</code><code >bottom</code><code >bottom-start</code><code >bottom-end</code><code >left</code><code >left-start</code><code >left-end</code><code >right</code><code >right-start</code><code >right-end</code>，2.12.0 版本开始支持自动识别</td>
      <td >String</td>
      <td >bottom</td>
    </tr>
    <tr >
      <td >disabled</td>
      <td >是否禁用提示框</td>
      <td >Boolean</td>
      <td >false</td>
    </tr>
    <tr >
      <td >delay</td>
      <td >延迟显示，单位毫秒</td>
      <td >Number</td>
      <td >0</td>
    </tr>
    <tr >
      <td >always</td>
      <td >是否总是可见</td>
      <td >Boolean</td>
      <td >false</td>
    </tr>
    <tr >
      <td >theme</td>
      <td >主题，可选值为 dark 或 light</td>
      <td >String</td>
      <td >dark</td>
    </tr>
    <tr >
      <td >max-width</td>
      <td >最大宽度，超出最大值后，文本将自动换行，并两端对齐</td>
      <td >String | Number</td>
      <td >-</td>
    </tr>
    <tr >
      <td >offset</td>
      <td >出现位置的偏移量</td>
      <td >Number</td>
      <td >0</td>
    </tr>
    <tr >
      <td >transfer</td>
      <td >是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果</td>
      <td >Boolean</td>
      <td >false</td>
    </tr>
    <tr >
      <td >options</td>
      <td >自定义 popper.js 的配置项，具体配置见 <a  href="https://popper.js.org/popper-documentation.html" target="_blank">popper.js 文档</a></td>
      <td >Object</td>
      <td ><div >
          <pre style="background-color: #f7f9fb" class=""><code style="color: #000">{
    <span>modifiers</span>: {
        <span>computeStyle</span>:{
            <span>gpuAcceleration</span>: <span>false</span>,
        },
        <span>preventOverflow</span> :{
            <span>boundariesElement</span>: <span>'window'</span>
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

#### Tooltip events 
<table >
  <thead >
    <tr >
      <th >事件名</th>
      <th style="width: 530px">说明</th>
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
  </tbody>
</table>

#### Tooltip slot
<table >
  <thead >
    <tr >
      <th style="width: 155px">名称</th>
      <th style="width: 610px">说明</th>
    </tr>
  </thead>
  <tbody >
    <tr >
      <td >无</td>
      <td >主体内容</td>
    </tr>
    <tr >
      <td >content</td>
      <td >提示框的内容，定义此 slot 时，会覆盖 props <code >content</code>。</td>
    </tr>
  </tbody>
</table>