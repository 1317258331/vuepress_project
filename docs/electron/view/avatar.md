### Avatar 头像
用来代表用户或事物，支持图片、图标或字符展示。
#### 基础用法
::: demo  
```html
<Avatar size="large" />
<Avatar />
<Avatar size="small" />
<Avatar size="min" />
```
:::
#### 类型
::: demo  
```html
<Avatar src='https://yunfanxiaossd-prod.oss-cn-beijing.aliyuncs.com/images/meinv2.png' />
<Avatar icon="oadesktop_share" />
<Avatar>你</Avatar>
```
:::
### API
#### Avatar props
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
      <td>shape</td>
      <td>指定头像的形状，可选值为 circle、square</td>
      <td>String</td>
      <td>circle</td>
    </tr>
    <tr>
      <td>size</td>
      <td>设置头像的大小，可选值为 large、small、default，4.0.0 版本开始支持设置具体数值</td>
      <td>String | Number</td>
      <td>default</td>
    </tr>
    <tr>
      <td>src</td>
      <td>图片类头像的资源地址</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>icon</td>
      <td>设置头像的图标类型，参考 <code>Icon</code> 组件</td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>custom-icon</td>
      <td>自定义图标</td>
      <td>String</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

#### Avatar events
<table>
  <thead>
    <tr>
      <th>事件名</th>
      <th style="width: 540px">说明</th>
      <th>返回值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>on-error <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">3.3.0</sup></span></td>
      <td>在设置 src 且图片加载不成功时触发</td>
      <td>event</td>
    </tr>
  </tbody>
</table>