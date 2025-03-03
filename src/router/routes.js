import IndexPage from "../pages/IndexPage.vue";
import LkPage from "../pages/LkPage.vue";
import LkCourseTab from "src/components/LkCourseTab.vue";

const routes = [
  {
    path: "/",
    name: 'main',
    component: IndexPage,
    meta: {layout: 'mainLayout'}
  },
  {
    path: "/lk",
    name: 'lk',
    component: LkPage,
    meta: {layout: 'LkLayout'}
  },
  // {
  //   path: "/lk/course",
  //   name: 'course',
  //   component: LkCourseTab,
  //   meta: {layout: 'LkLayout'}
  // },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/404_ErrorNotFound.vue"),
  },
];

export default routes;
