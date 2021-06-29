<template>
   <div>
       <nav aria-label="Page navigation example">
           <Paginate
                   :page-count="20"
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

       <div class="row">
           <div v-for="movie in movies" class="col-6 col-lg-4 " >
               <div>
                   <div class="position-relative">
                       <div class="position-absolute text-white p-3 info-box">
                           <h4>{{movie.title}}</h4>
                           <ul>
                               <li><span>Year:</span> {{movie.release_date}}</li>
                               <li><span>Total votes:</span> {{movie.vote_count}}</li>
                               <li><span>Popularity:</span> {{movie.vote_average}}</li>
                           </ul>
                       </div>
                       <img class="img-fluid movieImage" :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`">
                   </div>

                   <div class="mt-2">
                       <vueStar
                           class="justify-content-center"
                           :rating="5"
                           :read-only="true"
                           :show-rating="false"
                           :star-size="starSize"
                           :active-color ="'#fe7900'"
                           :max-rating="10">
                       </vueStar>
                   </div>
                   <h5 class="text-center titleConfigs mt-1">{{movie.title}}</h5>
               </div>
           </div>
       </div>
       <nav aria-label="Page navigation example">
           <Paginate
                   :page-count="20"
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
   </div>
</template>

<script>
    import vueStar from 'vue-star-rating'
    import Paginate from 'vuejs-paginate'

    export default {
        name: "preview-pagination",
        data() {
          return {
              starSize: 20,
          }
        },
        components: {
            vueStar,
            Paginate
        },
        created() {
            this.$store.dispatch("getPaginationMovies")

        },
        computed: {
            movies() {
                return this.$store.getters.getMovies
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import "../sass/variables";
   /deep/ .pagination{
       .page-item.active{
           .page-link{
               background-color: $main-color;
           }
       }
       a{
           color: $main-color;
           font-family: $Web-Font;
       }
       .page-link{
           border:none;
           box-shadow: none;
           background-color: transparent;
       }
       .page-link:hover{
           background-color:#e9ecef;
       }
   }
    .info-box {
        background-color: rgba(33,33,33,.82);
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        h4{
            font-family: $Web-Font;
            font-size: 18px;
            font-weight: normal;
        }

        ul{
            list-style: none;
            padding-left: 0px;

        }
    }
    .titleConfigs{
        font-family: $Web-Font;
        font-weight: bold;
        height: 60px;
        font-size: 16px;
    }
</style>