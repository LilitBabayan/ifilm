<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-8">
                <moviePlayer />
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
    }
</script>

<style scoped>

</style>