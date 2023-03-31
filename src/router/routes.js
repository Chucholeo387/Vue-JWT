const routes = [
  {
    path: "/",
    component: () => import("../layouts/LoginLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },
  {
    path: "/login",
    component: () => import("../layouts/LoginLayout.vue"),
    children: [{ path: "", component: () => import("../pages/LoginPage.vue") }],
  },
  {
    path: "/register",
    component: () => import("../layouts/LoginLayout.vue"),
    children: [
      { path: "", component: () => import("../pages/RegisterPage.vue") },
    ],
  },
  {
    path: "/secret",
    component: () => import("../layouts/LoginLayout.vue"),
    children: [
      {
        path: "/secret",
        name: "SecretPage",
        component: () => import("../pages/SecretPage.vue"),
      },
    ],
  },
  {
    path: "/secret2",
    component: () => import("../layouts/LoginLayout.vue"),
    children: [
      {
        path: "/secret2",
        name: "SecretPage2",
        component: () => import("../pages/SecretPage2.vue"),
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
