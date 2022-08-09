### Page 分页
当数据量较多时，使用分页可以快速进行数据切换。
#### 基础用法。
::: demo  当数据量较多时，使用分页可以快速进行数据切换。
```html
<template>
    <Page :total="100" />
    <br>
    <Page :total="100" show-sizer />
    <br>
    <Page :total="100" show-elevator />
    <br>
    <Page :total="100" show-total />
    <br>
    <Page :total="40" size="small" />
    <br>
    <Page :total="40" size="small" show-elevator show-sizer />
    <br>
    <Page :total="40" size="small" show-total />
    <br>
    <Page :current="2" :total="50" simple />
    <br>
    <Page :total="100" prev-text="Previous" next-text="Next" />
</template>
<script>
    export default {
        
    }
</script>

```
:::
### API
#### Page props
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
      <td>current</td>
      <td>当前页码，支持 .sync 修饰符</td>
      <td>Number</td>
      <td>1</td>
    </tr>
    <tr>
      <td>total</td>
      <td>数据总数</td>
      <td>Number</td>
      <td>0</td>
    </tr>
    <tr>
      <td>page-size</td>
      <td>每页条数</td>
      <td>Number</td>
      <td>10</td>
    </tr>
    <tr>
      <td>page-size-opts</td>
      <td>每页条数切换的配置</td>
      <td>Array</td>
      <td>[10, 20, 30, 40]</td>
    </tr>
    <tr>
      <td>placement</td>
      <td>条数切换弹窗的展开方向，可选值为 <code>bottom</code> 和 <code>top</code></td>
      <td>String</td>
      <td>bottom</td>
    </tr>
    <tr>
      <td>size</td>
      <td>可选值为<code>small</code>（迷你版）、<code>default</code>（<span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.7.0</sup></span>）或不填（默认）</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>simple</td>
      <td>简洁版</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>show-total</td>
      <td>显示总数</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>show-elevator</td>
      <td>显示电梯，可以快速切换到某一页</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>show-sizer</td>
      <td>显示分页，用来改变<code>page-size</code></td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>class-name</td>
      <td>自定义 class 名称</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>styles</td>
      <td>自定义 style 样式</td>
      <td>Object</td>
      <td>-</td>
    </tr>
    <tr>
      <td>transfer</td>
      <td>是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>prev-text</td>
      <td>替代图标显示的上一页文字</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>next-text</td>
      <td>替代图标显示的下一页文字</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>disabled <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.0.0</sup></span></td>
      <td>是否禁用</td>
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

#### Page events
<table>
  <thead>
    <tr>
      <th>事件名</th>
      <th style="width: 480px">说明</th>
      <th>返回值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>on-change</td>
      <td>页码改变的回调，返回改变后的页码</td>
      <td>page</td>
    </tr>
    <tr>
      <td>on-page-size-change</td>
      <td>切换每页条数时的回调，返回切换后的每页条数</td>
      <td>page-size</td>
    </tr>
    <tr>
      <td>on-prev <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.7.0</sup></span></td>
      <td>切换上一页时触发，返回切换后的页码</td>
      <td>page</td>
    </tr>
    <tr>
      <td>on-next <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.7.0</sup></span></td>
      <td>切换下一页时触发，返回切换后的页码</td>
      <td>page</td>
    </tr>
  </tbody>
</table>