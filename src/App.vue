<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import axios from 'axios';
import { store } from './store';


export default {
    data() {
        return {
          store,
        };
    },
    components: {
        AppHeader,
        AppMain,
        AppFooter
    },  
    methods: {

    },
      created() {
          axios
             .get(this.store.Urlmovie,{
              params:{
                api_key:this.store.apiKey,
                query:'rick',
              }
             })
             .then((response) => {
                 // console.log(response.data);
                 // this.cards.push(response.data);
                 console.log('movie',response);
             });
          axios
           .get(this.store.Urlserie,{
            params:{
              api_key:this.store.apiKey,
              query:'rick',
            }
           })
           .then((response) => {
               // console.log(response.data);
               // this.cards.push(response.data);
               console.log('serietv',response);
           });
           }
   }
          
</script>

<template>
  <div>
    <AppHeader />
    <AppMain />
    <AppFooter />
  </div>
</template>

<style lang="scss">
@use "assets/scss/main" as *;
@import "assets/scss/partials/reset";
</style>
