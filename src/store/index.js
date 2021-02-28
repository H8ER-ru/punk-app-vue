import Vue from 'vue'
import Vuex from 'vuex'
import beerStore from "@/store/beers";
import loader from "@/store/loader";

Vue.use(Vuex)

export default new Vuex.Store({
  mutations: {
  },
  getters:{
  },
  actions: {
  },
  modules: {
    beerStore,
    loader
  },
})
