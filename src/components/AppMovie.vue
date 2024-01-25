<script>
import { store } from '../store';
import axios from 'axios';
// import itimg from '../img/it.png'
// import enimg from '../img/en.png'


export default {
    data() {
        return {
          store,
          flags: ["it","en","fr","de","es"],
        };
        
    },
    // computed:{
      // flagExist(number){
      //   return 1 == number;
      //   // return this.flags.includes(lang);
      // }
    // },
    methods: {
    //    flagExist(lang){
    //   return this.flags.includes(lang);
    // },
    changeimgflag(lang){
      if(lang=='en'){
        return 'GB';
      }else if(lang=='ja'){
        return 'JP';
      }else{
        return lang.toUpperCase();
      }
      // if(lang=='it'){
      //   return itimg;
      // }else if(lang=='en'){
      //   return enimg;
      // }else{
      //   return ''
      // }
    }

    }
}
</script>

<template>

  <div class="bgpage">
    <div class="container">
      <div class="maincontent" > 
        <div class="card" v-for="(movie,index) in store.movies" key="index"> 
          <div>
            <div>
              <img :src="`http://image.tmdb.org/t/p/w1920/${movie.backdrop_path}`" alt="">
            </div>
            <h3 >
              {{ movie.title }}
            </h3>
          </div>   
          <div class="infomain">
            <h4 >
              {{ movie.original_title }}
            </h4>
            <div class="conteiner_img_api">
              <img :src="`https://flagsapi.com/${changeimgflag(movie.original_language)}/flat/64.png`">
              <!-- <img v-if="flagExist(movie.original_language)" :src="changeimgflag(movie.original_language)" alt=""> -->
               <span>{{ movie.original_language }}</span>
            </div>
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
.conteiner_img_api{
  width: 50px;
}
</style>
