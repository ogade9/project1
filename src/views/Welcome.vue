<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Messages from "@/components/Messages.vue";
import Scrollable from "@/components/Scrollable.vue";
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import Navigation from "../views/Navigation.vue";
import Progress from "../views/Progress.vue";
import Live from "../views/Live.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { RouterView } from "vue-router";
library.add(faCaretDown);

const router = useRouter();
const firstName = ref("");
const userName = ref("");
const lastName = ref("");
const email = ref("");
const message= ref('');






async function signOut(event) {
  const token = localStorage.getItem("token");

  const serverUrl = "https://hap-app-api.azurewebsites.net/user/logout";
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  let response = await fetch(serverUrl, options);
  console.log("Status: " + response.status);

  if (response.status === 200) {
    localStorage.clear();
    console.log("You have been successfully logged out");

    router.push("/");
  } else {
    console.log("HTTP-Error: " + response.status);
  }
}
async function deleteFunc(e) {
  e.preventDefault();
  let result = confirm("Are you sure you want to delete your Account?");
  if (result) {
    const token = localStorage.getItem("token");
    console.log(token);

    const serverUrl = "https://hap-app-api.azurewebsites.net/user";
    const options = {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    };
    let response = await fetch(serverUrl, options);

    if (response.ok) {
      localStorage.removeItem("token");
      alert("Your account has been successfully deleted!");
      router.push("/");
    } else {
      console.log("error!!");
    }
  } else {
    console.log("Account deletion canceled!");
  }
}
async function profileFunc(event) {
  event.preventDefault();


  const token = localStorage.getItem("token");

  console.log("Token: " + token);
  console.log("Locals: " + localStorage.getItem("token"));
  const serverUrl = "https://hap-app-api.azurewebsites.net/user";
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  let response = await fetch(serverUrl, options);
  console.log("Status: " + response.status);

  if (response.status === 200) {

    console.log("Got user's data");
  } else {
    console.log("HTTP-Error: " + response.status);
  }
}

  async function postFunc(event){

    event.preventDefault();
    const messages={
      text: message.value
    };
    const token=localStorage.getItem("token");
    const serverUrl="https://hap-app-api.azurewebsites.net/message";
    const options= {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
        Authorization:`Bearer ${token}`,
      },
      body: JSON.stringify(messages),
    };
    let response = await fetch(serverUrl,options);
    if(response.status===201){

      console.log("Posted message")
      alert('message posted');

    }
    else{
      console.log("Message: "+ messages.Message);
      console.log(response.status);
    }
  }
</script>

<template>
  <div class="view">
    <Header>
      <nav>
        <a @click.prevent="signOut" class="link">Log Out</a>
      </nav>
      <div class="dropdown">
        <font-awesome-icon :icon="['fas', 'caret-down']" />
        <div class="content">
          <div @click="deleteFunc">
            <a>DELETE</a>
          </div>
          <div>
            <RouterLink to="/welcome/profile"><a>PROFILE</a></RouterLink>
          </div>
        </div>
      </div>
    </Header>

    <!--<h1 class="container">WELCOME, {{ firstName }}!</h1>-->
    <div class="main-text">
      <form @submit.prevent="postFunc">
        <input  type="text"  maxlength="280" v-model="message" required>
        <input type="submit" class="btn-menu" value="Enter">
      </form>
    </div>
    
    <main>

      <RouterView name="leftSidebar" class="column"> </RouterView>
      <RouterView name="focus" class="column"> </RouterView>
      <RouterView name="rightSidebar" class="column"> </RouterView>

      <RouterView name="middlePanel"> </RouterView>

    </main>

    <Footer> </Footer>

  </div>
</template>

<style scoped></style>
