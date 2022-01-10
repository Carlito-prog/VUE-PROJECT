<template>
  <section>
    <TheNavigation/>
    <div class="home">
      <Home :sentData="data"/>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue'
import axios from "axios"
import TheNavigation from "../components/TheNavigation.vue"

export default {
  name: 'Landing',
  components: {
    Home,
    TheNavigation
  },
  data () {
    return {
      data: []
    }
  },
  async created () {
    try {
      const res = await axios.get("https://thronesapi.com/api/v2/Characters")
      this.data = res.data
      // console.log(this.data)
    }catch (e) {
      console.error(e)
      } 
  },
}
</script>
