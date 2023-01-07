<template>
  <rx-icon/>
</template>

<script>
import { pack } from './locale'
import RxIcon from "../Icon";

export default {
  name: 'IconExample',
  components: {
    RxIcon,
  },
  setup() {

     return {
       pack
     }
  }
}
</script>
