import { createWebHistory, createRouter } from 'vue-router';

import Home from '../pages/home.vue';
import Rack from '../pages/rack.vue';
import Impressum from '../pages/impressum.vue';
import Wishlist from '../pages/wishlist.vue';
import MovieView from '../pages/movie/view.vue';
import Login from '../pages/login.vue';
import Search from '../pages/search.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/impressum', component: Impressum },
  { path: '/rack', component: Rack },
  { path: '/movie/:id', component: MovieView },
  { path: '/login', component: Login },
  { path: '/wishlist', component: Wishlist },
  { path: '/search', component: Search }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
