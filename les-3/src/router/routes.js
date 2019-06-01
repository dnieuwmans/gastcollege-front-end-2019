import Vue from 'vue';

// Kinda like an enum.
export const RouteNames = {
  HOME: 'home',
  ABOUT: 'about',
};

// Adds the route names to the global prototype, so we could use it like: this.$routeNames
Vue.prototype.$routeNames = RouteNames;

// Always use lazy loading on route level.
export const routes = [
  {
    path: '/',
    name: RouteNames.HOME,
    component: () => import(/* webpackChunkName: "home" */ '@/pages/home/home.page.vue'),
    meta: {
      title: 'Home',
    },
  },
  {
    path: '/about',
    name: RouteNames.ABOUT,
    component: () => import(/* webpackChunkName: "home" */ '@/pages/about/about.page.vue'),
    meta: {
      title: 'About',
    },
  },
];
