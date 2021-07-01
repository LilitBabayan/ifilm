<template>
    <div>
        <div class="d-flex">
            <div class="w-25">
                <img class="img-fluid" :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`">
            </div>
            <div class="w-75">
                <h4>{{movie.title}}</h4>
                <ul>
                    <li>
                        <span>Year:</span> 2013
                    </li>
                    <li>
                        <span>Total votes:</span> 239
                    </li>
                </ul>
                <div>
                    <span>7.3</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "movie",
        props: {
            movie: {
                required: true
            }
        }
    }
</script>
