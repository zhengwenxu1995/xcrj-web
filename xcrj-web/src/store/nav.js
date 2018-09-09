export const navMenuModule = {
    state: { 
        nowSelect:0,
        navMenu:[
            {navName:"首页",path:"/"},
            {navName:"服务",path:"/service"},
            {navName:"案例",path:"/case"},
            {navName:"新闻动态",path:"/news"},
            {navName:"在线留言",path:"/onlinemsg"}
        ]
     },
     mutations:{
         changSelect(state,select){
            state.nowSelect=select;
         }
     }
  }

  export default {
    navMenuModule
  }