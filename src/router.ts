import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Home from "./pages/Home.vue";
import ProjectView from "./pages/projects/ProjectView.vue";
import SmilePage from "./pages/projects/details/SmilePage.vue";
import WeatherPage from "./pages/projects/details/WeatherPage.vue";
import HanaroPage from "./pages/projects/details/HanaroPage.vue";
import PlacePage from "./pages/projects/details/PlacePage.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Home,
    name: "name",
  },
  {
    path: "/project",
    children: [
      { path: "", component: ProjectView, name: "project" },
      { path: "smile", component: SmilePage, name: "smile" },
      { path: "place", component: PlacePage, name: "place" },
      { path: "hanaro", component: HanaroPage, name: "hanaro" },
      { path: "weather", component: WeatherPage, name: "weather" },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
