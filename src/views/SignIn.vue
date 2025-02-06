<script setup>
import { useRouter } from 'vue-router';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import {ref} from 'vue';


const email= ref('');
const password=ref('');
const router = useRouter();
const errorMessageSignin=ref('');

async function signIn(e){




const data={email:email.value,password:password.value};

const serverUrl = 'https://hap-app-api.azurewebsites.net/user/login'

const options= {
  method:"POST",
  headers:{
    "Content-Type": "application/json",
  },
  body:JSON.stringify(data),
}

let response= await fetch(serverUrl,options)

if (response.status === 200) {
		const data = await response.json()

		localStorage.setItem("token", data.token)
    localStorage.setItem("userName", JSON.stringify({ userName: data.user.userName }));

		console.log("Token:" + data.token)
    //console.log(localStorage.getItem("userName"));
    console.log("API Response:", data);
    //email.value= data.firstName;






  console.log("Sign-in successful!")
  console.log(localStorage.getItem("token"));
  router.push('/Welcome');
  }else if (response.status === 400) {
    errorMessageSignin.value= "Invalid email or password!"
		//alert("Invalid credentials!")
		console.log("Invalid email or password.")
	}
}





</script>

<template>
  <Header>
    <nav>
        <RouterLink to="/Join" class="link">Join</RouterLink>
    </nav>
  </Header>
  <form class="SignInForm" @submit.prevent="signIn">
    <div class="Block">
    <div >
      <div >
        <fieldset class="formfieldset">
          <legend class="formLegend">Email</legend>
          <input class="formInput" type="email" id="email" v-model="email" required>

        </fieldset>
    </div>

    <div >
      <fieldset class="formfieldset">
        <legend class="formLegend">Password</legend>
        <input class="formInput" type="password" id="password" v-model="password" required>
      </fieldset>

    </div>
    <div class="errorMessage" v-if="errorMessageSignin">{{errorMessageSignin}}</div>

      <input class="btn" type="submit" value="SIGN IN" >

  </div>
  </div>
  </form>

  <Footer>


  </Footer>

</template>

<style scoped>









</style>
