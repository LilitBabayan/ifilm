export default {
    state:{
        recommendations: {
            totalPages: 0,
            movies: []
        }
    },

    mutations:{
        SET_RECOMMENDATIONS(state, data) {
            state.recommendations.movies = data.results.slice(0, 10)
            state.recommendations.totalPages = data.total_pages
        }
    },

    actions:{
        getRecommendations({commit}, page) {
            axios.get(`${process.env.VUE_APP_API_BASE_URL}/movie/top_rated?api_key=${process.env.VUE_APP_API_KEY}&language=en&page=${page || 1}`)
                .then(function (response) {
                    commit('SET_RECOMMENDATIONS', response.data)
                }).catch((error)=>{
                alert("couldn't get the top movies")
            })
        }
    },

    getters:{
        getRecommendations(state) {
            return state.recommendations
        }
    }
}