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
    @import "../../sass/variables";

    .movieWidget{
        font-family: $Web-Font;
        transition: all .3s ease;
        .averageCircle{
            background-color: $main-color;
            color: $dark-m-tColor;
            width:35px;
            height:35px;
            font-family: $Web-Font;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        small{
            color: #00000080;
        }
    }

    .movieWidget:hover{
        box-shadow: 0 14px 28px #00000040, 0 10px 10px #00000038;
        transform: scale(1.03);
    }


</style>