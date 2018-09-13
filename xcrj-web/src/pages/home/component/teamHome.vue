<template>
    <div class="template-cont">
        <!-- <img src="/static/image/team.png" alt=""> -->
        <div class="bg">
            <div class="cont-frame">
               <transition name="team">
                    <div class="team-cont" v-if="teamshow">
                        <div class="title-one">
                            <h1>我们的团队来自</h1><span>/&nbsp;OUT&nbsp;TEAM&nbsp;FROM</span>
                        </div>
                        <div class="title-two">
                            <h1>微小的原点</h1><span>/&nbsp;A&nbsp;TINY&nbsp;POINT&nbsp;OF&nbsp;ORIGIN</span>
                        </div>
                        <p class="cont-introd">
                            北京信长仁捷科技有限公司网络品牌机构。网站建设、网站设计、品牌设计、空间设计、网络营销、网站托管、整合营销服务为核心服务。于创意设计实现商业价值大化为所有谋求长远发展的企业提升品牌品质。拥有经验丰富技术团队，专业的资深设计师
                        </p>
                        <div class="btn">
                            <button class="btn-cont">了解详情</button>
                        </div>
                    </div>
               </transition>
            </div>
        </div>

    </div>
</template>

<script>
export default{
    CxrjTeam:"CxrjTeam",
    data(){
        return{
            teamshow:false
        }
    },
    methods:{
        scrollShow(e){
           let t=document.body.scrollTop || document.documentElement.scrollTop;
           if(t>=500){
               this.teamshow=true;
               window.removeEventListener("scroll",this.scrollShow);
               console.log("团队动画被执行")
           }
        }
    },
    mounted() {
     window.addEventListener("scroll",this.scrollShow)   
    }
}    
</script>

<style lang="stylus" scoped>
.template-cont
    width :100%;
    height :21rem;
    overflow :hidden;
    .bg
        background :url("/static/image/team.png") no-repeat center;
        height :21rem;
        width :100%;
        .cont-frame
            width :90%;
            height :100%;
            margin :0 auto;
            position :relative;
            .team-cont
                width:48%;
                height :50%;
                position :absolute;
                bottom :0;
                left :0;
                box-sizing :border-box;
                padding : 0.5rem 1.5rem;
                .title-one h1
                    font-size :0.9rem;
                    color :#fff;
                    display :inline-block;
                .title-one span
                    color:#fff;
                .title-two
                    padding-top :0.7rem; 
                .title-two h1
                    font-size :0.9rem;
                    color :#fff;
                    display :inline-block; 
                .title-two span
                    color:#fff;
                .cont-introd
                    padding:0.5rem 1.6rem 0.5rem 0;
                    line-height :0.5rem;
                    color:#fff;
                    text-indent :0.6rem;
                .btn
                    padding-top :1rem;
                    .btn-cont
                        padding:0.3rem 1rem;
                        border-radius :0.6rem;
                        background :#fff;
                        color:#009fe9;
                        letter-spacing :0.05rem;
                        cursor :pointer;
        .team-enter-active 
            transition: all .3s ease;
        .team-enter
            transform: translateX(4rem);

</style>    
