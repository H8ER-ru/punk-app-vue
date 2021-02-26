<template>
  <div class="beer">
    <div class="beer__item" v-for="beer in getListOfBear" :key="beer.id">
      <img class="beer__image" :src="beer.image_url" alt="">
      <h2 class="beer_title">{{beer.name}}</h2>
      <p class="beer__description">{{beer.tagline}}</p>
      <p>First Brewed: {{beer.first_brewed}}</p>
      <button >Add to basket</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {mapGetters} from 'vuex'
export default {
  name: "ListOfBear",
  methods:{
    fetchListOfBear(){
      axios.get('https://api.punkapi.com/v2/beers?page=1&per_page=15')
          .then(result => {
            this.$store.state.listOfBear = result.data
            console.log(result.data)
          })
    },

  },
  created() {
    this.fetchListOfBear()
  },
  mutations:{
  },
  computed:{
    ...mapGetters(["getListOfBear"])
  },

}
</script>

<style lang="sass" scoped>
.beer
  display: grid
  justify-content: space-between
  grid-template-columns: 340px 340px 340px
  &__item
    padding: 10px
  &__image
    max-width: 320px
    max-height: 400px
  &__description
    max-height: 200px
    overflow: hidden
    text-overflow: clip

</style>