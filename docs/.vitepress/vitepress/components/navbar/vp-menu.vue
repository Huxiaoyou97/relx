<template>
    <nav v-if="navs" class="navbar-menu">
        <VPMenuLink v-for="(item, key) in navs" :key="key" :item="item"/>
    </nav>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {useNav} from '../../composables/nav'
import VPMenuLink from './vp-menu-link.vue'

export default defineComponent({

    components: {
        VPMenuLink
    },

    setup() {

        const navs = useNav()

        return {
            navs
        }

    }

})
</script>

<style scoped lang="scss">

</style>
