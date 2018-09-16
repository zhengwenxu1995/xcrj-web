<template>
    <div class="template-cont">
        <swiper :options="swiperOption" >
    <!-- slides -->
            <swiper-slide v-for="(item,index) in carousel" :key="index">
                <div class="carousel-frame">
                    <img :src="item.imgPath" alt="" class="img-carousel">
                </div>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    CxrjTotalCarouse:"CxrjTotalCarouse",
    data(){
        return {
            carousel:[
                {
                    imgPath:"/static/image/publicarouse1.jpg",
                },
                {
                    imgPath:"/static/image/publicarouse2.jpg",
                }
                ,{
                    imgPath:"/static/image/publicarouse3.jpg",
                }
            ],
            swiperOption:{
                speed:1500,
                autoplay: {
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false
                    },
                effect : 'fade',
                fadeEffect: {
                    crossFade: false,
                },
                grabCursor : true,
               
                loop:true
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
.template-cont
    height :9.4rem;
    width :100%;
    overflow :hidden;
    .carousel-frame
        overflow :hidden;
    .carousel-frame img
        height :100%;
</style>
