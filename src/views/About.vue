<template>
  <section>
     <TheNavigation/>
       <div class="about">
       <h1>This is an about page</h1>
      </div>
  </section>
</template>
<script>
import TheNavigation from "../components/TheNavigation.vue"
export default {
  name: "About",
  components: {
    TheNavigation,
  }
}
</script>
