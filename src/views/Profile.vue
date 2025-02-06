<script setup>
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";


const router = useRouter();
const userName=ref('');
const firstName=ref("");
const lastName=ref('');
const email=ref('');

//userName.value=JSON.parse(localStorage.getItem("key"))
onMounted(async () => {
  const token = localStorage.getItem("token");
  firstName.value=localStorage.getItem('key')
  console.log('Firstname'+ firstName.value);

  if (!token) {
    console.log("No token found in localStorage.");
    return;
  }

  const serverUrl = "https://hap-app-api.azurewebsites.net/user";
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };


    const response = await fetch(serverUrl, options);


    const data = await response.json();
    firstName.value = data.firstName || "Guest";
    lastName.value = data.lastName || "Unknown";
    userName.value = data.userName || "Guest";
    email.value = data.email || "Not provided";

    console.log("User data retrieved:", data);

});
</script>

<template>
    <div class="flex justify-center align-center">
        <h1 class="primary-heading">PROFILE</h1>

      <p><strong>Username:</strong> {{ userName }}</p>
      <p><strong>First Name:</strong> {{ firstName }}</p>
      <p><strong>Last Name:</strong> {{ lastName }}</p>
      <p><strong>Email:</strong> {{ email }}</p>

      <button class="btn-menu" @click="router.back()">Menu</button>
    </div>

</template>
<style>
</style>
