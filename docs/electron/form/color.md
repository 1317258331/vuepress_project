### ColorPicker 颜色选择器
用于颜色选择，支持多种颜色格式，支持颜色预设。
#### 基础用法
::: demo  
```html
<template>
    <Row>
        <Col span="12">
            有默认值
            <ColorPicker v-model="color1" />
        </Col>
        <Col span="12">
            无默认值
            <ColorPicker v-model="color2" />
        </Col>
    </Row>
</template>
<script>
    export default {
        data () {
            return {
                color1: '#19be6b',
                color2: ''
            }
        }
    }
</script>
```
:::
### API
#### ColorPicker props
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
    <td>绑定的值，可使用 v-model 双向绑定</td>
    <td>String</td>
    <td>-</td>
  </tr>
  <tr>
    <td>disabled</td>
    <td>是否禁用</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
  <tr>
    <td>editable</td>
    <td>是否可以输入色值</td>
    <td>Boolean</td>
    <td>true</td>
  </tr>
  <tr>
    <td>alpha</td>
    <td>是否支持透明度选择</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
  <tr>
    <td>hue</td>
    <td>是否支持色彩选择</td>
    <td>Boolean</td>
    <td>true</td>
  </tr>
  <tr>
    <td>recommend</td>
    <td>是否显示推荐的颜色预设</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
  <tr>
    <td>colors</td>
    <td>自定义颜色预设</td>
    <td>Array</td>
    <td>[]</td>
  </tr>
  <tr>
    <td>format</td>
    <td>颜色的格式，可选值为 hsl、hsv、hex、rgb</td>
    <td>String</td>
    <td>开启 alpha 时为 rgb，其它为 hex</td>
  </tr>
  <tr>
    <td>size</td>
    <td>尺寸，可选值为<code>large</code>、<code>small</code>、<code>default</code>或者不设置</td>
    <td>String</td>
    <td>-</td>
  </tr>
  <tr>
    <td>transfer</td>
    <td>是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
  <tr>
    <td>capture <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.0.0</sup></span></td>
    <td>是否开启 capture 模式，也可通过全局配置</td>
    <td>Boolean</td>
    <td>true</td>
  </tr>
  <tr>
    <td>transfer-class-name <span class="ivu-badge"> <sup
      class="ivu-badge-count ivu-badge-count-alone">4.4.0</sup></span></td>
    <td>开启 transfer 时，给浮层添加额外的 class 名称</td>
    <td>String</td>
    <td>-</td>
  </tr>
  <tr>
    <td>events-enabled <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.6.0</sup></span>
    </td>
    <td>是否开启 Popper 的 eventsEnabled 属性，开启可能会牺牲一定的性能</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
  </tbody>
</table>

#### ColorPicker events 
<table>
  <thead>
  <tr>
    <th>事件名</th>
    <th style="width: 444px">说明</th>
    <th>返回值</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>on-change</td>
    <td>当绑定值变化时触发</td>
    <td>当前值</td>
  </tr>
  <tr>
    <td>on-active-change</td>
    <td>面板中当前显示的颜色发生改变时触发</td>
    <td>当前显示的颜色值</td>
  </tr>
  <tr>
    <td>on-open-change</td>
    <td>下拉框展开或收起时触发</td>
    <td>true / false</td>
  </tr>
  </tbody>
</table>