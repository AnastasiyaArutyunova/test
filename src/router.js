import Vue from "vue";
import Router from "vue-router";
import Cookies from "js-cookie";
Vue.use(Router);
const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "games",
      component: () => import("@/views/games/index")
    },
      {
          path: "/detail/:id",
          name: "Detailgames",
          component: () => import("@/views/games/detail")
      },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/login/index")
    },
    {
      path: "/profile",
      name: "profile",
      meta: {
        auth: true
      },
      component: () => import("@/views/profile/index")
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    if (Cookies.get("id") !== undefined) {
      next();
    } else {
      router.push("/login");
    }
  } else {
    next();
  }
});
export default router;
