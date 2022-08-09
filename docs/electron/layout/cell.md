### Cell 单元格
用于固定的菜单列表。
#### 基础用法。
::: demo  包含各类用法的综合示例。
```html
<template>
    <div style="padding: 10px;background: #f8f8f9">
        <Card title="Options" icon="ios-options" :padding="0" shadow style="width: 300px;">
            <CellGroup>
                <Cell title="Only show titles" />
                <Cell title="Display label content" label="label content" />
                <Cell title="Display right content" extra="details" />
                <Cell title="Link" extra="details" to="/components/button" />
                <Cell title="Open link in new window" to="/components/button" target="_blank" />
                <Cell title="Disabled" disabled />
                <Cell title="Selected" selected />
                <Cell title="With Badge" to="/components/badge">
                    <Badge :count="10" slot="extra" />
                </Cell>
                <Cell title="With Switch">
                    <Switch v-model="switchValue" slot="extra" />
                </Cell>
            </CellGroup>
        </Card>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                switchValue: true
            }
        },
    }
</script>
```
:::
### API
#### CellGroup events
<table>
  <thead>
    <tr>
      <th style="width: 135px">事件名</th>
      <th style="width: 550px">说明</th>
      <th>返回值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>on-click</td>
      <td>点击单元格时触发</td>
      <td>name</td>
    </tr>
  </tbody>
</table>

#### Cell props
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
      <td>name</td>
      <td>用来标识这一项</td>
      <td>String | Number</td>
      <td>-</td>
    </tr>
    <tr>
      <td>title</td>
      <td>左侧标题</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>label</td>
      <td>标题下方的描述信息</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>extra</td>
      <td>右侧额外内容</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>禁用该项</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>selected</td>
      <td>标记该项为选中状态</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>to</td>
      <td>跳转的链接，支持 vue-router 对象</td>
      <td>String | Object</td>
      <td>-</td>
    </tr>
    <tr>
      <td>replace</td>
      <td>路由跳转时，开启 replace 将不会向 history 添加新记录</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>target</td>
      <td>相当于 a 链接的 target 属性</td>
      <td>String</td>
      <td>_self</td>
    </tr>
    <tr>
      <td>append <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">3.4.0</sup></span></td>
      <td>同 vue-router append</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
  </tbody>
</table> 

#### Cell slot
<table>
  <thead>
    <tr>
      <th style="width: 165px">名称</th>
      <th style="width: 600px">说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>默认</td>
      <td>相当于 title</td>
    </tr>
    <tr>
      <td>icon</td>
      <td>标题前的 Icon</td>
    </tr>
    <tr>
      <td>label</td>
      <td>相当于 label</td>
    </tr>
    <tr>
      <td>extra</td>
      <td>相当于 extra</td>
    </tr>
    <tr>
      <td>arrow</td>
      <td>有链接时，可自定义右侧箭头</td>
    </tr>
  </tbody>
</table>