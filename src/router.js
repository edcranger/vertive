import Vue from "vue";
import Router from "vue-router";
import Main from "./views/Main.vue";
import Careers from "./views/Careers.vue";
import About from "./views/About.vue";
import LearnMore from "./views/LearnMore.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
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
    },
    {
      path: "/learnMore/:service_id",
      name: "learnMore",
      component: LearnMore
    }
  ]
});
