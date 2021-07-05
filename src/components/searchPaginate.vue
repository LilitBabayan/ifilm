<template>
  <nav aria-label="Page navigation example">
    <Paginate
        v-show="totalPages"
        v-model="page"
        :pageCount="totalPages || 0"
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
        :container-class="'pagination justify-content-center'">
    </Paginate>
  </nav>
</template>

<script>
import Paginate from 'vuejs-paginate'

export default {
  name: "searchPaginate",
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
    paginate(page) {
      this.$store.dispatch("getMovieBySearch", page)
    }
  },
  computed: {
    totalPages() {
      return this.$store.getters.getSearchResults.total_pages
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../sass/variables";

/deep/ .pagination {
  .page-item.active {
    .page-link {
      background-color: $main-color;
    }
  }

  a {
    color: $main-color;
  }

  .page-link {
    border: none;
    box-shadow: none;
    background-color: transparent;
  }

  .page-link:hover {
    background-color: #e9ecef;
  }
}

.movieLayer {
  .info-box {
    background-color: rgba(33, 33, 33, .82);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 10px;
    transition: all .3s ease;
    opacity: 0;
    z-index: 1;

    .movieTitle {
      font-size: 20px;
      font-weight: normal;
    }

    ul {
      list-style: none;
      padding-left: 0px;
    }

    .averageCircle {
      background-color: $main-color;
      width: 35px;
      height: 35px;
      font-weight: bold;
      font-family: $Web-Font;
      align-items: center;
      justify-content: center;
    }
  }

  .movieImage {
    transition: all .5s ease 0s;
  }
}

.movieLayer:hover {
  .info-box {
    opacity: 1;
  }

  .movieImage {
    transform: scale(1.5);
  }
}

.titleConfigs {
  font-weight: bold;
  height: 60px;
  font-size: 16px;
}
</style>