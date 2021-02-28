<template>
  <div id="app">
    <Header/>
    <BContainer>
      <router-view/>
    </BContainer>

  </div>
</template>

<script>
import {mapActions} from 'vuex'
import Header from "@/components/Header";
export default {
  name: 'app',
  components:{ Header},
  methods:{
    ...mapActions('beerStore', ['fetchBeer'])
  },
  created() {
    this.fetchBeer()
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
