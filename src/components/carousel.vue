<template>
    <div class="position-relative">
        <Carousel id="movies-carousel"
                  :perPage="8"
                  :paginationEnabled="false"
                  :navigationEnabled="true"
                  :navigationNextLabel="nextLabel"
                  :navigationPrevLabel="prevLabel">
            <Slide v-for="item in items">
                <img :src="item.img" class="img-fluid">
                <p>{{item.name}}</p>
            </Slide>
        </Carousel>
    </div>
</template>

<script>
    import { Carousel, Slide } from 'vue-carousel';

    export default {
        components: {
            Carousel,
            Slide
        },
        data() {
            return {
                prevLabel: '<i class="prev-btn fas fa-chevron-left"></i>',
                nextLabel: '<i class="next-btn fas fa-chevron-right"></i>',
                items: [
                    {
                        img: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/rTh4K5uw9HypmpGslcKd4QfHl93.jpg',
                        name: 'Cruella'
                    },
                    {
                        img: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/rTh4K5uw9HypmpGslcKd4QfHl93.jpg',
                        name: 'Cruella'
                    },
                    {
                        img: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/rTh4K5uw9HypmpGslcKd4QfHl93.jpg',
                        name: 'Cruella'
                    },
                    {
                        img: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/rTh4K5uw9HypmpGslcKd4QfHl93.jpg',
                        name: 'Cruella'
                    },
                    {
                        img: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/rTh4K5uw9HypmpGslcKd4QfHl93.jpg',
                        name: 'Cruella'
                    },
                    {
                        img: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/rTh4K5uw9HypmpGslcKd4QfHl93.jpg',
                        name: 'Cruella'
                    },
                    {
                        img: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/rTh4K5uw9HypmpGslcKd4QfHl93.jpg',
                        name: 'Cruella'
                    },
                    {
                        img: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/rTh4K5uw9HypmpGslcKd4QfHl93.jpg',
                        name: 'Cruella'
                    },
                    {
                        img: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/rTh4K5uw9HypmpGslcKd4QfHl93.jpg',
                        name: 'Cruella'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../sass/_variables";

    #movies-carousel {
        /deep/ .VueCarousel-navigation-prev, /deep/.VueCarousel-navigation-next {
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            i {
                color: $main-color;
                font-size: 40px;
            }
        }
        /deep/ .VueCarousel-navigation-next {
            left: unset;
            right: 0;
        }
    }
</style>