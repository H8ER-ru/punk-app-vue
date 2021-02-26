import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listOfBear: null,
    randomBeer: null,
    basketIDsList: [],
    currentPage: 1
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
  },
})
