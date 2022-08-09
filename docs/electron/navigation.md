# 导航
## Tabs 标签页
选项卡切换组件，常用于平级区域大块内容的的收纳和展现。
#### 基础用法
::: demo  选项卡切换组件，常用于平级区域大块内容的的收纳和展现。
```html
<template>
    <Tabs value="name1">
        <TabPane label="标签一" name="name1">标签一的内容</TabPane>
        <TabPane label="标签二" name="name2">标签二的内容</TabPane>
        <TabPane label="标签三" name="name3">标签三的内容</TabPane>
    </Tabs>
</template>
<script>
    export default {
        
    }
</script>
```
:::
#### 禁用某一项
::: demo  
```html
<template>
    <Tabs>
        <TabPane label="标签一">标签一的内容</TabPane>
        <TabPane label="标签二" disabled>标签二的内容</TabPane>
        <TabPane label="标签三">标签三的内容</TabPane>
    </Tabs>
</template>
<script>
    export default {
        
    }
</script>
```
:::
#### 卡片样式
::: demo  
```html
<template>
    <Tabs type="card">
        <TabPane label="标签一">标签一的内容</TabPane>
        <TabPane label="标签二">标签二的内容</TabPane>
        <TabPane label="标签三">标签三的内容</TabPane>
    </Tabs>
</template>
<script>
    export default {
        
    }
</script>
```
:::
## Menu 导航菜单
为页面和功能提供导航的菜单列表，常用于网站顶部和左侧。
#### 分组
::: demo  
```html
<template>
    <Menu :theme="theme3" active-name="1">
        <MenuGroup title="内容管理">
            <MenuItem name="1">
                <Icon type="md-document" />
                文章管理
            </MenuItem>
            <MenuItem name="2">
                <Icon type="md-chatbubbles" />
                评论管理
            </MenuItem>
        </MenuGroup>
        <MenuGroup title="统计分析">
            <MenuItem name="3">
                <Icon type="md-heart" />
                用户留存
            </MenuItem>
            <MenuItem name="4">
                <Icon type="md-leaf" />
                流失用户
            </MenuItem>
        </MenuGroup>
    </Menu>
    <br>
    <p>切换主题</p>
    <RadioGroup v-model="theme3">
        <Radio label="light"></Radio>
        <Radio label="dark"></Radio>
    </RadioGroup>
</template>
<script>
    export default {
        data () {
            return {
                theme3: 'light'
            }
        }
    }
</script>
```
:::
## Dropdown 下拉菜单
展示一组折叠的下拉菜单。
#### 基础用法。
::: demo  展示一组折叠的下拉菜单。
```html
<template>
    <Dropdown>
        <a href="javascript:void(0)">
            下拉菜单
            <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
            <DropdownItem>驴打滚</DropdownItem>
            <DropdownItem>炸酱面</DropdownItem>
            <DropdownItem disabled>豆汁儿</DropdownItem>
            <DropdownItem>冰糖葫芦</DropdownItem>
            <DropdownItem divided>北京烤鸭</DropdownItem>
        </DropdownMenu>
    </Dropdown>
    <Dropdown style="margin-left: 20px">
        <Button type="primary">
            下拉菜单
            <Icon type="ios-arrow-down"></Icon>
        </Button>
        <DropdownMenu slot="list">
            <DropdownItem>驴打滚</DropdownItem>
            <DropdownItem>炸酱面</DropdownItem>
            <DropdownItem disabled>豆汁儿</DropdownItem>
            <DropdownItem>冰糖葫芦</DropdownItem>
            <DropdownItem divided>北京烤鸭</DropdownItem>
        </DropdownMenu>
    </Dropdown>
</template>
<script>
    export default {
        
    }
</script>
```
:::
#### 对齐方向
::: demo  
```html
<template>
    <Dropdown placement="bottom-start">
        <a href="javascript:void(0)">
            菜单(左)
            <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
            <DropdownItem>驴打滚</DropdownItem>
            <DropdownItem>炸酱面</DropdownItem>
            <DropdownItem>豆汁儿</DropdownItem>
            <DropdownItem>冰糖葫芦</DropdownItem>
            <DropdownItem>北京烤鸭</DropdownItem>
        </DropdownMenu>
    </Dropdown>
    <Dropdown style="margin-left: 20px">
        <a href="javascript:void(0)">
            菜单(居中)
            <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
            <DropdownItem>驴打滚</DropdownItem>
            <DropdownItem>炸酱面</DropdownItem>
            <DropdownItem>豆汁儿</DropdownItem>
            <DropdownItem>冰糖葫芦</DropdownItem>
            <DropdownItem>北京烤鸭</DropdownItem>
        </DropdownMenu>
    </Dropdown>
    <Dropdown style="margin-left: 20px" placement="bottom-end">
        <a href="javascript:void(0)">
            菜单(右)
            <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
            <DropdownItem>驴打滚</DropdownItem>
            <DropdownItem>炸酱面</DropdownItem>
            <DropdownItem>豆汁儿</DropdownItem>
            <DropdownItem>冰糖葫芦</DropdownItem>
            <DropdownItem>北京烤鸭</DropdownItem>
        </DropdownMenu>
    </Dropdown>
</template>
<script>
    export default {
        
    }
</script>
```
:::
#### 触发方式
::: demo  
```html
<template>
    <Dropdown>
        <a href="javascript:void(0)">
            hover 触发
            <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
            <DropdownItem>驴打滚</DropdownItem>
            <DropdownItem>炸酱面</DropdownItem>
            <DropdownItem>豆汁儿</DropdownItem>
            <DropdownItem>冰糖葫芦</DropdownItem>
            <DropdownItem>北京烤鸭</DropdownItem>
        </DropdownMenu>
    </Dropdown>
    <Dropdown trigger="click" style="margin-left: 20px">
        <a href="javascript:void(0)">
            click 触发
            <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
            <DropdownItem>驴打滚</DropdownItem>
            <DropdownItem>炸酱面</DropdownItem>
            <DropdownItem>豆汁儿</DropdownItem>
            <DropdownItem>冰糖葫芦</DropdownItem>
            <DropdownItem>北京烤鸭</DropdownItem>
        </DropdownMenu>
    </Dropdown>
    <Dropdown trigger="contextMenu" style="margin-left: 20px">
        <a href="javascript:void(0)">
            right click
            <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
            <DropdownItem>返回</DropdownItem>
            <DropdownItem style="color: #ed4014">删除</DropdownItem>
        </DropdownMenu>
    </Dropdown>
    <Dropdown trigger="custom" :visible="visible" style="margin-left: 20px">
        <a href="javascript:void(0)" @click="handleOpen">
            custom 触发
            <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
            <p>常用于各种自定义下拉内容的场景。</p>
            <div style="text-align: right;margin:10px;">
                <Button type="primary" @click="handleClose">关闭</Button>
            </div>
        </DropdownMenu>
    </Dropdown>
</template>
<script>
    export default {
        data () {
            return {
                visible: false
            }
        },
        methods: {
            handleOpen () {
                this.visible = true;
            },
            handleClose () {
                this.visible = false;
            }
        }
    }
</script>
```
:::
#### 嵌套用法
::: demo  
```html
<template>
    <Dropdown>
        <a href="javascript:void(0)">
            北京小吃
            <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
            <DropdownItem>驴打滚</DropdownItem>
            <DropdownItem>炸酱面</DropdownItem>
            <DropdownItem>豆汁儿</DropdownItem>
            <Dropdown placement="right-start">
                <DropdownItem>
                    北京烤鸭
                    <Icon type="ios-arrow-forward"></Icon>
                </DropdownItem>
                <DropdownMenu slot="list">
                    <DropdownItem>挂炉烤鸭</DropdownItem>
                    <DropdownItem>焖炉烤鸭</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <DropdownItem>冰糖葫芦</DropdownItem>
        </DropdownMenu>
    </Dropdown>
</template>
<script>
    export default {
        
    }
</script>
```
:::
## Page 分页
当数据量较多时，使用分页可以快速进行数据切换。
#### 基础用法。
::: demo  当数据量较多时，使用分页可以快速进行数据切换。
```html
<template>
    <Page :total="100" />
    <Page :total="100" show-sizer />
    <Page :total="100" show-elevator />
    <Page :total="100" show-total />
    <Page :total="40" size="small" />
    <Page :total="40" size="small" show-elevator show-sizer />
    <Page :total="40" size="small" show-total />
    <Page :current="2" :total="50" simple />
    <Page :total="100" prev-text="Previous" next-text="Next" />
</template>
<script>
    export default {
        
    }
</script>

```
:::
## Breadcrumb 面包屑
显示网站的层级结构，告知用户当前所在位置，以及在需要向上级导航时使用。
#### 基础用法。
::: demo  最基础的用法，通过设置**to**属性添加链接。
```html
<template>
    <Breadcrumb>
        <BreadcrumbItem to="/">Home</BreadcrumbItem>
        <BreadcrumbItem to="/components/breadcrumb">Components</BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
    </Breadcrumb>
</template>
<script>
    export default {
        
    }
</script>
```
:::
## Badge 徽标数
主要用于通知未读数的角标，提醒用户点击。
#### 基础用法。
::: demo  
```html
<template>
    <Badge :count="100">
        <a href="#" class="demo-badge"></a>
    </Badge>
    <Badge :count="1000" overflow-count="999">
        <a href="#" class="demo-badge"></a>
    </Badge>
</template>
<script>
    export default {
        
    }
</script>
```
:::
## Steps 步骤条
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
## Anchor 锚点
用于跳转到页面指定位置。
#### 基础用法。
::: demo  最基础的用法。
```html
<template>
    <Anchor show-ink>
        <AnchorLink href="#basic_usage" title="Basic Usage" />
        <AnchorLink href="#static_position" title="Static Position" />
        <AnchorLink href="#API" title="API">
            <AnchorLink href="#Anchor_props" title="Anchor props" />
            <AnchorLink href="#Anchor_events" title="Anchor events" />
            <AnchorLink href="#AnchorLink_props" title="AnchorLink props" />
        </AnchorLink>
    </Anchor>
</template>
<script>
    export default {
        
    }
</script>
```
:::
#### 静态位置。
::: demo  不浮动，状态不随页面滚动变化。
```html
<template>
    <Anchor :affix="false" show-ink>
        <AnchorLink href="#basic_usage" title="Basic Usage" />
        <AnchorLink href="#static_position" title="Static Position" />
        <AnchorLink href="#API" title="API">
            <AnchorLink href="#Anchor_props" title="Anchor props" />
            <AnchorLink href="#Anchor_events" title="Anchor events" />
            <AnchorLink href="#AnchorLink_props" title="AnchorLink props" />
        </AnchorLink>
    </Anchor>
</template>
<script>
    export default {
        
    }
</script>
```
:::
## LoadingBar 加载进度条
全局创建一个显示页面加载、异步请求、文件上传等的加载进度条。
#### 基础用法。
::: demo  点击 Start 开始进度，点击 Finish 结束。在调用start()方法后，组件会自动模拟进度，当调用finish()或error()时，补全进度并自动消失。
```html
<template>
    <Button @click="start">Start</Button>
    <Button @click="finish">Finish</Button>
    <Button @click="error">Error</Button>
</template>
<script>
    export default {
        methods: {
            start () {
                this.$Loading.start();
            },
            finish () {
                this.$Loading.finish();
            },
            error () {
                this.$Loading.error();
            }
        }
    }
</script>
```
:::