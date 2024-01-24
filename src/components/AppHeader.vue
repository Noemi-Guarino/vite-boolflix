<script>
export default {
    data() {
        return {
          
        };
    },
    methods: {

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
                  <form action="" @submit.prevent="searchMovie">
                    <input type="text">
                    <button>
                      Cerca
                    </button>
                  </form>
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
</style>
