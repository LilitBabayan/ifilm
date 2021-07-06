import Vue from 'vue'
import Vuex from 'vuex'
import homePage from './modules/home-page'
import moviePage from './modules/movie-page'
import searchPage from './modules/search-page'

Vue.use(Vuex)

export default new Vuex.Store({

    modules:{
      homePage,
      moviePage,
      searchPage
    },

    state: {},

    mutations: {},

    actions: {},

    getters: {}
})