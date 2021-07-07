export default {
    state:{
        searchResults: {}
    },

    mutations:{
        SET_MOVIE_BY_SEARCH(state,data){
            state.searchResults = data
        }
    },

    actions:{
        getMovieBySearch({commit}, page) {
            let keyword = vue.$route.params.keyword

            axios.get(`${process.env.VUE_APP_API_BASE_URL}/search/movie/?query=${keyword}&api_key=${process.env.VUE_APP_API_KEY}&language=${vue.$i18n.locale}&page=${page || 1}`).then(response => {
                commit('SET_MOVIE_BY_SEARCH', response.data);
            }).catch((error)=>{
                alert('its an error while trying to retrieve the movieID')
            })
        }
    },

    getters:{
        getSearchResults(state){
            return state.searchResults
        }
    }

}