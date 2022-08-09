### InputNumber 数字输入框
使用鼠标或键盘输入一定范围的标准数值。
#### 可选择
::: demo  
```html
<template>
    <InputNumber :max="10" :min="1" v-model="value1"></InputNumber>
</template>
<br>
<template>
    <InputNumber :max="10" :min="1" :step="1.2" v-model="value2"></InputNumber>
</template>
<br>
<template>
    <div>
        <InputNumber
            :max="10000"
            v-model="value9"
            :formatter="value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
            :parser="value => value.replace(/\$\s?|(,*)/g, '')"></InputNumber>
        <InputNumber
            :max="100"
            v-model="value10"
            :formatter="value => `${value}%`"
            :parser="value => value.replace('%', '')"></InputNumber>
    </div>
<br>
    <InputNumber v-model="value3" size="small"></InputNumber>
    <InputNumber v-model="value4"></InputNumber>
    <InputNumber v-model="value5" size="large"></InputNumber>
<br>
    <InputNumber v-model="value6" :disabled="disabled"></InputNumber>
    <Button type="primary" @click="disabled = !disabled">Toggle Disabled</Button>
<br>
    <InputNumber v-model="value7" readonly></InputNumber>
<br>
    <InputNumber v-model="value8" :editable="false"></InputNumber>
<br>
    <InputNumber v-model="value11" controls-outside></InputNumber>
</template>
<script>
    export default {
        data () {
            return {
                value1: 1,
                value2: 1,
                value9: 1000,
                value10: 100,
                value3: 2,
                value4: 2,
                value5: 2,
                disabled: true,
                value6: 1,
                value7: 1,
                value8: 1,
                value8: 11
            }
        }
    }
</script>
```
:::
### API
#### InputNumber props
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
    <td>max</td>
    <td>最大值</td>
    <td>Number</td>
    <td>Infinity</td>
  </tr>
  <tr>
    <td>min</td>
    <td>最小值</td>
    <td>Number</td>
    <td>-Infinity</td>
  </tr>
  <tr>
    <td>value</td>
    <td>当前值，可以使用 v-model 双向绑定数据</td>
    <td>Number</td>
    <td>1</td>
  </tr>
  <tr>
    <td>controls-outside <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.5.0</sup></span>
    </td>
    <td>按钮位置是否置于两侧</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
  <tr>
    <td>step</td>
    <td>每次改变的步伐，可以是小数</td>
    <td>Number</td>
    <td>1</td>
  </tr>
  <tr>
    <td>size</td>
    <td>输入框尺寸，可选值为<code>large</code>、<code>small</code>、<code>default</code>或者不填</td>
    <td>String</td>
    <td>-</td>
  </tr>
  <tr>
    <td>disabled</td>
    <td>设置禁用状态</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
  <tr>
    <td>placeholder</td>
    <td>占位文本</td>
    <td>String</td>
    <td>-</td>
  </tr>
  <tr>
    <td>formatter</td>
    <td>指定输入框展示值的格式</td>
    <td>Function</td>
    <td>-</td>
  </tr>
  <tr>
    <td>parser</td>
    <td>指定从 formatter 里转换回数字的方式，和 formatter 搭配使用</td>
    <td>Function</td>
    <td>-</td>
  </tr>
  <tr>
    <td>readonly</td>
    <td>是否设置为只读</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
  <tr>
    <td>editable</td>
    <td>是否可编辑</td>
    <td>Boolean</td>
    <td>true</td>
  </tr>
  <tr>
    <td>precision</td>
    <td>数值精度</td>
    <td>Number</td>
    <td>-</td>
  </tr>
  <tr>
    <td>element-id</td>
    <td>给表单元素设置 <code>id</code>，详见 Form 用法。</td>
    <td>String</td>
    <td>-</td>
  </tr>
  <tr>
    <td>active-change</td>
    <td>是否实时响应数据，设置为 false 时，只会在失焦时更改数据</td>
    <td>Boolean</td>
    <td>true</td>
  </tr>
  </tbody>
</table>

#### InputNumber events
<table>
  <thead>
  <tr>
    <th>事件名</th>
    <th style="width: 573px">说明</th>
    <th>返回值</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>on-change</td>
    <td>数值改变时的回调，返回当前值</td>
    <td>当前值</td>
  </tr>
  <tr>
    <td>on-focus</td>
    <td>聚焦时触发</td>
    <td>event</td>
  </tr>
  <tr>
    <td>on-blur</td>
    <td>失焦时触发</td>
    <td>-</td>
  </tr>
  </tbody>
</table>