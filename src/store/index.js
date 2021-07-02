import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        moviesPagination: [],
        movieCarousel: [],
        totalPages: 0,
        recommendations: {
            totalPages: 0,
            movies: []
        },
        cinemas:{
            totalPages: 0,
            movies: []
        }
    },

    mutations: {
        SET_MOVIES(state, data) {
            state.moviesPagination = data.results
            state.totalPages = data.total_pages
        },
        SET_CAROUSEL_MOVIES(state, data) {
            state.movieCarousel = data.results
        },
        SET_RECOMMENDATIONS(state, data) {
            state.recommendations.movies = data.results.slice(0, 10)
            state.recommendations.totalPages = data.total_pages
        },
        SET_CINEMAS(state, data) {
            state.cinemas.movies = data.results.slice(0, 10)
            state.cinemas.totalPages = data.total_pages
        }
    },
    actions: {
        getPaginationMovies({commit}, page) {
            axios.get(`${process.env.VUE_APP_API_BASE_URL}/movie/popular?api_key=${process.env.VUE_APP_API_KEY}&language=en&page=${page || 1}`)
                .then(function (response) {
                    commit('SET_MOVIES', response.data)
                })
        },
        getCarouselMovies({commit}) {
            axios.get(`${process.env.VUE_APP_API_BASE_URL}/movie/popular?api_key=${process.env.VUE_APP_API_KEY}&language=en&page=1`)
                .then(function (response) {
                    commit('SET_CAROUSEL_MOVIES', response.data)
                })
        },
        getRecommendations({commit}, page) {
            axios.get(`${process.env.VUE_APP_API_BASE_URL}/movie/top_rated?api_key=${process.env.VUE_APP_API_KEY}&language=en&page=${page || 1}`)
                .then(function (response) {
                    console.log(response)
                    commit('SET_RECOMMENDATIONS', response.data)
                })
        },
        getCinemas({commit}, page) {
            axios.get(`${process.env.VUE_APP_API_BASE_URL}/movie/now_playing?api_key=${process.env.VUE_APP_API_KEY}&language=en&page=${page || 1}`)
                .then(function (response) {
                    console.log(response)
                    commit('SET_CINEMAS', response.data)
                })
        }
    },
    getters: {
        getMovies(state) {
            return state.moviesPagination
        },
        getMovieCarousel(state) {
            return state.movieCarousel
        },
        getRecommendations(state) {
            return state.recommendations
        },
        getCinema(state) {
            return state.cinemas
        }
    }
})
