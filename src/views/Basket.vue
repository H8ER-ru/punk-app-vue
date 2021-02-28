<template>
  <div class="basket">
    <div class="basket__empty">
      <h2>Basket is empty. Choose beer!</h2>
    </div>
    <div class="basket__block">
      <h3>Your choose:</h3>
      <div class="basket__list">
        <div class="basket__item" v-for="">
          <img class="basket__img" src="" alt="">
          <div class="basket__name"></div>
          <button class="basket__delete">
            <b-icon icon="trash"></b-icon>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Basket",
}
</script>

<style lang="sass" scoped>
.basket
  &__item
    width: 500px
    height: 500px
  &__delete
    border: none
    background-color: white
    & svg
      height: 1.5rem
      width: 1.5rem

</style>