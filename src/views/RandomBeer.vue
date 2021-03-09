<template>
  <div>
    <BeerDetail
      :beer="randomBeer"
      :is-random="true"
      @toggleBeer="onToggleBeer"
    />
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import Loader from "@/components/Loader";
import BeerDetail from "@/components/BeerDetail";

export default {
  name: 'RandomBeer',
  components: {BeerDetail, Loader},
  methods:{
   ...mapActions('beerStore',['fetchRandomBeer','clearRandomBeer']),
    onToggleBeer(){
     this.fetchRandomBeer()
    }
  },
  computed:{
    ...mapGetters('beerStore',['randomBeer'])
  },
  beforeMount() {
    this.fetchRandomBeer()
  },
  destroyed() {
    this.clearRandomBeer()
  }

}
</script>

<style lang="sass" scoped>
h1
  text-align: center
.random-beer
  display: flex
  margin-top: 30px
  &__img
    img
      min-width: 250px
      max-width: 350px
      max-height: 750px
  &__description
    padding-left: 40px
  &__tagline
    font-style: italic
    text-align: right
    font-weight: 400
    font-size: 18px
  &__text
    text-align: left
  &__food-item
    list-style: circle

@media screen and (max-width: 1024px)
  .random-beer__img
    img
      max-width: 300px

@media screen and (max-width: 700px)
  .random-beer
    flex-direction: column
    &__img
      text-align: center
      padding-bottom: 20px
      img
        max-height: 300px

</style>
