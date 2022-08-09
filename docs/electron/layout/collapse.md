### Collapse 折叠面板
将内容区域折叠/展开。
#### 基础用法。
::: demo  将内容区域折叠/展开。
```html
<template>
    <Collapse v-model="value1">
        <Panel name="1">
            史蒂夫·乔布斯
            <p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
        </Panel>
        <Panel name="2">
            斯蒂夫·盖瑞·沃兹尼亚克
            <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
        </Panel>
        <Panel name="3">
            乔纳森·伊夫
            <p slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
        </Panel>
    </Collapse>
</template>
<script>
    export default {
        data () {
            return {
                value1: '1'
            }
        }
    }
</script>
```
:::

### API
#### Collapse props
<table>
  <thead>
    <tr>
      <th>属性</th>
      <th style="width: 500px">说明</th>
      <th>类型</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>value</td>
      <td>当前激活的面板的 name，可以使用 v-model 双向绑定</td>
      <td>Array | String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>accordion</td>
      <td>是否开启手风琴模式，开启后每次至多展开一个面板</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>simple</td>
      <td>是否开启简洁模式</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
  </tbody>
</table>

#### Collapse events
<table>
  <thead>
    <tr>
      <th style="width: 115px">事件名</th>
      <th style="width: 550px">说明</th>
      <th style="width: 115px">返回值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>on-change</td>
      <td>切换面板时触发，返回当前已展开的面板的 key，格式为数组</td>
      <td>[]</td>
    </tr>
  </tbody>
</table>

#### Panel props
<table>
  <thead>
    <tr>
      <th style="width: 115px">属性</th>
      <th style="width: 480px">说明</th>
      <th>类型</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>name</td>
      <td>当前面板的 name，与 Collapse的<code>value</code>对应，不填为索引值</td>
      <td>String</td>
      <td>index</td>
    </tr>
    <tr>
      <td>hide-arrow</td>
      <td>隐藏箭头</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
  </tbody>
</table>

#### Panel slot 
<table>
  <thead>
    <tr>
      <th style="width: 115px">名称</th>
      <th style="width: 650px">说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>无</td>
      <td>面板头内容</td>
    </tr>
    <tr>
      <td>content</td>
      <td>描述内容</td>
    </tr>
  </tbody>
</table>