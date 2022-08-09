### Circle 进度环
图表类组件。1、一般有两种用途：显示某项任务进度的百分比；2、统计某些指标的占比。
#### 基础用法
::: demo  注意：没有使用 iview-loader 时，必须使用 i-circle 标签。反之使用Circle。
```html
<template>
    <i-circle :percent="80"><!-- <Circle :percent="80"> -->
        <span class="demo-Circle-inner" style="font-size:24px">80%</span>
    </i-circle>
    <i-circle :percent="100" stroke-color="#5cb85c">
        <Icon type="md-checkmark" size="60" style="color:#5cb85c"></Icon>
    </i-circle>
    <i-circle :percent="35" stroke-color="#ff5500">
        <span class="demo-Circle-inner">
            <Icon type="ios-close" size="50" style="color:#ff5500"></Icon>
        </span>
    </i-circle>
</template>
<script>
    export default {
        
    }
</script>
```
:::
#### 仪表盘
::: demo  通过设置属性 dashboard，可以很方便地实现仪表盘样式的进度环。
```html
<template>
    <i-circle :percent="80" dashboard>
        <span class="demo-circle-inner" style="font-size:24px">80%</span>
    </i-circle>
</template>
<script>
    export default {
        
    }
</script>
```
:::
#### 配合外部组件使用
::: demo  通过数据的联动和逻辑控制，实现交互效果。
```html
<template>
    <i-circle :percent="percent" :stroke-color="color">
        <Icon v-if="percent == 100" type="md-checkmark" size="60" style="color:#5cb85c"></Icon>
        <span v-else style="font-size:24px">{{ percent }}%</span>
    </i-circle>
    <ButtonGroup size="large">
        <Button icon="md-add" @click="add"></Button>
        <Button icon="md-remove" @click="minus"></Button>
    </ButtonGroup>
</template>
<script>
    export default {
        data () {
            return {
                percent: 0
            }
        },
        computed: {
            color () {
                let color = '#2db7f5';
                if (this.percent == 100) {
                    color = '#5cb85c';
                }
                return color;
            }
        },
        methods: {
            add () {
                if (this.percent >= 100) {
                    return false;
                }
                this.percent += 10;
            },
            minus () {
                if (this.percent <= 0) {
                    return false;
                }
                this.percent -= 10;
            }
        }
    }
</script>
```
:::
### API
#### Circle props
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
      <td>percent</td>
      <td>百分比</td>
      <td>Number</td>
      <td>0</td>
    </tr>
    <tr>
      <td>size</td>
      <td>图表的宽度和高度，单位 px</td>
      <td>Number</td>
      <td>120</td>
    </tr>
    <tr>
      <td>stroke-linecap</td>
      <td>进度环顶端的形状，可选值为<code>square</code>（方）和<code>round</code>（圆）</td>
      <td>String</td>
      <td>round</td>
    </tr>
    <tr>
      <td>stroke-width</td>
      <td>进度环的线宽，单位 px</td>
      <td>Number</td>
      <td>6</td>
    </tr>
    <tr>
      <td>stroke-color</td>
      <td>进度环的颜色，4.0.0 版本开始支持传入数组显示为渐变色</td>
      <td>String | Array</td>
      <td>#2db7f5</td>
    </tr>
    <tr>
      <td>trail-width</td>
      <td>进度环背景的线宽，单位 px</td>
      <td>Number</td>
      <td>5</td>
    </tr>
    <tr>
      <td>trail-color</td>
      <td>进度环背景的颜色</td>
      <td>String</td>
      <td>#eaeef2</td>
    </tr>
    <tr>
      <td>dashboard</td>
      <td>是否显示为仪表盘</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
  </tbody>
</table>

#### Circle slot 
<table>
  <thead>
    <tr>
      <th style="width: 135px">名称</th>
      <th style="width: 630px">说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>无</td>
      <td>自定义显示中间内容，内容默认垂直居中</td>
    </tr>
  </tbody>
</table>