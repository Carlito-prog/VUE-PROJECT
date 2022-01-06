<template>    
    <section>
      <div v-for="person in sentData" :key="person.id">
          <h2> {{person.fullName}} </h2>
          <h5> {{person.title}} </h5>
          <img :src="person.imageUrl" >
          <router-link 
          to="/aboutme/`${person.id}`"
          > About Me 
          </router-link>
      </div>
    </section>
</template>

<script>
import AboutMe from '../views/About.vue'

export default {
  name: 'HelloWorld',
  components: {
    AboutMe
    },
  props: {
    sentData: Array,
  },
   async mounted (){
    // await console.log(this.sentData)
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
