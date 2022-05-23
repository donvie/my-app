
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/home', component: () => import('pages/IndexPage.vue') },
      { path: 'login', component: () => import('pages/LoginPage.vue') },
      { path: 'signin', component: () => import('pages/SigninPage.vue') },
      { path: 'profile', component: () => import('pages/ProfilePage.vue') },
      { path: 'checkout', component: () => import('pages/CheckoutPage.vue') },
      { path: 'cart', component: () => import('pages/CartPage.vue') },
      { path: 'view-product', component: () => import('pages/ViewProductPage.vue') },
      { path: 'chat', component: () => import('pages/ChatPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
