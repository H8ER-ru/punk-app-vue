<template>
  <div class="beer">
    <Loader/>
      <BeerItem
        v-for="beer in beersList"
        :key="beer.id"
        :beer="beer"
        @addToBasket="onAddToBasket"
      />
  </div>
</template>

<script>
import Loader from "@/components/Loader";
import {mapActions, mapGetters} from 'vuex'
import BeerItem from "@/components/BeerItem";
export default {
  name: "ListOfBear",
  components:{
    BeerItem,
    Loader
  },
  methods:{
    ...mapActions('beerStore',['addBasket']),
    onAddToBasket( beer){
      this.addBasket(beer)
      this.$bvToast.toast(`Your ${beer.name} was added to basket!`, {
        title: 'Catalog notification',
        toaster: 'b-toaster-bottom-right' ,
        autoHideDelay: 3000,
        appendToast: true,
        variant: 'success',
        solid: true
      })
    }
  },
  computed:{
    ...mapGetters('beerStore',['beersList'])
  },

}
</script>

<style lang="sass" scoped>
.beer
  display: grid
  padding-top: 30px
  justify-content: center
  grid-template-columns: 340px 340px 340px

@media screen and (max-width: 1200px)
  .beer
    grid-template-columns: 300px 300px 300px
@media screen and (max-width: 993px)
  .beer
    grid-template-columns: 340px 340px

@media screen and (max-width: 993px)
  .beer
    grid-template-columns: 95%
</style>
