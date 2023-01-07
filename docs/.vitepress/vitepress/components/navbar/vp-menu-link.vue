<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute } from 'vitepress'
import VPLink from '../common/vp-link.vue'
import { isActiveLink } from '../../utils'

type Link = {
    text: string
    link: string
    activeMatch: string
}

const USER_VISITED_NEW_RESOURCE_PAGE = 'USER_VISITED_NEW_RESOURCE_PAGE'

defineProps<{
    item: Link
}>()

const isVisited = ref(
    !!window.localStorage.getItem(USER_VISITED_NEW_RESOURCE_PAGE)
)


const isNewPage = (item: Link) => item.activeMatch === '/some_fake_path/'

const onNavClick = (item: Link) => {
    if (isNewPage(item) && !isVisited.value) {
        window.localStorage.setItem(
            USER_VISITED_NEW_RESOURCE_PAGE,
            Date.now().toString()
        )
        isVisited.value = true
    }
}
const route = useRoute()

</script>


<template>
    <VPLink
        :class="{
      'is-menu-link': true,
      active: isActiveLink(
        route,
        item.activeMatch || item.link,
        !!item.activeMatch
      ),
    }"
        :href="item.link"
        :no-icon="true"
        @click="onNavClick(item)"
    >
<!--        <el-badge v-if="isNewPage(item) && !isVisited" is-dot class="badge">-->
<!--            {{ item.text }}</el-badge-->
<!--        >-->
        <span>{{ item.text }}</span>
    </VPLink>
</template>

<style scoped lang="scss">
.is-menu-link {
    display: block;
    padding: 0 12px;
    line-height: calc(55px - 3px);
    font-size: 14px;
    font-weight: 500;
    color: #303133;
    transition: color .3s;
    border-bottom: 2px solid transparent;

    &.active {
        border-bottom-color: #409eff;
    }

    &:hover {
        color: #409eff;
    }

    .badge {
        display: inline;
        vertical-align: unset;
    }

    .badge:deep(.is-dot) {
        right: 0;
    }
}
</style>
