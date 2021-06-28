<template>
   <div>
       <nav aria-label="Page navigation example">
           <ul class="pagination justify-content-center">
               <li class="page-item"><a class="page-link" href="#">Previous</a></li>
               <li class="page-item"><a class="page-link" href="#">1</a></li>
               <li class="page-item"><a class="page-link" href="#">2</a></li>
               <li class="page-item"><a class="page-link" href="#">3</a></li>
               <li class="page-item"><a class="page-link" href="#">Next</a></li>
           </ul>
       </nav>
       <div class="row">
           <div v-for="movie in movies" class="col-6 col-lg-4">
               <div>
                   <div class="position-relative">
                       <div class="position-absolute info-box text-white p-3">
                           <h4>{{movie.name}}</h4>
                           <ul>
                               <li><span>Year:</span> {{movie.year}}</li>
                               <li><span>Total votes:</span> {{movie.votes}}</li>
                               <li><span>Popularity:</span> {{movie.votes}}</li>
                           </ul>
                       </div>

                       <img class="img-fluid" :src="movie.image">
                   </div>

                   <div class="mt-2">
                       <vueStar
                           class="justify-content-center"
                           :rating="5"
                           :read-only="true"
                           :show-rating="false"
                           :star-size="starSize"
                           :max-rating="10">
                       </vueStar>
                   </div>
                   <h5 class="text-center mt-1 fw-normal">{{movie.name}}</h5>
               </div>
           </div>
       </div>
       <nav aria-label="Page navigation example">
           <ul class="pagination justify-content-center">
               <li class="page-item"><a class="page-link" href="#">Previous</a></li>
               <li class="page-item"><a class="page-link" href="#">1</a></li>
               <li class="page-item"><a class="page-link" href="#">2</a></li>
               <li class="page-item"><a class="page-link" href="#">3</a></li>
               <li class="page-item"><a class="page-link" href="#">Next</a></li>
           </ul>
       </nav>
   </div>
</template>

<script>
    import vueStar from 'vue-star-rating'

    export default {
        name: "preview-pagination",
        data() {
          return {
              starSize: 25,
          }
        },
        components: {
            vueStar
        },
        computed: {
            movies() {
                return this.$store.getters.getMovies
            }
        },
    }
</script>

<style lang="scss" scoped>
    .info-box {
        background-color: rgba(33,33,33,.82);
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>