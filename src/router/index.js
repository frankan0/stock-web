import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/monitor',
    component: () => import(/* webpackChunkName: "console" */ '@/layout/Index.vue'),
    meta: { 
      requireLogin: true
    },
    children: [
      {
        path: '',
        redirect: 'volume'
      },
      {
        path: 'volume',
        name: 'volume',
        component: () => import(/* webpackChunkName: "volume" */ '@/views/monitor/volume/Index.vue'),
        meta: { 
          title: '交易量监控',
          requireLogin: false
        }
      },


    ]
  },
  {
    path:"",
    redirect: "/monitor/volume"
  },
  {
    path: "*", // 此处需特别注意置于最底部
    redirect: "/customer"
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
