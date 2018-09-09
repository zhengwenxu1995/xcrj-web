<template>
    <div class="cont">
        <swiper :options="swiperOption" >
    <!-- slides -->
            <swiper-slide v-for="(item,index) in carousel" :key="index">
                <div class="carousel-frame">
                    <img :src="item.imgPath" alt="" class="img-carousel">
                    <div class="carousel-cont">
                       <h1 class="title">{{item.title}}</h1>
                       <p class="carousel-cont-detail">
                        {{item.detail}}
                       </p>
                       <a href="javascript:;" v-if="item.btnShow" class="carousel-btn">{{item.btnCont}}</a>
                   </div>
                </div>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    CarouselMapHome:"CarouselMapHome",
    data(){
        return{
             carousel:[
                {
                    imgPath:"/static/image/carouse1.jpg",
                    title:"定制网站建设",
                    detail:"多年专业建站经验，您所有的建站烦恼，我们用设计提升企业和产品，我们是团结的团队，是服务保障系统",
                    btnShow:true,
                    btnCont:"了解详情"
                },
                {
                    imgPath:"/static/image/carouse2.jpg",
                    title:"定制网站建设",
                    detail:"多年专业建站经验，您所有的建站烦恼，我们用设计提升企业和产品，我们是团结的团队，是服务保障系统",
                    btnShow:false,
                    btnCont:""
                },
                {
                    imgPath:"/static/image/carouse3.jpg",
                    title:"定制网站建设",
                    detail:"多年专业建站经验，您所有的建站烦恼，我们用设计提升企业和产品，我们是团结的团队，是服务保障系统",
                    btnShow:true,
                    btnCont:"联系我们"
                }
                ,{
                    imgPath:"/static/image/carouse4.jpg",
                    title:"定制网站建设",
                    detail:"多年专业建站经验，您所有的建站烦恼，我们用设计提升企业和产品，我们是团结的团队，是服务保障系统",
                    btnShow:false,
                    btnCont:""
                }
            ],
            swiperOption:{
                speed:1500,
                autoplay: {
                    delay: 5000,
                    stopOnLastSlide: false,
                    disableOnInteraction: true,
                    },
                effect : 'cube',
                cubeEffect: {
                    slideShadows: true,
                    shadow: true,
                    shadowOffset: 50,
                    shadowScale: 0.5
                },
                grabCursor : true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                loop:true
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
.cont
    height :12rem;
    width:100%;
    .carousel-frame
        width :100%;
        height :12rem;
        position :relative;
        overflow :hidden;
        .img-carousel
            height :12rem;
        .carousel-cont
            position :absolute;
            width :8.5rem;
            z-index :2018;
            top:5rem;
            left :20%;
            background :rgba(3,3,3,0.5)
            border-radius :0.2rem;
            color:#fff;
            .title
                font-size :0.7rem;
                padding : 0.5rem 0.4rem;
            .carousel-cont-detail
                font-size :0.3rem;
                text-indent :0.5rem;
                line-height :0.5rem;
                margin-bottom :0.8rem;
                padding:0 0.2rem;
            .carousel-btn
                display :inline-block;
                padding :0.2rem 0.4rem;
                border-radius :0.2rem;
                font-size :0.32rem;
                border:0.01rem solid #009fe9;
                margin: 0 0 0.2rem 1rem;
                transition all 0.3s;
            .carousel-btn:hover
                border-color:#fff;
    .swiper-button-prev
        left :1.5rem;
        padding : 0.2rem 0.4rem;
        border:0.01rem solid rgba(0,159,233,0.4)
        border-radius :0.2rem;
    .swiper-button-next
        right :1.5rem;
        padding : 0.2rem 0.4rem;
        border:0.01rem solid rgba(0,159,233,0.4)
        border-radius :0.2rem;
</style>
