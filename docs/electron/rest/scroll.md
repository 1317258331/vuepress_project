### Scroll 无限滚动
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
### API
#### Scroll props
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
      <td>height</td>
      <td>滚动区域的高度，单位像素</td>
      <td>String | Number</td>
      <td>300</td>
    </tr>
    <tr>
      <td>loading-text</td>
      <td>加载中的文案</td>
      <td>String</td>
      <td>加载中</td>
    </tr>
    <tr>
      <td>on-reach-top</td>
      <td>滚动至顶部时触发，需返回 Promise</td>
      <td>Function</td>
      <td>-</td>
    </tr>
    <tr>
      <td>on-reach-bottom</td>
      <td>滚动至底部时触发，需返回 Promise</td>
      <td>Function</td>
      <td>-</td>
    </tr>
    <tr>
      <td>on-reach-edge</td>
      <td>滚动至顶部或底部时触发，需返回 Promise</td>
      <td>Function</td>
      <td>-</td>
    </tr>
    <tr>
      <td>distance-to-edge</td>
      <td>从边缘到触发回调的距离。如果是负的，回调将在到达边缘之前触发。值最好在 24 以下。</td>
      <td>Number | Array</td>
      <td>[20, 20]</td>
    </tr>
  </tbody>
</table>
