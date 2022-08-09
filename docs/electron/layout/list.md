### List 列表
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
### API
#### List props
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

#### List slot
<table>
  <thead>
    <tr>
      <th style="width: 115px">名称</th>
      <th style="width: 650px">说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>header</td>
      <td>自定义列表头部</td>
    </tr>
    <tr>
      <td>footer</td>
      <td>自定义列表底部</td>
    </tr>
    <tr>
      <td>loading</td>
      <td>自定义加载中</td>
    </tr>
  </tbody>
</table>

#### ListItem slot 
<table>
  <thead>
    <tr>
      <th style="width: 115px">名称</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>action</td>
      <td>列表操作组，根据 item-layout 的不同, 位置在卡片底部或者最右侧</td>
    </tr>
    <tr>
      <td>extra</td>
      <td>额外内容, 通常用在 item-layout 为 vertical 的情况下, 展示右侧内容; horizontal 展示在列表元素最右侧</td>
    </tr>
  </tbody>
</table>

#### ListItemMeta props 
<table>
  <thead>
    <tr>
      <th>属性</th>
      <th style="width: 300px">说明</th>
      <th style="width: 200px">类型</th>
      <th style="width: 200px">默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>avatar</td>
      <td>列表元素的图标</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>title</td>
      <td>列表元素的标题</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>description</td>
      <td>列表元素的描述内容</td>
      <td>String</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

#### ListItemMeta slot
<table>
  <thead>
    <tr>
      <th>名称</th>
      <th style="width: 650px">说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>avatar</td>
      <td>自定义列表元素的图标</td>
    </tr>
    <tr>
      <td>title</td>
      <td>自定义列表元素的标题</td>
    </tr>
    <tr>
      <td>description</td>
      <td>自定义列表元素的描述内容</td>
    </tr>
  </tbody>
</table>