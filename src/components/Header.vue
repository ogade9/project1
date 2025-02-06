<script setup>
import { RouterLink } from 'vue-router';
import Logo from './Logo.vue';

</script>

<template>


  <header>

    <div class="Headcontainer">






      <slot >

      </slot>



    </div>
    <Logo />
  </header>
  

</template>

<style scoped>
:slotted(*){
  font-size: var(--fs-600);
  color:black;
  margin-right: 1rem;

}

</style>
