export default {
    state:{
        movie: {}
    },

    mutations:{
        DESTROY_MOVIE(state) {
            state.movie = {}
        },
        SET_MOVIE(state, data) {
            state.movie = data
        }
    },

    actions:{
        getMovieById({commit}, $id) {
            axios.get(`${process.env.VUE_APP_API_BASE_URL}/movie/${$id}?api_key=${process.env.VUE_APP_API_KEY}&language=en`).then(response => {
                commit('SET_MOVIE', response.data);
            }).catch((error)=>{
                alert('its an error while trying to retrieve the movieID')
            })
        }
    },

    getters:{
        getMovie(state) {
            return state.movie
        }
    }
}