### Tree 树形控件
使用树控件可以完整展现其中的层级关系，并具有展开收起选择等交互功能。
#### 基础用法
::: demo  
```html
<template>
    <Tree :data="data1"></Tree>
</template>
<script>
    export default {
        data () {
            return {
                data1: [
                    {
                        title: 'parent 1',
                        expand: true,
                        children: [
                            {
                                title: 'parent 1-1',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-1-1'
                                    },
                                    {
                                        title: 'leaf 1-1-2'
                                    }
                                ]
                            },
                            {
                                title: 'parent 1-2',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-2-1'
                                    },
                                    {
                                        title: 'leaf 1-2-1'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>
```
:::
#### 可勾选
::: demo  
```html
<template>
    <Tree :data="data2" show-checkbox></Tree>
</template>
<script>
    export default {
        data () {
            return {
                data2: [
                    {
                        title: 'parent 1',
                        expand: true,
                        children: [
                            {
                                title: 'parent 1-1',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-1-1'
                                    },
                                    {
                                        title: 'leaf 1-1-2'
                                    }
                                ]
                            },
                            {
                                title: 'parent 1-2',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-2-1'
                                    },
                                    {
                                        title: 'leaf 1-2-1'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>
```
:::
### API
#### Tree props
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
      <td>可嵌套的节点属性的数组，生成 tree 的数据</td>
      <td>Array</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>multiple</td>
      <td>是否支持多选</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>show-checkbox</td>
      <td>是否显示多选框</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>empty-text</td>
      <td>没有数据时的提示</td>
      <td>String</td>
      <td>暂无数据</td>
    </tr>
    <tr>
      <td>load-data</td>
      <td>异步加载数据的方法，见示例</td>
      <td>Function</td>
      <td>-</td>
    </tr>
    <tr>
      <td>render</td>
      <td>自定义渲染内容，见示例</td>
      <td>Function</td>
      <td>-</td>
    </tr>
    <tr>
      <td>children-key</td>
      <td>定义子节点键</td>
      <td>String</td>
      <td>children</td>
    </tr>
    <tr>
      <td>check-strictly</td>
      <td>在显示复选框的情况下，是否严格的遵循父子不互相关联的做法</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>check-directly <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">3.3.0</sup></span></td>
      <td>开启后，在 show-checkbox 模式下，select 的交互也将转为 check</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>select-node <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.4.0</sup></span></td>
      <td>开启后，点击节点将使用单选效果</td>
      <td>Boolean</td>
      <td>true</td>
    </tr>
    <tr>
      <td>expand-node <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.4.0</sup></span></td>
      <td>开启后，点击节点将使用展开/收起子节点效果，该选项优先于 select-node</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
  </tbody>
</table>

#### Tree events
<table>
  <thead>
    <tr>
      <th>事件名</th>
      <th style="width: 412px">说明</th>
      <th>返回值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>on-select-change</td>
      <td>点击树节点时触发</td>
      <td>当前已选中的节点数组、当前项</td>
    </tr>
    <tr>
      <td>on-check-change</td>
      <td>点击复选框时触发</td>
      <td>当前已勾选节点的数组、当前项</td>
    </tr>
    <tr>
      <td>on-toggle-expand</td>
      <td>展开和收起子列表时触发</td>
      <td>当前节点的数据</td>
    </tr>
    <tr>
      <td>on-contextmenu <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.3.0</sup></span></td>
      <td>当前节点点击右键时触发</td>
      <td>data, event, position</td>
    </tr>
  </tbody>
</table>

#### Tree slot 
<table>
  <thead>
    <tr>
      <th>名称</th>
      <th style="width: 589px">说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>contextMenu <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.3.0</sup></span></td>
      <td>右键菜单，详见示例</td>
    </tr>
  </tbody>
</table>

#### Tree methods
<table>
  <thead>
    <tr>
      <th>方法名</th>
      <th style="width: 408px">说明</th>
      <th>参数</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>getCheckedNodes</td>
      <td>获取被勾选的节点</td>
      <td>无</td>
    </tr>
    <tr>
      <td>getSelectedNodes</td>
      <td>获取被选中的节点</td>
      <td>无</td>
    </tr>
    <tr>
      <td>getCheckedAndIndeterminateNodes</td>
      <td>获取选中及半选节点</td>
      <td>无</td>
    </tr>
  </tbody>
</table>

#### children
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
      <td>title</td>
      <td>标题</td>
      <td>String | Element String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>expand</td>
      <td>是否展开直子节点</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>禁掉响应</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>disableCheckbox</td>
      <td>禁掉 checkbox</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>selected</td>
      <td>是否选中子节点</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>checked</td>
      <td>是否勾选(如果勾选，子节点也会全部勾选)</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>children</td>
      <td>子节点属性数组</td>
      <td>Array</td>
      <td>-</td>
    </tr>
    <tr>
      <td>render</td>
      <td>自定义当前节点渲染内容，见示例</td>
      <td>Function</td>
      <td>-</td>
    </tr>
    <tr>
      <td>contextmenu <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.3.0</sup></span></td>
      <td>是否支持右键菜单</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
  </tbody>
</table>