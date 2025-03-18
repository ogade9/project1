<script setup>
import { useRoute } from 'vue-router';
import { onMounted, useTemplateRef } from 'vue';
import { defineProps,ref } from "vue";
import MessageForm from './MessageForm.vue';

const messages= ref([])
const mymessages=ref([])
const counts=ref(0);
const props= defineProps({
  userId: String

});
const route = useRoute();
//console.log(route.query.userId)

const chats= ref('');




async function getPrivateMessage() {
  console.log("here!!")
  const token= localStorage.getItem('token');
  const serverUrl= `https://hap-app-api.azurewebsites.net/messages/${props.userId}?limit=10&after=2025-02-11T06:00:00.321Z`;
  const options={
    method:"GET",
    headers:{
      Authorization:`Bearer ${token}`
    },


  };

  let response= await fetch(serverUrl,options)

  if(response.status===200){
   messages.value = await response.json();
    console.log('got private messages')

  }
  else{
    console.log('Couldnt get response' + response.status)

  }

}
/*async function getSentMessages() {
  const token = localStorage.getItem('token');
  const serverUrl = `https://hap-app-api.azurewebsites.net/messages/?&limit=20`;
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  let response = await fetch(serverUrl, options);
    if (response.ok) {

      mymessages.value = await response.json();
      console.log(mymessages.value)
      //messages.value = data.reverse(); // Show in correct order
      console.log("Fetched sent messages:", messages.value);
    } else {
      console.error("Failed to fetch messages. Status:", response.status);
    }

}*/
async function getPrivateMessageCount() {
  console.log("Fetching private message count...");
  const token = localStorage.getItem('token');
  if (!token) {
    console.error("No token found! Please log in.");
    return;
  }

  const serverUrl = `https://hap-app-api.azurewebsites.net/messages/${props.userId}/count?after=2025-02-11T06:00:00.321Z`;
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  try {
    let response = await fetch(serverUrl, options);
    if (response.ok) {
      const data = await response.json();
      counts.value = data.count;
      console.log("Private messages count:", counts.value);
    } else {
      console.error("Failed to fetch message count. Status:", response.status);
    }
  } catch (error) {
    console.error("Network error:", error);
  }
}
onMounted(()=>{

  getPrivateMessage();
  //getSentMessages();
  getPrivateMessageCount();
});


</script>
<template>


<MessageForm  :user-id="userId"></MessageForm>

<div class="message-info">
      <h3>Message Count: {{ counts }}</h3>
      <button @click="getPrivateMessageCount">Refresh Count</button>
    </div>

    <div class="messages-container">
      <h3>Private Messages</h3>
      <ul v-if="messages.length > 0">
        <li v-for="(privateMessage, key) in messages" :key="key">
          <strong>Message:</strong> {{ privateMessage.text }}
        </li>
      </ul>
      <p v-else>No messages found.</p>
    </div>

</template>

<style>
.message-info {
  margin-top: 20px;
  background: lightgray;
  padding: 10px;
  border-radius: 5px;
}

.messages-container {
  margin-top: 20px;
  padding: 10px;
  background-color: #2e2f31;
  border-radius: 5px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 8px;
  margin-bottom: 5px;
  border-radius: 5px;
  background: rgb(128, 112, 181);
}

button {
  background: black;
  color: white;
  padding: 8px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
