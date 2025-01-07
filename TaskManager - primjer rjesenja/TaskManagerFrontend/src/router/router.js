import { createRouter, createWebHistory } from "vue-router";
import app from "../App.vue";
import add_task from "../App_primjer_s_dodavanjem.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: app,
  },
  {
    path: "/add_task",
    name: "add_task",

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: add_task,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
