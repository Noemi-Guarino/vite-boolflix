<script>
import axios from 'axios';
import { store } from '../store';

export default {
    data() {
        return {
          store,
        };
    },
    props:{

    },
    methods: {

    }
}
</script>

<template>
  <div>
    <main>
        <div>
          <div>
            <div>
              <div>
                <img src="" alt="">
              </div>
              <div>
                <h3 v-for="(movie,index) in movies">
                  {{ movie.title }}
                </h3>
              </div>
            </div>
          </div>
        </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
</style>
