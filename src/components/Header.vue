<script setup>
import { RouterLink } from 'vue-router';
import Logo from './Logo.vue';

</script>

<template>


  <header>
    <div class="Headcontainer">
    <Logo />



      <slot></slot>


    </div>
  </header>
</template>

<style scoped>
:slotted(*){
  font-size: var(--fs-600);
  color:black;
  
}

</style>
