<template>
    <nav aria-label="Page navigation example">
        <Paginate
            v-model="page"
            :page-count="totalPages"
            :margin-pages="0"
            :first-last-button="true"
            :first-button-text = "'«'"
            :last-button-text = "'»'"
            :prev-text="'‹'"
            :next-text="'›'"
            :page-class="'page-item'"
            :page-link-class="'page-link'"
            prev-class="page-item"
            prev-link-class="page-link"
            next-class="page-item"
            next-link-class="page-link"
            :click-handler="changePerPage"
            ref="paginate1"
            :container-class="'pagination justify-content-center'">
    </Paginate>
    </nav>
</template>

<script>
    import Paginate from 'vuejs-paginate'

    export default {
        name: "home-paginate",
        components: {
            Paginate
        },
        data() {
            return {
                page: 1
            }
        },
        watch: {
            page(val) {
                this.paginate(val)
            }
        },
        methods: {
            changePerPage(page){
                this.$refs.paginate1.selected = this.$refs.paginate2.selected = page - 1;
            },
            paginate(page) {
                this.$store.dispatch("getPaginationMovies", page)
            }
        },
        computed: {
            totalPages() {
                return this.$store.state.homePage.totalPages
            }
        }
    }
</script>