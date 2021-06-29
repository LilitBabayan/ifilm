<template>
    <div class="mb-5">
        <carousel class="mainContainer" :perPage="8"
                  :perPageCustom="[[185, 2],[768,3], [1024, 8]]"
                  :paginationEnabled = "false"
                  :navigation-enabled="true"
                  :navigation-next-label="nextLabel"
                  :navigation-prev-label="prevLabel">
            <slide v-for="movie in carouselMovies" class="p-3">
                <img :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`" class="img-fluid movie-pic mb-2">
                <p>{{movie.title}}</p>
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
            this.$store.dispatch("getPaginationMovies")
        },

        computed:{
            carouselMovies(){
                return this.$store.getters.getMovieCarousel
            }
        }
    }
</script>

<style lang="scss">
    @import "../sass/variables";

    .mainContainer{
        position:relative;
        p{
            font-family: $Web-Font;
            font-size: 13px;
            color: $textColor;
            text-align: center;
        }
        .movie-pic{
            animation: imageShadow 2s infinite;
            animation-direction: alternate-reverse;
            transition: transform .4s;
        }
        .movie-pic:hover{
            transform: scale(1.1);
        }
        @keyframes imageShadow {
            from{
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0), 0 6px 20px 0 rgba(0, 0, 0, 0);
            }
            to{
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 2), 0 6px 20px 0 rgba(0, 0, 0, 1);
            }
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