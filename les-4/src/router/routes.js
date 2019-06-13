import Vue from 'vue';

// Kinda like an enum.
export const RouteNames = {
  HOME: 'home',
  MOVIES: 'movies',
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
    path: '/movies',
    name: RouteNames.MOVIES,
    component: () => import(/* webpackChunkName: "movies" */ '@/pages/movies/movies.page.vue'),
    meta: {
      title: 'Movies',
    },
  },
];
