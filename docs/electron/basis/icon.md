### Icon 图标
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

### API
####  Icon props
<table >
  <thead>
    <tr>
      <th style="width: 200px">属性</th>
      <th style="width: 500px">说明</th>
      <th style="width: 300px">类型</th>
      <th style="width: 200px">默认值</th>
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