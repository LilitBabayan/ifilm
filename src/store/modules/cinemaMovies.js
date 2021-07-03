export default {
    state:{
        cinemas:{
            totalPages: 0,
            movies: []
        }
    },

    mutations:{
        SET_CINEMAS(state, data) {
            state.cinemas.movies = data.results.slice(0, 10)
            state.cinemas.totalPages = data.total_pages
        }
    },

    actions:{
        getCinemas({commit}, page) {
            axios.get(`${process.env.VUE_APP_API_BASE_URL}/movie/now_playing?api_key=${process.env.VUE_APP_API_KEY}&language=en&page=${page || 1}`)
                .then(function (response) {
                    commit('SET_CINEMAS', response.data)
                }).catch((error)=>{
                alert('its an error while trying to load the cinema movies')
            })
        }
    },

    getters:{
        getCinema(state) {
            return state.cinemas
        }
    }
}