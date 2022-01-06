<template>
    <nav> 
        <router-link to='/'>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVN6yYONJ6MtE1FoYLRM_IhMqWdTMR0C986Q&usqp=CAU" width="80" height="60">
        </router-link>
         <router-link to='/login'>
         Login
        </router-link>
        <router-link to="/about">
        About
        </router-link>
    </nav>
</template>
<script>
export default {
    name: "TheNavigation"
}
</script>