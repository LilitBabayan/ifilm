export default{
    state:{
        movieCarousel: []
    },

    mutations:{
        SET_CAROUSEL_MOVIES(state, data) {
            state.movieCarousel = data.results
        },
    },

    actions:{
        getCarouselMovies({commit}) {
            axios.get(`${process.env.VUE_APP_API_BASE_URL}/movie/popular?api_key=${process.env.VUE_APP_API_KEY}&language=en&page=1`)
                .then(function (response) {
                    commit('SET_CAROUSEL_MOVIES', response.data)
                }).catch((error)=>{
                    alert('its an error in your "Carousel" component')
            })
        }
    },

    getters:{
        getMovieCarousel(state) {
            return state.movieCarousel
        }
    },
}