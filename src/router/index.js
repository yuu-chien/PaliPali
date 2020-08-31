import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'layout',
    component: () => import('../views/layout/Layout.vue'),
    children: [
      {
        path: '/palipali/index',
        name: 'Palipali-index',
        component: () => import('../views/layout/Layout_index.vue'),
      },
      {
        path: '/palipali/products',
        name: 'Palipali-products',
        component: () => import('../views/layout/Layout_products.vue'),
      },
      {
        path: '/palipali/product/:id',
        name: 'Palipali-product',
        component: () => import('../views/layout/Layout_prod.vue'),
      },
      {
        path: '/palipali/about',
        name: 'Palipali-about',
        component: () => import('../views/layout/Layout_about.vue'),
      },
      {
        path: '/palipali/gallery',
        name: 'Palipali-gallery',
        component: () => import('../views/layout/Layout_gallery.vue'),
      },
      {
        path: '/palipali/cart',
        name: 'Palipali-cart',
        component: () => import('../views/layout/Layout_cart.vue'),
      },
      {
        path: '/palipali/success',
        name: 'Palipali-success',
        component: () => import('../views/layout/Layout_success.vue'),
      },
    ],
  },
  {
    path: '/palipali/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/palipali/admin',
    name: 'admin',
    component: () => import('../views/backend/Backend.vue'),
    children: [
      {
        path: '/palipali/admin/products',
        name: 'admin-products',
        component: () => import('../views/backend/Backend_products.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
