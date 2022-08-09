### Dropdown 下拉菜单
展示一组折叠的下拉菜单。
#### 基础用法。
::: demo  展示一组折叠的下拉菜单。
```html
<template>
    <Dropdown>
        <a href="javascript:void(0)">
            下拉菜单
            <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
            <DropdownItem>驴打滚</DropdownItem>
            <DropdownItem>炸酱面</DropdownItem>
            <DropdownItem disabled>豆汁儿</DropdownItem>
            <DropdownItem>冰糖葫芦</DropdownItem>
            <DropdownItem divided>北京烤鸭</DropdownItem>
        </DropdownMenu>
    </Dropdown>
    <Dropdown style="margin-left: 20px">
        <Button type="primary">
            下拉菜单
            <Icon type="ios-arrow-down"></Icon>
        </Button>
        <DropdownMenu slot="list">
            <DropdownItem>驴打滚</DropdownItem>
            <DropdownItem>炸酱面</DropdownItem>
            <DropdownItem disabled>豆汁儿</DropdownItem>
            <DropdownItem>冰糖葫芦</DropdownItem>
            <DropdownItem divided>北京烤鸭</DropdownItem>
        </DropdownMenu>
    </Dropdown>
</template>
<script>
    export default {
        
    }
</script>
```
:::

### API
#### Dropdown props
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
      <td>trigger</td>
      <td>触发方式，可选值为 <code>hover</code>（悬停）<code>click</code>（点击）<code>contextMenu</code>（右键）<code>custom</code>（自定义），使用 custom 时，需配合 visible 一起使用</td>
      <td>String</td>
      <td>hover</td>
    </tr>
    <tr>
      <td>visible</td>
      <td>手动控制下拉框的显示，在 trigger = 'custom' 时使用</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>placement</td>
      <td>下拉菜单出现的位置，可选值为<code>top</code><code>top-start</code><code>top-end</code><code>bottom</code><code>bottom-start</code><code>bottom-end</code><code>left</code><code>left-start</code><code>left-end</code><code>right</code><code>right-start</code><code>right-end</code>, 2.12.0 版本开始支持自动识别</td>
      <td>String</td>
      <td>bottom</td>
    </tr>
    <tr>
      <td>transfer</td>
      <td>是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>transfer-class-name <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">3.3.0</sup></span></td>
      <td>开启 transfer 时，给浮层添加额外的 class 名称</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>stop-propagation <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">3.4.0</sup></span></td>
      <td>是否开启 stop-propagation</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>events-enabled <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.6.0</sup></span></td>
      <td>是否开启 Popper 的 eventsEnabled 属性，开启可能会牺牲一定的性能</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
  </tbody>
</table>

#### Dropdown events
<table>
  <thead>
    <tr>
      <th style="width: 200px">事件名</th>
      <th style="width: 340px">说明</th>
      <th>返回值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>on-click</td>
      <td>点击菜单项时触发</td>
      <td>DropdownItem 的 name 值</td>
    </tr>
    <tr>
      <td>on-visible-change</td>
      <td>菜单显示状态改变时调用</td>
      <td>visible</td>
    </tr>
    <tr>
      <td>on-clickoutside</td>
      <td>点击外部关闭下拉菜单时触发</td>
      <td>event</td>
    </tr>
  </tbody>
</table>

#### Dropdown slot
<table>
  <thead>
    <tr>
      <th style="width: 155px">名称</th>
      <th style="width: 610px">说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>无</td>
      <td>主体内容</td>
    </tr>
    <tr>
      <td>list</td>
      <td>列表内容，一般由 <code>DropdownMenu</code> 承担</td>
    </tr>
  </tbody>
</table>

#### DropdownItem props
<table>
  <thead>
    <tr>
      <th style="width: 135px">属性</th>
      <th style="width: 300px">说明</th>
      <th style="width: 180px">类型</th>
      <th style="width: 180px">默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>name</td>
      <td>用来标识这一项</td>
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
      <td>divided</td>
      <td>显示分割线</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>selected</td>
      <td>标记该项为选中状态</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
  </tbody>
</table>