<script lang="ts" setup>
import {useRoute} from 'vitepress'
import {isActive} from '../../utils'

type Link = {
    text: string
    link: string
    activeMatch: string
}

defineProps<{
    item: Link
}>()

defineEmits(['close'])

const route = useRoute()
</script>

<template>
    <a
        :class="{ link: true, active: isActive(route, item.link) }"
        :href="item.link"
        @click="$emit('close')"
    >
        <p class="link-text">{{ item.text }}</p>
    </a>
</template>

<style scoped lang="scss">
.link {
    display: block;
    padding: 0.625rem 2rem 0.625rem 1.5rem;
    line-height: 1.5;
    font-size: 0.9rem;
    margin: 0 8px;
    border-radius: 8px;

    .link-text {
        margin: 0;
    }
}

.link:hover .link-text {
    color: #409eff;
    transition: color 0.25s;
}

.link.active {
    background-color: rgba(64, 158, 255, .1);

    .link-text {
        font-weight: 600;
        color: #409eff;
        transition: color 0.25s;
    }
}

.link-text {
    line-height: 20px;
    font-size: 13px;
    font-weight: 500;
    color: #606266;
    transition: color 0.5s;
}
</style>
