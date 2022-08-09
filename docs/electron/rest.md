# 其他
## Affix 图钉
使用图钉，可以将内容固定在屏幕上，并且不随页面的滚动而滚动。常用于侧边菜单等。
#### 基础用法
::: demo 简单使用，当元素不可见时，直接固定在最顶端。
```html
<template>
    <Affix>
        <span class="demo-affix">Fixed at the top</span>
    </Affix>
</template>
<script>
    export default {
        
    }
</script>
```
:::
#### 固定在底部
::: demo 在屏幕下方固定，可以通过缩小浏览器窗口高度来查看效果。
```html
<template>
    <Affix :offset-bottom="20">
        <span class="demo-affix">Fix at the bottom 20px</span>
    </Affix>
</template>
<script>
    export default {
        
    }
</script>
```
:::
#### 固定状态改变时的回调 
::: demo 当固定状态发生改变时，会触发事件。
```html
<template>
    <Affix :offset-top="100" @on-change="change">
        <span class="demo-affix">Fix the position at the top of 100px at the top</span>
    </Affix>
</template>
<script>
    export default {
        methods: {
            change (status) {
                this.$Message.info(`Status: ${status}`);
            }
        }
    }
</script>
```
:::
## BackTop 返回顶部
当页面内容冗长，需要快捷返回顶部时使用，一般放置在页面右下角位置。
#### 基础用法
向下滚动页面，灰色的按钮为默认效果。
::: demo
```html
<template>
    <BackTop></BackTop>
</template>
<script>
    export default {
        
    }
</script>
```
:::
#### 自定义样式
向下滚动页面，按钮为自定义效果。
::: demo 
```html
<style scoped>
    .top{
        padding: 10px;
        background: rgba(0, 153, 229, .7);
        color: #fff;
        text-align: center;
        border-radius: 2px;
    }
</style>
<template>
    <BackTop :height="100" :bottom="200">
        <div class="top">返回顶端</div>
    </BackTop>
</template>
<script>
    export default {
        
    }
</script>
```
:::
## Spin 加载中
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
                spinShow: true
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
## Scroll 无限滚动
常用于滚动至底部时，触发加载更多数据。
#### 基础用法
::: demo 需返回 Promise
```html
<template>
    <Scroll :on-reach-bottom="handleReachBottom">
        <Card dis-hover v-for="(item, index) in list1" :key="index" style="margin: 32px 0">
            Content {{ item }}
        </Card>
    </Scroll>
</template>
<script>
    export default {
        data () {
            return {
                list1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            }
        },
        methods: {
            handleReachBottom () {
                return new Promise(resolve => {
                    setTimeout(() => {
                        const last = this.list1[this.list1.length - 1];
                        for (let i = 1; i < 11; i++) {
                            this.list1.push(last + i);
                        }
                        resolve();
                    }, 2000);
                });
            }
        }
    }
</script>
```
:::
