<template>
  <div class="beer-pagination">
    <BPagination v-if="!isShowLoader"
        v-model="currentPageModel"
        :per-page="perPage"
        :total-rows="total"
    />
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Pagination",
  props:{
    currentPage: {
      type: Number,
      default: 1
    },
    perPage: {
      type: Number,
      default: 15
    },
    total:{
      type: Number
    }
  },
  computed:{
    ...mapGetters(['isShowLoader']),
    currentPageModel:{
      get(){
        return this.currentPage
      },
      set(value){
        this.$emit('changePage', value)
      }
    }
  }
}
</script>

<style lang="sass" >
.pagination
  justify-content: center
  align-items: center
  margin-top: 30px
.page-item.active .page-link
  color: white !important
  background-color: #343a40 !important
  border-color: #343a40 !important
.page-link
  color: #343a40 !important
</style>
