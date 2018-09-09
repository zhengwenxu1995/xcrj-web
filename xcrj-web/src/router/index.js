import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/pages/home/home.vue"
import News from "@/pages/news/news.vue"
import OnlineMsg from "@/pages/onlinemsg/onlinemsg.vue"
import Service from "@/pages/service/service.vue"
import Case  from "@/pages/case/case.vue"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      query:{
        nowSelect:0
      },
      component: Home
    },
    {
      path: '/case',
      name: 'Case',
      component: Case
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/service',
      name: 'Service',
      component: Service
    },
    {
      path: '/onlinemsg',
      name: 'OnlineMsg',
      component: OnlineMsg
    }
  ],
  mode:"history"
})
