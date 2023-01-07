<template>
    <div class="App">
        <VPNav />
        <VPSidebar :open="isSidebarOpen" @close="toggleSidebar(false)">
            <template #top>
            </template>
            <template #bottom>
                <slot name="sidebar-bottom" />
            </template>
        </VPSidebar>
        <VPContent :is-sidebar-open="isSidebarOpen">
            <template #content-top>
                <slot name="content-top" />
            </template>
            <template #content-bottom>
                <slot name="content-bottom" />
            </template>
            <template #aside-top>
                <slot name="aside-top" />
            </template>
            <template #aside-mid>
                <slot name="aside-mid" />
            </template>
            <template #aside-bottom>
                <slot name="aside-bottom" />
            </template>
        </VPContent>
    </div>
</template>

<script setup lang="ts">
import {defineComponent} from "vue";
import VPNav from './vp-nav.vue'
import VPContent from './vp-content.vue'
import VPSidebar from './vp-sidebar.vue'
import { useToggle } from '@vueuse/core'


const [isSidebarOpen, toggleSidebar] = useToggle(false)
</script>
