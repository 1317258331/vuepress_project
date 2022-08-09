# 基础UI
## Icon 图标
使用Icon组件，指定图标对应的type属性
::: demo  全部图标请见 **图标库**
```html
<template>
  <div style='width: 100px; height: 100px;display: inline-block;text-align: center;' class="icon-list" v-for="item in glyphs" :key="item.icon_id">
        <Icon style="width:24px;height:24px;font-size:24px" :type="item.font_class" />
        <div>{{ item.unicode }}</div>
        <div>{{ item.font_class }}</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    glyphs: [
    {
      "icon_id": "19816863",
      "name": "loading",
      "font_class": "loading",
      "unicode": "e69b",
      "unicode_decimal": 59035
    },
    {
      "icon_id": "19800160",
      "name": "icon_jianqu",
      "font_class": "icon_jianqu",
      "unicode": "e699",
      "unicode_decimal": 59033
    },
    {
      "icon_id": "19800161",
      "name": "icon_tianjia",
      "font_class": "icon_tianjia",
      "unicode": "e69a",
      "unicode_decimal": 59034
    },
    {
      "icon_id": "19720618",
      "name": "icon_delete",
      "font_class": "icon_delete1",
      "unicode": "e68e",
      "unicode_decimal": 59022
    },
    {
      "icon_id": "19720619",
      "name": "icon_ad",
      "font_class": "icon_ad",
      "unicode": "e68f",
      "unicode_decimal": 59023
    },
    {
      "icon_id": "19631818",
      "name": "icon_export",
      "font_class": "icon_export1",
      "unicode": "e690",
      "unicode_decimal": 59024
    },
    {
      "icon_id": "19631819",
      "name": "icon_power",
      "font_class": "icon_power",
      "unicode": "e691",
      "unicode_decimal": 59025
    },
    {
      "icon_id": "19631820",
      "name": "icon_template",
      "font_class": "icon_template1",
      "unicode": "e692",
      "unicode_decimal": 59026
    },
    {
      "icon_id": "19631822",
      "name": "home",
      "font_class": "home",
      "unicode": "e693",
      "unicode_decimal": 59027
    },
    {
      "icon_id": "19631823",
      "name": "set",
      "font_class": "set",
      "unicode": "e694",
      "unicode_decimal": 59028
    },
    {
      "icon_id": "19631824",
      "name": "service",
      "font_class": "service",
      "unicode": "e695",
      "unicode_decimal": 59029
    },
    {
      "icon_id": "19631825",
      "name": "building",
      "font_class": "building",
      "unicode": "e696",
      "unicode_decimal": 59030
    },
    {
      "icon_id": "19631826",
      "name": "staff",
      "font_class": "staff",
      "unicode": "e697",
      "unicode_decimal": 59031
    },
    {
      "icon_id": "19631827",
      "name": "job",
      "font_class": "job",
      "unicode": "e698",
      "unicode_decimal": 59032
    },
    {
      "icon_id": "19631487",
      "name": "icon_quit rich text",
      "font_class": "icon_quitrichtext",
      "unicode": "e635",
      "unicode_decimal": 58933
    }]
    }
  },
  mounted () {
  }
}
</script>
```
:::
#### API
####  Icon props
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
      <td>type</td>
      <td>图标的名称</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>size</td>
      <td>图标的大小，单位是 px</td>
      <td>Number | String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>color</td>
      <td>图标的颜色</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>custom</td>
      <td>自定义图标</td>
      <td>String</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

## Button 按钮
基础组件，触发业务逻辑时使用。
#### 基础用法。
::: demo  **按钮类型** 按钮类型有：默认按钮、主按钮、虚线按钮、文字按钮以及四种颜色按钮。通过设置`type`为`primary`、`dashed`、`text`、`info`、`success`、`warning`、`error`创建不同样式的按钮，不设置为默认样式。
```html
<template>
	<Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="text">Text</Button>
    <br><br>
    <Button type="info">Info</Button>
    <Button type="success">Success</Button>
    <Button type="warning">Warning</Button>
    <Button type="error">Error</Button>
</template>
```
:::
#### 主要按钮。
::: demo  
```html
<template>
    <Button type="primary">Button</Button>
    <Button type="primary" loading>Button</Button>
    <Button type="primary" disabled>Button</Button> 
</template>
```
:::
#### 次要按钮
::: demo  
```html
<template>
    <Button type="primary" ghost>Button</Button>
    <Button type="primary" ghost loading>Button</Button>
    <Button type="primary" ghost disabled>Button</Button>
    <br />
    <br />
    <Button>Button</Button>
    <Button loading>Button</Button>
    <Button disabled>Button</Button>
</template>
```
:::
#### 危险按钮
::: demo  
```html
<template>
    <Button type="error">Primary</Button>
    <Button type="error" loading>Primary</Button>
    <Button type="error" disabled>Primary</Button>
    <br />
    <br />
    <Button type="error" ghost>Primary</Button>
    <Button type="error" ghost loading>Primary</Button>
    <Button type="error" ghost disabled>Primary</Button>
</template>
```
:::
#### 文字按钮
::: demo  
```html
<template>
    <Button type="text">Button</Button>
    <Button type="text" loading>Button</Button>
    <Button type="text" disabled>Button</Button>
    <br />
    <Button type="text primary">Button</Button>
    <Button type="text primary" loading>Button</Button>
    <Button type="text primary" disabled>Button</Button>
    <br>
    <Button type="text error">Button</Button>
    <Button type="text error" loading>Button</Button>
    <Button type="text error" disabled>Button</Button>
</template>
```
:::
#### 组合按钮
::: demo  
```html
<template>
    <Button type="primary" icon="icon_assembly-add">Button</Button>
    <Button type="primary" icon="icon_assembly-add" loading>Button</Button>
    <Button type="primary" icon="icon_assembly-add" disabled>Button</Button>
    <br />
    <br />
    <Button icon="icon_assembly-add">Button</Button>
    <Button icon="icon_assembly-add" loading>Button</Button>
    <Button icon="icon_assembly-add" disabled>Button</Button>
    <br />
    <br />
    <Button class="text-hover" type="text" icon="icon_assembly-add">Button</Button>
    <Button class="text-hover" type="text" icon="icon_assembly-add" loading>Button</Button>
    <Button class="text-hover" type="text" icon="icon_assembly-add" disabled>Button</Button>
</template>
```
:::
#### 悬浮按钮
::: demo  
```html
<template>
    <Button type="primary fix" shape="circle" icon="icon_assembly-add"></Button>
    <Button type="primary fix" shape="circle" icon="icon_assembly-add" disabled></Button>
    <br>
    <Button type="fix" shape="circle" icon="icon_assembly-add"></Button>
    <Button type="fix" shape="circle" icon="icon_assembly-add" disabled></Button>
</template>
```
:::
#### 图标按钮
::: demo  
```html
<template>
    <IconButton content="This is message" icon="icon_assembly-info" :size="30"></IconButton>
    <IconButton content="This is message" icon="icon_assembly-info" :size="30" selected></IconButton>
    <IconButton content="This is message" icon="icon_assembly-info" :size="30" disabled></IconButton>
    <br>
    <IconButton content="This is message" icon="icon_assembly-info" :size="30" radius></IconButton>
    <IconButton content="This is message" icon="icon_assembly-info" :size="30" radius selected></IconButton>
    <IconButton content="This is message" icon="icon_assembly-info" :size="30" radius selected disabled></IconButton>
</template>
```
:::
#### API
####  Button props
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
      <td>type</td>
      <td>按钮类型，可选值为 <code>default</code>、<code>primary</code>、<code>dashed</code>、<code>text</code>、<code>info</code>、<code>success</code>、<code>warning</code>、<code>error</code>或者不设置</td>
      <td>String</td>
      <td>default</td>
    </tr>
    <tr>
      <td>ghost</td>
      <td>幽灵属性，使按钮背景透明</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>size</td>
      <td>按钮大小，可选值为<code>large</code>、<code>small</code>、<code>default</code>或者不设置</td>
      <td>String</td>
      <td>default</td>
    </tr>
    <tr>
      <td>shape</td>
      <td>按钮形状，可选值为<code>circle</code>或者不设置</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>long</td>
      <td>开启后，按钮的长度为 100%</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>html-type</td>
      <td>设置<code>button</code>原生的<code>type</code>，可选值为<code>button</code>、<code>submit</code>、<code>reset</code></td>
      <td>String</td>
      <td>button</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>设置按钮为禁用状态</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>loading</td>
      <td>设置按钮为加载中状态</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>icon</td>
      <td>设置按钮的图标类型</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>custom-icon</td>
      <td>设置按钮的自定义图标</td>
      <td>String</td>
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

## Color 色彩
略
## Font 字体
略