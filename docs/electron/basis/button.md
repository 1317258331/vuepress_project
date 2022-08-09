### Button 按钮
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
### API
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

#### ButtonGroup props
<table>
  <thead>
    <tr>
      <th style="width: 115px">属性</th>
      <th>说明</th>
      <th style="width: 115px">类型</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>size</td>
      <td>按钮组合大小，可选值为<code>large</code>、<code>small</code>、<code>default</code>或者不设置</td>
      <td>String</td>
      <td>default</td>
    </tr>
    <tr>
      <td>shape</td>
      <td>按钮组合形状，可选值为<code>circle</code>或者不设置</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>vertical</td>
      <td>是否纵向排列按钮组</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
  </tbody>
</table>