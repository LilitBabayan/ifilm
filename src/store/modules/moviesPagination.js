export default {
    state:{
        moviesPagination: [],
        totalPages: 0,
    },

    mutations:{
        SET_MOVIES(state, data) {
            state.moviesPagination = data.results
            state.totalPages = data.total_pages
        },
    },

    actions:{
        getPaginationMovies({commit}, page) {
            axios.get(`${process.env.VUE_APP_API_BASE_URL}/movie/popular?api_key=${process.env.VUE_APP_API_KEY}&language=en&page=${page || 1}`)
                .then(function (response) {
                    commit('SET_MOVIES', response.data)
                }).catch((error)=>{
                alert('its an error while trying to load the movies for pagination!')
            })
        }
    },

    getters:{
        getMovies(state) {
            return state.moviesPagination
        }
    }
}