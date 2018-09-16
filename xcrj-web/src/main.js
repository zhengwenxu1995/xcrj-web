// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "@/assets/style/reset.css"
import { store } from "./store/store.js"
import vueAwesomeSwiper from "vue-awesome-swiper"
import 'swiper/dist/css/swiper.css'
import "@/assets/iconfont/iconfont.css"
// import "@babel/polyfill"

Vue.use(vueAwesomeSwiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
