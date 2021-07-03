import Vue from 'vue'
import Vuex from 'vuex'
import cinemaMovies from './modules/cinemaMovies'
import mainCarousel from './modules/mainCarousel'
import moviesPagination from './modules/moviesPagination'
import recommendedMovies from "./modules/recommendedMovies";
import similarMovies from "./modules/similarMovies";
import movieInfoConfigs from "./modules/movieInfoConfigs";

Vue.use(Vuex)

export default new Vuex.Store({

    modules:{
        cinemaMovies,
        mainCarousel,
        moviesPagination,
        recommendedMovies,
        similarMovies,
        movieInfoConfigs
    },

    state: {},

    mutations: {},

    actions: {},

    getters: {}
})