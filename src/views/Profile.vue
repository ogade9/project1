<script setup>
import { useRouter } from "vue-router";
import { ref, onMounted, useTemplateRef } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
// import { RouterView } from 'vue-router';
import Modal from "../components/Modal.vue";
library.add(faPen);

const router = useRouter();
const userName = ref("");
const firstName = ref("");
const lastName = ref("");
const email = ref("");
const password = ref("");

const message = ref("");
const newuserName = ref("");
const newfirstName = ref("");
const newlastName = ref("");
const newEmail = ref("");
const newPassword = ref("");
const modal = useTemplateRef("name-modal");

//userName.value=JSON.parse(localStorage.getItem("key"))
onMounted(async () => {
  const token = localStorage.getItem("token");
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

  firstName.value = data.firstName;
  // firstName.value = data.firstName || "Guest";
  lastName.value = data.lastName || "Unknown";
  userName.value = data.userName || "Guest";
  email.value = data.email || "Not provided";
  // password.value = data.password;
  localStorage.setItem("lastName", JSON.stringify({ lastName: data.lastName }));
  localStorage.setItem(
    "firstName",
    JSON.stringify({ firstName: data.firstName })
  );
  localStorage.setItem("email", JSON.stringify({ email: data.email }));
  localStorage.setItem("password", JSON.stringify({ password: data.password }));


});

async function edit() {
  const newData = {
    email: newEmail.value,
    password: newPassword.value,
    lastName: newlastName.value,
    firstName: newfirstName.value,
    userName: newuserName.value,
  };
  console.log("clicked");

  const token = localStorage.getItem("token");

  const serverUrl = "https://hap-app-api.azurewebsites.net/user";
  const options = {
    method: "PATCH",
    headers: {

      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      },
    body: JSON.stringify(newData),
  };

  const response = await fetch(serverUrl, options);
  const data = await response.json();
  if (response.status == 200) {
    console.log("ok");
    firstName.value = newfirstName.value;
    lastName.value = newlastName.value;
    userName.value = newuserName.value;
    email.value = newEmail.value;
    password.value = newPassword.value;


    console.log(data);

    localStorage.setItem(
      "lastName",
      JSON.stringify({ lastName: newlastName.value })
    );
    console.log(localStorage.getItem(lastName));
    localStorage.setItem(
      "firstName",
      JSON.stringify({ firstName: newfirstName.value })
    );
    localStorage.setItem(
      "userName",
      JSON.stringify({ userName: newuserName.value })
    );
    localStorage.setItem("email", JSON.stringify({ email: newEmail.value }));
    localStorage.setItem(
      "password",
      JSON.stringify({ password: newPassword.value })
    );
  } else {
    console.log("not ok");
  }
}
function cancel(e) {
  message.value = "Edit cancelled ";
  modal.value.close(e);
}
</script>

<template>
  <div class="flex justify-center align-center">
    <h1 class="primary-heading">
      PROFILE
      <font-awesome-icon
        :icon="['fas', 'pen']"
        class="pen"
        @click="modal.open()"
      />
    </h1>

    <p><strong>Username:</strong> {{ userName }}</p>
    <p><strong>First Name:</strong> {{ firstName }}</p>
    <p><strong>Last Name:</strong> {{ lastName }}</p>
    <p><strong>Email:</strong> {{ email }}</p>

    <button class="btn-menu" @click="router.back()">Menu</button>
  </div>
  <Modal ref="name-modal">
    <template #main>
      <form class="form">
        <p>
          <strong>Username:</strong>
          <input v-model="newuserName" type="text" />
        </p>
        <p>
          <strong>First Name:</strong>
          <input v-model="newfirstName" type="text" />
        </p>
        <p>
          <strong>Last Name:</strong>
          <input v-model="newlastName" type="text" />
        </p>
        <p>
          <strong>Email:</strong>
          <input v-model="newEmail" type="email" pattern="[^@\s]+@[^@\s]+" />
        </p>
        <p>
          <strong>Password:</strong>
          <input v-model="newPassword" type="password" minlength="8" />
        </p>
      </form>
    </template>
    <template #footer>
      <div class="modal-btns">
        <button class="btn-menu" @click.stop="cancel">Cancel</button>
        <button class="btn-menu" @click.stop="edit">Save</button>
      </div>
      <div v-bind:ref="message"></div>
    </template>
  </Modal>
</template>
<style></style>
