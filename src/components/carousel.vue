<template>
    <div>
        <carousel class="mainContainer" :perPage="8"
                  :perPageCustom="[[185, 2],[768,3], [1024, 8]]"
                  :paginationEnabled = "false"
                  :navigation-enabled="true"
                  :navigation-next-label="nextLabel"
                  :navigation-prev-label="prevLabel">
            <slide v-for="moviePic in moviePics" class="p-3">
                <img :key="moviePic.src" :src="moviePic.src" class="img-fluid movie-pic mb-2">
                <p :key="moviePic.name">{{moviePic.name}}</p>
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
                moviePics:[
                    {name: 'Cruella',
                        src: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/rTh4K5uw9HypmpGslcKd4QfHl93.jpg'},
                    {name: 'The Conjuring: The Devil Made Me Do It',
                        src: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/xbSuFiJbbBWCkyCCKIMfuDCA4yV.jpg'},
                    {name: 'Wrath of Man',
                        src:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/M7SUK85sKjaStg4TKhlAVyGlz3.jpg'},
                    {name: 'Ferry',
                        src:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/w6n1pu9thpCVHILejsuhKf3tNCV.jpg'},
                    {name:'Vanquish',
                        src:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/AoWY1gkcNzabh229Icboa1Ff0BM.jpg'},
                    {name: 'Army of the Dead',
                        src:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/z8CExJekGrEThbpMXAmCFvvgoJR.jpg'},
                    {name: 'Mortal Kombat',
                        src:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/nkayOAUBUu4mMvyNf9iHSUiPjF1.jpg'},
                    {name: 'Xtreme',
                        src:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/cwUhVcDeMYYeu8fq5q1OPOoSbZ7.jpg'},
                    {name:'Godzilla vs Kong',
                        src:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg'},
                    {name:'Endangered Species',
                        src:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/ccsSqbpEqr2KK9eMvoeF8ERFCd5.jpg'},
                    {name: 'A Quit Place Part II',
                        src:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/4q2hz2m8hubgvijz8Ez0T2Os2Yv.jpg'},
                    {name:'Tom Clancy\'s Without Remorse',
                        src:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/rEm96ib0sPiZBADNKBHKBv5bve9.jpg'},
                    {name:'Spiral: From the Book of Saw',
                        src:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/lcyKve7nXRFgRyms9M1bndNkKOx.jpg'},
                    {name: 'The Unholy',
                        src:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/bShgiEQoPnWdw4LBrYT5u18JF34.jpg'},
                    {name: 'Nobody',
                        src:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/oBgWY00bEFeZ9N25wWVyuQddbAo.jpg'},
                    {name: 'The Virtuoso',
                        src:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/vXHzO26mJaOt4VO7ZFiM6No5ScT.jpg'},
                    {name: 'Awake',
                        src:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/uZkNbB8isWXHMDNoIbqXvmslBMC.jpg'},
                    {name: 'Luca',
                        src:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/eSQvGZPUpDk9oCfi2R6NKzqPAV5.jpg'},
                    {name: 'Those Who Wish Me Dead',
                        src:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/xCEg6KowNISWvMh8GvPSxtdf9TO.jpg'},
                    {name: 'Infinite',
                        src:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/niw2AKHz6XmwiRMLWaoyAOAti0G.jpg'}
                ]
            }
        },
    }
</script>

<style lang="scss">
    @import "../sass/_variables.scss";

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