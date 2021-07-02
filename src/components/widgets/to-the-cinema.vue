<template>
    <div>
        <div class="d-flex justify-content-between mb-4">
            <h2>To The Cinema</h2>
        </div>
        <movie class="mb-4" v-for="(movie, key) in cinemas.movies" :key="`movie-${key}`" :movie="movie"/>
    </div>
</template>

<script>
    import movie from './movie'
    export default {
        name: "top-movies-widget",
        components: {
            movie
        },
        computed: {
            cinemas() {
                return this.$store.getters.getCinema
            },
        },
        methods: {
            getCinemas(page) {
                page = Math.floor(Math.random() * this.cinemas.totalPages + 1)
                this.$store.dispatch('getCinemas', page)
            },
        },
        created() {
            this.getCinemas()
        }
    }
</script>