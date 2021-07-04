export default{
    state:{
        movie: {},
        similarMovies: []
    },

    mutations:{
        DESTROY_MOVIE(state) {
            state.movie = {}
        },
        SET_MOVIE(state, data) {
            state.movie = data
        },
        SET_SIMILAR_MOVIES(state, data){
            state.similarMovies = data.results
        }
    },

    actions:{
        getMovieById({commit}, $id) {
            axios.get(`${process.env.VUE_APP_API_BASE_URL}/movie/${$id}?api_key=${process.env.VUE_APP_API_KEY}&language=en`).then(response => {
                commit('SET_MOVIE', response.data);
            }).catch((error)=>{
                alert('its an error while trying to retrieve the movieID')
            })
        },
        getSimilarMovies({commit}, id){
            axios.get(`${process.env.VUE_APP_API_BASE_URL}/movie/${id}/similar?api_key=${process.env.VUE_APP_API_KEY}&language=en&page=1`)
                .then(function (response) {
                    commit('SET_SIMILAR_MOVIES', response.data)
                }).catch((error)=>{
                alert('its an error on your "Similar Movies" component')
            })
        }
    },

    getters:{
        getMovie(state) {
            return state.movie
        },
        getSimilarMovies(state) {
            return state.similarMovies
        }
    }
}