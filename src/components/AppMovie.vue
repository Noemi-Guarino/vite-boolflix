<script>
import { store } from '../store';
import axios from 'axios';

export default {
    data() {
        return {
          store,
        };
    },
    methods: {

    }
}
</script>

<template>

  <div class="bgmain">
    <div class="container">
      <div class="maincontent" > 
        <div class="card" v-for="(movie,index) in store.movies" key="index"> 
          <div>
            <h3 >
              {{ movie.title }}
            </h3>
          </div>   
          <div class="infomain">
            <h4 >
              {{ movie.original_title }}
            </h4>
            <h4>
              {{ movie.original_language }}
            </h4>
            <h5>
              {{ movie.vote_average }}
            </h5>
          </div>
        </div>   
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
