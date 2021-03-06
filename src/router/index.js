import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
/* import Price from "../components/Price.vue"; */
import Container from "../components/Container.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/container",
    name: "Container",
    component: Container,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
