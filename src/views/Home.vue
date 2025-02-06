<script setup>
import { RouterLink } from 'vue-router';
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import '@/assets/main.css';
import {onMounted, ref} from "vue";







</script>

<template>


  <Header>

    <nav>

      <RouterLink to="/join" class="--fs-nav" v-model="joinBtn">Join</RouterLink>
    </nav>
    <nav>
      <RouterLink to="/signin" class="--fs-nav" v-model="signBtn">Sign In</RouterLink>
    </nav>


  </Header>



    <div class="container">

      <div class="HomePageImage">

      <img src="/L.svg">




    </div >


    <p class="fs-primary-heading">About The App</p>
    <div class="AboutAppWriteUp">
      <p class="AboutApp">
      Imagine a workout video app designed to fit your groove perfectly! This custom app lets you personalize your workouts by adding your favorite songs to any workout video. The app includes an innovative syncing feature that ensures you never miss a beat, allowing the countdown timer and the music to work seamlessly together.
      </p>
    </div>
    </div>


  <Footer></Footer>

</template>
<style scoped >

:deep(a){
  text-decoration: none;

}
a:hover{
  color:grey;
}






</style>
