<template>
  <div class="home">
    <h1>Our beer catalog for you!</h1>
    <ListOfBear/>
    <Pagination
      :current-page="currentPage"
      :per-page="beerPerPage"
      @changePage="onPageChanged"
      :total="beerLength"
    />
  </div>
</template>

<script>

import ListOfBear from "@/components/ListOfBeer";
import Pagination from "@/components/Pagination";
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'Home',
  components: {
    Pagination,
    ListOfBear
  },
  methods:{
    ...mapActions('beerStore', ['changeCurrentPage', 'fetchBeer']),
    onPageQueryChange({page = 1}){
      this.changeCurrentPage(Number(page))
    },
    onPageChanged(page){
      this.$router.push({query: {page}})
    },
  },
  watch:{
    "$route.query":{
      handler: "onPageQueryChange",
      immediate: true,
      deep: true
    }
  },
  computed:{
    ...mapGetters('beerStore', ['currentPage', 'beerPerPage', 'beerLength'])
  },
  created() {
    if (this.$route.query.page){
      this.changeCurrentPage(Number(this.$route.query.page))
    }
  }

}
</script>
<style>

</style>
