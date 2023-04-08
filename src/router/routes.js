const routes = [
  {
    path: "/",
    component: () => import("../layouts/LoginLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },
  {
    path: "/",
    component: () => import("../layouts/LoginLayout.vue"),
    children: [
      { path: "login", component: () => import("../pages/LoginPage.vue") },
      {
        path: "/register",
        component: () => import("../pages/RegisterPage.vue"),
      },
      {
        path: "/secret",
        name: "SecretPage",
        component: () => import("../pages/SecretPage.vue"),
      },
      {
        path: "/secret2",
        name: "SecretPage2",
        component: () => import("../pages/SecretPage2.vue"),
      },
      {
        path: "/graph",
        name: "graph",
        component: () => import("../pages/TestGraph.vue"),
      },
      {
        path: "/register-graph",
        name: "graph",
        component: () => import("../pages/RegisterGraphPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
