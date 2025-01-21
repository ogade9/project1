<script setup>
import { RouterLink } from 'vue-router';
import Header from '../components/Header.vue'
import '@/assets/main.css';


</script>

<template>

  <Header>

    <nav>

      <RouterLink to="/join" class="--fs-nav">Join</RouterLink>
    </nav>
    <nav>
      <RouterLink to="/signin" class="--fs-nav">Sign In</RouterLink>
    </nav>

  </Header>


<div class="container">

  <div class="HomePageImage">

    <img src="/L.svg">
  </div>

  <p class="fs-primary-heading">About The App</p>
  <div class="AboutAppWriteUp">
    <p>
      Imagine a workout video app designed to fit your groove perfectly! This custom app lets you personalize your workouts by adding your favorite songs to any workout video. The app includes an innovative syncing feature that ensures you never miss a beat, allowing the countdown timer and the music to work seamlessly together.
    </p>


    </div>
  </div>

</template>
<style scoped >

.HomePageImage{
  height:200px;
  background-color:beige;
  padding: 5px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}




:deep(a){
  text-decoration: none;

}
a:hover{
  color:darkgray;
}

</style>
