<template>
  <div class="basket">
    <div class="basket__empty" v-if="!basketList.length" >
      <h2>Basket is empty. Choose beer!</h2>
    </div>
    <div class="basket__block" v-if="basketList.length" >
      <h3 class="basket__title">Your choose: </h3>
      <div class="basket__list">
        <div class="basket__item" v-for="beer in basketList">
          <div class="basket__img" >
            <img :src="beer.image_url" alt="">
          </div>
          <div class="basket__name">
            <h4>{{beer.name}}</h4>
            <p> ({{beer.count}} pieces)</p>
          </div>
          <button @click="deleteFromBasket(beer)" class="basket__delete">
            <b-icon icon="trash"></b-icon>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "Basket",
  computed:{
    basketList: function (){
      return  this.$store.state.beerStore.basketList
    }
  },
  methods:{
    ...mapActions('beerStore', ['deleteBasket']),
    async deleteFromBasket(beer){
      const isConfirmed = await this.$bvModal.msgBoxConfirm(`Are you sure want to delete ${beer.name}`)
      if(isConfirmed){
        this.deleteBasket(beer)
        this.$bvToast.toast(`Your ${beer.name} was deleted from busket`,{
          title: 'Basket notification',
          toaster: 'b-toaster-bottom-right' ,
          autoHideDelay: 3000,
          appendToast: true,
          variant: 'success',
          solid: true
        })
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.basket
  &__name
    text-align: center
  &__title
    background-color: lightgray
    padding: 5px
    border-radius: 5px
    width: 100%
  &__block
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column
  &__list
    border: 1px solid #2c3e50
    padding: 10px
  &__item
    width: 600px
    height: 180px
    padding: 10px
    display: flex
    justify-content: space-between
    align-items: center
    border-bottom: 1px solid lightgray
    &:last-child
      border: 0
  &__img
    height: 200px
    width: 100px
    display: flex
    justify-content: center
    align-items: center
    img
      max-width: 160px
      height: 100px
  &__delete
    border: none
    background-color: white
    transition: background-color .2s linear
    border-radius: 5px
    padding: 3px
    &:hover
      background-color: #f8d7da
    & svg
      height: 1.5rem
      width: 1.5rem

@media screen and (max-width: 768px)
  .basket
    h4
      font-size: 1.3rem
    &__item
      width: 95%
      height: 160px
      padding: 0
    &__list
      padding: 5px
    &__img
      height: 80px
      padding-left: 10px
      justify-content: flex-start
      width: 100px
      img
        max-width: 160px
        height: 80px
</style>