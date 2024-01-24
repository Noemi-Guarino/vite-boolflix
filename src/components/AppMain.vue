<script>
import axios from 'axios';
import { store } from '../store';
import AppMovie from './AppMovie.vue';
import AppTv from './AppTv.vue';

export default {
    data() {
        return {
          store,
        };
    },
    methods: {

    },
    components: {
        AppMovie,
        AppTv,
    },
}
</script>

<template>
  <div>
    <AppMovie/>
    <AppTv/>

  </div>
</template>

<style lang="scss" scoped>
</style>
