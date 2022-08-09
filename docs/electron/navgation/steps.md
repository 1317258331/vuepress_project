### Steps 步骤条
拆分某项流程的步骤，引导用户按流程完成任务。
#### 基础步骤条
::: demo  
```html
<template>
    <Steps :current="1" position="bottom">
        <Step title="Finished"></Step>
        <Step title="In Progress"></Step>
        <Step title="Waiting"></Step>
        <Step title="Waiting"></Step>
    </Steps>
</template>
<script>
    export default {
        
    }
</script>
```
:::
#### 竖向步骤条
::: demo  
```html
<template>
    <div class="container" style="display: flex;justify-content: space-around;">
        <Steps :current="1" direction="vertical">
            <Step title="Finished"></Step>
            <Step title="In Progress"></Step>
            <Step title="Waiting"></Step>
            <Step title="Waiting"></Step>
        </Steps>
        <Steps :current="1" direction="vertical">
            <Step title="Finished" content="Descriptive word"></Step>
            <Step title="In Progress" content="Descriptive word"></Step>
            <Step title="Waiting" content="Descriptive word"></Step>
            <Step title="Waiting" content="Descriptive word"></Step>
        </Steps>
      </div>
</template>
<script>
    export default {
        
    }
</script>
```
:::
#### 小型竖向步骤条
::: demo  
```html
<template>
    <div class="container" style="display: flex;justify-content: space-around;">
        <Steps :current="1" direction="vertical" size="small" timerIcon>
            <Step title="Finished"></Step>
            <Step title="In Progress"></Step>
            <Step title="Waiting"></Step>
            <Step title="Waiting"></Step>
        </Steps>
        <Steps :current="2" direction="vertical" size="small" timerIcon>
            <Step title="Finished" content="Descriptive word"></Step>
            <Step title="In Progress" content="Descriptive word"></Step>
            <Step title="Waiting" content="Descriptive word"></Step>
            <Step title="Waiting" content="Descriptive word"></Step>
        </Steps>
      </div>
</template>
<script>
    export default {
        
    }
</script>
```
:::
#### 点状步骤条
::: demo  
```html
<template>
    <div class="container" style="display: flex;justify-content: space-around;">
        <Steps :current="1" direction="vertical" Punctate>
            <Step title="Finished"></Step>
            <Step title="In Progress"></Step>
            <Step title="Waiting"></Step>
            <Step title="Waiting"></Step>
        </Steps>
        <Steps :current="1" direction="vertical" Punctate>
            <Step title="Finished" content="Descriptive word"></Step>
            <Step title="In Progress" content="Descriptive word"></Step>
            <Step title="Waiting" content="Descriptive word"></Step>
            <Step title="Waiting" content="Descriptive word"></Step>
        </Steps>
      </div>
</template>
<script>
    export default {
        
    }
</script>
```
:::
### API
#### Steps props
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
      <td>current</td>
      <td>当前步骤，从 0 开始计数</td>
      <td>Number</td>
      <td>0</td>
    </tr>
    <tr>
      <td>status</td>
      <td>当前步骤的状态，可选值为<code>wait</code>、<code>process</code>、<code>finish</code>、<code>error</code></td>
      <td>String</td>
      <td>process</td>
    </tr>
    <tr>
      <td>size</td>
      <td>步骤条的尺寸，可选值为<code>small</code>或者不写</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>direction</td>
      <td>步骤条的方向，可选值为<code>horizontal</code>（水平）或<code>vertical</code>（垂直）</td>
      <td>String</td>
      <td>horizontal</td>
    </tr>
  </tbody>
</table>

#### Step props
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
      <td>status</td>
      <td>步骤的状态，可选值为<code>wait</code>、<code>process</code>、<code>finish</code>、<code>error</code>，不设置时自动判断</td>
      <td>String</td>
      <td>process</td>
    </tr>
    <tr>
      <td>title</td>
      <td>标题</td>
      <td>String</td>
      <td>空</td>
    </tr>
    <tr>
      <td>content</td>
      <td>步骤的详细描述，可选</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>icon</td>
      <td>步骤的图标，可选</td>
      <td>String</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

#### Step slot
<table>
  <thead>
    <tr>
      <th>名称</th>
      <th style="width: 628px">说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>title <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.0.0</sup></span></td>
      <td>自定义 title</td>
    </tr>
    <tr>
      <td>content <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.0.0</sup></span></td>
      <td>自定义 content</td>
    </tr>
    <tr>
      <td>icon <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.0.0</sup></span></td>
      <td>自定义 icon</td>
    </tr>
  </tbody>
</table>