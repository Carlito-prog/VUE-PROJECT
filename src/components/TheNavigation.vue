<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light"> 
        <div class="container-fluid">
            <router-link class="navbar-brand" to='/'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVN6yYONJ6MtE1FoYLRM_IhMqWdTMR0C986Q&usqp=CAU" width="80" height="60"> <strong> Crypto World </strong>
            </router-link>
        </div>
        <div class=" d-flex col-2">
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="search crypto" v-model="searchedCrypto"
                aria-label="Search"/>
                <button type="submit">
                        Go
                </button>    
            </form>
        </div>
        <div class=" col-4 d-flex justify-content-end s-link-wrp " >
            <div class="col-2">
                <router-link to="/about">
                    About
                 </router-link>
            </div>
            <div class="col-2">
                <router-link  to='/login'>
                     Login
                 </router-link>    
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    name: "TheNavigation"
}
data: () => {
    return{
        searchedCrypto: "",
    }
}
</script>
<style scoped>
button{
    border-radius: 10px;

}
a{
text-decoration: none;
color: black;
font-weight: 800;


}
</style>