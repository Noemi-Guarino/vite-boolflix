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
      searchbutton(){
      axios
             .get(this.store.Urlmovie,{
              params:{
                api_key:this.store.apiKey,
                query: this.store.search,
              }
             })
             .then((response) => {
                this.store.movies = response.data.results;
                console.log("questafilm",this.store.movies);
             });
          axios
           .get(this.store.Urlserie,{
            params:{
              api_key:this.store.apiKey,
              query:this.store.search,
            }
           })
           .then((response) => {
            this.store.series = response.data.results;
            console.log("questaserie",this.store.series);
           });
        } 
      }
    } 
    



</script>

<template>
  <div>
    <header>
        <div class="bg_header">
          <div class="container">
            <div class="header_container">
              <div>
                <h1>
                  Boolfix
                </h1>
              </div>
              <div>
                <input v-model="store.search" @keyup.enter="searchbutton" type="text" >
                <button type="button" @click="searchbutton">
                  Cerca
                </button>
              </div>
            </div>
          </div>
        </div>
    </header>
  </div>
</template>

<style lang="scss" scoped>
.bg_header{
  background-color: black;
  height: 100px;
  border:2px solid red;
}

.header_container{
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

h1{
  color: red;
}
</style>
