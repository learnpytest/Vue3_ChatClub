import {
  createRouter,
  createWebHashHistory
} from "vue-router";

// todo import Home and set route for home

const routes = [{
    path: "/signin",
    name: "sign-in",
    component: () => import("@/views/Signin.vue"),
  },
  {
    path: "/signup",
    name: "sign-up",
    component: () => import("@/views/Signup.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
