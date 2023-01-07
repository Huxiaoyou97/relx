<template>
    <main  :class="{ 'page-content': true, 'has-sidebar': hasSidebar }">
        <VPDocContent>
            <template #content-top><slot name="content-top" /></template>
            <template #content-bottom><slot name="content-bottom" /></template>
        </VPDocContent>
    </main>
</template>

<script setup lang="ts">
import { computed, onUpdated, watch, ref, nextTick } from 'vue'
import { useData, useRoute } from 'vitepress'
import { useSidebar } from '../composables/sidebar'

const { hasSidebar } = useSidebar()

import VPDocContent from './vp-doc-content.vue'

</script>

<style scoped lang="scss">

</style>
