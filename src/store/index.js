import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    moviesPagination: []
  },
  mutations: {

  },
  actions: {
    getPaginationMovies({ commit }) {
      // `https://api.themoviedb.org/3/movie/popular?api_key=c90960472340983f37679878e271035a&language=en&page=1
    }
  },
  getters: {
    getMovies(state) {
      return state.moviesPagination
    }
  }
})
