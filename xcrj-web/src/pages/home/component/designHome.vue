<template>
    <div class="cont">
        <div class="cont-frame">
            <ul class="features">
                <li class="item">
                        <div class="details" >
                            <i class="iconfont icon">&#xe604;</i>
                            <transition name="size">
                                <div class="action">
                                    <h2 class="details-title">交互原型设计</h2>
                                    <p class="details-cont">信息架构、界面布局、快速原型、产品原型、低保真原型</p>
                                </div>
                            </transition>
                        </div>
                    
                    
                </li>
                <li class="item">
                    <div class="details">
                        <i class="iconfont icon">&#xe64f;</i>
                        <transition name="size">
                            <div class="action">
                                <h2 class="details-title">产品视觉设计</h2>
                                <p class="details-cont">视觉设计、品牌设计、图形设计、前端架构及开发</p>
                            </div>
                        </transition>
                    </div>
                </li>
                <li class="item">
                    <div class="details">
                        <i class="iconfont icon">&#xe62e;</i>
                        <transition name="size">
                            <div class="action">
                                <h2 class="details-title">移动端产品设计</h2>
                                <p class="details-cont">移动界面设计、微信公众平台、<span class="word">IOS/Android界面设计</span></p>
                            </div>
                        </transition>
                    </div>
                </li>
                <li class="item">
                    <div class="details">
                        <i class="iconfont icon">&#xe76d;</i>
                        <transition name="size">
                            <div class="action">
                                <h2 class="details-title">软件界面设计</h2>
                                <p class="details-cont">其它终端软件界面、Windows软件界面设计MacOS软件界面</p>
                            </div>
                        </transition>
                        
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    XcrjDesignHome:"designHome",
    data(){
        return {
            animation:true,
            loadingAnimation:false
        }
    },
    mounted(){
       
    },
    methods:{
        
    }
}
</script>

<style lang="stylus" scoped>
.cont
    width :100%;
    height :4.25rem;
    overflow :hidden;
    .cont-frame
        width :90%;
        margin :0 auto;
        padding:0.5rem 0 4.75rem 0;
        .features
            display :flex;
            .item
                flex :1;
                padding:0.2rem 0.5rem;
                text-align:center;
                .details
                    width :5.4rem;
                    text-align :center;
                    .icon
                        color:#009fe9;
                        font-size :0.8rem;
                        line-height :0.9rem;
                        cursor :pointer;
                    .details-title
                        height :0.9rem;
                        margin-top : 0.3rem;
                        line-height :0.9rem;
                        transition :all 0.5s;
                        font-size:0.3rem;
                        cursor :pointer;
                    .details-cont
                        line-height :0.4rem;
                        color :#999;
                        font-size :0.24rem;
                        padding:0 0.8rem;
                        word-wrap : break-word;
                        cursor :pointer;
                .action:hover
                   animation : myAnimation 0.4s
                @keyframes myAnimation
                {
                50% {transform:translateX(-10px)}
                100%{transform:translateX(20px);}
                }

</style>
