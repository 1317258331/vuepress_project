### Rate 评分
对事物进行快速的评级操作，或对评价进行展示。
#### 基础用法
::: demo  
```html
<template>
    <Rate v-model="value" />
    <br>
    <Rate allow-half v-model="valueHalf" />
    <br>
    <Row>
        <Col span="12">
                <Rate show-text v-model="valueText" />
        </Col>
        <Col span="12">
            <Rate show-text allow-half v-model="valueCustomText">
                <span style="color: #f5a623">{{ valueCustomText }}</span>
            </Rate>
        </Col>
    </Row>
    <br>
    <Rate disabled v-model="valueDisabled" />
    <br>
    <Rate clearable v-model="value1" /> clearable: true
    <br>
    <Rate v-model="value2" /> clearable: false
    <br>
    <Rate v-model="value3" character="A" />
    <Rate v-model="value4" character="好" />
    <Rate v-model="value5" icon="ios-heart" />
</template>
<script>
    export default {
        data () {
            return {
                value: 0,//基础
                valueHalf: 2.5,//半星
                valueText: 3,
                valueCustomText: 3.8,//显示提示
                valueDisabled: 2,//只读
                value1: 3,
                value2: 3,//清除
                value3: 3,
                value4: 3,
                value5: 3//自定义
            }
        }
    }
</script>
```
:::
### API
#### Rate props
<table>
  <thead>
    <tr>
      <th>属性</th>
      <th style="width: 467px">说明</th>
      <th>类型</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>count</td>
      <td>star 总数</td>
      <td>Number</td>
      <td>5</td>
    </tr>
    <tr>
      <td>value</td>
      <td>当前 star 数，可以使用 v-model 双向绑定数据</td>
      <td>Number</td>
      <td>0</td>
    </tr>
    <tr>
      <td>allow-half</td>
      <td>是否允许半选</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>是否只读，无法进行交互</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>show-text</td>
      <td>是否显示提示文字</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>clearable</td>
      <td>是否可以取消选择</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>character</td>
      <td>自定义字符</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>icon</td>
      <td>使用图标</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>custom-icon</td>
      <td>使用自定义图标</td>
      <td>String</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

#### Rate events
<table>
  <thead>
    <tr>
      <th style="width: 120px">事件名</th>
      <th style="width: 560px">说明</th>
      <th>返回值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>on-change</td>
      <td>评分改变时触发</td>
      <td>value</td>
    </tr>
  </tbody>
</table>