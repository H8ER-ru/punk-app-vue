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

import ListOfBear from "@/components/ListOfBear";
import Pagination from "@/components/Pagination";
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'Home',
  components: {
    Pagination,
    ListOfBear
  },
  methods:{
    ...mapActions('beerStore', ['changeCurrentPage']),
    onPageChanged(page){
      this.changeCurrentPage(Number(page))
    },
  },
  computed:{
    ...mapGetters('beerStore', ['currentPage', 'beerPerPage', 'beerLength'])
  }

}
</script>
<style>

</style>
