import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录'
    },
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/home',
    name: '主页',
    meta: {
      title: '主页'
    },
    component: () => import('../views/HomeView.vue'),
    redirect: '/index',
    children: [
      {
        path: '/index',
        meta: {
          title: '首页'
        },
        component: () => import('../views/WelcomeView.vue')
      },
      {
        path: '/user/list',
        meta: {
          title: '用户管理'
        },
        component: () => import('../views/user/Index.vue'),
      },
      {
        path: '/user/detail',
        meta: {
          title: '用户详情'
        },
        component: () => import('../views/user/Detail.vue'),
      },
    ]
  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  // to.mata.title 页面 title
  // if (to.mata?.title) {
  //   document.title = `vue3-elementplus-admin - ${to.meta.title}`
  // }

  // 获取登录 token
  const token = sessionStorage.getItem('token')
  if (to.name !== 'login' && !token) setTimeout(() => { next({ name: 'login' }) }, 2000)
  else next()

})

export default router
