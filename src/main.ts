import { createApp } from "vue";
import App from "./App.vue";
import Home from "./pages/Home.vue";
import Admin from "./pages/Admin.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin,
    },
  ],
});

createApp(App).use(router).mount("#app");
