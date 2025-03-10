const routes = [
  {
    path: "/",
    name: 'main',
    component: () => import("pages/IndexPage.vue"),
    meta: {layout: 'mainLayout'}
  },
  {
    path: "/lk",
    name: 'lk',
    component: () => import("pages/LkPage.vue"),
    meta: {layout: 'LkLayout'}
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/404_ErrorNotFound.vue"),
  },
];

export default routes;
