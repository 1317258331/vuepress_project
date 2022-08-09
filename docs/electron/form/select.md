### Select 选择器
使用模拟的增强下拉选择器来代替浏览器原生的选择器
#### 基础用法。
::: demo  
```html
<template>
    <Select v-model="model1" style="width:200px">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
</template>
<script>
    export default {
        data () {
            return {
                cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],
                model1: ''
            }
        }
    }
</script>

```
:::
#### 多选
::: demo  
```html
<template>
    <Select v-model="model10" multiple style="width:260px">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
</template>
<script>
    export default {
        data () {
            return {
                cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],
                model10: []
            }
        }
    }
</script>
```
:::
### API
#### Select props
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
      <td>指定选中项目的 value 值，可以使用 v-model 双向绑定数据。单选时只接受 String 或 Number，多选时只接受 Array</td>
      <td>String | Number | Array</td>
      <td>空</td>
    </tr>
    <tr>
      <td>multiple</td>
      <td>是否支持多选</td>
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
      <td>clearable</td>
      <td>是否可以清空选项，只在单选时有效</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>filterable</td>
      <td>是否支持搜索</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>filter-by-label <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.2.0</sup></span></td>
      <td>在搜索时，是否只按照 label 进行搜索</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td><del>remote</del></td>
      <td><del>是否使用远程搜索</del></td>
      <td><del>Boolean</del></td>
      <td><del>false</del></td>
    </tr>
    <tr>
      <td>remote-method</td>
      <td>远程搜索的方法</td>
      <td>Function</td>
      <td>-</td>
    </tr>
    <tr>
      <td>loading</td>
      <td>当前是否正在远程搜索</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>loading-text</td>
      <td>远程搜索中的文字提示</td>
      <td>String</td>
      <td>加载中</td>
    </tr>
    <tr>
      <td><del>label</del></td>
      <td><del>仅在 remote 模式下，初始化时使用。因为仅通过 value 无法得知选项的 label，需手动设置。</del></td>
      <td><del>String | Number | Array</del></td>
      <td><del>空</del></td>
    </tr>
    <tr>
      <td>default-label <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.4.0</sup></span></td>
      <td>远程搜索时，显示默认 label，详见示例</td>
      <td>String | Number | Array</td>
      <td>-</td>
    </tr>
    <tr>
      <td>size</td>
      <td>选择框大小，可选值为<code>large</code>、<code>small</code>、<code>default</code>或者不填</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>placeholder</td>
      <td>选择框默认文字</td>
      <td>String</td>
      <td>请选择</td>
    </tr>
    <tr>
      <td>not-found-text</td>
      <td>当下拉列表为空时显示的内容</td>
      <td>String</td>
      <td>无匹配数据</td>
    </tr>
    <tr>
      <td>label-in-value</td>
      <td>在返回选项时，是否将 label 和 value 一并返回，默认只返回 value</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>placement</td>
      <td>弹窗的展开方向，可选值为 <code>top</code>、<code>bottom</code>、<code>top-start</code>、<code>bottom-start</code>、<code>top-end</code>、<code>bottom-end</code></td>
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
      <td>transfer-class-name <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">3.3.0</sup></span></td>
      <td>开启 transfer 时，给浮层添加额外的 class 名称</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>prefix <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">3.4.0</sup></span></td>
      <td>在 Select 内显示图标</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>max-tag-count <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">3.4.0</sup></span></td>
      <td>多选时最多显示多少个 tag</td>
      <td>Number</td>
      <td>-</td>
    </tr>
    <tr>
      <td>max-tag-placeholder <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">3.4.0</sup></span></td>
      <td>隐藏 tag 时显示的内容，参数是剩余项数量</td>
      <td>Function</td>
      <td>-</td>
    </tr>
    <tr>
      <td>allow-create <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.0.0</sup></span></td>
      <td>是否允许用户创建新条目，需开启 filterable</td>
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
      <td>events-enabled <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.6.0</sup></span></td>
      <td>是否开启 Popper 的 eventsEnabled 属性，开启可能会牺牲一定的性能</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
  </tbody>
</table>

#### Select events
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
      <td>选中的<code>Option</code>变化时触发，默认返回 value，如需返回 label，详见 label-in-value 属性</td>
      <td>当前选中项</td>
    </tr>
    <tr>
      <td>on-query-change</td>
      <td>搜索词改变时触发</td>
      <td>query</td>
    </tr>
    <tr>
      <td>on-clear</td>
      <td>点击清空按钮时触发</td>
      <td>无</td>
    </tr>
    <tr>
      <td>on-open-change</td>
      <td>下拉框展开或收起时触发</td>
      <td>true / false</td>
    </tr>
    <tr>
      <td>on-create <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.0.0</sup></span></td>
      <td>新建条目时触发</td>
      <td>query</td>
    </tr>
    <tr>
      <td>on-select <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.1.0</sup></span></td>
      <td>选择项目时触发</td>
      <td>当前选中项</td>
    </tr>
    <tr>
      <td>on-set-default-options <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.4.0</sup></span></td>
      <td>配合 default-label 使用，详见示例</td>
      <td>options</td>
    </tr>
  </tbody>
</table>

#### Select methods 
<table>
  <thead>
    <tr>
      <th>方法名</th>
      <th style="width: 540px">说明</th>
      <th>参数</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>setQuery</td>
      <td>设置搜索词，为空时清空，仅在 <code>filterable="true"</code> 时有效</td>
      <td>query</td>
    </tr>
    <tr>
      <td>clearSingleSelect</td>
      <td>清空单选项，仅在 <code>clearable="true"</code> 时有效</td>
      <td>无</td>
    </tr>
  </tbody>
</table>

#### Select slot
<table>
  <thead>
    <tr>
      <th style="width: 155px">名称</th>
      <th style="width: 610px">说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>prefix <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">3.4.0</sup></span></td>
      <td>自定义 Select 内头部图标</td>
    </tr>
  </tbody>
</table>

#### Option props
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
      <td>选项值，默认根据此属性值进行筛选，必填</td>
      <td>String | Number</td>
      <td>无</td>
    </tr>
    <tr>
      <td>label</td>
      <td>选项显示的内容，默认会读取 slot，无 slot 时，优先读取该 label 值，无 label 时，读取 value。当选中时，选择器会显示 label 为已选文案。大部分情况不需要配置此项，直接写入 slot 即可，在自定义选项时，该属性非常有用。</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>是否禁用当前项</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>tag <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.0.0</sup></span></td>
      <td>设置后，在多选时，标签内容会优先显示设置的值</td>
      <td>String | Number</td>
      <td>-</td>
    </tr>
  </tbody>
</table>