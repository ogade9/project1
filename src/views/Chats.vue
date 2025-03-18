<script>
import Messages from '@/components/Messages.vue';
import Scrollable from '@/components/Scrollable.vue';
import MessagesModal from '@/components/MessagesModal.vue';
import { useTemplateRef } from 'vue';
import MessageForm from '@/components/MessageForm.vue'


</script>

<template>
  <div class="liveChatBox">



    <MessageForm/>
  </div>



</template>
<style>
.liveChatBox{
  justify-content: center;
  align-items: center;
}


</style>
