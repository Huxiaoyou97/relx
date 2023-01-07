<template>
    <ClientOnly>
        <p class="vp-demo-txt" text="sm" v-html="decodedDescription"/>
        <div class="example">
            <div class="op-btns">
                <!--                <span>A</span>-->
                <!--                <rx-icon name="content-copy" @click="setSourceVisible" />-->
                <rx-icon name="xml" @click="setSourceVisible"/>
            </div>

            <rx-divider margin="0"/>
            <Example :file="path" :demo="formatPathDemos[path]"/>

            <rx-collapse-transition>
                <SourceCode v-show="sourceVisible" :source="source"/>
            </rx-collapse-transition>

        </div>
    </ClientOnly>
</template>

<script setup lang="ts">
import {computed, toRef, getCurrentInstance} from 'vue'
import {useClipboard, useToggle} from '@vueuse/core'

import demoBlockLocale from "../../json/demo-block.json"

import Example from './demo/vp-example.vue'
import SourceCode from './demo/vp-source-code.vue'


const props = defineProps<{
    source: string
    path: string
    css?: string
    cssPreProcessor?: string
    js?: string
    html?: string
    demos: object
    rawSource: string
    description?: string
}>()

const {copy, isSupported} = useClipboard({
    source: decodeURIComponent(props.rawSource),
    read: false,
})
const [sourceVisible, setSourceVisible] = useToggle()

const formatPathDemos = computed(() => {
    const demos = {}

    Object.keys(props.demos).forEach((key) => {
        demos[key.replace('../../examples/', '').replace('.vue', '')] =
            props.demos[key].default
    })

    return demos
})

const locale = computed(() => demoBlockLocale['zh-CN'])
const decodedDescription = computed(() =>
    decodeURIComponent(props.description!)
)

const copyCode = async () => {
    if (!isSupported) {
        console.error(locale.value['copy-error'])
    }
    try {
        await copy()
        console.info(locale.value['copy-success'])
    } catch (e: any) {
        console.error(e.message)
    }
}

</script>

<style scoped lang="scss">

.vp-demo-txt {
    margin: 1rem 0;
    ::v-deep(p) {
        margin: 1rem 0 !important;
    }
}

.example {
    border: 1px solid #e5e7eb;
    border-radius: 4px;

    .op-btns {
        padding: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        height: 3rem;
        line-height: 3rem;

        .el-icon {
            &:hover {
                color: #303133;
            }
        }

        .op-btn {
            margin: 0 0.5rem;
            cursor: pointer;
            color: #606266;
            transition: 0.2s;

            &.github a {
                transition: 0.2s;
                color: #909399;

                &:hover {
                    color: #303133;
                }
            }
        }
    }

    &-float-control {
        display: flex;
        align-items: center;
        justify-content: center;
        border-top: 1px solid #eaeefb;
        height: 44px;
        box-sizing: border-box;
        background-color: #fff;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        margin-top: -1px;
        color: #d3dce6;
        cursor: pointer;
        position: sticky;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 10;

        span {
            font-size: 14px;
            margin-left: 10px;
        }

        &:hover {
            color: #409eff;
            background-color: #f9fafc;
        }
    }
}

</style>
