### Checkbox 多选框
基本组件-多选框。主要用于一组可选项多项选择，或者单独用于标记切换某种状态。
#### 基础用法。
::: demo  
```html
<template>
    <Checkbox v-model="disabledSingle" disabled>Checkbox</Checkbox>
    <CheckboxGroup v-model="disabledGroup">
        <Checkbox label="香蕉" disabled></Checkbox>
        <Checkbox label="苹果" disabled></Checkbox>
        <Checkbox label="西瓜"></Checkbox>
    </CheckboxGroup>
</template>
<script>
    export default {
        data () {
            return {
                disabledSingle: true,
                disabledGroup: ['苹果']
            }
        }
    }
</script>
```
:::
### API
#### Checkbox props
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
      <td>只在单独使用时有效。可以使用 v-model 双向绑定数据</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>label</td>
      <td>只在组合使用时有效。指定当前选项的 value 值，组合会自动判断是否选中</td>
      <td>String | Number | Boolean</td>
      <td>-</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>是否禁用当前项</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>indeterminate</td>
      <td>设置 indeterminate 状态，只负责样式控制</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>size</td>
      <td>多选框的尺寸，可选值为 <code>large</code>、<code>small</code>、<code>default</code> 或者不设置</td>
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

#### Checkbox events
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
      <td>只在单独使用时有效。在选项状态发生改变时触发，通过修改外部的数据改变时不会触发</td>
      <td>true | false</td>
    </tr>
  </tbody>
</table>

#### CheckboxGroup props
<table>
  <thead>
    <tr>
      <th style="width: 105px">属性</th>
      <th>说明</th>
      <th>类型</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>value</td>
      <td>指定选中项目的集合，可以使用 v-model 双向绑定数据</td>
      <td>Array</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>size</td>
      <td>多选框组的尺寸，可选值为 <code>large</code>、<code>small</code>、<code>default</code> 或者不设置</td>
      <td>String</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

#### CheckboxGroup events
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
      <td>在选项状态发生改变时触发，返回已选中的数组。通过修改外部的数据改变时不会触发</td>
      <td>[...]</td>
    </tr>
  </tbody>
</table>