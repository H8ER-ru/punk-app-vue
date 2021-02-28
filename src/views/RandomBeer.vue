<template>
  <div>
    <loader/>
    <div class="random-beer" v-if="randomBeer">
      <div class="random-beer__img">
        <img :src="randomBeer.image_url" alt="without image(">
      </div>
      <div class="random-beer__description">
        <h1 class="random-beer__name">{{randomBeer.name}}</h1>
        <h2 class="random-beer__tagline">{{randomBeer.tagline}}</h2>
        <p class="random-beer__text">{{randomBeer.description}}</p>
        <h2>It will be good with - </h2>
        <ul class="random-beer__food-list">
          <li class="random-beer__food-item" v-for=" food in randomBeer.food_pairing">{{food}}</li>
        </ul>
        <h2>Tips from brewers</h2>
        <p> - {{randomBeer.brewers_tips}}</p>
        <BButton @click="toggleBeer">Toggle random beer</BButton>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import Loader from "@/components/Loader";

export default {
  name: 'RandomBeer',
  components: {Loader},
  methods:{
   ...mapActions('beerStore',['fetchRandomBeer']),
    toggleBeer(){
     this.fetchRandomBeer()
    }
  },
  computed:{
    ...mapGetters('beerStore',['randomBeer'])
  },
  beforeMount() {
    this.fetchRandomBeer()
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