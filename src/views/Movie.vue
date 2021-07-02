<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-8">
                <moviePlayer :movie="movie" />
            </div>
            <div class="col-12 col-md-4">
                <topMovies />
            </div>
        </div>
    </div>
</template>

<script>
    import moviePlayer from '@/components/widgets/movie-player'
    import topMovies from '@/components/widgets/top-movies-widget'
    export default {
        name: "Movies",
        components:{
            moviePlayer,
            topMovies
        },
        watch: {
            $route(to, from) {
                this.getMovie(to.params.id)
            }
        },
        computed: {
            movie() {
                return this.$store.getters.getMovie
            }
        },
        methods: {
            getMovie($id) {
                this.$store.dispatch('getMovieById', $id)
            }
        },
        created() {
            this.getMovie(this.$route.params.id)
        }
    }
</script>