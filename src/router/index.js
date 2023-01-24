import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/pages/home/home.vue"),
    },
    {
      path: "/usuario/mostrar/:id",
      name: "user.show",
      component: () => import("@/pages/user/user-show.vue"),
    },
    {
      path: "/usuario/cadastro",
      name: "user.create",
      component: () => import("@/pages/user/user-create.vue"),
    },
    {
      path: "/teste",
      name: "teste",
      component: () => import("@/pages/user/teste.vue"),
    },
  ],
});

export default router;
