### Upload 上传
文件选择上传和拖拽上传控件。
#### 基础用法
::: demo  下列依次为单选上传、多选上传、手动上传、拖拽上传。
```html
<template>
    <Upload action="//jsonplaceholder.typicode.com/posts/">
        <Button icon="ios-cloud-upload-outline">Upload files</Button>
    </Upload>
    <br>
    <Upload
        multiple
        action="//jsonplaceholder.typicode.com/posts/">
        <Button icon="ios-cloud-upload-outline">Upload files</Button>
    </Upload>
    <br>
    <div>
        <Upload
            :before-upload="handleUpload"
            action="//jsonplaceholder.typicode.com/posts/">
            <Button icon="ios-cloud-upload-outline">Select the file to upload</Button>
        </Upload>
        <div v-if="file !== null">Upload file: {{ file.name }} <Button type="text" @click="upload" :loading="loadingStatus">{{ loadingStatus ? 'Uploading' : 'Click to upload' }}</Button></div>
    </div>
    <br>
    <Upload
        multiple
        type="drag"
        action="//jsonplaceholder.typicode.com/posts/">
        <div style="padding: 20px 0">
            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
            <p>Click or drag files here to upload</p>
        </div>
    </Upload>
</template>
<script>
    export default {
        data () {
            return {
                //拖拽上传
                file: null,
                loadingStatus: false
            }
        },
        methods: {
            //拖拽上传
            handleUpload (file) {
                this.file = file;
                return false;
            },
            upload () {
                this.loadingStatus = true;
                setTimeout(() => {
                    this.file = null;
                    this.loadingStatus = false;
                    this.$Message.success('Success')
                }, 1500);
            }
        }
    }
</script>
```
:::
### API
#### Upload props
<table>
  <thead>
  <tr>
    <th>属性</th>
    <th style="width: 560px">说明</th>
    <th>类型</th>
    <th>默认值</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>action</td>
    <td>上传的地址，必填</td>
    <td>String</td>
    <td>-</td>
  </tr>
  <tr>
    <td>headers</td>
    <td>设置上传的请求头部</td>
    <td>Object</td>
    <td>{}</td>
  </tr>
  <tr>
    <td>multiple</td>
    <td>是否支持多选文件</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
  <tr>
    <td>paste</td>
    <td>是否支持粘贴上传文件</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
  <tr>
    <td>webkitdirectory <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">4.4.0</sup></span>
    </td>
    <td>是否开启选择文件夹，部分浏览器适用</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
  <tr>
    <td>disabled <span class="ivu-badge"> <sup class="ivu-badge-count ivu-badge-count-alone">3.3.0</sup></span></td>
    <td>是否禁用</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
  <tr>
    <td>data</td>
    <td>上传时附带的额外参数</td>
    <td>Object</td>
    <td>-</td>
  </tr>
  <tr>
    <td>name</td>
    <td>上传的文件字段名</td>
    <td>String</td>
    <td>file</td>
  </tr>
  <tr>
    <td>with-credentials</td>
    <td>支持发送 cookie 凭证信息</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
  <tr>
    <td>show-upload-list</td>
    <td>是否显示已上传文件列表</td>
    <td>Boolean</td>
    <td>true</td>
  </tr>
  <tr>
    <td>type</td>
    <td>上传控件的类型，可选值为 <code>select</code>（点击选择），<code>drag</code>（支持拖拽）</td>
    <td>String</td>
    <td>select</td>
  </tr>
  <tr>
    <td>accept</td>
    <td>接受上传的<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept"
                target="_blank">文件类型</a></td>
    <td>String</td>
    <td>-</td>
  </tr>
  <tr>
    <td>format</td>
    <td>支持的文件类型，与 accept 不同的是，format 是识别文件的后缀名，accept 为 input 标签原生的 accept 属性，会在选择文件时过滤，可以两者结合使用</td>
    <td>Array</td>
    <td>[]</td>
  </tr>
  <tr>
    <td>max-size</td>
    <td>文件大小限制，单位 kb</td>
    <td>Number</td>
    <td>-</td>
  </tr>
  <tr>
    <td>before-upload</td>
    <td>上传文件之前的钩子，参数为上传的文件，若返回 false 或者 Promise 则停止上传</td>
    <td>Function</td>
    <td>-</td>
  </tr>
  <tr>
    <td>on-progress</td>
    <td>文件上传时的钩子，返回字段为 event, file, fileList</td>
    <td>Function</td>
    <td>-</td>
  </tr>
  <tr>
    <td>on-success</td>
    <td>文件上传成功时的钩子，返回字段为 response, file, fileList</td>
    <td>Function</td>
    <td>-</td>
  </tr>
  <tr>
    <td>on-error</td>
    <td>文件上传失败时的钩子，返回字段为 error, file, fileList</td>
    <td>Function</td>
    <td>-</td>
  </tr>
  <tr>
    <td>on-preview</td>
    <td>点击已上传的文件链接时的钩子，返回字段为 file， 可以通过 file.response 拿到服务端返回数据</td>
    <td>Function</td>
    <td>-</td>
  </tr>
  <tr>
    <td>on-remove</td>
    <td>文件列表移除文件时的钩子，返回字段为 file, fileList</td>
    <td>Function</td>
    <td>-</td>
  </tr>
  <tr>
    <td>on-format-error</td>
    <td>文件格式验证失败时的钩子，返回字段为 file, fileList</td>
    <td>Function</td>
    <td>-</td>
  </tr>
  <tr>
    <td>on-exceeded-size</td>
    <td>文件超出指定大小限制时的钩子，返回字段为 file, fileList</td>
    <td>Function</td>
    <td>-</td>
  </tr>
  <tr>
    <td>default-file-list</td>
    <td > 默认已上传的文件列表，例如：
        <pre style="background-color: #fff;">                                    <code style="color: #000">
[
    {
        name: 'img1.jpg',
        url: 'http://www.xxx.com/img1.jpg'
    },
    {
        name: 'img2.jpg',
        url: 'http://www.xxx.com/img2.jpg'
    }
]
                                    </code>
                                </pre></td>
    <td>Array</td>
    <td>[]</td>
  </tr>
  </tbody>
</table>

#### Upload methods
<table>
  <thead>
  <tr>
    <th style="width: 145px">方法名</th>
    <th style="width: 552px">说明</th>
    <th>参数</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>clearFiles</td>
    <td>清空已上传的文件列表</td>
    <td>无</td>
  </tr>
  </tbody>
</table>