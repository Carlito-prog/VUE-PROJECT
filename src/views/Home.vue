<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
   <HelloWorld :sentData="data"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from "axios"

export default {
  name: 'Home',
  components: {
    HelloWorld
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
