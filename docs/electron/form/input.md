### Input 输入框
基本表单组件，支持 input 和 textarea，并在原生控件基础上进行了功能扩展，可以组合使用。
#### 基础用法。
::: demo  
```html
<template>
<div style="padding-bottom: 50px;text-align: left;">
    <div class="item">
      <span>基础输入框</span>
      <Input
        disabled
        v-model="value"
        placeholder="Enter something..."
        style="width: 300px"
      />
    </div>
    <br>
    <div class="item">
      <span>可清空</span>
      <Input
        v-model="value"
        placeholder="Enter something..."
        clearable
        style="width: 200px"
      />
    </div>
    <br>
    <div class="item">
      <span>输入长度限制</span>
      <Input
        v-model="value"
        maxlength="10"
        show-word-limit
        placeholder="Enter something..."
        style="margin-right: 20px; width: 200px"
      />
      <Input
        v-model="value"
        maxlength="100"
        show-word-limit
        type="textarea"
        placeholder="Enter something..."
        style="width: 200px"
      />
    </div>
    <br>
    <div class="item">
      <span>密码框</span>
      <Input
        v-model="value"
        type="password"
        password
        placeholder="Enter something..."
        style="width: 200px"
      />
    </div>
    <br>
    <div class="item">
      <span>带icon输入框</span>
      <Input
        v-model="value"
        icon="icon_assembly-sreach"
        placeholder="Enter something..."
        style="width: 300px"
      />
    </div>
    <br>
    <div class="item">
      <span>icon（props方式）</span>
      <Input prefix="icon_assembly-sreach" placeholder="Enter name" style="width: auto" />
      <Input suffix="icon_share" placeholder="Enter text" style="width: auto" />
    </div>
    <br>
    <div class="item">
      <span>icon（slot方式）</span>
      <Input placeholder="Enter name" style="width: auto">
        <Icon type="icon_share" slot="prefix" />
      </Input>
      <Input placeholder="Enter text" style="width: auto">
        <Icon type="icon_share" slot="suffix" />
      </Input>
    </div>
    <br>
    <div class="item flex">
      <span>搜索框</span>
      <Input
        search
        placeholder="Enter something..."
        style="margin-right: 20px; width: 300px"
      /><br><br>
      <Input
        search
        enter-button
        placeholder="Enter something..."
        style="margin-right: 20px; width: 300px"
      />
      <br>
      <Input
        search
        enter-button="Search"
        placeholder="Enter something..."
        style="width: 300px"
      />
    </div>
    <br>
    <div class="item">
      <span>文本域</span>
      <Input
        v-model="value"
        type="textarea"
        placeholder="Enter something..."
        style="margin-right: 20px; width: 300px"
      /><br>
      <br>
      <Input
        v-model="value"
        type="textarea"
        :rows="3"
        placeholder="Enter something..."
        style="width: 300px"
      />
    </div>
    <br>
    <div class="item">
      <span>适应文本高度的文本域</span>
      <Input
        v-model="value"
        type="textarea"
        placeholder="Enter something..."
        style="margin-right: 20px; width: 300px"
      /><br><br>
      <Input
        v-model="value"
        type="textarea"
        :rows="3"
        placeholder="Enter something..."
        style="width: 300px"
      />
    </div>
    <br>
    <div class="item flex">
      <span>组合输入框</span>
      <Input v-model="value" style="margin-right: 20px; width: 300px">
        <span slot="prepend">http://</span>
        <span slot="append" style="width: 100px">.com</span>
      </Input><br>
      <Input v-model="value" style="margin-right: 20px; width: 500px">
        <Select v-model="select1" slot="prepend" style="width: 100px">
          <Option value="http">http://</Option>
          <Option value="https">https://</Option>
        </Select>
        <Select v-model="select2" slot="append" style="width: 100px">
          <Option value="com">.com</Option>
          <Option value="org">.org</Option>
          <Option value="io">.io</Option>
        </Select>
      </Input><br>
      <Input v-model="value" style="width: 300px">
        <Select v-model="select3" slot="prepend" style="width: 80px">
          <Option value="day">Day</Option>
          <Option value="month">Month</Option>
        </Select>
        <Button slot="append" icon="icon_assembly-sreach"></Button>
      </Input>
    </div>

  </div>
</template>
<script>
export default {
  data () {
    return {
      value: '',
      select1: '',
      select2: '',
      select3: '',
    }
  },
  methods: {
  }
}
</script>
```
:::
### API
#### Input props 
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
      <td>type</td>
      <td>输入框类型，可选值为 <code>text</code>、<code>password</code>、<code>textarea</code>、<code>url</code>、<code>email</code>、<code>date</code>、<code>number</code>、<code>tel</code></td>
      <td>String</td>
      <td>text</td>
    </tr>
    <tr>
      <td>value</td>
      <td>绑定的值，可使用 v-model 双向绑定</td>
      <td>String | Number</td>
      <td>空</td>
    </tr>
    <tr>
      <td>size</td>
      <td>输入框尺寸，可选值为<code>large</code>、<code>small</code>、<code>default</code>或者不设置</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>placeholder</td>
      <td>占位文本</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>clearable</td>
      <td>是否显示清空按钮</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>border <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.5.0</sup></span></td>
      <td>是否显示边框</td>
      <td>Boolean</td>
      <td>true</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>设置输入框为禁用状态</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>readonly</td>
      <td>设置输入框为只读</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>maxlength</td>
      <td>最大输入长度</td>
      <td>Number</td>
      <td>-</td>
    </tr>
    <tr>
      <td>show-word-limit <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.0.0</sup></span></td>
      <td>是否显示输入字数统计，可以配合 maxlength 使用</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>password <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.0.0</sup></span></td>
      <td>是否显示切换密码图标</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>icon</td>
      <td>输入框尾部图标，仅在 text 类型下有效</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>prefix</td>
      <td>输入框头部图标</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>suffix</td>
      <td>输入框尾部图标</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>search</td>
      <td>是否显示为搜索型输入框</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>enter-button</td>
      <td>开启 search 时可用，是否有确认按钮，可设为按钮文字</td>
      <td>Boolean | String</td>
      <td>false</td>
    </tr>
    <tr>
      <td>rows</td>
      <td>文本域默认行数，仅在 textarea 类型下有效</td>
      <td>Number</td>
      <td>2</td>
    </tr>
    <tr>
      <td>autosize</td>
      <td>自适应内容高度，仅在 textarea 类型下有效，可传入对象，如 { minRows: 2, maxRows: 6 }</td>
      <td>Boolean | Object</td>
      <td>false</td>
    </tr>
    <tr>
      <td>number</td>
      <td>将用户的输入转换为 Number 类型</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>autofocus</td>
      <td>自动获取焦点</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>autocomplete</td>
      <td>原生的自动完成功能</td>
      <td>String</td>
      <td>off</td>
    </tr>
    <tr>
      <td>element-id</td>
      <td>给表单元素设置 <code>id</code>，详见 Form 用法。</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>spellcheck</td>
      <td>原生的 spellcheck 属性</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>wrap</td>
      <td>原生的 wrap 属性，可选值为 hard 和 soft，仅在 textarea 下生效</td>
      <td>String</td>
      <td>soft</td>
    </tr>
  </tbody>
</table>

#### Input events 
<table>
  <thead>
    <tr>
      <th style="width: 165px">事件名</th>
      <th style="width: 540px">说明</th>
      <th>返回值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>on-enter</td>
      <td>按下回车键时触发</td>
      <td>无</td>
    </tr>
    <tr>
      <td>on-click</td>
      <td>设置 icon 属性后，点击图标时触发</td>
      <td>无</td>
    </tr>
    <tr>
      <td>on-change</td>
      <td>数据改变时触发</td>
      <td>event</td>
    </tr>
    <tr>
      <td>on-focus</td>
      <td>输入框聚焦时触发</td>
      <td>无</td>
    </tr>
    <tr>
      <td>on-blur</td>
      <td>输入框失去焦点时触发</td>
      <td>无</td>
    </tr>
    <tr>
      <td>on-keyup</td>
      <td>原生的 keyup 事件</td>
      <td>event</td>
    </tr>
    <tr>
      <td>on-keydown</td>
      <td>原生的 keydown 事件</td>
      <td>event</td>
    </tr>
    <tr>
      <td>on-keypress</td>
      <td>原生的 keypress 事件</td>
      <td>event</td>
    </tr>
    <tr>
      <td>on-search</td>
      <td>开启 search 时可用，点击搜索或按下回车键时触发</td>
      <td>value</td>
    </tr>
    <tr>
      <td>on-clear <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">3.4.0</sup></span></td>
      <td>开启 clearable 时可用，点击清空按钮时触发</td>
      <td>无</td>
    </tr>
  </tbody>
</table>

#### Input slot
<table>
  <thead>
    <tr>
      <th style="width: 165px">名称</th>
      <th style="width: 630px">说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>prepend</td>
      <td>前置内容，仅在 text 类型下有效</td>
    </tr>
    <tr>
      <td>append</td>
      <td>后置内容，仅在 text 类型下有效</td>
    </tr>
    <tr>
      <td>prefix</td>
      <td>输入框头部图标</td>
    </tr>
    <tr>
      <td>suffix</td>
      <td>输入框尾部图标</td>
    </tr>
  </tbody>
</table>