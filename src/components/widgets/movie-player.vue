<template>
    <div>
        <div  class="row">
            <div class="col-8 col-md-4">
                <img :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`" class="img-fluid mb-2">
            </div>
            <div class="col-12 col-md-8">
                <ul class="list-group">
                    <li class="list-group-item widgetColor">
                        <span>Title: </span>
                        <strong>{{movie.title}}</strong>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <span>Original Name: </span>
                        <strong>{{movie.original_title}}</strong>
                    </li>
                    <li class="list-group-item widgetColor">
                        <span>Year: </span>
                        <strong>{{movie.release_date}}</strong>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <span>Genre: </span>
                        <strong v-for="genre in movie.genres">{{genre.name}},   </strong>
                    </li>
                    <li class="list-group-item widgetColor">
                        <span>Duration: </span>
                        <strong>{{movie.runtime}} min</strong>
                    </li>
                    <li class="list-group-item bg-transparent">
                        <span>Country: </span>
                        <strong v-for="city in movie.production_countries">{{city.name}}, </strong>
                    </li>
                    <li class="list-group-item widgetColor">
                        <span>Budget: </span>
                        <strong>{{movie.budget}}$</strong>
                    </li>
                </ul>
            </div>
            <div class="col-12 mt-4">
                <div class="widgetColor p-3">
                    <h5>About Film</h5>
                    <p>{{movie.overview}}</p>
                </div>
            </div>
            <div class="col-12 col-md-8 mt-2">
                <vueStar
                        :increment="movie.vote_average"
                        :rating="movie.vote_average"
                        :read-only="true"
                        :show-rating="false"
                        :star-size="45"
                        :active-color ="'#fe7900'"
                        :max-rating="10">
                </vueStar>
            </div>
            <div class="col-12 col-md-4 mt-2">
                <p class="m-0 fs-5 text-end">Movie Rating: <strong>{{movie.vote_average}}</strong></p>
                <p class="m-0 text-end">Total Votes: <strong>{{movie.vote_count}}</strong></p>
            </div>
            <div class="col-12 mt-2 overflow-hidden">
                <iframe class="trailer-frame" src="https://www.youtube.com/embed/nAowcCbWhqg"></iframe>
            </div>
            <div class="col-12 mt-3">
                <div class="position-relative top-banner widgetColor">
                    <h5 class="text-left pt-3 px-3">Similar Movies</h5>
                    <movieCarousel :key="movie.id" />
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
        props: {
            movie: {
                required: true
            }
        },
        components:{
            vueStar,
            movieCarousel
        },
    }
</script>

<style lang="scss" scoped>
    ul{
        li{
            padding: 12px 15px;
            font-size: 15px;
            transition: $dark-m-transition;
        }
    }
    .trailer-frame{
        width: 100%;
        height: 400px;
    }
</style>