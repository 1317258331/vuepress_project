### Slider 滑块
滑动输入器，用于在数值区间/自定义区间内进行选择，支持连续或离散值。
#### 基础用法
::: demo  
```html
<template>
    <Slider v-model="value1"></Slider>
    <Slider v-model="value2" range></Slider>
    <Slider v-model="value3" range disabled></Slider>
</template>
<script>
    export default {
        data () {
            return {
                value1: 25,
                value2: [20, 50],
                value3: [20, 50]
            }
        }
    }
</script>
```
:::
### API
#### Slider props
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
      <td>滑块选定的值，可以使用 v-model 双向绑定数据。普通模式下，数据格式为数字，在双滑块模式下，数据格式为长度是2的数组，且每项都为数字</td>
      <td>Number | Array</td>
      <td>0</td>
    </tr>
    <tr>
      <td>min</td>
      <td>最小值</td>
      <td>Number</td>
      <td>0</td>
    </tr>
    <tr>
      <td>max</td>
      <td>最大值</td>
      <td>Number</td>
      <td>100</td>
    </tr>
    <tr>
      <td>step</td>
      <td>步长，取值建议能被（max - min）整除</td>
      <td>Number</td>
      <td>1</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>是否禁用滑块</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>range</td>
      <td>是否开启双滑块模式</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>show-input</td>
      <td>是否显示数字输入框，仅在单滑块模式下有效</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>show-stops</td>
      <td>是否显示间断点，建议在 step 不密集时使用</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>show-tip</td>
      <td>提示的显示控制，可选值为 <code>hover</code>（悬停，默认）、<code>always</code>（总是可见）、<code>never</code>（不可见）</td>
      <td>String</td>
      <td>hover</td>
    </tr>
    <tr>
      <td>tip-format</td>
      <td>Slider 会把当前值传给 <code>tip-format</code>，并在 Tooltip 中显示 tip-format 的返回值，若为 null，则隐藏 Tooltip</td>
      <td>Function</td>
      <td>value</td>
    </tr>
    <tr>
      <td>input-size</td>
      <td>数字输入框的尺寸，可选值为<code>large</code>、<code>small</code>、<code>default</code>或者不填，仅在开启 show-input 时有效</td>
      <td>String</td>
      <td>default</td>
    </tr>
    <tr>
      <td>active-change <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">3.4.0</sup></span></td>
      <td>同 InputNumber 的 active-change</td>
      <td>Boolean</td>
      <td>true</td>
    </tr>
    <tr>
      <td>marks <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.0.0</sup></span></td>
      <td>标记， key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标记可以单独设置样式</td>
      <td>Object</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

#### Slider events
<table>
  <thead>
    <tr>
      <th>事件名</th>
      <th style="width: 572px">说明</th>
      <th>返回值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>on-change</td>
      <td>在松开滑动时触发，返回当前的选值，在滑动过程中不会触发</td>
      <td>value</td>
    </tr>
    <tr>
      <td>on-input</td>
      <td>滑动条数据变化时触发，返回当前的选值，在滑动过程中实时触发</td>
      <td>value</td>
    </tr>
  </tbody>
</table>