<script setup>
import Header from "../components/Header.vue";
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";

const router = useRouter();
const firstName = ref("");

//const logOut= ref('');



onMounted(() => {
  const storedInfo = localStorage.getItem("signInValues");
  if (storedInfo) {
    const loginName = JSON.parse(storedInfo);
    firstName.value = loginName.username;
  }
});

function signOut(event) {
  event.preventDefault();

  localStorage.removeItem("signInValues");
  alert("You have been successfully logged out");

  router.push("/");
}
/*function greeting(){

}*/
</script>

<template>
  <Header>
    <nav>
      <a @click="signOut" class="link">Log Out</a>
    </nav>
  </Header>

  <h1 class="container">WELCOME, {{ firstName }}!</h1>
</template>

<style scoped></style>
