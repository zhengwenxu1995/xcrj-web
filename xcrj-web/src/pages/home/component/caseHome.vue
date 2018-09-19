<template>
    <div class="template-cont">
        <div class="case-frame">
            <div class="case-cont">
               <div class="title">
                   <h1>我们的案例</h1><span>/CIASSIC CASE</span>
               </div>
               <div class="case-list">
                   <ul class="list">
                       <li class="img-item">
                           <a href="javascript:;">
                               <img class="img-small" src="/static/image/case1.png" alt="">
                           </a>
                       </li>
                       <li class="img-item">
                           <a href="javascript:;">
                               <img class="img-small" src="/static/image/case2.png" alt="">
                           </a>
                       </li>
                       <li class="img-item">
                           <a href="javascript:;">
                               <img class="img-small" src="/static/image/case3.png" alt="">
                           </a>
                       </li>
                       <li class="img-item-big">
                           <a href="javascript:;">
                               <img class="img-big" src="/static/image/case4.png" alt="">
                           </a>
                       </li>
                       <li class="img-item">
                           <a href="javascript:;">
                               <img class="img-small" src="/static/image/case5.jpg" alt="">
                           </a>
                       </li>
                   </ul>
               </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    XcrjCase:"XcrjCase",
    data(){
        return{
            
        }
    }
}    
</script>

<style lang="stylus" scoped>
.template-cont
    width :100%;
    height :17.2rem;
    .case-frame
        width :90%;
        height :100%;
        margin :0 auto ;
        .case-cont
            width :100%;
            height :100%;
            padding :0.5rem 1rem;
            text-align :center;
            margin :0 auto;
            box-sizing :border-box;
            .title 
                padding:0.5rem 0;
            .title h1
                font-size :0.6rem;
                display :inline-block;
                color:rgb(52, 73, 94);
                font-weight :600;
            .title span
                font-size :0.3rem;
                color:rgb(135, 135, 135);
            .case-list
                width :100%;
                margin :0 auto;
            .list
                width :25.5rem;
                margin :0 auto;
                overflow :hidden;
            .list li
                margin :0.2rem;
                box-sizing :border-box;
                z-index :1;
                float :left;
            .list .img-item
                height :6.74rem;
                width: 7.88rem;
                overflow :hidden;
            .list .img-item-big
                width: 16.16rem;
                height :6.74rem;
                overflow :hidden;
            .list li img
                height :100%;
            .list li .img-small
                width :8.08rem;
                transition :all 0.5s;
            .list li .img-small:hover
                margin-left :-0.2rem;
            .list li .img-big
                width: 16.36rem;
                transition :all 0.5s;
            .list li .img-big:hover
                margin-left :-0.2rem;
</style>
