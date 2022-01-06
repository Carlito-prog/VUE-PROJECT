<template>
    <section class="login-sec ">
        <div class="img_wrp">
            <img src="https://images.unsplash.com/photo-1640229606863-33199b131cc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2786&q=80" >
        </div>
        <main class="form-wrp pl-8 mt-3" >
                <section class="d-flex 
                flex-column align-items-center" >
                    <div class=" logo-wrp d-flex p-2"> 
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVN6yYONJ6MtE1FoYLRM_IhMqWdTMR0C986Q&usqp=CAU">
                    <h3 > Crypto World </h3>
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
                        <div class="row my-4">
                            <div class="col-4" >
                                <img src="https://img.icons8.com/fluency/344/facebook.png"  width="50" height="50">
                            </div>
                            <div class="col-4">
                                <img src="https://img.icons8.com/color/344/google-logo.png"  width="50" height="50">
                            </div>
                            <div class="col-4">
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
    .img_wrp img{
    object-fit: cover;
    max-width: 100%;
    max-height: 100%;
    border-radius: 10px;
        
    }
    .form-wrp{
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
    
    
    }
    .input-wrp{
        padding-top: 20px;
    }
    .logo-wrp{
        margin-right: 20px;
    }
    .logo-wrp img {
        height: 80px;
        width: 80px;
         
    }
    .logo-wrp h3 {
        display: flex;
        align-items: center;
       
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