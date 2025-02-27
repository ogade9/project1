<script setup>
import { ref} from "vue";


const showModal=ref(false)
//by default modal is closed
defineExpose({
  open,close
})
//To make open and close functions available to parent component
function open(){
  showModal.value=true;
}

function close(e){
  showModal.value=false;
}
//click.self means when the background is clicked, the modal will be closed
</script>
<template>

  <div v-show="showModal" @click.self="close" class="modal-style">
  <main>
    <slot name="main"></slot>
    </main>

    <footer>
      <slot name="footer"></slot>
    </footer>
</div>

</template>
<style>
</style>
