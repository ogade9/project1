<script setup>
import {ref} from 'vue';

const profileImage = ref(false);

defineExpose({
  open,close
})

function open(){
  profileImage.value=true;
}
function close(e){
  profileImage.value=false;
}

</script>
<template>
    <div class="unblurred">

  <div v-show="profileImage" @click.self="close" class="profile-modal"></div>

  <main>
    <slot name="profilepicture"></slot>
  </main>

    <footer>
      <slot name="options"></slot>
    </footer>
  </div>

</template>
<style>

.unblurred .profile-modal{
  height:400px;
  width: 400px;
  background: black;
  filter:blur(0px);



}

</style>
