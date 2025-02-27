import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import SignIn from "../views/SignIn.vue";
import Join from "../views/Join.vue";
import Welcome from "../views/Welcome.vue";
import Navigation from "../views/Navigation.vue";
import Progress from "../views/Progress.vue";
import Live from "../views/Live.vue";
import Profile from "../views/Profile.vue";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
    path: "/welcome",
      component: Welcome,
      children:[
      {
        path: '/welcome',
            components: {
              leftSidebar: Live,
              focus: Progress,
              rightSidebar:Navigation
            },
      },
      {
        path:'/welcome/profile',
        components:{
          leftSidebar:Navigation,
          focus:Profile
        }

      }
    ],
  },
    {
      path: "/",
      name: "home",
      component: Home,
    },

    {
      path: "/signin",
      name: "signin",
      component: SignIn,
    },
    {
      path: "/join",
      name: "join",
      component: Join,
    },






  ],
});

export default router;
