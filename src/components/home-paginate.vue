<template>
    <nav aria-label="Page navigation example">
        <Paginate
            v-model="pageCount"
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
        props: {
            page: {
                required: true
            }
        },
        watch: {
            page(val) {
                this.paginate(val)
            }
        },
        methods: {
            paginate(page) {
                this.$store.dispatch("getPaginationMovies", page)
            }
        },
        computed: {
            totalPages() {
                return this.$store.state.homePage.totalPages
            },
            pageCount: {
                get() {
                    return this.page
                },
                set(val) {
                    this.$root.$emit('change_page', val)
                }
            }
        }
    }
</script>