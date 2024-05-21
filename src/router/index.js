import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/skills",
      name: "skills",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/education",
      name: "education",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/socials",
      name: "socials",
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

// NProgress
import NProgress from "nprogress";
import "../assets/styles/nprogress.css";
NProgress.configure({ easing: "ease", speed: 500, showSpinner: false });

router.beforeEach((to, from, next) => {
  if (from.name !== null) {
    NProgress.start();
  }
  next();
});
// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
  NProgress.done();
});

export default router;
