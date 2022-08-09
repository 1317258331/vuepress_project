### AutoComplete 自动完成
输入框自动完成功能。
::: demo  
```html
<template>
    <AutoComplete
        v-model="value1"
        :data="data1"
        @on-search="handleSearch1"
        placeholder="input here"
        style="width:200px">
    </AutoComplete>
    <br><br>
    <AutoComplete
        v-model="value2"
        @on-search="handleSearch2"
        placeholder="input here"
        style="width:200px">
        <Option v-for="item in data2" :value="item" :key="item">{{ item }}</Option>
    </AutoComplete>
    <br><br>
    <AutoComplete
        v-model="value3"
        :data="data3"
        :filter-method="filterMethod"
        placeholder="input here"
        style="width:200px">
    </AutoComplete>
</template>
<script>
    export default {
        data () {
            return {
                //基础用法
                value1: '',
                data1: [],
                //自定义选项
                value2: '', 
                data2: [],
                //不区分大小写
                value3: '',
                data3: ['Steve Jobs', 'Stephen Gary Wozniak', 'Jonathan Paul Ive'],
            }
        },
        methods: {
            handleSearch1 (value) {
                this.data1 = !value ? [] : [
                    value,
                    value + value,
                    value + value + value
                ];
            },
            //
            handleSearch2 (value) {
                this.data2 = !value || value.indexOf('@') >= 0 ? [] : [
                    value + '@qq.com',
                    value + '@sina.com',
                    value + '@163.com'
                ];
            },
            //
            filterMethod (value, option) {
                return option.toUpperCase().indexOf(value.toUpperCase()) !== -1;
            },
        }
    }
</script>
```
:::
### API
#### AutoComplete props
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
      <td>String | Number</td>
      <td>-</td>
    </tr>
    <tr>
      <td>data</td>
      <td>自动完成的数据源</td>
      <td>Array</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>clearable</td>
      <td>是否可以清空选项</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>是否禁用</td>
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
      <td>size</td>
      <td>输入框尺寸，可选值为 <code>large</code>、<code>small</code>、<code>default</code> 或者不设置</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>icon</td>
      <td>输入框尾部图标</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>filter-method</td>
      <td>是否根据输入项进行筛选。当其为一个函数时，会接收 <code>value</code> 和 <code>option</code> 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false</td>
      <td>Function | Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>placement</td>
      <td>弹窗的展开方向，可选值为 <code>bottom</code>、<code>top</code>、<code>top-start</code>、<code>bottom-start</code>、<code>top-end</code>、<code>bottom-end</code>，2.12.0 版本开始支持自动识别</td>
      <td>String</td>
      <td>bottom-start</td>
    </tr>
    <tr>
      <td>transfer</td>
      <td>是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>element-id</td>
      <td>给表单元素设置 <code>id</code>，详见 Form 用法。</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>transfer-class-name <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.4.0</sup></span></td>
      <td>开启 transfer 时，给浮层添加额外的 class 名称</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>capture <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.6.0</sup></span></td>
      <td>是否开启 capture 模式，也可通过全局配置</td>
      <td>Boolean</td>
      <td>true</td>
    </tr>
    <tr>
      <td>events-enabled <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.6.0</sup></span></td>
      <td>是否开启 Popper 的 eventsEnabled 属性，开启可能会牺牲一定的性能</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
  </tbody>
</table>

#### AutoComplete events
<table>
  <thead>
    <tr>
      <th>事件名</th>
      <th style="width: 540px">说明</th>
      <th>返回值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>on-change</td>
      <td>选中 option，或 input 的 value 变化时，调用此函数</td>
      <td>value</td>
    </tr>
    <tr>
      <td>on-select</td>
      <td>被选中时调用，参数为选中项的 value 值</td>
      <td>value</td>
    </tr>
    <tr>
      <td>on-search</td>
      <td>搜索补全项的时候调用</td>
      <td>query</td>
    </tr>
    <tr>
      <td>on-focus</td>
      <td>聚焦时触发</td>
      <td>event</td>
    </tr>
    <tr>
      <td>on-blur</td>
      <td>失焦时触发</td>
      <td>event</td>
    </tr>
    <tr>
      <td>on-clear <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">3.3.0</sup></span></td>
      <td>清空时触发</td>
      <td>无</td>
    </tr>
  </tbody>
</table>