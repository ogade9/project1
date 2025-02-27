<script setup>
import { useRouter } from "vue-router";
import { RouterLink } from "vue-router";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue"
import { ref } from "vue";

const firstName = ref("");
const lastName = ref("");
const email = ref("");
const userName = ref("");
const password = ref("");
const confirmPassword=ref("");
const errorMessage=ref("")
const router = useRouter();



async function joinFunc(e) {
  e.preventDefault();
  if(password.value!=confirmPassword.value){
    errorMessage.value= "The passwords don't match! Try again"

  }

  else{

  const data = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    userName: userName.value,
    password: password.value,
  };


  const serverUrl = "https://hap-app-api.azurewebsites.net/user";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  let response = await fetch(serverUrl, options);

  if (response.status === 201) {
    const data = await response.json();

    console.log("Data"+ data);



    console.log("Token" + data.token)
    console.log('Email:'+ data.email)
    localStorage.setItem("userName", JSON.stringify({ userName: data.user.userName }));
    localStorage.setItem("firstName", data.firstName);

    localStorage.setItem("token", data.token)

    console.log('localStorage: '+ localStorage);
    console.log("You have successfully joined!");
    router.push("/Welcome");
  } else if (response.status === 400) {
    console.log("WRONG!!");
  }
}
}
</script>

<template>
  <Header>
    <nav>
      <RouterLink to="/SignIn" class="link">Sign In</RouterLink>
    </nav>
  </Header>

  <form class="JoinInForm" @submit.prevent="joinFunc">
    <div class="Block">
      <fieldset class="formfieldset">
        <legend class="formLegend">First Name</legend>
        <input class="formInput" type="text" v-model="firstName" required />
      </fieldset>
      <fieldset class="formfieldset">
        <legend class="formLegend">Last Name</legend>
        <input class="formInput" type="text" v-model="lastName" required/>
      </fieldset>
      <fieldset class="formfieldset">
        <legend class="formLegend">Email</legend >
        <input
          class="formInput"
          type="email"
          v-model="email"
          pattern="[^@\s]+@[^@\s]+"
          required
        />
      </fieldset>
      <fieldset class="formfieldset">
        <legend class="formLegend">User Name</legend>
        <input class="formInput" type="text" v-model="userName" required />
      </fieldset>

      <fieldset class="formfieldset">
        <legend class="formLegend">Password</legend>
        <input
          class="formInput"
          type="password"
          v-model="password"
          minlength="8"
          required
        />
      </fieldset>
      <fieldset class="formfieldset">
        <legend class="formLegend">Confirm Password</legend>
        <input
          class="formInput"
          type="password"
          v-model="confirmPassword"

          minlength="8"
          required
        />

      </fieldset>
      <div class="errorMessage" v-if="errorMessage">{{errorMessage}}</div>

      <input class="btn" type="submit" value="Join" />
    </div>
  </form>
  <Footer>

  </Footer>
</template>
<style scoped></style>
