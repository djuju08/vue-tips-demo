import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FormValidation from "../views/FormValidation.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/form-validation",
      name: "form validation",
      component: FormValidation,
    },
    {
      path: "/mutate-prop",
      name: " mutateProp",
      component: () => import("../views/MutatePropView.vue"),
    },
    {
      path: "/watch",
      name: " watch",
      component: () => import("../views/WatchView.vue"),
    },
    {
      path: "/v-for",
      name: " vfor",
      component: () => import("../views/VForView.vue"),
    },
  ],
});

export default router;
