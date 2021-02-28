<template>
  <div class="d-flex justify-content-center mb-3 loader-wrap" v-if="isShowLoader">
    <b-spinner variant="light" label="Loading..."></b-spinner>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "Loader",
  computed:{
    ...mapGetters(['isShowLoader'])
  }
}
</script>

<style lang="sass" scoped>
.loader-wrap
  position: fixed
  width: 100%
  height: 100%
  left: 0
  top: 0
  background-color: rgba(0,0,0, .7)
  align-items: center
</style>