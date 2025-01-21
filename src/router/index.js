import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import SignIn from "../views/SignIn.vue";
import Join from "../views/Join.vue";
import Welcome from "../views/Welcome.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
    {
      path: "/welcome",
      name: "welcome",
      component: Welcome
    }
  ],
});

export default router;
