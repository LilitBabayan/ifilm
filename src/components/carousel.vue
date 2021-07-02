<template>

    <div class="mb-5">
        <carousel class="mainContainer"
                  :perPageCustom="[[185, 2],[768,3], [1024, 8]]"
                  :paginationEnabled = "false"
                  :navigation-enabled="true"
                  :navigation-next-label="nextLabel"
                  :navigation-prev-label="prevLabel">
            <slide v-for="(movie, key) in carouselMovies" :key="`slide-${key}`" class="p-3">
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
            this.$store.dispatch("getCarouselMovies")
        },
        computed:{
            carouselMovies(){
                return this.$store.getters.getMovieCarousel
            }
        }
    }
</script>


<style lang="scss">
    @import "../sass/_variables.scss";

    .mainContainer{
        position:relative;
        p{
            font-size: 13px;
            text-align: center;
        }
        .movie-pic{
            box-shadow: 0 10px 20px 0 #00000030, 0 6px 6px 0 #0000003b;
        }

        .VueCarousel-navigation{
            i{
                font-size: 50px;
            }
            .VueCarousel-navigation-next{
                left: unset;
                right: 0px;
            }
            .VueCarousel-navigation-next, .VueCarousel-navigation-prev{
                padding: 0px;
                top: 40%!important;
                transform: translateY(-50%)!important;
                color: $main-color;
            }
            .VueCarousel-navigation-next:focus, .VueCarousel-navigation-prev:focus{
                outline: none;
            }
        }
    }
</style>