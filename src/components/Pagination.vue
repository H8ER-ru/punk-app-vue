<template>
  <div class="beer-pagination">
    <BPagination
        v-model="currentPageModel"
        :per-page="perPage"
        :total-rows="total"
    />
    {{currentPage}}
  </div>
</template>

<script>
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
      type: Number,
      default : 15
    }
  },
  computed:{
    currentPageModel:{
      get(){
        return this.currentPage
      },
      set(value){
        console.log(value)
        this.$emit('changePage', value)
      }
    }
  }
}
</script>

<style scoped>

</style>