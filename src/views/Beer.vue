<template>
  <BeerDetail
    :beer="detailBeerItem"
  />
</template>

<script>
import BeerDetail from "@/components/BeerDetail";
import {mapActions, mapGetters} from "vuex";
export default {
  name: "Beer",
  components: {
    BeerDetail
  },
  methods: {
    ...mapActions('beerStore', ['fetchBeerDetail', 'changeDetailBeerId', 'clearDetailBeer']),
    onPageQueryChange(){
      this.changeDetailBeerId(this.$route.params.id)
      this.fetchBeerDetail()
    }
  },
  computed: {
    ...mapGetters('beerStore', ['detailBeerItem'])
  },
  watch: {
    "$route.query": {
      handler: "onPageQueryChange",
      immediate: true,
      deep: true
    }
  },
  created() {
    this.changeDetailBeerId(this.$route.params.id)
    this.fetchBeerDetail()
  },
  destroyed() {
    this.clearDetailBeer()
  }
}
</script>

<style scoped>

</style>
