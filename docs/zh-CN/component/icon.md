# Icon 图标

## 介绍
基于字体的图标库，也支持网络图片。
字体图标来自 [Material Design Icon](https://materialdesignicons.com/)


### 引入

```js
import { createApp } from 'vue'
import { Icon } from '@antd-relx/ui'

createApp().use(Icon)
```


### 图标尺寸

:::demo

icon/size

:::


### 图标颜色

:::demo

icon/color

:::


### 传递图片

:::demo 当传入的 `name` 是一个网络地址时,将会使用 `img` 标签以 `cover` 模式显示。`size` 为图片的宽高。

icon/img

:::


### 绑定事件

:::demo

icon/event

:::


### 图标列表

:::demo

icon/list

:::


## API

### 属性

| 参数     | 说明                                                              | 类型     | 默认值          |
| -------- | ---------------------------------------------------------------- | -------- | -------------- |
| `color`  | loading 的颜色                                                    | _string_ | `currentColor` |
| `type`   | loading 的类型，可选值为 `circle` `wave` `cube` `rect` `disappear` | _string_ | `circle`       |
| `size`   | loading 的大小，可选值位 `large` `normal` `small` `mini`           | _string_ | `normal`       |
| `description`   | loading 的描述文字                                          | _string_ | `-`            |
| `loading`| 存在内容时 loading 是否显示                                         | _boolean_ | `false`      |
| `radius` | loading 的类型为 `circle` 时，可设置其大小                          | _string \| number_  | `-` |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | `loading` 包裹着的内容 | `-` |
| `description`    | `loading` 的描述文字 | `-` |

### 样式变量
以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制

| 变量名 | 默认值 |
| --- | --- |
| `--loading-opacity` | `0.38` |
| `--loading-desc-margin` | `8px 0 0` |
