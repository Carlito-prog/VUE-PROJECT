<template>
    <main>
        <section >
            <!-- <img src=""> -->
        </section>
    </main>
</template>

<script>
import axios from "axios"
export default {
  name: "AboutMe",
   props: {
    },
    data (){
        return {
            data: [],
        }
    },
    async created () {
    try {
      const res = await axios.get("https://thronesapi.com/api/v2/Characters")
      this.data = res.data
    //   console.log(this.data)
    }catch (e) {
      console.error(e)
      } 
  },
    methods: {
        handleData () {
           const filteredPerson = this.data.filter(person => person.id === parseInt(this.$route.params.id) )
         console.log(filteredPerson)
        }
    }
  
}
</script>