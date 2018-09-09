import Vue from "vue";
import Vuex from "vuex";
import { navMenuModule } from "./nav.js"

Vue.use(Vuex)

 //导出vuex中的数据

 export const store=new Vuex.Store({
    modules:{
        nav:navMenuModule
    }
    
 })

 store.state.nav