<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-8">
                <previewPagination></previewPagination>
            </div>

            <div class="col-12 col-md-4">
                <topMovies />
            </div>
        </div>
    </div>
</template>

<script>
    import previewPagination from '@/components/preview-pagination'
    import topMovies from '@/components/widgets/top-movies-widget'
    export default {
        name: 'Home',
        components: {
            previewPagination,
            topMovies
        }
    }
</script>