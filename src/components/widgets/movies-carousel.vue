<template>
    <div>
        <carousel class="mainContainer"
                  :perPageCustom="[[185, 2],[768,3], [1024, 4]]"
                  :paginationEnabled = "false"
                  :navigation-enabled="true"
                  :navigation-next-label="nextLabel"
                  :navigation-prev-label="prevLabel">
            <slide v-for="(movie, key) in similarCarouselMovies" :key="`slide-${key}`" class="p-3">
                <router-link to="/movie">
                    <img :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`" class="img-fluid movie-pic mb-2">
                    <p>{{movie.title}}</p>
                </router-link>
            </slide>
        </carousel>
    </div>
</template>

<script>
    import { Carousel, Slide } from 'vue-carousel';
    export default {
        name: "movies-carousel",
        components: {
            Carousel,
            Slide
        },
        data (){
            return{
                nextLabel: '<i class="fas fa-chevron-right"></i>',
                prevLabel:'<i class="fas fa-chevron-left"></i>',
            }
        },
        created(){
            this.$store.dispatch("getSimilarMovies")
        },
        computed:{
            similarCarouselMovies(){
                return this.$store.getters.getSimilarMovies
            }
        }
    }
</script>

<style scoped>

</style>