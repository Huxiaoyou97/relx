<template>
    <rx-button :loading="loading" @click="loading = !loading">
        <span v-if="!loading">戳一下</span>
        <span v-else>再戳一下</span>
    </rx-button>
</template>

<script lang="ts" setup>
import {ref} from "vue"
const loading = ref(false)
</script>
