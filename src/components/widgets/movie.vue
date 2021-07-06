<template>
    <div>
        <router-link :to="`/movie/${movie.id}`">
            <div class="d-flex movieWidget widgetColor justify-content-between" >
                <div class="w-25">
                    <img class="img-fluid" :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`">
                </div>
                <div class="w-75 p-2">
                    <div class="movieList">
                        <p class="fw-bold m-0 d-inline" style="font-size:14px">{{movie.title}}</p>
                        <ul class="p-0 mb-0">
                            <li class="list-inline">
                                <small>
                                    <span class="small">Year: <strong>{{movie.release_date}}</strong></span>
                                </small>
                            </li>
                            <li class="list-inline">
                                <small>
                                    <span class="small">Total Votes: <strong>{{movie.vote_count}}</strong></span>
                                </small>
                            </li>
                        </ul>
                    </div>
                    <div class="d-flex justify-content-end">
                        <span class="rounded-circle averageCircle font-weight-bold border border-white">{{movie.vote_average}}</span>
                    </div>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "movie",
        props: {
            movie: {
                required: true
            }
        },
    }
</script>
<style lang="scss" scoped>
    small{
        color: #00000080;
    }
</style>