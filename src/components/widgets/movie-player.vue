<template>
    <div>
        <div  class="row">
            <div class="col-8 col-md-4">
                <img :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movies.poster_path}`" class="img-fluid mb-2">
            </div>
            <div class="col-12 col-md-8">
                <ul class="list-group">
                    <li class="list-group-item widgetColor">
                        <span>Title: </span>
                        <strong>{{movies.title}}</strong>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <span>Original Name: </span>
                        <strong>{{movies.original_title}}</strong>
                    </li>
                    <li class="list-group-item widgetColor">
                        <span>Year: </span>
                        <strong>{{movies.release_date}}</strong>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <span>Genre: </span>
                        <strong>{{movies.genre_ids}}</strong>
                    </li>
                    <li class="list-group-item widgetColor">
                        <span>Duration: </span>
                        <strong>106min</strong>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <span>Genre: </span>
                        <strong>United States of America,</strong>
                    </li>
                    <li class="list-group-item widgetColor">
                        <span>Budget: </span>
                        <strong>0$</strong>
                    </li>
                </ul>
            </div>
            <div class="col-12 mt-4">
                <div class="widgetColor p-3">
                    <h5>About Film</h5>
                    <p>{{movies.overview}}</p>
                </div>
            </div>
            <div class="col-12 col-md-8 mt-2">
                <vueStar
                        class="justify-content-center"
                        :increment="movies.vote_average"
                        :rating="5"
                        :read-only="true"
                        :show-rating="false"
                        :active-color ="'#fe7900'"
                        :max-rating="10">
                </vueStar>
            </div>
            <div class="col-12 col-md-4 mt-2">
                <p class="m-0 fs-5 text-end">Movie Rating: <strong>{{movies.vote_average}}</strong></p>
                <p class="m-0 text-end">Total Votes: <strong>{{movies.vote_count}}</strong></p>
            </div>
            <div class="col-12 mt-2 overflow-hidden">
                <iframe class="trailer-frame" src="https://www.youtube.com/embed/nAowcCbWhqg"></iframe>
            </div>
            <div class="col-12 mt-3">
                <div class="position-relative top-banner ">
                    <h5 class="text-left pt-3 pl-3 pr-3">Similar Movies</h5>
                    <movieCarousel />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import vueStar from 'vue-star-rating'
    import movieCarousel from './movies-carousel'
    export default {
        name: "movie-player",
        components:{
            vueStar,
            movieCarousel
        },
        created() {
            this.$store.dispatch("getPaginationMovies")
        },
        computed: {
            movies() {
                return this.$store.getters.getMovies
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import "../../sass/variables";

    ul{
        li{
            padding: 12px 15px;
            font-size: 15px;
        }
    }
    .trailer-frame{
        width: 100%;
        height: 400px;
    }
</style>