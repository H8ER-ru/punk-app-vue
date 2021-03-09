<template>
  <div class="beer__item" >
    <div class="beer__info" @click="showDetail">
      <img class="beer__image" :src="beer.image_url" alt="">
      <h2 class="beer_title">{{beer.name}}</h2>
      <p class="beer__description">{{beer.tagline}}</p>
      <p> <span>abv : {{beer.abv}}&#176;</span> First Brewed: {{beer.first_brewed}}</p>
    </div>
    <button @click="addToBasket" class="beer__add" >Add to basket</button>
  </div>
</template>

<script>
export default {
  name: "BeerItem",
  props:{
    beer:{
      type: Object,
      required: true
    }
  },
  methods:{
    addToBasket(){
      this.$emit('addToBasket', this.beer)
    },
    showDetail: function () {
      this.$router.push({path: `/beer/${this.beer.id}`})
    }
  }

}
</script>

<style lang="sass" scoped>
.beer
  &__info
    cursor: pointer
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
    padding: 6px
    border-radius: 5px
    display: block
    float: right
    border: 1px solid transparent
    transition: border-color .3s linear
    &:hover
      border: 1px solid darkslategrey
</style>
