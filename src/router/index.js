import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

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
      path: "/practice",
      name: "practice",
      component: () => import("../views/PracticeView.vue"),
    },
    {
      path: "/practice_2",
      name: "practice_2",
      component: () => import("../views/PracticeView2.vue"),
    },
    {
      path: "/practice_3",
      name: "practice_3",
      component: () => import("../views/PracticeView3.vue"),
    },
    {
      path: "/part4",
      name: "part4",
      component: () => import("../views/Part4View.vue"),
    },
    {
      path: "/part4_2",
      name: "part4_2",
      component: () => import("../views/Part4_2View.vue"),
    },
    {
      path: "/part4_2_4",
      name: "part4_2_4",
      component: () => import("../views/Part4_2_4View.vue"),
    },
    {
      path: "/part4_4",
      name: "part4_4",
      component: () => import("../views/Part4_4View.vue"),
    },
  ],
});

export default router;
