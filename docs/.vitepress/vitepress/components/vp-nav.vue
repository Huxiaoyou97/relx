<template>
    <header :class="{ navbar: true }">
        <VpNavbar :full-screen="false" @toggle="toggleFullScreen"/>
    </header>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import VpNavbar from './vp-navbar.vue'
import VpMenu from './navbar/vp-menu.vue'

export default defineComponent({
    components: {
        VpNavbar,
    },
    setup() {

        function toggleFullScreen() {

        }

        return {
            toggleFullScreen
        }
    }

})
</script>

<style scoped lang="scss">

</style>
