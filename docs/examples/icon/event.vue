<template>
    <rx-icon
        name="checkbox-marked-circle"
        color="#2979ff"
        @click="handleClick"
    />
</template>

<script lang="ts" setup>
function handleClick() {
    console.log('点击成功')
}
</script>
