<template>
    <div class="navbar-wrapper">
        <div class="container">
            <div class="logo-container">
                <h1>Antd-RELX</h1>
            </div>
            <div class="content">
                <VpMenu />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import VpMenu from "./navbar/vp-menu.vue";

defineProps<{
    fullScreen: boolean
}>()

defineEmits(['toggle'])

</script>

<style scoped lang="scss">
.logo-container {
    display: flex;
    align-items: center;
    height: var(--header-height);

    > a {
        height: 28px;
        width: 128px;
    }

    .logo {
        position: relative;
        width: 100%;
        height: 100%;
    }
}
</style>
