import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: { path: "/proizvodi" },
  },
  {
    path: "/proizvodi",
    name: "proizvodi",

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Proizvodi.vue"),
  },

  {
    path: "/proizvodi/:id",
    props: true,
    name: "proizvod",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Proizvod.vue"),
  },
  {
    path: "/dodaj_proizvod/",
    props: true,
    name: "dodaj_proizvod",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DodavanjeProizvoda.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
