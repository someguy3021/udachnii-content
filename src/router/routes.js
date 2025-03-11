const routes = [
  {
    path: "/",
    name: "Landing",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "LandingPage",
        component: () => import("pages/IndexPage.vue"),
      },
    ],
  },
  {
    path: "/lk",
    name: "LK",
    component: () => import("layouts/LKLayout.vue"),
    children: [
      { path: "", name: "LKPage", component: () => import("pages/LkPage.vue") },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/404_ErrorNotFound.vue"),
  },
];

export default routes;
