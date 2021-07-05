<template>
  <section>
    <div class="container">
      <div class="row search-results-wrapper mb-5">

          <div class="col-12 col-md-5 search-results-wrapper-item" v-for="movie in movies.results" >
            <router-link :to="`/movie/${movie.id}`" style="display: inherit; width: 100%">
              <div class="img">
                <img src="https://cdn.pixabay.com/photo/2020/07/04/02/30/video-camera-5368055_960_720.png" v-if="movie.poster_path === null" alt="">
                <img :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`" v-else alt="">
              </div>
            <div class="description p-2 w-100">
              <div class="description-top">
                <p class="font-weight-bold mb-1"><b>{{ movie.original_title }}</b></p>
                <p class="font-14 mb-2 mt-4"><b>Всего голосов:</b> {{ movie.vote_count }}</p>
                <p class="font-14 mb-2"><b>Популярность:</b> {{ movie.popularity}}</p>
              </div>
                <div class="description-rating">
                  <vueStar
                      class="justify-content-center"
                      :rating="movie.vote_average"
                      :increment="movie.vote_average"
                      :read-only="true"
                      :show-rating="false"
                      :star-size="starSize"
                      :active-color="'#fe7900'"
                      :max-rating="10">
                  </vueStar>
                  <div class=" average_cont text-center d-none d-md-block" >
                    <span class="rounded-circle averageCircle font-weight-bold border border-white d-inline-flex">{{ movie.vote_average }}</span>
                  </div>
              </div>
              </div>
            </router-link>
          </div>
      </div>
      <searchPaginate :pageCount="movies.page_count"></searchPaginate>
    </div>
  </section>
</template>

<script>
import vueStar from 'vue-star-rating'
import searchPaginate from '../components/searchPaginate'
export default {
  name: "Search",

  data(){
      return {
          starSize:20
    }
  },
  watch: {
    $route(to, from) {
      this.$store.dispatch('getMovieBySearch',this.getInputVal);

    }
  },
  created() {
      this.$store.dispatch('getMovieBySearch',this.getInputVal);
  },
  computed:{
      movies(){
          return this.$store.getters.getSearchResults
      },
      getInputVal(){
        return this.$route.params.keyword
      },
  },
  components: {
    vueStar,
    searchPaginate
  }
}
</script>

<style scoped>
  .container{
    max-width: 1200px!important;
  }
  .averageCircle{
    background-color: #fe7900;
    color: #fff;
    font-weight: bold;
    width: 100%;
    height: 100%;
    display: flex!important;
    align-items: center;
    justify-content: center;
  }

  .search-results-wrapper-item{
    display: flex;
    background-color: #f8f8f8;
    cursor: pointer;
    margin: 15px;
    padding: unset;
  }
  .img{
    max-width: 132px;
  }
  .img img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .description-rating{
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .font-14{
    font-size: 14px;
  }
  .description{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .search-results-wrapper-item:hover{
    box-shadow: 0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%);
    transform: scale(1.03);
    transition: all .3s ease;
  }

  .average_cont{
    width: 42px;
    height: 42px;
  }
</style>