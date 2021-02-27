<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <router-link to="/">
        <b-navbar-brand>Punk Beer App</b-navbar-brand>
      </router-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/random" >Random Beer</b-nav-item>
          <b-nav-item to="/" >Beer list</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/basket" >Basket <b-icon icon="basket2" class="basket"></b-icon> </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="container">
      <router-view/>
    </div>

  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'app',
  components:{},
  methods:{
    ...mapActions('beerStore', ['fetchBeer'])
  },
  mounted() {
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
