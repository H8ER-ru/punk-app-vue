<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <router-link to="/">
        <b-navbar-brand>Punk Beer App</b-navbar-brand>
      </router-link>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            <b-nav-item to="/random" >Random Beer</b-nav-item>

          <b-nav-item to="/" >Beer list</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/basket" >Basket</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="container">
      <router-view/>
    </div>

  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
