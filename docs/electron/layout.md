# 布局
## Grid 栅格
采用24栅格系统,将区域进行24等分.
#### 基础用法。
::: demo  栅格
```html
<template>
    <Row>
        <Col span="12">col-12</Col>
        <Col span="12">col-12</Col>
    </Row>
    <br>
    <Row>
        <Col span="8">col-8</Col>
        <Col span="8">col-8</Col>
        <Col span="8">col-8</Col>
    </Row>
    <br>
    <Row>
        <Col span="6">col-6</Col>
        <Col span="6">col-6</Col>
        <Col span="6">col-6</Col>
        <Col span="6">col-6</Col>
    </Row>
</template>
<script>
    export default {
        
    }
</script>
```
:::

#### API
####  Row props
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
      <td>gutter</td>
      <td>栅格间距，单位 px，左右平分</td>
      <td>Number</td>
      <td>0</td>
    </tr>
    <tr>
      <td>type</td>
      <td>布局模式，可选值为<code>flex</code>或不选，在现代浏览器下有效。<code>4.5.0</code> 版本起强制使用 flex 布局</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>align</td>
      <td>flex 布局下的垂直对齐方式，可选值为<code>top</code>、<code>middle</code>、<code>bottom</code></td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>justify</td>
      <td>flex 布局下的水平排列方式，可选值为<code>start</code>、<code>end</code>、<code>center</code>、<code>space-around</code>、<code>space-between</code></td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>class-name</td>
      <td>自定义的class名称</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>wrap <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.5.0</sup></span></td>
      <td>是否自动换行</td>
      <td>Boolean</td>
      <td>true</td>
    </tr>
  </tbody>
</table>

## List 列表
最基础的列表展示，可承载文字、列表、图片、段落，常用于后台数据展示页面。
#### 基础用法。
::: demo  最基础的列表展示，可承载文字、列表、图片、段落，常用于后台数据展示页面。
```html
<template>
    <div>
        <strong>Default Size:</strong>
        <br><br>
        <List header="Header" footer="Footer" border>
            <ListItem>This is a piece of text.</ListItem>
            <ListItem>This is a piece of text.</ListItem>
            <ListItem>This is a piece of text.</ListItem>
        </List>
        <br>
        <strong>Small Size:</strong>
        <br><br>
        <List header="Header" footer="Footer" border size="small">
            <ListItem>This is a piece of text.</ListItem>
            <ListItem>This is a piece of text.</ListItem>
            <ListItem>This is a piece of text.</ListItem>
        </List>
        <br>
        <strong>Large Size:</strong>
        <br><br>
        <List header="Header" footer="Footer" border size="large">
            <ListItem>This is a piece of text.</ListItem>
            <ListItem>This is a piece of text.</ListItem>
            <ListItem>This is a piece of text.</ListItem>
        </List>
    </div>
</template>
<script>
    export default {
        
    }
</script>
```
:::
#### API
#### Row props
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
      <td>border</td>
      <td>是否显示边框</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>item-layout</td>
      <td>设置 ListItem 布局, 可选值为 horizontal（横排）或 vertical（竖直）</td>
      <td>String</td>
      <td>horizontal</td>
    </tr>
    <tr>
      <td>header</td>
      <td>列表头部</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>footer</td>
      <td>列表底部</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>loading</td>
      <td>列表是否正在加载</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>size</td>
      <td>列表尺寸，可选值为 small、large、default</td>
      <td>String</td>
      <td>default</td>
    </tr>
    <tr>
      <td>split</td>
      <td>是否展示分割线</td>
      <td>Boolean</td>
      <td>true</td>
    </tr>
  </tbody>
</table>

## Card 卡片
基础容器，用来显示文字、列表、图文等内容，也可以配合其它组件一起使用。
#### 基础用法。
::: demo  基础容器，用来显示文字、列表、图文等内容，也可以配合其它组件一起使用。
```html
<template>
    <Row style="background:#eee;padding:20px">
        <Col span="11">
            <Card :bordered="false">
                <p slot="title">Borderless card</p>
                <p>Content of card</p>
                <p>Content of card</p>
                <p>Content of card</p>
            </Card>
        </Col>
        <Col span="11" offset="2">
            <Card shadow>
                <p slot="title">Use a card with a shadow effect</p>
                <p>Content of card</p>
                <p>Content of card</p>
                <p>Content of card</p>
            </Card>
        </Col>
    </Row>
</template>
<script>
    export default {
        
    }
</script>
```
:::
#### API
####  Card props
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
      <td>bordered</td>
      <td>是否显示边框，建议在灰色背景下使用</td>
      <td>Boolean</td>
      <td>true</td>
    </tr>
    <tr>
      <td>dis-hover</td>
      <td>禁用鼠标悬停显示阴影</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>shadow</td>
      <td>卡片阴影，建议在灰色背景下使用</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>padding</td>
      <td>卡片内部间距，单位 px</td>
      <td>Number</td>
      <td>16</td>
    </tr>
    <tr>
      <td>title</td>
      <td>标题，2.12.0 新增</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>icon</td>
      <td>标题前的图标，2.12.0 新增</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>to <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.0.0</sup></span></td>
      <td>跳转的链接，支持 vue-router 对象</td>
      <td>String | Object</td>
      <td>-</td>
    </tr>
    <tr>
      <td>replace <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.0.0</sup></span></td>
      <td>路由跳转时，开启 replace 将不会向 history 添加新记录</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>target <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.0.0</sup></span></td>
      <td>相当于 a 链接的 target 属性</td>
      <td>String</td>
      <td>_self</td>
    </tr>
    <tr>
      <td>append <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.0.0</sup></span></td>
      <td>同 vue-router append</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
  </tbody>
</table>

## Collapse 折叠面板
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
## Split 面板分割
将内容区域折叠/展开。
#### 基础用法。
::: demo  可将一片区域，分割为可以拖拽调整宽度或高度的两部分区域。
```html
<template>
    <div class="demo-split">
        <Split v-model="split1">
            <div slot="left" class="demo-split-pane">
                Left Pane
            </div>
            <div slot="right" class="demo-split-pane">
                Right Pane
            </div>
        </Split>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                split1: 0.5
            }
        },
    }
</script>
<style>
    .demo-split{
        height: 200px;
        border: 1px solid #dcdee2;
    }
    .demo-split-pane{
        padding: 10px;
    }
</style>
```
:::
## Divider 分割线
区隔内容的分割线。
#### 基础用法。
::: demo  可将一片区域，分割为可以拖拽调整宽度或高度的两部分区域。
```html
<template>
    <div>
        <Divider plain>Text</Divider>
        <p>Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple Inc.</p>
        <Divider plain orientation="left">Left Text</Divider>
        <p>Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple Inc.</p>
        <Divider plain orientation="right">Right Text</Divider>
        <p>Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple Inc.</p>
    </div>
</template>
<script>
    export default {
        
    }
</script>
```
:::
## Cell 单元格
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