import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/inventory",
      name: "inventory",
      meta: { transition: '', order: 1, leftRouteName: '',  rightRouteName: 'map' },
      component: () => import("../views/InventoryView.vue"),
    },
    {
      path: "/quest",
      name: "quest",
      meta: { transition: '', order: 2, leftRouteName: 'inventory',  rightRouteName: 'home' },
      component: () => import("../views/QuestView.vue"),
    },
    {
      path: "/",
      name: "home",
      meta: { transition: '', order: 3, leftRouteName: 'map',  rightRouteName: 'shop' },
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/map",
      name: "map",
      meta: { transition: '', order: 4, leftRouteName: 'home',  rightRouteName: 'about' },
      component: () => import("../views/MapView.vue"),
    },
    {
      path: "/shop",
      name: "shop",
      meta: { transition: '', order: 5, leftRouteName: 'shop',  rightRouteName: '' },
      component: () => import("../views/ShopView.vue"),
    },
  ],
});

export default router;
