<template>
    <footer class="rx-footer" :style="style">
        <slot></slot>
    </footer>
</template>

<script lang="ts">
import {defineComponent, computed} from "vue";
import {headerProps} from "./props";
import type { CSSProperties } from 'vue'

export default defineComponent({
    name: 'RxFooter',
    props: headerProps,

    setup(props) {
        return {
            style: computed(
                () =>
                    (props.height
                        ? {
                            '--rx-footer-height': props.height,
                        }
                        : {}) as CSSProperties
            ),
        }
    }

})
</script>

<style lang="less">
@import '../styles/common';
@import "styles/footer";
</style>
