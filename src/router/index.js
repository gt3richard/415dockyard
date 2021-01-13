import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import Doc from "@/views/Doc";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/doc/:page",
      name: "Doc",
      component: Doc,
      props: true,
    },
    {
      path: "*",
      name: "Home",
      component: Home,
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
