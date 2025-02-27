<script setup>
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUser as faUserRegular } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import MessagesModal from "./MessagesModal.vue";
import {ref, useTemplateRef} from "vue";

library.add(faUser,faUserRegular);

const props = defineProps({
senderName:String,
updatedAt:String,
text:String


})
const modal= useTemplateRef('profile-modal');




</script>
<template>

<div class="message-card">
  <div class="card">
    <div class= "user-icon">
    <font-awesome-icon icon="fa-solid fa-user" class="icon" @click="modal.open()"/>
  </div>
    <div>
      <h1 class="message-cardName">{{senderName}}
      <div class="messages">{{ text }}</div>
      <div class="message-cardTime">{{ updatedAt }}</div>

      </h1>


    </div>

  </div>

</div>
<!--<MessagesModal ref="profile-modal">
    <template #profilepicture>
      <input type="file" id="image-input" accept="image/jpg, image/jpeg, image/png">
      <div id="display_image">Image Here</div>
    </template>
    <template #options>
      <button class="btn-menu">Choose Profile Picture</button>

    </template>

  </MessagesModal>-->




</template>
<style>
.message-card{
  /*background-color: rgba(0,0,0, 0.5);*/

  border-top:0.5px solid rgb(168, 165, 208);
  box-shadow: 5px 0 10px rgb(142, 135, 184);
  border-radius: 3px;
  margin-bottom: 3px;
  padding: 10px;
  height: 90px;



}
.message-cardName h1{
  font-size: 20px;
  position: relative;



}
.message-cardTime{
  font-size: 8px;
  position:relative;
  display: flex;
  justify-content: start;


}
.messages{
  position:relative;
  text-align: start;
  font-size: 16px;
  color:rgb(188, 204, 218)



}
.user-icon{
  background-color: black;
  width: 70px;
  height: 70px;
  font-size:30px;
  border-radius: 50%;
  left:5px;
  position: relative;
  margin-right: 15px;


}
.user-icon :hover{
  cursor: pointer;
}
.icon{
  margin-top: 15px;
}
.card{
  display: flex;
  position: relative;
  justify-self:flex-start;
  align-items: center;


}

</style>
