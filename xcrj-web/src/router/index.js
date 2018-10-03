import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/pages/home/home.vue"
import News from "@/pages/news/news.vue"
import OnlineMsg from "@/pages/onlinemsg/onlinemsg.vue"
import Service from "@/pages/service/service.vue"
import Case  from "@/pages/case/case.vue"
import newsList from "@/pages/news/component/newsCont.vue"
import newsCont from "@/pages/news/component/showNews.vue"



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
      component: News,
      redirect:"/news/newsList",
      children:[
        {
          path: 'newsList',
          name: 'newsList',
          component: newsList,
        },
        {
          path: 'newsCont',
          name: 'newsCont',
          component: newsCont,
        }
      ]
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
