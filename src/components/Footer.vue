<script setup>
import { RouterLink } from 'vue-router';
import {ref,onMounted} from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faYoutube} from  '@fortawesome/free-brands-svg-icons'
import { faTwitter} from  '@fortawesome/free-brands-svg-icons'

library.add(faInstagram);
library.add(faYoutube);
library.add(faTwitter);


const year= ref('');
onMounted(()=>{
  year.value=new Date().getFullYear();
})

</script>

<template>

<footer>
  <div class="waves">

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="rgb(223, 220, 245)"
        fill-opacity="1"
        d="M0,64L30,64C60,64,120,64,180,101.3C240,139,300,213,360,240C420,267,480,245,540,224C600,203,660,181,720,170.7C780,160,840,160,900,181.3C960,203,1020,245,1080,240C1140,235,1200,181,1260,181.3C1320,181,1380,235,1410,261.3L1440,288L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
      ></path>
    </svg>


      <div class="wave1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="rgb(223, 220, 245)"
        fill-opacity="1"
        d="M0,64L30,64C60,64,120,64,180,101.3C240,139,300,213,360,240C420,267,480,245,540,224C600,203,660,181,720,170.7C780,160,840,160,900,181.3C960,203,1020,245,1080,240C1140,235,1200,181,1260,181.3C1320,181,1380,235,1410,261.3L1440,288L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
      ></path>
    </svg>
      </div>
      <div class="wave2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="rgb(223, 220, 245)"
        fill-opacity="1"
        d="M0,64L30,64C60,64,120,64,180,101.3C240,139,300,213,360,240C420,267,480,245,540,224C600,203,660,181,720,170.7C780,160,840,160,900,181.3C960,203,1020,245,1080,240C1140,235,1200,181,1260,181.3C1320,181,1380,235,1410,261.3L1440,288L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
      ></path>
    </svg>
      </div>
      <div class="wave3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="rgb(223, 220, 245)"
        fill-opacity="1"
        d="M0,64L30,64C60,64,120,64,180,101.3C240,139,300,213,360,240C420,267,480,245,540,224C600,203,660,181,720,170.7C780,160,840,160,900,181.3C960,203,1020,245,1080,240C1140,235,1200,181,1260,181.3C1320,181,1380,235,1410,261.3L1440,288L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
      ></path>
    </svg>
      </div>
      <div class="wave4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="rgb(223, 220, 245)"
        fill-opacity="1"
        d="M0,64L30,64C60,64,120,64,180,101.3C240,139,300,213,360,240C420,267,480,245,540,224C600,203,660,181,720,170.7C780,160,840,160,900,181.3C960,203,1020,245,1080,240C1140,235,1200,181,1260,181.3C1320,181,1380,235,1410,261.3L1440,288L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
      ></path>
    </svg>
      </div>

  </div>
    <ul class="icons">
      <li>

      <font-awesome-icon :icon="['fab', 'instagram']" />
      </li>
     <li><font-awesome-icon :icon="['fab', 'youtube']" /></li>
     <li><font-awesome-icon :icon="['fab', 'twitter']" /></li>



    </ul>
    <ul class="menu">
     <a href="#" >Home
      </a>
      <a href="#" >About Us
      </a>
      <a href="#" >Team </a>
      <a href="#" >Contact Us</a>
    </ul>


  </footer>

</template>

<style>

</style>
