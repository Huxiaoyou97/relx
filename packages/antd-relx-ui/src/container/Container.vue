<template>
    <section :class="[
        'rx-container',
        isVertical && 'is-vertical'
    ]">
        <slot></slot>
    </section>
</template>

<script lang="ts">
import {defineComponent, computed} from 'vue'
import {containerProps} from "./props";

import type {Component, VNode} from 'vue'

export default defineComponent({
    name: 'RxContainer',
    props: containerProps,

    setup(props, {slots}) {
        const isVertical = computed(() => {
            if (props.direction === 'vertical') {
                return true
            } else if (props.direction === 'horizontal') {
                return false
            }
            if (slots && slots.default) {
                const vNodes: VNode[] = slots.default()
                return vNodes.some((vNode) => {
                    const tag = (vNode.type as Component).name
                    return tag === 'XbHeader' || tag === 'XbFooter'
                })
            } else {
                return false
            }
        })

        return {
            isVertical
        }
    }
})
</script>

<style lang="less">
@import '../styles/common';
@import "styles/container";
</style>
