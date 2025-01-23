<script setup>
import { useRouter } from 'vue-router';
import Header from '../components/Header.vue';
import {ref} from 'vue';


const username= ref('');
const password=ref('');
const router = useRouter();

const signInFunc= () =>{
  if(!username.value || !password.value){
    alert("Please fill in both fields.");
    return;
  };
  //Adding username and password to Local Storage
  let signInValues = {
  username: username.value,
  password: password.value
  };
  let signIn = JSON.stringify(signInValues)
//Since local storage can only take in strings

  localStorage.setItem("signInValues",signIn);
  console.log(localStorage)


  const savedValues = JSON.parse(localStorage.getItem("signInValues"));
  if(savedValues.username !==username.value|| savedValues.password!==password.value){
    alert("Wrong username or password");
    return;
  }

  alert("Sign-in successful!")
  router.push('/Welcome');
}







</script>

<template>
  <Header>
    <nav>
        <RouterLink to="/Join" class="link">Join</RouterLink>
    </nav>
  </Header>
  <form class="SignInForm" @submit.prevent="signInFunc">
    <div class="Block">
    <div >
      <div >
        <fieldset class="formfieldset">
          <legend class="formLegend">User Name</legend>
          <input class="formInput" type="text" id="username" v-model="username">

        </fieldset>
    </div>

    <div >
      <fieldset class="formfieldset">
        <legend class="formLegend">Password</legend>
        <input class="formInput" type="password" id="password" v-model="password">
      </fieldset>
    </div>

      <input class="btn" type="submit" value="SIGN IN" >

  </div>
  </div>
  </form>

</template>

<style scoped>








</style>
