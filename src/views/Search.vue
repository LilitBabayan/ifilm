<template>
    <div class="container">
        <div class="row mb-4">
            <div class="col-12 col-md-6"  v-for="movie in movies.results">
                <div class="mt-4 widgetColor movieWidget">
                    <router-link :to="`/movie/${movie.id}`" style="display: inherit; width: 100%">
                        <div class="d-flex">
                            <div class="w-25">
                                <img class="img-fluid" src="../assets/404_poster.jpg" v-if="movie.poster_path === null" alt="">
                                <img class="img-fluid" :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`" v-else alt="">
                            </div>
                            <div class="p-2 w-75 d-flex justify-content-between">
                                <div class="d-grid">
                                    <div class="description-top">
                                        <p class="font-weight-bold mb-1"><b>{{ movie.original_title }}</b></p>
                                        <small style="font-size:12px;">{{movie.overview | truncate(450)}}</small>
                                    </div>
                                    <div class="d-none d-sm-block align-self-end">
                                        <div class="d-inline-block">
                                            <vueStar
                                                    :rating="movie.vote_average"
                                                    :increment="movie.vote_average"
                                                    :read-only="true"
                                                    :show-rating="false"
                                                    :star-size="starSize"
                                                    :active-color="'#fe7900'"
                                                    :max-rating="10">
                                            </vueStar>
                                            <p class="mb-0">Total Votes: <b>{{ movie.vote_count }}</b></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex align-items-end">
                                    <span class="rounded-circle averageCircle fw-bold ">{{movie.vote_average}}</span>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
        <searchPaginate :pageCount="movies.page_count"></searchPaginate>
    </div>
</template>

<script>
    import vueStar from 'vue-star-rating'
    import searchPaginate from '../components/searchPaginate'

    export default {
        name: "Search",
        data(){
            return {
                starSize:20
            }
        },
        filters:{
            truncate: function(text, stop, clamp){
                return text.slice(0, stop) + (stop < text.length ? clamp || '...' : '')
            }
        },
        watch: {
            $route(to, from) {
                this.$store.dispatch('getMovieBySearch',this.getInputVal);

            }
        },
        created() {
            this.$store.dispatch('getMovieBySearch',this.getInputVal);
        },
        computed:{
            movies(){
                return this.$store.getters.getSearchResults
            },
            getInputVal(){
                return this.$route.params.keyword
            },
        },
        components: {
            vueStar,
            searchPaginate
        }
    }
</script>

<style lang="scss" scoped>

    .search-results-wrapper-item{
        display: flex;
        margin: 15px;
    }
    .description-top{
        line-height: 13px;
    }

</style>