# JIM SDK主要接口类



## 创建JIM实例

```javascript
this.jim = new JIM({ appId: 'bop' })
```



## 用户登录相关

### login

```javascript
this.jim.login({ uid, token }) // 登录后的实例才能使用
```

**请求参数**

| Name  | Type   | Description       |
| ----- | ------ | ----------------- |
| uid   | String | 用户id（必传）    |
| token | String | 用户token（必传） |



### logout

退出登录

```javascript
this.jim.logout() // 登出后，ws将断开连接，实例将不可用
```



### destroy

卸载并清空本地缓存

```javascript
this.jim.destroy() // 卸载后，ws将断开连接，实例将不可用
```



## 事件监听相关方法

### on

绑定事件

```javascript
this.jim.on({ eventName, handler })
```

**请求参数**

| 名称      | 类型     | 是否必选 | 描述     |
| --------- | -------- | -------- | -------- |
| eventName | String   | 是       | 事件名称 |
| handler   | Function | 是       | 回调函数 |



### un

事件解绑

```javascript
this.jim.un({ eventName, handler })
```

**请求参数**

| 名称      | 类型     | 是否必选 | 描述     |
| --------- | -------- | -------- | -------- |
| eventName | String   | 是       | 事件名称 |
| handler   | Function | 是       | 回调函数 |



## 发送消息相关方法

### sendMsg

发送消息

```javascript
this.jim.sendMsg({ msg: {
  chatId,
  content: '1',
  mid,
  type: 0
}, onProgress })
```

**请求参数**

| 名称       | 类型     | 是否必选 | 描述                                                         |
| ---------- | -------- | -------- | ------------------------------------------------------------ |
| msg        | Object   | 是       | 消息体。不同的消息类型发送不同的消息体，通过新消息模板获取消息体。消息模板详见：创建消息相关方法 |
| onProgress | Function | 否       | 消息发送进度                                                 |

**返回值**

返回该消息本身



### forwardMsg

转发消息

**△建议可以多人多消息转发。若无会话要先批量创建**

```javascript
this.jim.forwardMsg({ msg: {
  chatId,
  content: '1',
  mid,
  type: 0
}})
```

**请求参数**

| 名称 | 类型   | 是否必选 | 描述              |
| ---- | ------ | -------- | ----------------- |
| msg  | Object | 是       | 消息体。同sendMsg |

**返回值**

返回该消息本身



### resendMsg

重新发送消息。区别于**sendMsg**，该函数是在消息发送失败后才能调用

```javascript
this.jim.resendMsg({ chatId, mid, onProgress })
```

**请求参数**

| 名称       | 类型     | 是否必选 | 描述         |
| ---------- | -------- | -------- | ------------ |
| chatId     | String   | 是       | 会话Id       |
| mid        | String   | 是       | 消息Id       |
| onProgress | Function | 否       | 消息发送进度 |

**返回值**

返回该消息本身



### addReminder

发送一条新的wang消息

**△预览版有相关需求，建议跨会话**

```
this.jim.addReminder({ text, to, channel, chatId, reminderId, chatType, type, sendTime, sendMode })
```

**请求参数**

| 名称       | 类型   | 是否必选 | 描述                                       |
| ---------- | ------ | -------- | ------------------------------------------ |
| text       | String | 是       | 要发送的文本                               |
| to         | Array  | 是       | wang接收人                                 |
| channel    | Number | 是       | 发送方式。1 应用内  2 短信  3 电话         |
| chatId     | String | 是       | 会话Id                                     |
| reminderId | String | 是       | wangId。通过消息模板获取                   |
| chatType   | Number | 是       | 会话类型                                   |
| type       | Number | 是       | 消息类型。暂只支持文本消息，值为：0        |
| sendTime   | Number | 否       | 时间戳。定时wang时必选，表示wang发送的时间 |
| sendMode   | String | 否       | 定时旺时传"1"，默认不用传                  |

**返回值**

Promise。无返回值



### sendReminder

将一条文本消息转为wang消息

**△预览版有相关需求，建议跨会话**

```
this.jim.sendReminder({ mid, text, to, channel, chatId, sendTime, sendMode })
```

**请求参数**

| 名称     | 类型   | 是否必选 | 描述                                       |
| -------- | ------ | -------- | ------------------------------------------ |
| mid      | String | 是       | 要转的消息Id                               |
| text     | String | 是       | 要发送的文本                               |
| to       | Array  | 是       | wang接收人                                 |
| channel  | Number | 是       | 发送方式。1 应用内  2 短信  3 电话         |
| chatId   | String | 是       | 会话Id                                     |
| sendTime | Number | 否       | 时间戳。定时wang时必选，表示wang发送的时间 |
| sendMode | String | 否       | 定时旺时传"1"，默认不用传                  |

**返回值**

无



### resumeUpload

文件断点续传

```javascript
this.jim.resumeUpload({chatId, mid, onProgress})
```

**请求参数**

| 名称       | 类型     | 是否必选 | 描述         |
| ---------- | -------- | -------- | ------------ |
| chatId     | String   | 是       | 会话Id       |
| mid        | String   | 是       | 消息Id       |
| onProgress | Function | 否       | 消息发送进度 |

**返回值**

返回该消息本身



### replyMsg

消息回复

```
this.jim.replyMsg({ 
	chatId, 
	chatType, 
	data, 
	repliedMsgSenderName, 
	repliedMsgId, 
	repliedMsgData, 
	repliedMsgType,
 	originalMsgId
})
```

**请求参数**

| 名称                 | 类型           | 是否必选 | 描述                 |
| -------------------- | -------------- | -------- | -------------------- |
| chatId               | String         | 是       | 会话Id               |
| chatType             | String         | 是       | 会话类型             |
| data                 | String         | 是       | 消息体               |
| repliedMsgSenderName | String         | 是       | 被回复消息发送人昵称 |
| repliedMsgId         | String         | 是       | 被回复消息Id         |
| repliedMsgData       | String, Object | 是       | 被回复消息体         |
| repliedMsgType       | Number         | 是       | 被回复消息类型       |
| originalMsgId        | String         | 是       | 源消息Id             |

**返回值**

返回该消息本身



### cancelUpload

取消发送消息。图片、视频、文件类型的消息适用 

**△需跟产品确认哪些消息类型可以取消发送**

```javascript
this.jim.resumeUpload({chatId, mid, isDelete})
```

**请求参数**

| 名称     | 类型    | 是否必选 | 描述               |
| -------- | ------- | -------- | ------------------ |
| chatId   | String  | 是       | 会话Id             |
| mid      | String  | 是       | 消息Id             |
| isDelete | Boolean | 否       | 是否删除该条消息 △ |



### downloadFileByUrl（废弃）

根据文件路径下载文件

```javascript
this.jim.downloadFileByUrl({url, fileName})
```

**请求参数**

| 名称     | 类型   | 是否必选 | 描述             |
| -------- | ------ | -------- | ---------------- |
| url      | String | 是       | 文件url ，半路径 |
| fileName | String | 是       | 源文件名称       |

**返回值**

文件下载全路径



### downloadFileByFileId

根据文件路径下载文件

```javascript
this.jim.downloadFileByFileId({ fileId })
```

**请求参数**

| 名称     | 类型   | 是否必选 | 描述             |
| -------- | ------ | -------- | ---------------- |
| fileId   | String | 是       | 文件url ，半路径 |
| fileName | String | 是       | 源文件名称       |

**返回值**

```javascript
{
	download_url, // 源文件URL
	name // 源文件名称
}
```





### getUrlDetail

获取URL基本信息

**△接口返回速度慢且返回值中没有缩略图**

```javascript
this.jim.getUrlDetail({ url })
```

**请求参数**

| 名称 | 类型   | 是否必选 | 描述         |
| ---- | ------ | -------- | ------------ |
| url  | String | 是       | 一个有效链接 |

**返回值**

```javascript
{
	abstract,
  title,
  mid
}
```



## 消息回执相关方法

### reportMsgRead

发送**firstMsgId**至**lastMsgId**之间消息的阅读报告

```javascript
this.jim.reportMsgRead({chatId, firstMsgId, lastMsgId})
```

**请求参数**

| 名称       | 类型   | 是否必选 | 描述                                                   |
| ---------- | ------ | -------- | ------------------------------------------------------ |
| chatId     | String | 是       | 会话Id                                                 |
| firstMsgId | String | 是       | 报告起始消息                                           |
| lastMsgId  | String | 否       | 报告截止消息。若为空，则报告从firstMsgId之后的所有消息 |

**返回值**

无



### playReport

报告图片、视频、文件等类型的消息已经查看

```javascript
this.jim.playReport({ chatId, mid, targetUid })
```

**请求参数**

| 名称      | 类型   | 是否必选 | 描述           |
| --------- | ------ | -------- | -------------- |
| chatId    | String | 是       | 会话Id         |
| mid       | String | 是       | 消息Id         |
| targetUid | String | 是       | 源消息发送人Id |

**返回值**

无



### reminderReadReport

发送wang消息阅读报告

```
this.jim.reminderReadReport({ reminderId, targetUid, chatId })
```

**请求参数**

| 名称       | 类型   | 是否必选 | 描述             |
| ---------- | ------ | -------- | ---------------- |
| reminderId | String | 是       | wangId           |
| targetUid  | String | 是       | 源消息的发送人Id |
| chatId     | String | 是       | 会话Id           |

**返回值**

Promise。无返回值



## 会话相关方法

### readChat

将会话的置为最新的已读状态，清空未读数。**不改变消息本身的阅读状态**

**△放入setActivedChat方法中，校验游标**

```javascript
this.jim.readChat({ chatId, readCursor: { mid, seqId } })
```

**请求参数**

| 名称             | 类型   | 是否必选 | 描述                               |
| ---------------- | ------ | -------- | ---------------------------------- |
| chatId           | String | 是       | 会话Id                             |
| readCursor       | Object | 是       | 阅读游标数据                       |
| readCursor.mid   | String | 是       | 当前会话的最后一条消息             |
| readCursor.seqId | String | 是       | 当前会话的最后一条消息的服务端序号 |

**返回值：无**



### addPrivateChat

创建私聊会话

```javascript
this.jim.addPrivateChat({ uid, name, url })
```

**请求参数**

| 名称 | 类型   | 是否必选 | 描述             |
| ---- | ------ | -------- | ---------------- |
| uid  | String | 是       | 对方的id         |
| name | String | 是       | 对方的昵称       |
| url  | String | 否       | 对方的头像半路径 |

**返回值：Object**

| 名称   | 类型   | 描述           |
| ------ | ------ | -------------- |
| chatId | String | 创建后的会话Id |



### addGroupChat

创建群聊会话

**△群头像可不必传**

**预览版：群默认头像需和产品确认**

```javascript
this.jim.addGroupChat({ ownerId, groupType, members, pic, name })
```

**请求参数**

| 名称      | 类型   | 是否必选 | 描述                                                     |
| --------- | ------ | -------- | -------------------------------------------------------- |
| ownerId   | String | 否       | 群聊所属商户的Id。groupType不等于1时必选                 |
| groupType | Number | 是       | 群类型。0 内部群  1 普通群  2 全员群  3 部门群  4 通知群 |
| members   | Array  | 是       | 群成员 。[{ uid, name }]                                 |
| pic       | Array  | 是       | 群头像。[{ uid, name, url }]                             |
| name      | String | 是       | 群名称                                                   |

**返回值：Object**

| 名称   | 类型   | 描述           |
| ------ | ------ | -------------- |
| chatId | String | 创建后的会话Id |



### addGroupMember

添加群成员

```javascript
this.jim.addGroupMember({ chatId, members, pic })
```

**请求参数**

| 名称    | 类型   | 是否必选 | 描述                                                 |
| ------- | ------ | -------- | ---------------------------------------------------- |
| chatId  | String | 是       | 会话Id                                               |
| members | Array  | 是       | 将要添加的群成员 。[{ uid, name }]                   |
| pic     | Array  | 是       | 更新后的群头像。[{ uid, name, url }]<br />兼容老版本 |

**返回值：无**



### removeGroupMember

移除群成员

```javascript
this.jim.removeGroupMember({ chatId, members, pic })
```

**请求参数**

| 名称    | 类型   | 是否必选 | 描述                                                 |
| ------- | ------ | -------- | ---------------------------------------------------- |
| chatId  | String | 是       | 会话Id                                               |
| members | Array  | 是       | 将要移除的群成员 。[{ uid, name }]                   |
| pic     | Array  | 是       | 更新后的群头像。[{ uid, name, url }]<br />兼容老版本 |

**返回值：无**



### topChat

会话置顶

```javascript
this.jim.topChat({ chatId })
```

**请求参数**

| 名称   | 类型   | 是否必选 | 描述   |
| ------ | ------ | -------- | ------ |
| chatId | String | 是       | 会话Id |

**返回值：无**



### unTopChat

会话取消置顶

```javascript
this.jim.unTopChat({ chatId })
```

**请求参数**

| 名称   | 类型   | 是否必选 | 描述   |
| ------ | ------ | -------- | ------ |
| chatId | String | 是       | 会话Id |

**返回值：无**



### openNotify

关闭会话免打扰。取消后，收到新消息会弹出通知

```javascript
this.jim.openNotify({ chatId })
```

**请求参数：Object**

| 名称   | 类型   | 是否必选 | 描述   |
| ------ | ------ | -------- | ------ |
| chatId | String | 是       | 会话Id |

**返回值：无**



### closeNotify

开启会话免打扰。开启后，收到新消息不会通知

```javascript
this.jim.closeNotify({ chatId })
```

**请求参数：Object**

| 名称   | 类型   | 是否必选 | 描述   |
| ------ | ------ | -------- | ------ |
| chatId | String | 是       | 会话Id |

**返回值：无**



### activateGroup

激活群聊。群聊从会话列表中移除后调用此方法可重新激活

```javascript
this.jim.activateGroup({ chatId })
```

**请求参数：Object**

| 名称   | 类型   | 是否必选 | 描述   |
| ------ | ------ | -------- | ------ |
| chatId | String | 否       | 会话Id |

**返回值**

无



### getChats

获取会话列表

**△需和产品确认已经解散的群聊是否还显示列表中**

**△需和产品却解禁言时间相关需求**

**△__tmp;是否置顶**

```javascript
this.jim.getChats()
```

**请求参数：无**

**返回值：Array**

```javascript
// 返回示例
[
	{
		chatId, // 会话Id
		name, // 群名称
		type, // 会话类型
		groupType, // 仅群聊用到。群类型。私聊此项为空
    pic, // 会话头像
    memberStatus, // 该会话的用户状态。0 正常  1 会话已经移除  2 退出了会话
    chatStatus, // 该会话的状态。0 正常  1 已经解散的
    notifyStatus, // 消息通知状态。0 未开启免打扰 1 免打扰
    unReadNum, // 消息未读数
    isAtMe, // 仅群聊用到。是否有@我的消息
    lastMsg, // 最后一条消息
    receivedExpression, // 贴表情的相关数据
    masterUid, // 仅群聊用到。群主Id
    ownerId, // 仅群聊用到。所属商户Id
    memberForbidenStatus, // 仅群聊用到。用户是否被禁言。0 否  1 是
    chatForbidenStatus, // 仅群聊用到。该会话是否开启全员禁言。0 否  1 是
    forbidenExpiredTime, // 仅群聊用到。解除禁言的时间。暂未实现该功能
    privateUser, // 私聊有这个字段。表示对方的信息
    role, // 仅群聊用到。用户在此群聊中的角色
    adminAtAll, // 是否仅群主和管理员可以@所有人。0 否  1 是
    __tmp: {
      topTime, // 会话置顶时间戳。设置置顶后此项才会有值，否则为0
      createTime, // 会话创建的时间戳
    }
	}
]
```



### getChatDetail

获取单个会话数据，数据体见**getChats**

```
this.jim.getChatDetail(chatId)
```

**请求参数**

| 名称   | 类型   | 是否必选 | 描述   |
| ------ | ------ | -------- | ------ |
| chatId | String | 是       | 会话Id |

**返回值：Object**

详见**getChats**



### getChatMembers

获取会话中所有成员列表

```javascript
this.jim.getChatMembers(chatId)
```

**请求参数**

| 名称   | 类型   | 是否必选 | 描述   |
| ------ | ------ | -------- | ------ |
| chatId | String | 是       | 会话Id |

**返回值：Object**

```javascript
[
	{
		uid,
		name,
		url
	}
]
```



### getReadCursorMsg（需修改）

获取当前会话的最后一组未读消息的第一条消息

**△服务端返回第一条未读消息**

```javascript
this.jim.getReadCursorMsg(chatId)
```

**请求参数**

| 名称   | 类型   | 是否必选 | 描述   |
| ------ | ------ | -------- | ------ |
| chatId | String | 是       | 会话Id |

**返回值**

消息体



### clearRecords

清空会话的聊天记录

```javascript
this.jim.clearRecords({ chatId })
```

**请求参数**

| 名称   | 类型   | 是否必选 | 描述   |
| ------ | ------ | -------- | ------ |
| chatId | String | 是       | 会话Id |

**返回值**

无



## 群相关方法

### leaveGroup

退出群聊

```javascript
this.jim.leaveGroup({ chatId, pic })
```

**请求参数**

| 名称   | 类型   | 是否必选 | 描述                                                         |
| ------ | ------ | -------- | ------------------------------------------------------------ |
| chatId | String | 是       | 会话Id                                                       |
| pic    | Array  | 是       | 更新后的会话头像。若头像中没有自己则不用修改<br />**△预览版不用该字段** |

**返回值**

无



### breakGroup

解散群聊

**△解散后逻辑**

```
this.jim.breakGroup({ chatId })
```

**请求参数**

| 名称   | 类型   | 是否必选 | 描述   |
| ------ | ------ | -------- | ------ |
| chatId | String | 是       | 会话Id |

**返回值**

无



### updateChatPic

修改群头像

```
this.jim.updateChatPic({ chatId, url })
```

**请求参数**

| 名称   | 类型   | 是否必选 | 描述       |
| ------ | ------ | -------- | ---------- |
| chatId | String | 是       | 会话Id     |
| url    | String | 是       | 头像半路径 |

**返回值**

无



### modifyGroupName

修改群名称

```
this.jim.modifyGroupName({ chatId, name })
```

**请求参数**

| 名称   | 类型   | 是否必选 | 描述                 |
| ------ | ------ | -------- | -------------------- |
| chatId | String | 是       | 会话Id               |
| name   | String | 是       | 群名称。最大50个字符 |

**返回值**

无



### addAdmin

添加群管理员

```
this.jim.addAdmin({ chatId, members })
```

**请求参数**

| 名称    | 类型   | 是否必选 | 描述                                |
| ------- | ------ | -------- | ----------------------------------- |
| chatId  | String | 是       | 会话Id                              |
| members | Array  | 是       | 添加的群管理员集合。[{ uid, name }] |

**返回值**

无



### deleteAdmin

移除群管理员

```javascript
this.jim.deleteAdmin({ chatId, members })
```

**请求参数**

| 名称    | 类型   | 是否必选 | 描述                                |
| ------- | ------ | -------- | ----------------------------------- |
| chatId  | String | 是       | 会话Id                              |
| members | Array  | 是       | 移除的群管理员集合。[{ uid, name }] |

**返回值**

无



### openAtAll

开启只能群主或群管理员@所有人

```
this.jim.openAtAll({ chatId })
```

**请求参数**

| 名称   | 类型   | 是否必选 | 描述   |
| ------ | ------ | -------- | ------ |
| chatId | String | 是       | 会话Id |

**返回值**

无



### closeAtAll

关闭只能群主或群管理@所有人

```
this.jim.closeAtAll({ chatId })
```

**请求参数**

| 名称   | 类型   | 是否必选 | 描述   |
| ------ | ------ | -------- | ------ |
| chatId | String | 是       | 会话Id |

**返回值**

无



### transferMaster

转让群主

**△被转让人只能有一个人**

```javascript
this.jim.closeAtAll({ chatId, to })
```

**请求参数**

| 名称   | 类型   | 是否必选 | 描述                  |
| ------ | ------ | -------- | --------------------- |
| chatId | String | 是       | 会话Id                |
| to     | Array  | 是       | 被转让人。[uid, name] |

**返回值**

无



### forbidTalking

设置群聊禁言

```
this.jim.forbidTalking({ chatId, members, expireOption })
```

**请求参数**

| 名称         | 类型   | 是否必选 | 描述                                                         |
| ------------ | ------ | -------- | ------------------------------------------------------------ |
| chatId       | String | 是       | 会话Id                                                       |
| members      | Array  | 是       | 被禁言成员。[{ uid, name }]。全员禁言该项为：[{ uid: "0" }]  |
| expireOption | Number | 否       | 禁言时长 ，此项不传为长期禁言。<br />可选值：<br />0：5min <br />1：30min<br />2：60min<br />3：120min<br />4：240min<br />...<br />**△待确认** |

**返回值**

无



### unForbidTalking

取消群聊禁言

```
this.jim.forbidTalking({ chatId, members })
```

**请求参数**

| 名称    | 类型   | 是否必选 | 描述                                                         |
| ------- | ------ | -------- | ------------------------------------------------------------ |
| chatId  | String | 是       | 会话Id                                                       |
| members | Array  | 是       | 被解禁言成员。[{ uid, name }]。若全员解禁，该项为：[{ uid: "0" }] |

**返回值**

无



### getAnnouncementList

获取群公告列表

**△字段含义确认**

```javascript
this.jim.getAnnouncementList({ chatId, pageNum, pageSize })
```

**请求参数**

| 名称     | 类型   | 是否必选 | 描述                 |
| -------- | ------ | -------- | -------------------- |
| chatId   | String | 是       | 会话Id               |
| pageNum  | Number | 是       | 分页页码             |
| pageSize | Number | 否       | 每页条数。默认为10条 |

**返回值**

```javascript
{
	"announcemenId": "1928c4444495480b9f46a3b8613b71d3", // 公告Id
	"chatId": "e8882edecd25678db3662355ddd5634e",
	"conent": "测试群公告1001",
	"createBy": "2000001487612",
	"createTime": "2021-01-18 18:45:58",
	"updateBy": "2000001487612",
	"updateTime": "2021-01-18 18:45:58",
	"status": 3, // 需确认
	"pushTime": "2021-01-18 18:45:59",
	"isTop": 0,  // 是否置顶 0 未置顶 1 置顶
	"systemId": "bop",
	"sendName": "猩猩",
	"sendMode": 3, // 公告发送方式
	"type": null,
	"chatType": null,
	"data": null,
	"countNum": 2, // 公告阅读人数
	"users": null,
	"comments": [], // 评论相关数据
	"receivers": [{ // 公告接收人
		"announcemenId": "1928c4444495480b9f46a3b8613b71d3", // 公告Id
		"receiverId": "1000000000701", // 接收人Id
		"isReaded": 0, // 接收人是否已读公告
		"readTime": null, // 接收人阅读时间
		"isLiked": 0, // 接收人是否点赞
		"systemId": "bop",
		"nickName": null,
		"name": "刘能  测试", // 接收人昵称
		"pic": null // 接收人头像
	}],
	"userName": "星星2",
	"nickName": null,
	"pic": null
}
```



### likeAnnouncement

点赞群公告

```javascript
this.jim.likeAnnouncement({ announcementId, likeType })
```

**请求参数**

| 名称           | 类型   | 是否必选 | 描述                                 |
| -------------- | ------ | -------- | ------------------------------------ |
| announcementId | String | 是       | 公告Id                               |
| likeType       | Number | 是       | 点赞类型<br />0 取消点赞<br />1 点赞 |

**返回值**

无



### deleteAnnouncement（**△需确认群公告处理权限**）

删除群公告

```javascript
this.jim.deleteAnnouncement({ announcementId })
```

**请求参数： Object**

| 名称           | 类型   | 是否必选 | 描述   |
| -------------- | ------ | -------- | ------ |
| announcementId | String | 是       | 公告Id |

**返回值**

无



### topAnnouncement

置顶/取消置顶群公告

```javascript
this.jim.topAnnouncement({ announcementId, chatId, isTop })
```

**请求参数： Object**

| 名称           | 类型   | 是否必选 | 描述                      |
| -------------- | ------ | -------- | ------------------------- |
| announcementId | String | 是       | 公告Id                    |
| chatId         | String | 是       | 会话Id                    |
| isTop          | Number | 是       | 1：置顶 <br />0：取消置顶 |

**返回值**

无



### saveOrUpdateAnnouncement

发布/修改群公告

```javascript
this.jim.saveOrUpdateAnnouncement({ announcementId, chatId, chatType, data, pushTime, sendMode, sendName, status, type, systemId })
```

**请求参数：Object**

| 名称           | 类型   | 是否必选 | 描述                                                         |
| -------------- | ------ | -------- | ------------------------------------------------------------ |
| announcementId | String | 否       | 公告Id。修改时必传                                           |
| chatId         | String | 是       | 会话Id                                                       |
| chatType       | Number | 是       | 会话类型                                                     |
| data           | String | 是       | 公告内容                                                     |
| pushTime       | Number | 否       | 时间戳。发布时间**△类型待确认**                              |
| sendMode       | String | 是       | 发布类型。<br />1 发送不通知 <br />2 发送到群聊 <br />3 发送到群聊并WANG提醒 |
| sendName       | String | 是       | 发布人昵称                                                   |
| status         | Number | 是       | 0 保存（**△该值存在意义**） <br />1 立刻发布 <br />2 定时发布 (定时发布是需要传pushTime) |

**返回值**

无



### getAnnouncementDetail

获取群公告详情

```javascript
this.jim.getAnnouncementDetail({ mid, announcementId })
```

**请求参数：Object**

| 名称           | 类型   | 是否必选 | 描述   |
| -------------- | ------ | -------- | ------ |
| announcementId | String | 是       | 公告Id |
| mid            | String | 是       | 消息Id |

**返回值**

群公告详情



### commentAnnouncement

评论群公告

```javascript
this.jim.commentAnnouncement({ announcementId, content, sendMode })
```

**请求参数：Object**

| 名称           | 类型   | 是否必选 | 描述                                                         |
| -------------- | ------ | -------- | ------------------------------------------------------------ |
| announcementId | String | 是       | 公告Id                                                       |
| createBy       | String | 是       | 评论人Id                                                     |
| content        | String | 是       | 评论内容                                                     |
| sendMode       | Number | 是       | 0 只评论，不向会话中发送消息<br />1 评论并向会话中发送消息<br />**△需求待确认** |

**返回值**

无



## 消息相关方法

### getMsgs

根据获取消息列表

```javascript
this.jim.getMsgs({ chatId, cursorMid, limit, reverse, containCursor })
```

**请求参数：Object**

| 名称          | 类型    | 是否必选 | 描述                                           |
| ------------- | ------- | -------- | ---------------------------------------------- |
| chatId        | String  | 是       | 会话Id                                         |
| cursorMid     | String  | 否       | 消息游标。从该消息作为锚点拉取消息。默认为null |
| limit         | Number  | 否       | 消息数量。默认为20                             |
| reverse       | Boolean | 否       | 是否反向拉取。默认为false，按发送时间正序拉取  |
| containCursor | Boolean | 否       | 是否包含游标消息。默认为false，不包含          |

**返回值：Array**

```javascript
// 返回实例
[
	{
		mid, // 消息Id
    chatId, // 会话Id
    senderUid, // 消息发送人Id
    senderName, // 消息发送人昵称
    senderDid, // 消息发送设备
    type, // 消息类型。详见消息类型
    chatType, // 所属会话类型
    content, // 消息体。
    serverSendTime, // 服务端的发送成功后的时间戳
    serverSendOrder, // 服务端的发送成功后的顺序
    sendState, // 发送状态。0 发送中 1 发送失败 2 发送成功
    targetsNum, // 消息接收人数
    unReadNum, // 消息未读人数
    readHandleState, // 消息的阅读状态。0 未读 1 已读 2 已读已报告
    playHandleState, // 消息的播放状态。0 未播放 1 已播放 2 已播放已报告
    sendAtDetail, // 文本消息的@数据。[{ uid, name }]
    reminderId, // wang消息Id。不是wang消息此项为空
    expressions, // 贴表情相关数据
    to, // wang的接收人。不是wang消息此项为空
    channel, // wang的发送方式。不是wang消息此项为空
    originalMsgId, // 该回复消息的源消息Id。不是回复消息此项为空
    repliedMsgId, // 回复消息的Id。不是回复消息此项为空
    repliedMsgType, // 回复消息的消息类型。不是回复消息此项为空
    repliedMsgData, // 回复消息的消息体。不是回复消息此项为空
    repliedMsgSenderName, // 回复消息的消息发送人昵称。不是回复消息此项为空
    repliedReminderId, // wang的回复消息的Id。不是wang回复消息此项为空
    repliedReminderSenderName, // wang回复消息的wang发送人昵称。不是wang回复消息此项为空
    repliedReminderType, // wang回复消息的wang消息类型。不是wang回复消息此项为空
    repliedReminderData, // wang回复消息的wang消息体。不是wang回复消息此项为空
	}
]
```



### getMsgDetail

获取单条消息

```javascript
this.jim.getMsgDetail(mid, chatId)
```

**请求参数**

| 名称   | 类型   | 是否必选 | 描述                           |
| ------ | ------ | -------- | ------------------------------ |
| mid    | String | 是       | 消息Id                         |
| chatId | String | 否       | 会话Id。传入此参数查询效率更高 |

**返回值**

详见**getMsgs**



### getLastMsg

获取会话的最后一条消息

```
this.jim.getLastMsg(chatId)
```

**请求参数**

| 名称   | 类型   | 是否必选 | 描述   |
| ------ | ------ | -------- | ------ |
| chatId | String | 是       | 会话Id |

**返回值**

详见**getMsgs**



### getAtMeMsgs

获取7天内所有@我的消息列表

```
this.jim.getAtMeMsgs()
```

**请求参数**

无

**返回值**

详见**getMsgs**



### getMoreChatMsgs

按时间段获取多会话混合的消息列表，按发送时间正序排列

```
this.jim.getMoreChatMsgs(chats, startTime, endTime)
```

**请求参数**

| 名称      | 类型   | 是否必选 | 描述                 |
| --------- | ------ | -------- | -------------------- |
| chats     | Array  | 是       | 会话Id列表。[chatId] |
| startTime | Number | 是       | 开始时间。时间戳     |
| endTime   | Number | 否       | 结束时间。时间戳     |

**返回值**

详见**getMsgs**



### fetchHistoryMsg

在没有本地消息或者本地消息达不到数量要求时，可以从远程拉取消息。

```javascript
this.jim.fetchHistoryMsg({ chatId, cursorMid, count, reverse })
```

**请求参数：Object**

| 名称      | 类型    | 是否必选 | 描述                                                    |
| --------- | ------- | -------- | ------------------------------------------------------- |
| chatId    | String  | 是       | 会话Id                                                  |
| cursorMid | String  | 否       | 消息游标。从该消息作为锚点拉取消息。默认为null          |
| count     | Number  | 否       | 消息数量。默认为20                                      |
| reverse   | Boolean | 否       | 是否按发送时间倒序集合。默认为false，按发送时间正序返回 |

**返回值**

详见**getMsgs**



### fetchRelative

拉取远程。根据消息游标拉取游标之前和之后的消息，且包含游标消息

```javascript
this.jim.fetchRelative({ chatId, cursorMid, beforeCount, afterCount })
```

**请求参数：Object**

| 名称        | 类型   | 是否必选 | 描述                               |
| ----------- | ------ | -------- | ---------------------------------- |
| chatId      | String | 是       | 会话Id                             |
| cursorMid   | String | 是       | 消息游标。从该消息作为锚点拉取消息 |
| beforeCount | Number | 否       | 游标之前的消息数量，默认10条       |
| afterCount  | Number | 否       | 游标之后的消息数量，默认10条       |

**返回值**

详见**getMsgs**



### fetchRelativeAfter

拉取远程。根据消息游标拉取其之后的消息，不含游标消息

**△与fetchRelative是否可以合并为一个**

```javascript
this.jim.fetchRelativeAfter({ chatId, cursorMid, count })
```

**请求参数：Object**

| 名称      | 类型   | 是否必选 | 描述                               |
| --------- | ------ | -------- | ---------------------------------- |
| chatId    | String | 是       | 会话Id                             |
| cursorMid | String | 是       | 消息游标。从该消息作为锚点拉取消息 |
| count     | Number | 否       | 消息数量。默认为20                 |

**返回值**

详见**getMsgs**



### getMsgsAfterTheTime（废弃）

获取指定时间之后的消息列表

**△查看消息历史记录**

```javascript
this.jim.getMsgsAfterTheTime({ chatId, time, limit })
```

**请求参数：Object**

| 名称   | 类型   | 是否必选 | 描述               |
| ------ | ------ | -------- | ------------------ |
| chatId | String | 是       | 会话Id             |
| time   | Number | 是       | 开始时间           |
| count  | Number | 否       | 消息数量。默认为20 |

**返回值**

详见**getMsgs**



### getMsgUnReadNum

获取指定消息的未读人数

**△可以和getMsgUnPlayNum合并为一个方法**

```javascript
this.jim.getMsgUnReadNum(mid)
```

**请求参数：String**

| 名称 | 类型   | 是否必选 | 描述   |
| ---- | ------ | -------- | ------ |
| mid  | String | 是       | 消息Id |

**返回值：Number**

未读人数



### getMsgUnPlayNum

获取指定消息的未查收人数

```javascript
this.jim.getMsgUnPlayNum(mid)
```

**请求参数：String**

| 名称 | 类型   | 是否必选 | 描述   |
| ---- | ------ | -------- | ------ |
| mid  | String | 是       | 消息Id |

**返回值：Number**

未查收人数



### hasMsgRead

获取消息某人是否已读

**△可以和hasMsgPlay合并为一个方法**

```javascript
this.jim.hasMsgRead(mid, uid)
```

**请求参数：String**

| 名称 | 类型   | 是否必选 | 描述   |
| ---- | ------ | -------- | ------ |
| mid  | String | 是       | 消息Id |
| uid  | String | 是       | 用户Id |

**返回值：Boolean**

是否已读



### hasMsgPlay

获取消息某人是否已播放

```javascript
this.jim.hasMsgPlay(mid, uid)
```

**请求参数：String**

| 名称 | 类型   | 是否必选 | 描述   |
| ---- | ------ | -------- | ------ |
| mid  | String | 是       | 消息Id |
| uid  | String | 是       | 用户Id |

**返回值：Boolean**

是否已播放



### getMsgReadState

获取指定消息的阅读详情

```javascript
this.jim.getMsgReadState(mid, type)
```

**请求参数：String**

| 名称 | 类型   | 是否必选 | 描述                                       |
| ---- | ------ | -------- | ------------------------------------------ |
| mid  | String | 是       | 消息Id                                     |
| type | String | 是       | 阅读类型。可选值为：readReport、playReport |

**返回值：Object**

```javascript
{
  readMembers: [ // 已读人员
    {
      uid,
      name,
      url
    }
  ],
  unReadMembers: [ // 未读人员
    {
      uid,
      name,
      url
    }
  ]
}
```



### withdraw

撤回已发出的消息

```javascript
this.jim.withdraw({chatId, mid})
```

**请求参数：Object**

| 名称   | 类型   | 是否必选 | 描述   |
| ------ | ------ | -------- | ------ |
| chatId | String | 是       | 会话Id |
| mid    | String | 是       | 消息Id |

**返回值：Promise**



### deleteMsg

从自己的会话列表中将消息删除。删除后将看不到该消息

```javascript
this.jim.deleteMsg({mids, chatId})
```

**请求参数：Object**

| 名称   | 类型   | 是否必选 | 描述       |
| ------ | ------ | -------- | ---------- |
| mids   | Array  | 是       | 消息Id集合 |
| chatId | String | 是       | 会话Id     |

**返回值：Promise**



### getTopicDetail

获取回复相关消息详情

```javascript
this.jim.getTopicDetail({ originalMid })
```

**请求参数：Object**

| 名称        | 类型   | 是否必选 | 描述     |
| ----------- | ------ | -------- | -------- |
| originalMid | String | 是       | 源消息Id |

**返回值**

```javascript
[
	{
		content, // 回复的消息体
    chatId, // 会话Id,
    msgId, // 消息Id
    senderId, // 发送人Id
	}
]
```



### getWaitingTaskList

获取稍候处理列表

```javascript
this.jim.getWaitingTaskList({ pageNum, pageSize })
```

**请求参数：Object**

| 名称     | 类型   | 是否必选 | 描述                 |
| -------- | ------ | -------- | -------------------- |
| pageNum  | Number | 是       | 分页页码             |
| pageSize | Number | 否       | 每页条数。默认为10条 |

**返回值**

```javascript
[
	{
		content, // 回复的消息体
    chatId, // 会话Id,
    chatType, // 所在会话类型
    groupType, // 群类型
    msgId, // 消息Id
    senderId, // 发送人Id
    senderName, // 发送人昵称
    seqId, // 消息服务端的顺序
    waitTime, // 加入稍候处理时间
	}
]
```



### handleAllTask

稍候处理：全部处理

```javascript
this.jim.handleAllTask()
```

**请求参数**

无

**返回值**

无



### handleTask

稍候处理：处理单个任务

```
this.jim.handleTask({ mid })
```

**请求参数：String**

| 名称 | 类型   | 是否必选 | 描述   |
| ---- | ------ | -------- | ------ |
| mid  | String | 是       | 消息Id |

**返回值**

无



### getMyRedpkMsgList

获取红包消息列表

```javascript
this.jim.getMyRedpkMsgList()
```

**请求参数**

无

**返回值**

```javascript
[
  {
    "redpkId": "db9556f141754328b6e0d763995e9fc7", // 红包Id
    "mid": "43d0b3f074d111eb88bd4f19871b6f2a", // 消息Id
    "redpkType": 2, // 红包类型。1：普通红包 2：专享红包
    "redpkStatus": 20,
    "totalMoney": 1, // 红包总金额
    "redDesc": "恭喜发财，步步高升", // 红包提示语
    "payStatus": null,
    "createTime": "2021-02-22 13:46:20",
    "sendType": 0,
    "sendTime": null,
    "systemId": "bop",
    "chatId": "6aa1b11e67ee4f88b3e53102af4003e0",
    "creator": "2000000021811",
    "isRemind": 0,
    "assign": null,
    "assignedReceiverIdList": null,
    "sendName": "高阳",
    "chatName": "技术1组",
    "readReportTime": 0,
    "sendPic": "/user/2000000021811/2000000021811_1610005673376.jpg"
  }
]
```



### getAtMeMsgList

获取@我的列表

```javascript
this.jim.getAtMeMsgList({ type, pageNum, pageSize })
```

**请求参数：Object**

| 名称     | 类型   | 是否必选 | 描述                       |
| -------- | ------ | -------- | -------------------------- |
| type     | Number | 否       | 默认为1，@列表。暂无可选值 |
| pageNum  | Number | 是       | 分页页码                   |
| pageSize | Number | 否       | 每页条数。默认为10条       |

**返回值**

```javascript
[
	{
    at, // @信息
		data, // 消息体
    chatId, // 会话Id
    chatName, // 会话名称
    chatType, // 所在会话类型
    receiverId, // 消息接收人Id
    msgId, // 消息Id
    senderId, // 发送人Id
    senderName, // 发送人昵称
    seqId, // 消息服务端的顺序
	}
]
```



### attachExpression

消息贴表情回复

```javascript
this.jim.attachExpression({ chatId, content, chatType, originMid, originUid })
```

**请求参数：Object**

| 名称      | 类型   | 是否必选 | 描述                     |
| --------- | ------ | -------- | ------------------------ |
| chatId    | String | 是       | 会话Id                   |
| content   | String | 是       | 表情字符串。例："[微笑]" |
| chatType  | Number | 是       | 会话类型                 |
| originMid | String | 是       | 消息Id                   |
| originUid | String | 是       | 发送人Id                 |

**返回值**

无



### withdrawExpression

撤回消息贴表情回复

```javascript
this.jim.withdrawExpression({ chatId, expMid, originMid, originUid })
```

**请求参数：Object**

| 名称      | 类型   | 是否必选 | 描述     |
| --------- | ------ | -------- | -------- |
| chatId    | String | 是       | 会话Id   |
| expMid    | String | 是       | 表情Id   |
| originMid | String | 是       | 消息Id   |
| originUid | String | 是       | 发送人Id |

**返回值**

无



### audioTransferToText

语音消息转文字

```javascript
this.jim.audioTransferToText({ url, mid })
```

**请求参数**

| 名称 | 类型   | 是否必选 | 描述            |
| ---- | ------ | -------- | --------------- |
| url  | String | 是       | 语音的URL半路径 |
| mid  | String | 是       | 消息Id          |

**返回值**

```javascript
{
	content // 转换后的内容
}
```



### getReminderList

获取当前登录人相关的WANG列表

```javascript
this.jim.getReminderList()
```

**请求参数**

无

**返回值**

```javascript
{
	"reminderId": "76159b4af33b4dd1af26968b1b8abaf5", // WANG Id
	"content": null,
	"chatId": "fd19e310c54130f0a7ab42e39b8c0f14", // 会话Id
	"senderId": "10000252", // WANG发送人Id
	"chatName": null, // 所属会话名称
	"chatType": 0, // 所属会话类型
	"nickName": null,
	"name": "爱因斯坦", // WANG发送人昵称
	"pic": "/user/1513/1513_1595244168971.jpg", // WANG发送人头像
	"flows": [{ // 消息接收人信息
		"userId": "1939",
		"name": "麦克斯韦",
		"nickName": null,
		"pic": "/user/1939/1939_1588238287438.jpg",
		"readReportTime": 1613713393581
	}],
	"contentObejct": { // 源消息体 △单词错了
		"header": {
			"uid": "10000252",
			"name": "爱因斯坦",
			"mid": "76159b4af33b4dd1af26968b1b8abaf5",
			"action": "sendReminder",
			"time": 1613713389905,
			"version": "1.0",
			"did": "bd3d61b90897413983b431ff7194fb3d",
			"order": "1613713389905"
		},
		"body": {
			"chatId": "fd19e310c54130f0a7ab42e39b8c0f14",
			"reminderId": "76159b4af33b4dd1af26968b1b8abaf5",
			"channel": 0,
			"mid": "3ebfc2e20c964cc684e9e73ce4938227",
			"text": "123123",
			"to": [{
				"readed": false,
				"uid": "1939",
				"name": "麦克斯韦"
			}]
		}
	},
	"msgId": "3ebfc2e20c964cc684e9e73ce4938227", // 源消息Id
	"type": 0 // 源消息类型
}
```



### deleteReminder

删除一条WANG记录

```javascript
this.jim.deleteReminder({ reminderId })
```

**请求参数**

| 名称       | 类型   | 是否必选 | 描述    |
| ---------- | ------ | -------- | ------- |
| reminderId | String | 是       | WANG Id |

**返回值**

无



### getReminderDetail

获取wang详情

```javascript
this.jim.getReminderDetail({ reminderId })
```

**请求参数**

| 名称       | 类型   | 是否必选 | 描述    |
| ---------- | ------ | -------- | ------- |
| reminderId | String | 是       | WANG Id |

**返回值**

```javascript
{
	"reminderInfo": { // wang源消息相关
		"reminderId": "a2521a314ba54895a4020101c4ca5a8d",  // WANG Id
		"chatName": "花名测试-内部群", // 群名称
		"content": "111", // 消息体
		"senderId": "1939", // WANG发送人Id
		"senderName": "麦克斯韦", // WANG发送人姓名
		"createTime": 1613961428974, // WANG发送时间
		"chatId": "1d3b1e1c664d43f59d5dff334e04bd6f", // 所在会话Id
		"chatType": "1", // 所在会话类型
		"type": null, // WANG消息类型
		"chatPic": [{ uid, name, url }], // 所在会话头像
	},
	"replyList": [], // 回复列表
	"to": { // 阅读详情
		"readUids": [], // 已读列表
		"unReadUids": [ // 未读列表
      {
        "uid": "10000252",
        "name": "爱因斯坦"
			}
		]
	}
}
```





## 用户相关方法

### getContact

获取用户的基本信息

```
this.jim.getContact(uid)
```

**请求参数：String**

| 名称 | 类型   | 是否必选 | 描述   |
| ---- | ------ | -------- | ------ |
| uid  | String | 是       | 用户Id |

**返回值：Object**

```javascript
{
	name, // 昵称
	uid, // 用户Id
	url // 头像半路径
}
```



### getChatMembers

获取群成员信息

```javascript
this.jim.getChatMembers(chatId)
```

**请求参数：String**

| 名称   | 类型   | 是否必选 | 描述   |
| ------ | ------ | -------- | ------ |
| chatId | String | 是       | 会话Id |

**返回值：Object**

```javascript
{
	name, // 昵称
	uid, // 用户Id
	url, // 头像半路径
}
```



## 好友相关方法

### addFriend

发送添加好友请求

```
this.jim.addFriend({ oppositeUid, oppositeName, oppositeMobile, verfyMsg, type })
```

**请求参数：String**

| 名称          | 类型   | 是否必选 | 描述                                                        |
| ------------- | ------ | -------- | ----------------------------------------------------------- |
| oppositeUid   | String | 是       | 用户Id                                                      |
| oppositeName  | String | 是       | 用户昵称                                                    |
| oppositeMoble | String | 是       | 用户手机号                                                  |
| verfyMsg      | String | 否       | 添加理由                                                    |
| type          | String | 是       | 联系人来源。0 OA⽤户(组织架构)  1 APP通讯录  2 ⼿机号码搜索 |

**返回值**

无



### acceptFriend

同意好友请求

```
this.jim.acceptFriend({ oppositeUid, invitationId })
```

**请求参数：String**

| 名称         | 类型   | 是否必选 | 描述       |
| ------------ | ------ | -------- | ---------- |
| oppositeUid  | String | 是       | 申请人Id   |
| invitationId | String | 是       | 邀请记录Id |

**返回值**

无



### refuseFriend

拒绝好友请求

```
this.jim.acceptFriend({ oppositeUid, invitationId })
```

**请求参数：String**

| 名称         | 类型   | 是否必选 | 描述       |
| ------------ | ------ | -------- | ---------- |
| oppositeUid  | String | 是       | 用户Id     |
| invitationId | String | 是       | 邀请记录Id |

**返回值**

无



### deleteFriend

删除好友

```javascript
this.jim.deleteFriend({ oppositeUid })
```

**请求参数**

| 名称        | 类型   | 是否必选 | 描述   |
| ----------- | ------ | -------- | ------ |
| oppositeUid | String | 是       | 用户Id |

**返回值**

无



### getFriendMakingInvitations

获取好友请求相关信息

```javascript
this.jim.getFriendMakingInvitations()
```

**请求参数**

无

**返回值**

```javascript
{
	"invitationId": "c604d2e052873fb9a4a625ab19244373", // 请求记录Id
	"verfyMsg": "", // 留言
	"type": 2, // 申请来源 2：默认，手机号搜索
	"status": 0, // 当前状态。0：未处理 1：已添加 2：已拒绝
	"userId": "2139", // 被申请人Id
	"name": "阿波", // 被申请人昵称
	"pic": null, // 被申请人头像
	"mobile": "17712345678", // 被申请人手机号
	"inviterId": "1234", // 申请人Id
	"inviterTime": "2020-08-22 18:22:18" // 申请时间
}
```



### getUserByMobile

通过手机号搜索用户

```javascript
this.jim.getUserByMobile({ mobile })
```

**请求参数**

| 名称   | 类型   | 是否必选 | 描述       |
| ------ | ------ | -------- | ---------- |
| mobile | String | 是       | 用户手机号 |

**返回值**

```javascript
{
	avatar, // 用户头像
  email, // 用户邮箱
  mobile, // 用户手机号
  nickName, // 用户昵称
  userId, // 用户Id
}
```



## 创建新消息相关方法

以下方法格式统一，仅**content**消息体不一致。

详见**getMsgs**方法的返回值



### newTextMsg

创建文本消息

```javascript
this.jim.newTextMsg({ chatId, text })
```

**请求参数**

| 名称   | 类型   | 是否必选 | 描述     |
| ------ | ------ | -------- | -------- |
| chatId | String | 是       | 会话Id   |
| text   | String | 是       | 文本内容 |

**返回值**

**△消息内容？**

```javascript
content: "文本内容"
```



### newFileMsg

创建文件类型（图片、视频、文件）的消息

```javascript
this.jim.newFileMsg({ chatId, fileDom })
```

**请求参数**

| 名称    | 类型   | 是否必选 | 描述   |
| ------- | ------ | -------- | ------ |
| chatId  | String | 是       | 会话Id |
| fileDom | Object | 是       | 文件流 |

**返回值**

```javascript
content: {
  fileSize, // 源文件大小
  orgFileName // 源文件名称
}
```



### newReminderMsg

创建WANG的消息

```
this.jim.newReminderMsg({ chatId, text, channel, to })
```

**请求参数**

| 名称    | 类型   | 是否必选 | 描述                               |
| ------- | ------ | -------- | ---------------------------------- |
| chatId  | String | 是       | 会话Id                             |
| text    | String | 是       | 文本内容                           |
| channel | Number | 是       | 发送方式。1 应用内  2 短信  3 电话 |
| to      | Array  | 是       | 接收人                             |

**返回值**

**△消息内容？**

```javascript
content: "文本内容"
```



### newRecordMsg

创建合并转发消息

```javascript
this.jim.newRecordMsg({ chatId, data: { chatName, content } })
```

**请求参数**

| 名称     | 类型   | 是否必选 | 描述           |
| -------- | ------ | -------- | -------------- |
| chatId   | String | 是       | 会话Id         |
| chatName | String | 是       | 会话名称       |
| content  | Object | 是       | 转发的消息集合 |

**返回值**

```javascript
content: {
  chatName,
  content
}
```



### newLinkMsg

创建URL消息

**△创建消息的参数有误**

```javascript
this.jim.newLinkMsg({ chatId, data: { abstract, imageUrl, isLinked, linkUrl, title } })
```

**请求参数**

| 名称     | 类型    | 是否必选 | 描述         |
| -------- | ------- | -------- | ------------ |
| chatId   | String  | 是       | 会话Id       |
| abstract | String  | 是       | 链接content  |
| imageUrl | Object  | 是       | 链接icon     |
| isLinked | Boolean | 是       | 是否正确加载 |
| linkUrl  | String  | 是       | 链接         |
| title    | String  | 是       | 链接title    |

**返回值**

```javascript
content: {
  data // 入参data
}
```



## 事件（考虑双设备）

大部分IM的操作后，都会以事件的形式发送通知

```javascript
this.jim.on(eventName, callback)
```



### reconnected

网络重新连接并初始化完成

**回调参数**

无



### forcedExit

被强制踢出。可能在其他PC设备登录或者服务端维护

**回调参数**

无



### netStateChanged

socket连接状态发生变化

```javascript
this.jim.on("netStateChanged", (reconnected) => {})
```

**回调参数**

| 名称       | 类型    | 描述               |
| ---------- | ------- | ------------------ |
| reconected | Boolean | 当前socket连接状态 |



### msgSendingStateChanged

消息发送状态改变

```javascript
this.jim.on("netStateChanged", ({ chatId, mid, sendState, serverSendOrder, serverSendTime, targetsNum }) => {})
```

**回调参数**

| 名称            | 类型   | 描述                                                         |
| --------------- | ------ | ------------------------------------------------------------ |
| chatId          | String | 会话Id                                                       |
| mid             | String | 消息Id                                                       |
| sendState       | Number | 消息发送状态<br />0：发送中<br />1：发送失败<br />2：发送成功<br />3：已撤回 |
| serverSendOrder | String | 消息序号                                                     |
| serverSendTime  | Number | 消息发送时间                                                 |
| targetsNum      | Number | 消息接收人数                                                 |



### msgCustomSended

发送了一条自定义消息。例：‘我邀请某某人加入群聊’

```javascript
this.jim.on("msgCustomSended", ({ chatId, msg }) => {})
```

**回调参数**

| 名称   | 类型   | 描述       |
| ------ | ------ | ---------- |
| chatId | String | 会话Id     |
| msg    | Object | 收到的消息 |



### msgReceived

收到新消息

```javascript
this.jim.on("msgReceived", ({ chatId, msg }) => {})
```

回调参数

收到的消息。见消息相关方法中的**getMsgs**参数



### msgBurned

服务端主动删除了一条消息

```javascript
this.jim.on("msgBurned", ({ chatId }) => {})
```

**回调参数**

| 名称   | 类型   | 描述   |
| ------ | ------ | ------ |
| chatId | String | 会话Id |



### msgWithdrawn

消息已撤回

```javascript
this.jim.on("msgWithdrawn", ({ chatId, mid }) => {})
```

**回调参数**

| 名称   | 类型   | 描述           |
| ------ | ------ | -------------- |
| chatId | String | 会话Id         |
| mid    | String | 被撤回的消息Id |



### msgAtMe

有人@了我

```javascript
this.jim.on("msgAtMe", () => {})
```

**回调参数**

无



### msgDealLater

稍候处理

```javascript
this.jim.on("msgDealLater", ({ mid }) => {})
```

**回调参数**

| 名称 | 类型   | 描述                   |
| ---- | ------ | ---------------------- |
| mid  | String | 添加到稍候处理的消息Id |



### msgDeal

处理消息

```javascript
this.jim.on("msgDeal", ({ mid }) => {})
```

**回调参数**

| 名称 | 类型   | 描述         |
| ---- | ------ | ------------ |
| mid  | String | 处理的消息Id |



### msgDealAll

处理全部消息

```javascript
this.jim.on("msgDealAll", () => {})
```

**回调参数**

无



### msgAddExpression

贴表情回复

```javascript
this.jim.on("msgAddExpression", ({ chatId, originMid, originUid, expressions, uid }) => {})
```

**回调参数**

| 名称        | 类型   | 描述                   |
| ----------- | ------ | ---------------------- |
| chatId      | String | 会话Id                 |
| originMid   | String | 源消息Id               |
| originUid   | String | 源消息发送人Id         |
| expressions | Array  | 该消息最新的贴表情数据 |
| uid         | String | 发送人Id               |



### msgWithdrawExpression

撤回贴表情回复

```javascript
this.jim.on("msgWithdrawExpression", ({ chatId, mid, expressions }) => {})
```

**回调参数**

| 名称        | 类型   | 描述                   |
| ----------- | ------ | ---------------------- |
| chatId      | String | 会话Id                 |
| mid         | String | 消息Id                 |
| expressions | Array  | 该消息最新的贴表情数据 |



### msgDeleted

删除会话消息

```javascript
this.jim.on("msgDeleted", ({ chatId, mids }) => {})
```

**回调参数**

| 名称   | 类型   | 描述               |
| ------ | ------ | ------------------ |
| chatId | String | 会话Id             |
| mids   | Array  | 被删除的消息Id集合 |



### msgPlayed

查收文件类型（图片、音视频、文件）的消息

```javascript
this.jim.on("msgPlayed", ({ chatId, mid }) => {})
```

**回调参数**

| 名称   | 类型   | 描述           |
| ------ | ------ | -------------- |
| chatId | String | 会话Id         |
| mid    | String | 已查收的消息Id |



### msgRead

阅读别人发送的消息

```javascript
this.jim.on("msgRead", ({ chatId }) => {})
```

**回调参数**

| 名称   | 类型   | 描述   |
| ------ | ------ | ------ |
| chatId | String | 会话Id |



### readReportReceived

收到自己发送消息的阅读报告

```javascript
this.jim.on("readReportReceived", ({ chatId, mids }) => {})
```

**回调参数**

| 名称   | 类型   | 描述                   |
| ------ | ------ | ---------------------- |
| chatId | String | 会话Id                 |
| mids   | Array  | 收到阅读报告的消息集合 |



### playReportReceived

收到自己发送的文件类型消息的查收报告

```javascript
this.jim.on("playReportReceived", ({ chatId }) => {})
```

**回调参数**

| 名称   | 类型   | 描述   |
| ------ | ------ | ------ |
| chatId | String | 会话Id |



### readReminderReoirtReceived

收到自己发送WANG消息的阅读报告

```javascript
this.jim.on("readReminderReoirtReceived", ({ chatId, reminderId }) => {})
```

**回调参数**

| 名称       | 类型   | 描述    |
| ---------- | ------ | ------- |
| chatId     | String | 会话Id  |
| reminderId | String | WANG Id |



### chatActiveChanged

当前交互会话已切换

```javascript
this.jim.on("chatActiveChanged", ({ chatId }) => {})
```

**回调参数**

| 名称   | 类型   | 描述   |
| ------ | ------ | ------ |
| chatId | String | 会话Id |



### chatAdded

添加了一个新的私聊会话

```javascript
this.jim.on("chatAdded", ({ chatId, uid }) => {})
```

**回调参数**

| 名称   | 类型   | 描述   |
| ------ | ------ | ------ |
| chatId | String | 会话Id |
| uid    | String | 对方Id |



### chatRead

阅读会话、清空会话未读数

```javascript
this.jim.on("chatRead", ({ chatId }) => {})
```

**回调参数**

| 名称   | 类型   | 描述   |
| ------ | ------ | ------ |
| chatId | String | 会话Id |



### chatTopped

会话已置顶

```javascript
this.jim.on("chatTopped", ({ chatId }) => {})
```

**回调参数**

| 名称   | 类型   | 描述   |
| ------ | ------ | ------ |
| chatId | String | 会话Id |



### chatUntopped

会话已取消置顶

```javascript
this.jim.on("chatUntopped", ({ chatId }) => {})
```

**回调参数**

| 名称   | 类型   | 描述   |
| ------ | ------ | ------ |
| chatId | String | 会话Id |



### chatNotifyStateChanged

新消息通知状态发生变化

```javascript
this.jim.on("chatNotifyStateChanged", ({ chatId, status }) => {})
```

**回调参数**

| 名称   | 类型   | 描述                                     |
| ------ | ------ | ---------------------------------------- |
| chatId | String | 会话Id                                   |
| status | Number | 新消息通知状态<br />0：开启<br />1：关闭 |



### chatMsgCleared

会话聊天记录已清空

```javascript
this.jim.on("chatMsgCleared", ({ chatId }) => {})
```

**回调参数**

| 名称   | 类型   | 描述   |
| ------ | ------ | ------ |
| chatId | String | 会话Id |



### chatRemoved

会话已移除

```javascript
this.jim.on("chatRemoved", ({ chatId }) => {})
```

**回调参数**

| 名称   | 类型   | 描述   |
| ------ | ------ | ------ |
| chatId | String | 会话Id |



### chatPicUpdated

会话头像已更新

```javascript
this.jim.on("chatPicUpdated", ({ chatId }) => {})
```

**回调参数**

| 名称   | 类型   | 描述   |
| ------ | ------ | ------ |
| chatId | String | 会话Id |



### groupLeft

已退出群聊

```javascript
this.jim.on("groupLeft", ({ chatId, uid }) => {})
```

**回调参数**

| 名称   | 类型   | 描述             |
| ------ | ------ | ---------------- |
| chatId | String | 会话Id           |
| uid    | String | 用户Id；退出人Id |



### groupActived

群聊已激活。群聊移除后重新激活

```javascript
this.jim.on("groupActived", ({ chatId }) => {})
```

**回调参数**

| 名称   | 类型   | 描述   |
| ------ | ------ | ------ |
| chatId | String | 会话Id |



### groupNameModified

群名称发生变化

```javascript
this.jim.on("groupNameModified", ({ chatId }) => {})
```

**回调参数**

| 名称   | 类型   | 描述   |
| ------ | ------ | ------ |
| chatId | String | 会话Id |



### groupBroken

群聊已解散

```javascript
this.jim.on("groupBroken", ({ chatId }) => {})
```

**回调参数**

| 名称   | 类型   | 描述   |
| ------ | ------ | ------ |
| chatId | String | 会话Id |



### groupMemberAdded

群成员已添加

```javascript
this.jim.on("groupMemberAdded", ({ chatId }) => {})
```

**回调参数**

| 名称   | 类型   | 描述   |
| ------ | ------ | ------ |
| chatId | String | 会话Id |



### groupMemberRemoved

群成员已移除

```javascript
this.jim.on("groupMemberRemoved", ({ chatId }) => {})
```

**回调参数**

| 名称   | 类型   | 描述   |
| ------ | ------ | ------ |
| chatId | String | 会话Id |



### groupAdminAdded

群管理员已添加

```javascript
this.jim.on("groupAdminAdded", ({ chatId }) => {})
```

**回调参数**

| 名称   | 类型   | 描述   |
| ------ | ------ | ------ |
| chatId | String | 会话Id |



### groupAdminRemoved

群管理员已移除

```javascript
this.jim.on("groupAdmindRemoved", ({ chatId }) => {})
```

**回调参数**

| 名称   | 类型   | 描述   |
| ------ | ------ | ------ |
| chatId | String | 会话Id |



### groupMemberUpdated

**△？？？**

群成员已更新

```javascript
this.jim.on("groupMemberUpdated", ({ chatId }) => {})
```

**回调参数**

| 名称   | 类型   | 描述   |
| ------ | ------ | ------ |
| chatId | String | 会话Id |



### groupAdminAtAllOpened

开启了仅群主和管理员可以@所有人

```javascript
this.jim.on("groupAdminAtAllOpened", ({ chatId }) => {})
```

**回调参数**

| 名称   | 类型   | 描述   |
| ------ | ------ | ------ |
| chatId | String | 会话Id |



### groupAdminAtAllClosed

关闭了仅群主和管理员可以@所有人

```javascript
this.jim.on("groupAdminAtAllClosed", ({ chatId }) => {})
```

**回调参数**

| 名称   | 类型   | 描述   |
| ------ | ------ | ------ |
| chatId | String | 会话Id |



### groupMasterTransfered

群主发生改变

```javascript
this.jim.on("groupMasterTransfered", ({ chatId }) => {})
```

**回调参数**

| 名称   | 类型   | 描述   |
| ------ | ------ | ------ |
| chatId | String | 会话Id |



### groupMemberForbiden

群禁言

```javascript
this.jim.on("groupMemberForbiden", ({ chatId }) => {})
```

**回调参数**

| 名称   | 类型   | 描述   |
| ------ | ------ | ------ |
| chatId | String | 会话Id |



### groupMemberUnForbiden

取消群禁言

```javascript
this.jim.on("groupMemberUnForbiden", ({ chatId }) => {})
```

**回调参数**

| 名称   | 类型   | 描述   |
| ------ | ------ | ------ |
| chatId | String | 会话Id |

