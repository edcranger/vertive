import Vue from "vue";
import Router from "vue-router";
import Main from "./views/Main.vue";
import Careers from "./views/Careers.vue";
import About from "./views/About.vue";
import LearnMore from "./views/LearnMore.vue";
import Admin14 from "./views/Admin14.vue";
import AdminDashboard from "./views/AdminDashboard.vue";
import Messages from "./views/Messages.vue";
import MakeAdmin from "./views/MakeAdmin.vue";
import ViewMessage from "./views/ViewMessage.vue";
import { fb } from "./firebase";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
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
    },
    {
      path: "/admin14",
      name: "admin14",
      component: Admin14
    },
    {
      path: "/adminDashboard",
      name: "adminDashboard",
      component: AdminDashboard,
      meta: { requiresAuth: true },
      children: [
        {
          path: "messages",
          name: "messages",
          component: Messages
        },
        {
          path: "makeAdmin",
          name: "makeAdmin",
          component: MakeAdmin
        },
        {
          path: "viewMessage/:message_id",
          name: "viewMessage",
          component: ViewMessage
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
  const currentUser = fb.auth().currentUser;

  if (requiresAuth && !currentUser) {
    next("/");
  } else if (requiresAuth && currentUser) {
    next();
  } else {
    next();
  }
});

export default router;
