import Vue from "vue";
import Router from "vue-router";
import Main from "./views/Main.vue";
import Careers from "./views/Careers.vue";
import About from "./views/About.vue";
import Bpa from "./views/Bpa.vue";
import Cpad from "./views/Cpad.vue";
import Esd from "./views/Esd.vue";

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
    },
    {
      path: "/bpa",
      name: "bpa",
      component: Bpa
    },
    {
      path: "/cpad",
      name: "cpad",
      component: Cpad
    },
    {
      path: "/esd",
      name: "esd",
      component: Esd
    }
  ]
});
