<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-8" style="border: 1px solid green">
                <previewPagination></previewPagination>
            </div>

            <div class="col-12 col-md-6 col-lg-4" style="border: 1px solid red">

            </div>
        </div>
    </div>
</template>

<script>
    import previewPagination from '@/components/preview-pagination'
    export default {
        name: 'Home',
        components: {
            previewPagination
        }
    }
</script>