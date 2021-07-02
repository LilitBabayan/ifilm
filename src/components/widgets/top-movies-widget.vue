<template>
    <div>
        <div class="d-flex justify-content-between mb-4">
            <h2>Top movies</h2>
            <button @click="updateRecommendations">
                <i class="fas fa-redo-alt"></i>
            </button>
        </div>
        <movie class="mb-4" v-for="(movie, key) in recommendations.movies" :key="`movie-${key}`" :movie="movie"/>
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
            recommendations() {
                return this.$store.getters.getRecommendations
            },
        },
        methods: {
            getRecommendations(page) {
                this.$store.dispatch('getRecommendations', page)
            },
            updateRecommendations() {
                let randomPage = Math.floor(Math.random() * this.recommendations.totalPages + 1)
                this.getRecommendations(randomPage)
            }
        },
        created() {
            this.getRecommendations()
        }
    }
</script>