### Cascader 级联选择
从一组相关联的数据集合中进行选择，常用于省市区、公司级层、事务分类等。
#### 基础用法
::: demo  
```html
<template>
    <Cascader :data="data" v-model="value1"></Cascader>
</template>
<script>
    export default {
        data () {
            return {
                value1: [],
                data: [{
                    value: 'beijing',
                    label: '北京',
                    children: [
                        {
                            value: 'gugong',
                            label: '故宫'
                        },
                        {
                            value: 'tiantan',
                            label: '天坛'
                        },
                        {
                            value: 'wangfujing',
                            label: '王府井'
                        }
                    ]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [
                        {
                            value: 'nanjing',
                            label: '南京',
                            children: [
                                {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                }
                            ]
                        },
                        {
                            value: 'suzhou',
                            label: '苏州',
                            children: [
                                {
                                    value: 'zhuozhengyuan',
                                    label: '拙政园',
                                },
                                {
                                    value: 'shizilin',
                                    label: '狮子林',
                                }
                            ]
                        }
                    ],
                }]
            }
        }
    }
</script>
```
:::
### API
#### Cascader props
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
      <td >data</td>
      <td >可选项的数据源，格式参照示例说明</td>
      <td >Array</td>
      <td >[]</td>
    </tr>
    <tr >
      <td >value</td>
      <td >当前已选项的数据，格式参照示例说明</td>
      <td >Array</td>
      <td >[]</td>
    </tr>
    <tr >
      <td >render-format</td>
      <td >选择后展示的函数，用于自定义显示格式</td>
      <td >Function</td>
      <td >label =&gt; label.join(' / ')</td>
    </tr>
    <tr >
      <td >disabled</td>
      <td >是否禁用选择器</td>
      <td >Boolean</td>
      <td >false</td>
    </tr>
    <tr >
      <td >clearable</td>
      <td >是否支持清除</td>
      <td >Boolean</td>
      <td >true</td>
    </tr>
    <tr >
      <td >placeholder</td>
      <td >输入框占位符</td>
      <td >String</td>
      <td >请选择</td>
    </tr>
    <tr >
      <td >trigger</td>
      <td >次级菜单展开方式，可选值为 <code >click</code> 或 <code >hover</code></td>
      <td >String</td>
      <td >click</td>
    </tr>
    <tr >
      <td >change-on-select</td>
      <td >当此项为 true 时，点选每级菜单选项值都会发生变化，具体见上面的示例</td>
      <td >Boolean</td>
      <td >false</td>
    </tr>
    <tr >
      <td >size</td>
      <td >输入框大小，可选值为<code >large</code>和<code >small</code>或者不填</td>
      <td >String</td>
      <td >-</td>
    </tr>
    <tr >
      <td >load-data</td>
      <td >动态获取数据，数据源需标识 loading</td>
      <td >Function</td>
      <td >-</td>
    </tr>
    <tr >
      <td >filterable</td>
      <td >是否支持搜索</td>
      <td >Boolean</td>
      <td >false</td>
    </tr>
    <tr >
      <td >not-found-text</td>
      <td >当搜索列表为空时显示的内容</td>
      <td >String</td>
      <td >无匹配数据</td>
    </tr>
    <tr >
      <td >transfer</td>
      <td >是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果</td>
      <td >Boolean</td>
      <td >false</td>
    </tr>
    <tr >
      <td >element-id</td>
      <td >给表单元素设置 <code >id</code>，详见 Form 用法。</td>
      <td >String</td>
      <td >-</td>
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

#### Cascader events
<table >
  <thead >
    <tr >
      <th >事件名</th>
      <th >说明</th>
      <th >返回值</th>
    </tr>
  </thead>
  <tbody >
    <tr >
      <td >on-change</td>
      <td >选择完成后的回调，返回值 value 即已选值 value，selectedData 为已选项的具体数据</td>
      <td >value, selectedData</td>
    </tr>
    <tr >
      <td >on-visible-change</td>
      <td >展开和关闭弹窗时触发</td>
      <td >显示状态，Boolean</td>
    </tr>
  </tbody>
</table>