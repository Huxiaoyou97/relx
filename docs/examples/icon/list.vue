<template>
    <div class="example__icons">
        <div
            class="example__icon var-elevation--2"
            :style="{ background }"
            :data-clipboard-text="name"
            :key="name"
            v-for="name in iconNames"
        >
            <rx-icon :name="name"/>
            <div class="example__icon-name">{{ name }}</div>
        </div>
    </div>
</template>


<script lang="ts" setup>
import {reactive, ref} from 'vue'
import icons from '@antd-relx/icons'

const iconNames = reactive(icons)
const background = ref('#fff')


</script>

<style scoped lang="less">
@import '../../../packages/antd-relx-ui/src/styles/var';
@import '../../../packages/antd-relx-ui/src/styles/elevation';

.example {
    &__icons {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }

    &__icon {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 12%;
        margin: 0 2% 4%;
        cursor: pointer;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        user-select: none;
        border-bottom: 2px solid var(--color-primary);
        transition: background-color 0.25s;
    }

    &__icon-name {
        width: 100%;
        font-size: 12px;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-top: 8px;
    }
}
</style>
