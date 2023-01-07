# Ripple 水波纹指令

## 介绍
点击产生水波纹扩散的效果。

### 引入

```js
import { createApp } from 'vue'
import { Ripple } from '@antd-relx/ui'

createApp().use(Ripple)
```


<style lang="scss">
@use '../../examples/ripple/common-layout.scss';
</style>

## 演示

### 基础用法

:::demo 在HTML元素或者组件上使用 `v-ripple` 指令就可以使用水波纹效果啦。

ripple/usage

:::

### 永远从中间展开

:::demo 只需要设置 `center` 就会始终从中心扩散波纹。

ripple/center

:::

### 不同的类型

:::demo 

ripple/color

:::
