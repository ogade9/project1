import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import SignIn from "../views/SignIn.vue";
import Join from "../views/Join.vue";
import Welcome from "../views/Welcome.vue";
import Navigation from "../views/Navigation.vue";
import Progress from "../views/Progress.vue";
import Live from "../views/Live.vue";
import Profile from "../views/Profile.vue";
import PrivateMessage from "@/components/PrivateMessage.vue";
import Chats from "../views/Chats.vue"

function authenticate(){

    return !!localStorage.getItem("token");

}
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
            meta:{
              authRequired:true},
      },
      {
        path:'/welcome/profile',
        components:{
          leftSidebar:Navigation,
          focus:Profile
        },
        meta: {
          authRequired:true},


      },
      {
      path:'/welcome/live',
      components:{
        leftSidebar:Live,
        focus:Chats

      },
      meta:{
        authRequired:true},

    },
    {
      path:'/user/:userId',
      components:{
        leftSidebar:Live,
        focus:PrivateMessage,
        rightSidebar:Chats


      },
      meta:{
        authRequired:true},

      props:true
    }
    ],
    meta:{
      authRequired:true}
  },
    {
      path: "/",
      name: "home",
      component: Home,

      meta:{
        authRequired: false},

    },
    {
      path: "/signin",
      name: "signin",
      component: SignIn,
      meta:{
        authRequired:false},

    },
    {
      path: "/join",
      name: "join",
      component: Join,
      meta:{
        authRequired:false},

    },
    {
      path: "/:pathMatch(.*)*",
      redirect:{

        name:'home'
      }
    }



  ]

})

router.beforeEach((to,from,next)=>{
  if(to.meta.authRequired && !authenticate()) {
    next({name:'home'})

  }else{
    next();
  }
});





export default router;
