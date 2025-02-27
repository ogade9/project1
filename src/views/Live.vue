<script setup>

import Messages from '@/components/Messages.vue';
import Scrollable from '@/components/Scrollable.vue';
import MessagesModal from '@/components/MessagesModal.vue';
import { useTemplateRef } from 'vue';


</script>

<template>
  <div class="liveChatBox">
    <h1>CHATS</h1>


    <Scrollable/>
  </div>



</template>
<style>
.liveChatBox{
  justify-content: center;
  align-items: center;
}


</style>


