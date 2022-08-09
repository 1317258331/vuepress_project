### Menu 导航菜单
为页面和功能提供导航的菜单列表，常用于网站顶部和左侧。
#### 分组
::: demo  
```html
<template>
    <Menu :theme="theme3" active-name="1">
        <MenuGroup title="内容管理">
            <MenuItem name="1">
                <Icon type="md-document" />
                文章管理
            </MenuItem>
            <MenuItem name="2">
                <Icon type="md-chatbubbles" />
                评论管理
            </MenuItem>
        </MenuGroup>
        <MenuGroup title="统计分析">
            <MenuItem name="3">
                <Icon type="md-heart" />
                用户留存
            </MenuItem>
            <MenuItem name="4">
                <Icon type="md-leaf" />
                流失用户
            </MenuItem>
        </MenuGroup>
    </Menu>
    <br>
    <p>切换主题</p>
    <RadioGroup v-model="theme3">
        <Radio label="light"></Radio>
        <Radio label="dark"></Radio>
    </RadioGroup>
</template>
<script>
    export default {
        data () {
            return {
                theme3: 'light'
            }
        }
    }
</script>
```
:::
### API
#### Menu props
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
      <td>mode</td>
      <td>菜单类型，可选值为 <code>horizontal</code>（水平） 和 <code>vertical</code>（垂直）</td>
      <td>String</td>
      <td>vertical</td>
    </tr>
    <tr>
      <td>theme</td>
      <td>主题，可选值为 <code>light</code>、<code>dark</code>、<code>primary</code>，其中 primary 只适用于 <code>mode="horizontal"</code></td>
      <td>String</td>
      <td>light</td>
    </tr>
    <tr>
      <td>active-name</td>
      <td>激活菜单的 name 值</td>
      <td>String | Number</td>
      <td>-</td>
    </tr>
    <tr>
      <td>open-names</td>
      <td>展开的 Submenu 的 name 集合</td>
      <td>Array</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>accordion</td>
      <td>是否开启手风琴模式，开启后每次至多展开一个子菜单</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>width</td>
      <td>导航菜单的宽度，只在 <code>mode="vertical"</code> 时有效，如果使用 <code>Col</code> 等布局，建议设置为 <code>auto</code></td>
      <td>String</td>
      <td>240px</td>
    </tr>
  </tbody>
</table>

#### Menu events
<table>
  <thead>
    <tr>
      <th>事件名</th>
      <th style="width: 310px">说明</th>
      <th>返回值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>on-select</td>
      <td>选择菜单（MenuItem）时触发</td>
      <td>name</td>
    </tr>
    <tr>
      <td>on-open-change</td>
      <td>当 展开/收起 子菜单时触发</td>
      <td>当前展开的 Submenu 的 name 值数组</td>
    </tr>
  </tbody>
</table>

#### Menu methods
<table>
  <thead>
    <tr>
      <th>方法名</th>
      <th style="width: 490px">说明</th>
      <th style="width: 105px">参数</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>updateOpened</td>
      <td>手动更新展开的子目录，注意要在 $nextTick 里调用</td>
      <td>无</td>
    </tr>
    <tr>
      <td>updateActiveName</td>
      <td>手动更新当前选择项，注意要在 $nextTick 里调用</td>
      <td>无</td>
    </tr>
  </tbody>
</table>

#### MenuItem props
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
      <td>菜单项的唯一标识，必填</td>
      <td>String | Number</td>
      <td>-</td>
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

#### Submenu props
<table>
  <thead>
    <tr>
      <th style="width: 135px">属性</th>
      <th style="width: 280px">说明</th>
      <th style="width: 280px">类型</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>name</td>
      <td>子菜单的唯一标识，必填</td>
      <td>String | Number</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

#### Submenu slot
<table>
  <thead>
    <tr>
      <th style="width: 135px">名称</th>
      <th style="width: 635px">说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>无</td>
      <td>菜单项</td>
    </tr>
    <tr>
      <td>title</td>
      <td>子菜单标题</td>
    </tr>
  </tbody>
</table>

#### MenuGroup props
<table>
  <thead>
    <tr>
      <th style="width: 155px">属性</th>
      <th style="width: 265px">说明</th>
      <th style="width: 265px">类型</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>title</td>
      <td>分组标题</td>
      <td>String</td>
      <td>空</td>
    </tr>
  </tbody>
</table>