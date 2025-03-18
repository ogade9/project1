<script setup>
import { ref, defineProps, onMounted } from "vue";

const props = defineProps({
  userId: String, // The recipient's userId
});

const message = ref([]);
const successMessage = ref("");
const errorMessage = ref("");

async function sendMessage(event) {
  event.preventDefault();

  if (!message.value.trim()) {
    errorMessage.value = "Message cannot be empty.";
    return;
  }

  const token = localStorage.getItem("token");
  if (!token) {
    errorMessage.value = "You must be logged in to send messages.";
    return;
  }

  const serverUrl = `https://hap-app-api.azurewebsites.net/message/${props.userId}`;
  const payload = { text: message.value.trim() };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  };

  try {
    const response = await fetch(serverUrl, options);
    const data = await response.json();

    if (response.ok) {
      successMessage.value = "Message sent successfully!";
      message.value = ""; // Clear input
      errorMessage.value = "";
    } else {
      errorMessage.value = `Error: ${data.message || "Failed to send message"}`;
    }
  } catch (error) {
    errorMessage.value = "Network error, please try again later.";
  }
}

</script>

<template>

  <div class="message-container">
    <h3>Send a Private Message</h3>
    <form  @submit="sendMessage">
      <textarea
        v-model="message"
        placeholder="Type your message..."
        maxlength="280"
        required
      ></textarea>

      <button type="submit">Send</button>

    </form>



    <p v-if="successMessage" class="success">{{ successMessage }}</p>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<style scoped>
.message-container {
  width: 100%;
  max-width: 400px;
  height: 100px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #f9f9f9;


}


textarea {
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: -70px;

}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

}

button:hover {
  background-color: #0056b3;
}

.success {
  color: green;
  margin-top: 10px;
}

.error {
  color: red;
  margin-top: 10px;
}
</style>
