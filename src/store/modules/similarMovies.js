export default {
    state:{
        similarMovies: [],
    },

    mutations:{
        SET_SIMILAR_MOVIES(state, data){
            state.similarMovies = data.results
        }
    },

    actions:{
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
        getSimilarMovies(state) {
            return state.similarMovies
        },
    }
}