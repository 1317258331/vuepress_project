### Tabs 标签页
选项卡切换组件，常用于平级区域大块内容的的收纳和展现。
#### 基础用法
::: demo  选项卡切换组件，常用于平级区域大块内容的的收纳和展现。
```html
<template>
    <Tabs value="name1">
        <TabPane label="标签一" name="name1">标签一的内容</TabPane>
        <TabPane label="标签二" name="name2">标签二的内容</TabPane>
        <TabPane label="标签三" name="name3">标签三的内容</TabPane>
    </Tabs>
</template>
<script>
    export default {
        
    }
</script>
```
:::
#### 禁用某一项
::: demo  
```html
<template>
    <Tabs>
        <TabPane label="标签一">标签一的内容</TabPane>
        <TabPane label="标签二" disabled>标签二的内容</TabPane>
        <TabPane label="标签三">标签三的内容</TabPane>
    </Tabs>
</template>
<script>
    export default {
        
    }
</script>
```
:::
#### 卡片样式
::: demo  
```html
<template>
    <Tabs type="card">
        <TabPane label="标签一">标签一的内容</TabPane>
        <TabPane label="标签二">标签二的内容</TabPane>
        <TabPane label="标签三">标签三的内容</TabPane>
    </Tabs>
</template>
<script>
    export default {
        
    }
</script>
```
:::

### API
#### Tabs props
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
      <td>当前激活 tab 面板的 name，可以使用 v-model 双向绑定数据</td>
      <td>String</td>
      <td>默认为第一项的 name</td>
    </tr>
    <tr>
      <td>type</td>
      <td>页签的基本样式，可选值为 <code>line</code> 和 <code>card</code></td>
      <td>String</td>
      <td>line</td>
    </tr>
    <tr>
      <td>size</td>
      <td>尺寸，可选值为 <code>default</code> 和 <code>small</code>，仅在 <code>type="line"</code> 时有效</td>
      <td>String</td>
      <td>default</td>
    </tr>
    <tr>
      <td>closable</td>
      <td>是否可以关闭页签，仅在 <code>type="card"</code> 时有效</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>animated</td>
      <td>是否使用 CSS3 动画</td>
      <td>Boolean</td>
      <td>true</td>
    </tr>
    <tr>
      <td>capture-focus</td>
      <td>Tabs 内的表单类组件是否自动获得焦点</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>before-remove</td>
      <td>关闭前的函数，返回 Promise 可阻止标签关闭</td>
      <td>Function</td>
      <td>-</td>
    </tr>
    <tr>
      <td>name <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">3.3.1</sup></span></td>
      <td>当嵌套使用 Tabs，指定 name 区分层级</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>draggable <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.3.0</sup></span></td>
      <td>开启可配合事件 @on-drag-drop 实现拖拽调整页签顺序，详见示例</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
  </tbody>
</table>

#### Tabs events
<table>
  <thead>
    <tr>
      <th>事件名</th>
      <th style="width: 265px">说明</th>
      <th>返回值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>on-click</td>
      <td>tab 被点击时触发</td>
      <td>name</td>
    </tr>
    <tr>
      <td>on-tab-remove</td>
      <td>tab 被关闭时触发</td>
      <td>name</td>
    </tr>
    <tr>
      <td>on-contextmenu <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.3.0</sup></span></td>
      <td>当前页签点击右键时触发</td>
      <td>data, event, position</td>
    </tr>
    <tr>
      <td>on-drag-drop <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.3.0</sup></span></td>
      <td>拖拽调整页签顺序时触发</td>
      <td>name1, name2, index1, index2, names</td>
    </tr>
  </tbody>
</table>

#### Tabs slot
<table>
  <thead>
    <tr>
      <th>名称</th>
      <th style="width: 589px">说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>extra</td>
      <td>附加内容</td>
    </tr>
    <tr>
      <td>contextMenu <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.3.0</sup></span></td>
      <td>右键菜单，详见示例</td>
    </tr>
  </tbody>
</table>

#### TabPane props 
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
      <td>用于标识当前面板，对应 value，默认为其索引值</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>label</td>
      <td>选项卡头显示文字，支持 Render 函数。<span><a href="https://segmentfault.com/ls/1650000011074057" target="_blank"><i class="ivu-icon ivu-icon-social-youtube-outline"></i> <span> 学习 Render 函数的内容</span></a> <!----> <!----></span></td>
      <td>String | Function</td>
      <td>空</td>
    </tr>
    <tr>
      <td>icon</td>
      <td>选项卡图标</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>是否禁用该选项卡</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>closable</td>
      <td>是否可以关闭页签，仅在 <code>type="card"</code> 时有效</td>
      <td>Boolean</td>
      <td>null</td>
    </tr>
    <tr>
      <td>tab <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">3.3.1</sup></span></td>
      <td>当嵌套使用 Tabs，设置该属性指向对应 Tabs 的 name 字段</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>index <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">3.3.1</sup></span></td>
      <td>在 TabPane 使用 v-if 时，并不会按照预先的顺序渲染，这时可设置 index，并从小到大排序(需大于 0)</td>
      <td>Number</td>
      <td>-</td>
    </tr>
    <tr>
      <td>context-menu <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.3.0</sup></span></td>
      <td>是否支持右键菜单</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
  </tbody>
</table>