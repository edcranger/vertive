import Vue from "vue";
import Router from "vue-router";
import Main from "./views/Main.vue";
import Careers from "./views/Careers.vue";
import About from "./views/About.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "main",
      component: Main
    },
    {
      path: "/careers",
      name: "careers",
      component: Careers
    },
    {
      path: "/about",
      name: "about",
      component: About
    }
  ]
});