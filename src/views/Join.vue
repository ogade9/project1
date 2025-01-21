<script setup>
import { useRouter } from 'vue-router';
import { RouterLink } from 'vue-router';
import Header from '../components/Header.vue';
import {ref} from 'vue'

const firstName= ref('');
const lastName=ref('');
const email=ref('');
const username = ref('');
const password = ref('');
const confirmPassword=ref('');
const router=useRouter();

const loginFunc= ()=>{

  if(!firstName.value||!lastName.value||!email.value||!username.value||!password.value||!confirmPassword.value){
    alert("Please fill in all fields!");
    return;

  }
  if(password.value!==confirmPassword.value){
    alert("Passwords don't match!");
    return;

  }
  let joinObj = {
    firstname: firstName.value,
    lastName:lastName.value,
    email:email.value,
    username:username.value,
    password:password.value,
    confirmPassword:confirmPassword.value

  }

  let joinValues= JSON.stringify(joinObj);
  localStorage.setItem("joinObj",joinValues);
  alert("You have successfully joined!");
  router.push('/SignIn');
}

</script>

<template>
  <Header>
    <nav>

      <RouterLink to="/SignIn" class="link">Sign In</RouterLink>
    </nav>
  </Header>

    <form class="SignInForm" @submit.prevent="loginFunc">
    <div class="Block">
      <fieldset class="formfieldset">

      <legend class="formLegend">First Name</legend>
      <input class="formInput" type="text"  v-model="firstName">


      </fieldset>
      <fieldset class="formfieldset">

        <legend class="formLegend">Last Name</legend>
        <input class="formInput" type="text"  v-model="lastName">


      </fieldset>
      <fieldset class="formfieldset">

        <legend class="formLegend">Email Name</legend>
        <input class="formInput" type="email"  v-model="email">

      </fieldset>
      <fieldset class="formfieldset">

        <legend class="formLegend">User Name</legend>
        <input class="formInput" type="text"  v-model="username">


      </fieldset>

      <fieldset class="formfieldset">

        <legend class="formLegend">Password</legend>
        <input class="formInput" type="password"  v-model="password">


      </fieldset>
      <fieldset class="formfieldset">

        <legend class="formLegend">Confirm Password</legend>
        <input class="formInput" type="password"  v-model="confirmPassword">


      </fieldset>

      <input class="btn" type="submit" value="Join">
    </div>


  </form>

</template>
<style scoped>


</style>


