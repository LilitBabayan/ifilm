<template>
    <div>
        <paginations :page="page"></paginations>
        <div class="row">
            <div v-for="movie in movies" class="col-6 col-lg-4 ">
                <router-link :to="`/movie/${movie.id}`">
                    <div class="movieLayer">
                        <div class="position-relative overflow-hidden">
                            <div class="position-absolute text-white info-box">
                                <p class="movieTitle">{{movie.title}}</p>
                                <ul>
                                    <li><span class="text-white-50">Year:</span> {{movie.release_date}}</li>
                                    <li><span class="text-white-50">Total Votes:</span> {{movie.vote_count}}</li>
                                    <li><span class="text-white-50">Popularity:</span> {{movie.popularity}}</li>
                                </ul>
                                <div class="text-center mt-3 d-none d-md-block">
                                    <span class="rounded-circle averageCircle font-weight-bold border border-white d-inline-flex">{{movie.vote_average}}</span>
                                </div>
                            </div>
                            <img class="img-fluid movieImage"
                                 :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`">
                        </div>

                        <div class="mt-2">
                            <vueStar
                                    class="justify-content-center"
                                    :rating="movie.vote_average"
                                    :increment="movie.vote_average"
                                    :read-only="true"
                                    :show-rating="false"
                                    :star-size="starSize"
                                    :active-color="'#fe7900'"
                                    :max-rating="10">
                            </vueStar>
                        </div>
                        <h5 class="text-center titleConfigs mt-1">{{movie.title}}</h5>
                    </div>
                </router-link>
            </div>
        </div>
        <paginations :page="page"></paginations>
    </div>
</template>

<script>
    import vueStar from 'vue-star-rating'
    import paginations from './home-paginate'

    export default {
        name: "preview-pagination",
        data() {
            return {
                starSize: 20,
                page: 1
            }
        },
        components: {
            vueStar,
            paginations,
        },
        methods:{ //
            paginate(page) {
                this.$store.dispatch("getPaginationMovies", page)
            }
        },
        created() {
            this.$store.dispatch("getPaginationMovies")
            this.$root.$on('change_page', page => {
                this.page = page
            })
        },
        computed: {
            movies() {
                return this.$store.getters.getMovies
            },
            totalPages() {
                return this.$store.state.homePage.totalPages
            }
        },
    }
</script>

<style lang="scss" scoped>
    /deep/ .pagination {
        .page-item.active {
            .page-link {
                background-color: $main-color;
            }
        }

        a {
            color: $main-color;
        }

        .page-link {
            border: none;
            box-shadow: none;
            background-color: transparent;
        }

        .page-link:hover {
            background-color: #e9ecef;
        }
    }

    .movieLayer {
        .info-box {
            background-color: rgba(33, 33, 33, .82);
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            padding: 10px;
            transition: all .3s ease;
            opacity: 0;
            z-index: 1;

            .movieTitle {
                font-size: 20px;
                font-weight: normal;
            }

            ul {
                list-style: none;
                padding-left: 0px;
            }

            .averageCircle {
                background-color: $main-color;
                width: 35px;
                height: 35px;
                font-weight: bold;
                font-family: $Web-Font;
                align-items: center;
                justify-content: center;
            }
        }

        .movieImage {
            transition: all .5s ease 0s;
        }
    }

    .movieLayer:hover {
        .info-box {
            opacity: 1;
        }

        .movieImage {
            transform: scale(1.5);
        }
    }

    .titleConfigs {
        font-weight: bold;
        height: 60px;
        font-size: 16px;
    }
</style>