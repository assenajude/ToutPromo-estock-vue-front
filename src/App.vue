<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    name : 'App',
    methods: {
      ...mapActions({
        getAllStocks: 'stockStore/getAllStocks'
      })
    },
    components : {

    },
    created() {
      this.getAllStocks()
    }
  }

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
