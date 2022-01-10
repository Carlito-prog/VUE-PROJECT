<template>
<main class="main">
  <router-view/>
</main>
</template>
<script>

import TheNavigation from "./components/TheNavigation.vue";

export default {
  components: {
    TheNavigation,
  }

}
</script>

<style>
#app {
  font-family: 'Heebo', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
background-color: #ffffff;
background-image: linear-gradient(0deg, #ffffff 0%, #efe7fb 50%, #ffffff 100%);


  
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
