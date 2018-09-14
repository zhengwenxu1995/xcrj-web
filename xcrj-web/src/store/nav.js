let defSelect=0;
try{
    if(window.localStorage.nowSelect){
        defSelect=window.localStorage.nowSelect
    }
}catch(e){
    console.log(e)
}

export const navMenuModule = {
    state: { 
       // nowSelect:window.localStorage.nowSelect,
       nowSelect:defSelect,
        navMenu:[
            {navName:"首页",path:"/"},
            {navName:"服务",path:"/service"},
            {navName:"案例",path:"/case"},
            {navName:"新闻动态",path:"/news"},
            {navName:"在线留言",path:"/onlinemsg"}
        ]
     },
     getters:{
        getNowSelect(state){
            let n= window.localStorage.nowSelect;
            return state.nowSelect==window.localStorage.nowSelect == undefined ? 0: parseInt(n);
        }
     },
     mutations:{
         changSelect(state,select){
            
            window.localStorage.setItem('nowSelect', select);
                    defSelect=window.localStorage.nowSelect
           
            // state.nowSelect=select;
            // let n= window.localStorage.nowSelect;
            //state.nowSelect = window.localStorage.nowSelect;
         }
     }
  }

  export default {
    navMenuModule
  }