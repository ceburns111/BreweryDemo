import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BreweriesView from "../views/BreweriesView.vue";
import BreweryView from "../views/BreweryView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/breweries",
      name: "breweries",
      component: BreweriesView,
    },
    {
      path: "/brewery/:id",
      name: "brewery",
      component: BreweryView,
    },
  ],
});

export default router;
