import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    moviesPagination: [],
      movieCarousel: []
  },

  mutations: {
    SET_MOVIES(state, data) {
        console.log('DD', data)
        state.moviesPagination = data.results
        state.movieCarousel = data.results
    }
  },
  actions: {
    getPaginationMovies({ commit }) {
         axios.get('https://api.themoviedb.org/3/movie/popular?api_key=c90960472340983f37679878e271035a&language=en&page=1')
          .then(function (response) {
            commit('SET_MOVIES', response.data)
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .then(function () {
            // always executed
          });
    }
  },
  getters: {
    getMovies(state) {
      return state.moviesPagination
    },
    getMovieCarousel(state){
        return state.movieCarousel
    }
  }
})
