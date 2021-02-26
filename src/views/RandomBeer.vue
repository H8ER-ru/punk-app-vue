<template>
  <div class="about" v-if="getRandomBear">
    <h1>{{getRandomBear.name}}</h1>
  </div>
</template>

<script>
import axios from "axios";
import {mapGetters} from "vuex";

export default {
  name: 'RandomBeer',
  methods:{
    fetchRandomBeer(){
      axios.get('https://api.punkapi.com/v2/beers/random')
          .then(result => {
            this.$store.state.randomBeer = result.data[0]
            console.log(result.data)
          })
    },
  },
  computed:{
    ...mapGetters(['getRandomBear'])
  },
  created() {
    this.fetchRandomBeer()
  }

}
</script>

<style>

</style>