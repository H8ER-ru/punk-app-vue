<template>
  <div class="beer">
    <Loader/>
    <div class="beer__item" v-for="beer in beersList" :key="beer.id">
      <div class="beer__info">
        <img class="beer__image" :src="beer.image_url" alt="">
        <h2 class="beer_title">{{beer.name}}</h2>
        <p class="beer__description">{{beer.tagline}}</p>
        <p>First Brewed: {{beer.first_brewed}}</p>
      </div>
      <button class="beer__add" >Add to basket</button>
    </div>
  </div>
</template>

<script>
import Loader from "@/components/Loader";
import {mapGetters} from 'vuex'
export default {
  name: "ListOfBear",
  components:{
    Loader
  },
  mutations:{
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
  &__item
    text-align: center
    padding: 10px
    box-shadow: 7px 7px 5px 5px rgba(50, 50, 50, 0.25)
    border-radius: 5px
    margin: 10px
    transition: transform .2s linear
    display: flex
    justify-content: space-between
    flex-direction: column
    align-items: center
    &:hover
     transform: scale(1.03)
  &__image
    max-width: 320px
    max-height: 350px
  &__description
    max-height: 200px
    overflow: hidden
    text-overflow: clip
    font-style: italic
  &__add
    border: none
    padding: 5px
    border-radius: 5px
    display: block
    float: right
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
