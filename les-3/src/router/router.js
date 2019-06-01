import Vue from 'vue';
import Router from 'vue-router';
import { routes } from './routes';

Vue.use(Router);

// Assign the router instance to a variable so we can use the beforeEach.
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// Before each route do...
router.beforeEach((to, from, next) => {
  // Set the title of the page.
  document.title = `${to.meta.title} - Website`;

  // Don't forget to continue navigating.
  next();
});

export default router;
