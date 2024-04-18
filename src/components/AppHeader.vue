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
                this.store.search = ''
                console.log("Film:",this.store.movies);
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
            this.store.search = ''
            console.log("Serie:",this.store.series);
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
              <div class="nav_bar">
                <nav>
                  <ul>
                    <li>Home</li>
                    <li>Serie Tv</li>
                    <li>Film</li>
                    <li>Nuovi e popolari</li>
                    <li>la mia lista</li>
                  </ul>
                </nav>
              </div>
              <div>
                <input v-model="store.search" @keyup.enter="searchbutton" type="text" >
                <button  class="button" type="button" @click="searchbutton">
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
  padding: 10px;
}

.header_container{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1{
  color: red;
  font-size: 3em;
}

  ul{
    list-style: none;
    li{
      color: red;
      display: inline-block;
      margin: 5px;
    }
  }



input[type=text] {
  border: 2px solid red;
  border-radius: 4px;
  background-color: rgb(35, 34, 34);
  padding: 15px;
  margin-right: 5px;
  color: white;
}

.button {
  border: none;
  background-color: black;
  color: red;
  border: 2px solid red;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s; 
  cursor: pointer;
}

.button:hover {
  background-color: red;
  color: white;
}

</style>
