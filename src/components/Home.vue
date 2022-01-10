<template>    
    <section class="home-wrp">
      <div class="hero-wrp">
        <img src="../assets/bit.jpg">
        <div class="mission-wrp d-flex">
          <h2 class="mission-1 d-flex justify-content-center"> Empower Each Other </h2> <br> 
           <h1 class="mission2">  With Knowledge of Crypto </h1>
        </div>
      </div>
    </section>
</template>

<script>
import AboutMe from '../views/About.vue'
import image from "../assets/bit.jpg"
export default {
  name: 'Home',
  components: {
    AboutMe,
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
.home-wrp{
  height: 100%;


}
.hero-wrp{
  max-width: 100%;
  
  

  

} 

.hero-wrp img{
object-fit: cover;
width: 100%;
position: relative;
opacity: 0.2;
}
.mission-wrp{
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  top:40%;
  left: 40%;

}
.hero-wrp h2{
  font-weight: 400;
  font-family: 'PT Serif', serif;

  
}
.hero-wrp h1{
font-weight: 700;
 font-family: 'PT Serif', serif;
 
}
.mission-1{


}
.mission-2{
 
  
}
</style>
