# Container 布局容器

## 介绍

用于布局的容器组件，方便快速搭建页面的基本结构：


`<rx-container>`: 外层容器。 当子元素中包含 `<rx-header>` 或 `<rx-footer>` 时，全部子元素会垂直上下排列， 否则会水平左右排列。

`<rx-header>`: 顶栏容器.

`<rx-aside>`: 侧边栏容器.

`<rx-main>`: 主要区域容器.

`<rx-footer>`: 底栏容器.

:::tip

以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。 此外， `<rx-container>`的直接子元素必须是后四个组件中的一个或多个。 后四个组件的亲元素必须是一个` <rx-container>`

:::

## 常见页面布局

<style lang="scss">
@use '../../examples/container/common-layout.scss';
</style>

:::demo

container/layout-hm

:::

:::demo

container/layout-hmf

:::
:::demo

container/layout-am

:::

:::demo

container/layout-ham

:::

:::demo

container/layout-hamf

:::

:::demo

container/layout-ahm

:::

:::demo

container/layout-ahmf

:::

## API

## Container Props

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| `direction` | 子元素的排列方向 | string | horizontal / vertical | 子元素中有 `rx-header` 或 `rx-footer` 时为 vertical，否则为 horizontal


## Header Props

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| `height` | 顶栏高度 | string | `-` | 60px


## Aside Props

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| `width` | 侧边栏宽度 | string | `-` | 300px


## Footer Props

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| `height` | 底栏高度 | string | `-` | 60px
