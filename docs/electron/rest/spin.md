### Spin 加载中
当区块正在获取数据中时可使用，适当的等待动画可以提升用户体验。
#### 基础用法
::: demo 最简单使用 Spin 的方法。
```html
<template>
    <Spin></Spin>
</template>
<script>
    export default {
        
    }
</script>
```
:::

#### 状态切换 
::: demo 控制 Spin 组件的显示和消失。
```html
<template>
    <div class="demo-spin-article">
        <h3>登金陵凤凰台</h3>
        <address>李白</address>
        <article>
            <p>凤凰台上凤凰游，凤去台空江自流。</p>
            <p>吴宫花草埋幽径，晋代衣冠成古丘。</p>
            <p>三山半落青天外，二水中分白鹭洲。</p>
            <p>总为浮云能蔽日，长安不见使人愁。</p>
        </article>
        <Spin size="large" fix v-if="spinShow"></Spin>
    </div>
    <br>
    切换显示状态：<i-switch @on-change="spinShow = !spinShow"></i-switch>
</template>
<script>
    export default {
        data () {
            return {
                spinShow: false
            }
        }
    }
</script>
```
:::
#### 整页加载
::: demo 使用内置的 $Spin 方法可以全局加载。
```html
<template>
    <div>
        <Button type="primary" @click="handleSpinShow">整页显示，3秒后关闭</Button>
        <Button type="primary" @click="handleSpinCustom">自定义显示内容</Button>
    </div>
</template>
<script>
    export default {
        methods: {
            handleSpinShow () {
                this.$Spin.show();
                setTimeout(() => {
                    this.$Spin.hide();
                }, 3000);
            },
            handleSpinCustom () {
                this.$Spin.show({
                    render: (h) => {
                        return h('div', [
                            h('Icon', {
                                'class': 'demo-spin-icon-load',
                                props: {
                                    type: 'ios-loading',
                                    size: 18
                                }
                            }),
                            h('div', 'Loading')
                        ])
                    }
                });
                setTimeout(() => {
                    this.$Spin.hide();
                }, 3000);
            }
        }
    }
</script>
<style>
    .demo-spin-icon-load{
        animation: ani-demo-spin 1s linear infinite;
    }
</style>
```
:::
### API
#### Spin props
<table>
  <thead>
    <tr>
      <th style="width: 115px">属性</th>
      <th style="width: 472px">说明</th>
      <th>类型</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>size</td>
      <td>Spin尺寸，可选值为<code>large</code>和<code>small</code>或者不设置</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>fix</td>
      <td>是否固定，需要父级有<code>relative</code>或<code>absolute</code></td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
  </tbody>
</table>

#### Spin slot
<table>
  <thead>
    <tr>
      <th style="width: 115px">名称</th>
      <th style="width: 647px">说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>无</td>
      <td>自定义 Spin 的内容，设置slot后，默认的样式不生效</td>
    </tr>
  </tbody>
</table>