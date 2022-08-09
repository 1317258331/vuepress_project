### Time 相对时间
常用于表示几分钟前、几小时前等相对于此时此刻的时间描述。
#### 基础用法
::: demo  下列依次为基础用法、自动更新时间间隔、不同情况、锚点。
```html
<template>
    <div>
        <Time :time="time1" />
            <br>
        <Time :time="time2" />
    </div>
    <br>
    <Time :time="time3" :interval="1" />
    <br>
    <div>
        <Time :time="time2" />
        <br>
        <Time :time="time2" type="date" />
        <br>
        <Time :time="time2" type="datetime" />
    </div>
    <br>
    <Time :time="time2" hash="#hash" />
</template>
<script>
    export default {
        data () {
            return {
                time1: (new Date()).getTime() - 60 * 3 * 1000,
                time2: (new Date()).getTime() - 86400 * 3 * 1000,
                time3: new Date(),
                time2: (new Date()).getTime() - 86400 * 3 * 1000,
                time2: (new Date()).getTime() - 86400 * 3 * 1000
            }
        }
    }
</script>
```
:::
### API
#### Time props
<table>
  <thead>
    <tr>
      <th>属性</th>
      <th style="width: 402px">说明</th>
      <th>类型</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>time</td>
      <td>需要对比的时间，可以是时间戳或 Date 类型</td>
      <td>Number | Date | String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>type</td>
      <td>类型，可选值为 relative、date 或 datetime</td>
      <td>String</td>
      <td>relative</td>
    </tr>
    <tr>
      <td>interval</td>
      <td>自动更新的间隔，单位：秒</td>
      <td>Number</td>
      <td>60</td>
    </tr>
    <tr>
      <td>hash</td>
      <td>填写该值，点击会定位锚点</td>
      <td>String</td>
      <td>-</td>
    </tr>
  </tbody>
</table>