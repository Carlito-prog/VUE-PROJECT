<template>
    <section class="login-sec ">
        <div class="d-flex justify-content-center img_wrp">
            <img src="https://images.unsplash.com/photo-1640229606863-33199b131cc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2786&q=80" >
        </div>
        <main class="form-wrp pl-8 my-4" >
             <section class=" form-cont d-flex 
                flex-column align-items-center" >
                    <div class=" logo-wrp d-flex p-2"> 
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVN6yYONJ6MtE1FoYLRM_IhMqWdTMR0C986Q&usqp=CAU">
                    <h3 > Crypto World </h3>
                    </div>
                    <div class="mt-4 d-flex align-content-center flex-column">
                        <h2 > Welcome to Crypto </h2>
                             <hr>   
                        <h5> 
                           Come Explore The Cryto World
                      </h5>
                     </div>
                    <form @submit.prevent>
                        <div class="input-wrp mb-2">
                            <label for="username"> Username: </label>
                            <input type="text"
                            name="username"
                            placeholder="Enter Username"
                            v-model="username"
                            >
                        </div>
                        <div class="input-wrp mb-2">
                            <label  for="password"> Password: </label>
                            <input type="text"
                            name='password'
                            placeholder="Enter Password"
                            v-model="password" >
                        </div >
                        <div class=" mt-4 d-flex align-items-end">
                        <h6> Login With: </h6>
                        </div>
                        <div class="row ">
                            <div class="col-4 py-3" >
                                <img src="https://img.icons8.com/fluency/344/facebook.png"  width="50" height="50">
                            </div>
                            <div class="col-4 py-3">
                                <img src="https://img.icons8.com/color/344/google-logo.png"  width="50" height="50">
                            </div>
                            <div class="col-4 py-3">
                                <img src="https://img.icons8.com/ios-filled/344/mac-os.png"  width="50" height="50">
                                
                            </div>

                    </div>
                         <div class= "d-grid gap-2 mt-3" >
                                <button  
                                class="btn btn-primary"
                                type="button" @click="handleSubmit()">{{login ? "Log out": "Log in"}}</button>
                    </div>       
                </form>
            </section>
        </main>
    </section>
</template>

<script>
export default {
    name: "Login",
    components: {
        
    },
    data (){
        return {
            username: '',
            password: "",
            login: false
        }
    },
    methods: {
        handleSubmit(){
            // console.log("clicked")
            this.login = !this.login
            return $router.push('home')
            

        }
    },
    // created: {
    //    
    // }
}
</script>

<style scoped>
    .login-sec{
        display: flex;
        padding: 100px;
        

         }
    .img_wrp{
        flex: 1

    }
    .img_wrp{
         max-width: 600px;
        max-height: 900px;
    object-fit: cover;


    }
    .img_wrp img{
    border-radius: 10px;
    height: 90%;
    width: 100%;
   
    }
    .form-wrp{
        flex: 1;
        max-width: 600px;
        max-height: 800px;
    }
    .form-cont{
          display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: 100%;
        height: 100%;

    }
    .input-wrp{
        padding-top: 20px;
    }
    .logo-wrp{
        margin-right: 20px;
        background-color: white;
        max-height: fit-content;
    }
    .logo-wrp img {
        height: 80px;
        width: 80px;
        
         
    }
    .logo-wrp h3 {
       display: flex;
    align-items: center;
    padding-right: 20px;
       
    }
  
    form {
        display: flex;
        /* align-items: flex-start; */
        flex-direction: column;
        /* width: fit-content; */
    }
    label{
        padding-right: 8px;
    }
    button {
        
        width: 100%;

    }


    
        
</style>