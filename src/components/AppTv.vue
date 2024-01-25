<script>
import axios from 'axios';
import { store } from '../store';

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
  <div class="bgpage">
    <div class="container">
      <div class="maincontent" > 
        <div class="card" v-for="(serie,index) in store.series" key="index"> 
          <div>
            <h3 >
              {{ serie.name }}
            </h3>
          </div>   
          <div class="infomain">
            <h4 >
              {{ serie.original_name }}
            </h4>
            <h4>
              {{ serie.original_language }}
            </h4>
            <h5>
              {{ serie.vote_average }}
            </h5>
          </div>
        </div>   
      </div>
    </div>
  </div>

  </div>
</template>

<style lang="scss" scoped>
</style>
