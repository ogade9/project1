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
.logo{
  margin-top: -70px;
  margin-left: -150px;;
}

.Headcontainer{
  margin-top: 40px;
  background-color:rgba(211, 211, 211, 0.6);
  height:20px;
  display: flex;
  justify-content:space-between;
  align-items: center;
  padding: 1.5rem;

}
:slotted(*){
  font-size: var(--fs-600);
  color:black;
}
a:hover{
  color:darkgray;
}

</style>
