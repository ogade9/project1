<script setup>
import { useTemplateRef } from 'vue';
import { useRouter } from 'vue-router';

const logo= useTemplateRef('');
const router = useRouter();

function homePage(event){
  event.preventDefault();
  router.push("/Welcome");

}
</script>

<template>
  <div class="logo" v-bind:logo @click="homePage">
    <img src="/L.svg" />
  </div>
</template>

<style>
.logo{
  cursor: pointer;
}

</style>
