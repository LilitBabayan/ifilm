export default{
    state:{
        movieCarousel: [],
        moviesPagination: [],
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

    mutations:{
        SET_CAROUSEL_MOVIES(state, data) {
            state.movieCarousel = data.results
        },
        SET_MOVIES(state, data) {
            state.moviesPagination = data.results
            state.totalPages = data.total_pages
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

    actions:{
        getCarouselMovies({commit}) {
            axios.get(`${process.env.VUE_APP_API_BASE_URL}/movie/popular?api_key=${process.env.VUE_APP_API_KEY}&language=${vue.$i18n.locale}&page=1`)
                .then(function (response) {
                    commit('SET_CAROUSEL_MOVIES', response.data)
                }).catch((error)=>{
                alert('something went wrong while trying to load the Carousel!')
            })
        },
        getPaginationMovies({commit}, page) {
            axios.get(`${process.env.VUE_APP_API_BASE_URL}/movie/popular?api_key=${process.env.VUE_APP_API_KEY}&language=${vue.$i18n.locale}&page=${page || 1}`)
                .then(function (response) {
                    commit('SET_MOVIES', response.data)
                }).catch((error)=>{
                alert('something went wrong while trying to load the movies for pagination!')
            })
        },
        getRecommendations({commit}, page) {
            axios.get(`${process.env.VUE_APP_API_BASE_URL}/movie/top_rated?api_key=${process.env.VUE_APP_API_KEY}&language=${vue.$i18n.locale}&page=${page || 1}`)
                .then(function (response) {
                    commit('SET_RECOMMENDATIONS', response.data)
                }).catch((error)=>{
                alert("something went wrong while trying to load the 'Top Movies' section!")
            })
        },
        getCinemas({commit}, page) {
            axios.get(`${process.env.VUE_APP_API_BASE_URL}/movie/now_playing?api_key=${process.env.VUE_APP_API_KEY}&language=${vue.$i18n.locale}&page=${page || 1}`)
                .then(function (response) {
                    commit('SET_CINEMAS', response.data)
                }).catch((error)=>{
                alert("something went wrong while trying to load the 'The Cinema' section!")
            })
        }
    },

    getters:{
        getMovieCarousel(state) {
            return state.movieCarousel
        },
        getMovies(state) {
            return state.moviesPagination
        },
        getRecommendations(state) {
            return state.recommendations
        },
        getCinema(state) {
            return state.cinemas
        }
    }
}