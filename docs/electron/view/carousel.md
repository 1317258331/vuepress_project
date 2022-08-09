### Carousel 走马灯
常用于一组图片或卡片轮播，当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。
#### 基础用法
::: demo  
```html
<template>
    <Carousel v-model="value1" loop>
        <CarouselItem>
            <div class="demo-carousel">1</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">2</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">3</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">4</div>
        </CarouselItem>
    </Carousel>
</template>
<script>
    export default {
        data () {
            return {
                value1: 0
            }
        }
    }
</script>
```
:::
#### 自动切换
::: demo  
```html
<template>
    <Carousel autoplay v-model="value2" loop>
        <CarouselItem>
            <div class="demo-carousel">1</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">2</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">3</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">4</div>
        </CarouselItem>
    </Carousel>
</template>
<script>
    export default {
        data () {
            return {
                value2: 0
            }
        }
    }
</script>
```
:::
### API
#### Carousel props
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
      <td>幻灯片的索引，从 0 开始，可以使用 v-model 双向绑定数据</td>
      <td>Number</td>
      <td>0</td>
    </tr>
    <tr>
      <td>height</td>
      <td>走马灯的高度，可填 auto 或具体高度数值，单位 px</td>
      <td>String | Number</td>
      <td>auto</td>
    </tr>
    <tr>
      <td>loop</td>
      <td>是否开启循环</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>autoplay</td>
      <td>是否自动切换</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>autoplay-speed</td>
      <td>自动切换的时间间隔，单位为毫秒</td>
      <td>Number</td>
      <td>2000</td>
    </tr>
    <tr>
      <td>dots</td>
      <td>指示器的位置，可选值为 inside （内部），outside（外部），none（不显示）</td>
      <td>String</td>
      <td>inside</td>
    </tr>
    <tr>
      <td>radius-dot</td>
      <td>是否显示圆形指示器</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>trigger</td>
      <td>指示器的触发方式，可选值为 click（点击），hover（悬停）</td>
      <td>String</td>
      <td>click</td>
    </tr>
    <tr>
      <td>arrow</td>
      <td>切换箭头的显示时机，可选值为 hover（悬停），always（一直显示），never（不显示）</td>
      <td>String</td>
      <td>hover</td>
    </tr>
    <tr>
      <td>easing</td>
      <td>动画效果</td>
      <td>String</td>
      <td>ease</td>
    </tr>
  </tbody>
</table>

#### Carousel events
<table>
  <thead>
    <tr>
      <th>事件名</th>
      <th>说明</th>
      <th>返回值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>on-change</td>
      <td>幻灯片切换时触发，目前激活的幻灯片的索引，原幻灯片的索引</td>
      <td>oldValue, value</td>
    </tr>
    <tr>
      <td>on-click <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.1.0</sup></span></td>
      <td>点击幻灯片时触发，返回索引值</td>
      <td>index</td>
    </tr>
  </tbody>
</table>