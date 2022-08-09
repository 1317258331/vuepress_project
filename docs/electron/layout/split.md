### Split 面板分割
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
### API
#### Split props
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
      <td>value</td>
      <td>面板位置，可以是 0~1 代表百分比，或具体数值的像素，可用 v-model 双向绑定</td>
      <td>Number | String</td>
      <td>0.5</td>
    </tr>
    <tr>
      <td>mode</td>
      <td>类型，可选值为 horizontal 或 vertical</td>
      <td>String</td>
      <td>horizontal</td>
    </tr>
    <tr>
      <td>min</td>
      <td>最小阈值</td>
      <td>Number | String</td>
      <td>40px</td>
    </tr>
    <tr>
      <td>max</td>
      <td>最大阈值</td>
      <td>Number | String</td>
      <td>40px</td>
    </tr>
  </tbody>
</table>

#### Split events
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
      <td>value</td>
      <td>面板位置，可以是 0~1 代表百分比，或具体数值的像素，可用 v-model 双向绑定</td>
      <td>Number | String</td>
      <td>0.5</td>
    </tr>
    <tr>
      <td>mode</td>
      <td>类型，可选值为 horizontal 或 vertical</td>
      <td>String</td>
      <td>horizontal</td>
    </tr>
    <tr>
      <td>min</td>
      <td>最小阈值</td>
      <td>Number | String</td>
      <td>40px</td>
    </tr>
    <tr>
      <td>max</td>
      <td>最大阈值</td>
      <td>Number | String</td>
      <td>40px</td>
    </tr>
  </tbody>
</table>

#### Split slot
<table>
  <thead>
    <tr>
      <th style="width: 115px">名称</th>
      <th style="width: 650px">说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>left</td>
      <td>mode 为 horizontal 时可用，左边面板</td>
    </tr>
    <tr>
      <td>right</td>
      <td>mode 为 horizontal 时可用，右边面板</td>
    </tr>
    <tr>
      <td>top</td>
      <td>mode 为 vertical 时可用，上边面板</td>
    </tr>
    <tr>
      <td>bottom</td>
      <td>mode 为 vertical 时可用，下边面板</td>
    </tr>
    <tr>
      <td>trigger</td>
      <td>自定义分割拖拽节点</td>
    </tr>
  </tbody>
</table>