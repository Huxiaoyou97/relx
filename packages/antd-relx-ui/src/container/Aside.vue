<template>
    <aside class="rx-aside" :style="style">
        <slot></slot>
    </aside>
</template>

<script lang="ts">
import {defineComponent, computed} from "vue";
import {asideProps} from "./props";

import type {CSSProperties} from 'vue'

export default defineComponent({
    name: 'RxAside',
    props: asideProps,

    setup(props) {
        return {
            style: computed(() => {
                return props.width
                    ? ({'--rx-aside-width': props.width} as CSSProperties)
                    : {}
            }),
        }
    }
})
</script>

<style lang="less">
@import '../styles/common';
@import "styles/aside";
</style>
