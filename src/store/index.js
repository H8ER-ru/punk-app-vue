import Vue from 'vue'
import Vuex from 'vuex'
import beerStore from "@/store/beers";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    randomBeer: null,
    basketIDsList: [],
  },
  mutations: {
  },
  getters:{
    getListOfBear: ({listOfBear}) => listOfBear,
    getRandomBear: ({randomBeer}) => randomBeer,
  },
  actions: {

  },
  modules: {
    beerStore
  },
})
