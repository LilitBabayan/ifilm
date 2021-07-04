import Vue from 'vue'
import Vuex from 'vuex'
import homePage from './modules/home-page'
import moviePage from './modules/movie-page'

Vue.use(Vuex)

export default new Vuex.Store({

    modules:{
      homePage,
      moviePage
    },

    state: {},

    mutations: {},

    actions: {},

    getters: {}
})