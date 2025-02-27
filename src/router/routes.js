const routes = [
  {
    path: "/",
    component: () => import("layouts/LandingLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "test", component: () => import("pages/IndexPage_copy.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/404_ErrorNotFound.vue"),
  },
];

export default routes;
