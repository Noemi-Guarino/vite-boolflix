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
    },
    Movieimg(img){
      let linkImg = 'http://image.tmdb.org/t/p/w342/';
      linkImg += img;
      return linkImg;
    }

    }
}
</script>

<template>

  <!-- movie -->
  <div class="container">
    <div class="maincontent" > 
      <div class="card" v-for="(movie,index) in store.movies" key="index"> 
        <div class="top_card">
          <div class="conteiner_img_seriesandmovie">
            <img :src="`http://image.tmdb.org/t/p/${Movieimg(movie.poster_path)}`" alt="">
          </div>
          <h2>
            {{ movie.title }}
          </h2>
        </div>   
        <div class="infomain_card">
          <h4 >
            {{ movie.original_title }}
          </h4>
          <div class="conteiner_img_api">
            <img :src="`https://flagsapi.com/${changeimgflag(movie.original_language)}/flat/64.png`">
            <!-- <img v-if="flagExist(movie.original_language)" :src="changeimgflag(movie.original_language)" alt=""> -->
             <!-- <span>{{ movie.original_language }}</span> -->
          </div>
          <span>Voto</span>
          <span>
            <i v-for="n in 5" class="fa-star" 
            :class="{ 
            'fa-solid': n <= Math.ceil(movie.vote_average / 2), 
            'fa-regular': n > Math.ceil(movie.vote_average / 2) 
            }" style="color: #ffff00;">
            </i> 
          </span>
        </div>
      </div>
      <!-- serietv  -->
      <div class="card serie" v-for="(serie,index) in store.series" key="index"> 
        <div>
          <div class="conteiner_img_seriesandmovie">
            <img :src="`http://image.tmdb.org/t/p/w1920/${Movieimg(serie.poster_path)}`" alt="">
          </div>
          <h2>
            {{ serie.name }}
          </h2>
        </div>   
        <div class="infomain">
          <h4 >
            {{ serie.original_name }}
          </h4>
          <div class="conteiner_img_api">
            <img :src="`https://flagsapi.com/${changeimgflag(serie.original_language)}/flat/64.png`">
            <!-- <img v-if="flagExist(movie.original_language)" :src="changeimgflag(movie.original_language)" alt=""> -->
             <!-- <span>{{ movie.original_language }}</span> -->
          </div>
          <span>Voto</span>
          <span>
            <i v-for="n in 5" class="fa-star" 
            :class="{ 
            'fa-solid': n <= Math.ceil(serie.vote_average / 2), 
            'fa-regular': n > Math.ceil(serie.vote_average / 2) 
            }" style="color: #ffff00;">
            </i> 
          </span>
        </div>
      </div>   
    </div>
  </div>

</template>

<style lang="scss" scoped>
</style>
