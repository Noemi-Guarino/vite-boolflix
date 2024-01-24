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

  <div>
    <div>
      <div v-for="(movie,index) in store.movies" key="index">        
        <h3 >
          {{ movie.title }}
        </h3>
        <div>
          <h4 >
            {{ movie.original_title }}
          </h4>
        </div>
        <div>
          <h5>
            {{ movie.original_language }}
          </h5>
        </div>
        <div>
          <h6>
            {{ movie.vote_average }}
          </h6>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
