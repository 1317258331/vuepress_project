# 图表
## Circle 进度环
图表类组件。1、一般有两种用途：显示某项任务进度的百分比；2、统计某些指标的占比。
#### 基础用法
::: demo  圆形进度环有一系列的参数可配置，具体可以查看下面的API文档。
```html
<template>
    <Circle :percent="80">
        <span class="demo-Circle-inner" style="font-size:24px">80%</span>
    </Circle>
    <Circle :percent="100" stroke-color="#5cb85c">
        <Icon type="ios-checkmark" size="60" style="color:#5cb85c"></Icon>
    </Circle>
    <Circle :percent="35" stroke-color="#ff5500">
        <span class="demo-Circle-inner">
            <Icon type="ios-close" size="50" style="color:#ff5500"></Icon>
        </span>
    </Circle>
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
    <Circle :percent="80" dashboard>
        <span class="demo-circle-inner" style="font-size:24px">80%</span>
    </Circle>
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
    <Circle :percent="percent" :stroke-color="color">
        <Icon v-if="percent == 100" type="ios-checkmark" size="60" style="color:#5cb85c"></Icon>
        <span v-else style="font-size:24px">{{ percent }}%</span>
    </Circle>
    <ButtonGroup size="large">
        <Button icon="ios-add" @click="add"></Button>
        <Button icon="ios-remove" @click="minus"></Button>
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

