### Transfer 穿梭框
双栏穿梭选择框，常用于将多个项目从一边移动到另一边。
#### 基础用法
::: demo  
```html
<template>
    <Transfer
        :data="data1"
        :target-keys="targetKeys1"
        :render-format="render1"
        @on-change="handleChange1"></Transfer>
</template>
<script>
    export default {
        data () {
            return {
                data1: this.getMockData(),
                targetKeys1: this.getTargetKeys()
            }
        },
        methods: {
            getMockData () {
                let mockData = [];
                for (let i = 1; i <= 20; i++) {
                    mockData.push({
                        key: i.toString(),
                        label: 'Content ' + i,
                        description: 'The desc of content  ' + i,
                        disabled: Math.random() * 3 < 1
                    });
                }
                return mockData;
            },
            getTargetKeys () {
                return this.getMockData()
                        .filter(() => Math.random() * 2 > 1)
                        .map(item => item.key);
            },
            render1 (item) {
                return item.label;
            },
            handleChange1 (newTargetKeys, direction, moveKeys) {
                console.log(newTargetKeys);
                console.log(direction);
                console.log(moveKeys);
                this.targetKeys1 = newTargetKeys;
            }
        }
    }
</script>
```
:::
### API
#### Transfer props
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
      <td>data</td>
      <td>数据源，其中的数据将会被渲染到左边一栏中，<code>targetKeys</code> 中指定的除外。</td>
      <td>Array</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>targetKeys</td>
      <td>显示在右侧框数据的key集合</td>
      <td>Array</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>render-format</td>
      <td>每行数据渲染函数，该函数的入参为 <code>data</code> 中的项</td>
      <td>Function</td>
      <td>默认显示label，没有时显示key</td>
    </tr>
    <tr>
      <td>selected-keys</td>
      <td>设置哪些项应该被选中</td>
      <td>Array</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>list-style</td>
      <td>两个穿梭框的自定义样式</td>
      <td>Object</td>
      <td>{}</td>
    </tr>
    <tr>
      <td>titles</td>
      <td>标题集合，顺序从左至右</td>
      <td>Array</td>
      <td>['源列表', '目的列表']</td>
    </tr>
    <tr>
      <td>operations</td>
      <td>操作文案集合，顺序从上至下</td>
      <td>Array</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>reverse-operation <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.2.0</sup></span></td>
      <td>是否颠倒两个操作按钮的上下顺序</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>filterable</td>
      <td>是否显示搜索框</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>filter-placeholder</td>
      <td>搜索框的占位</td>
      <td>String</td>
      <td>请输入搜索内容</td>
    </tr>
    <tr>
      <td>filter-method</td>
      <td>自定义搜索函数，入参为 data 和 query，data 为项，query 为当前输入的搜索词</td>
      <td>Function</td>
      <td>默认搜索label</td>
    </tr>
    <tr>
      <td>not-found-text</td>
      <td>当列表为空时显示的内容</td>
      <td>String</td>
      <td>列表为空</td>
    </tr>
  </tbody>
</table>

#### Transfer events
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
      <td>选项在两栏之间转移时的回调函数</td>
      <td>targetKeys, direction, moveKeys</td>
    </tr>
    <tr>
      <td>on-selected-change</td>
      <td>选中项发生变化时触发</td>
      <td>sourceSelectedKeys, targetSelectedKeys</td>
    </tr>
  </tbody>
</table>