### Badge 徽标数
主要用于通知未读数的角标，提醒用户点击。
#### 基础用法。
::: demo  
```html
<template>
    <Badge :count="100">
        <a href="#" class="demo-badge"></a>
    </Badge>
    <Badge :count="1000" overflow-count="999">
        <a href="#" class="demo-badge"></a>
    </Badge>
</template>
<script>
    export default {
        
    }
</script>
```
:::
### API
#### Badge props
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
      <td>count</td>
      <td>显示的数字，大于<code>overflowCount</code>时，显示<code>${overflowCount}+</code>，为 0 时隐藏</td>
      <td>Number</td>
      <td>-</td>
    </tr>
    <tr>
      <td>overflow-count</td>
      <td>展示封顶的数字值</td>
      <td>Number | String</td>
      <td>99</td>
    </tr>
    <tr>
      <td>dot</td>
      <td>不展示数字，只有一个小红点，如需隐藏 dot ，需要设置<code>count</code>为 0 </td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>class-name</td>
      <td>自定义的class名称，dot 模式下无效</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>type</td>
      <td>使用预设的颜色，可选值为 success、primary、normal、error、warning、info</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>show-zero</td>
      <td>当数值为 0 时，是否展示 Badge</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>status</td>
      <td>设置 Badge 为状态点，可选值为 success、processing、default、error、warning</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>text</td>
      <td>自定义内容，如果设置了 status，则为状态点的文本</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>offset</td>
      <td>设置状态点的位置偏移，格式为 [x, y]</td>
      <td>Array</td>
      <td>-</td>
    </tr>
    <tr>
      <td>color <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.0.0</sup></span></td>
      <td>设置更多状态点的颜色或自定义颜色</td>
      <td>String</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

#### Badge slot
<table>
  <thead>
    <tr>
      <th>名称</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>count <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.0.0</sup></span></td>
      <td>自定义角标显示内容（去角标背景），数值 count 将无效。</td>
    </tr>
    <tr>
      <td>text <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.0.0</sup></span></td>
      <td>自定义角标显示内容（带角标背景），数值 count 将无效。亦可自定义状态点模式下的 text 内容。</td>
    </tr>
  </tbody>
</table>