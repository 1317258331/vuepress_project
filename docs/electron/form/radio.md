### Radio 单选框
基本组件-单选框。主要用于一组可选项单项选择，或者单独用于切换到选中状态。
#### 基础用法。
::: demo  
```html
<template>
    <Radio v-model="disabledSingle" disabled>Radio</Radio>
    <br>
    <RadioGroup v-model="disabledGroup">
        <Radio label="金斑蝶" disabled></Radio>
        <Radio label="爪哇犀牛"></Radio>
        <Radio label="印度黑羚"></Radio>
    </RadioGroup>
</template>
<script>
    export default {
        data () {
            return {
                disabledSingle: true,
                disabledGroup: '爪哇犀牛'
            }
        }
    }
</script>
```
:::
### API
#### Radio props 
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
      <td>只在单独使用时有效。可以使用 <code>v-model</code> 双向绑定数据</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>label </td>
      <td>只在组合使用时有效。指定当前选项的 value 值，组合会自动判断当前选择的项目</td>
      <td>String | Number</td>
      <td>-</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>是否禁用当前项</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>size</td>
      <td>单选框的尺寸，可选值为 <code>large</code>、<code>small</code>、<code>default</code> 或者不设置</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>border <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.0.0</sup></span></td>
      <td>是否显示边框</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>true-value</td>
      <td>选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用</td>
      <td>String, Number, Boolean</td>
      <td>true</td>
    </tr>
    <tr>
      <td>false-value</td>
      <td>没有选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用</td>
      <td>String, Number, Boolean</td>
      <td>false</td>
    </tr>
  </tbody>
</table>

#### Radio events
<table>
  <thead>
    <tr>
      <th>事件名</th>
      <th>说明</th>
      <th>返回值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>on-change</td>
      <td>在选项状态发生改变时触发，返回当前状态。通过修改外部的数据改变时不会触发</td>
      <td>...</td>
    </tr>
  </tbody>
</table>

#### RadioGroup props
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
      <td>指定当前选中的项目数据。可以使用 <code>v-model</code> 双向绑定数据</td>
      <td>String | Number</td>
      <td>-</td>
    </tr>
    <tr>
      <td>type</td>
      <td>可选值为 button 或不填，为 button 时使用按钮样式</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>button-style <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.5.0</sup></span></td>
      <td>按钮样式，可选值为 default 和 solid</td>
      <td>String</td>
      <td>default</td>
    </tr>
    <tr>
      <td>size</td>
      <td>尺寸，可选值为<code>large</code>、<code>small</code>、<code>default</code>或者不设置</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>vertical</td>
      <td>是否垂直排列，按钮样式下无效</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
  </tbody>
</table>

#### RadioGroup events
<table>
  <thead>
    <tr>
      <th>事件名</th>
      <th>说明</th>
      <th>返回值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>on-change</td>
      <td>在选项状态发生改变时触发，返回当前选中的项。通过修改外部的数据改变时不会触发</td>
      <td>...</td>
    </tr>
  </tbody>
</table>