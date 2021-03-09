<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <router-link to="/" >
      <b-navbar-brand>Punk Beer App</b-navbar-brand>
    </router-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/random" >Random Beer</b-nav-item>
        <b-nav-item to="/" >Beer list</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/basket" >Basket <b-icon icon="basket2" class="basket"></b-icon> </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "Header",
}
</script>

<style lang="sass" scoped>
.navbar
  margin-bottom: 30px

</style>
