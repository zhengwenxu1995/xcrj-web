<template>
    <div class="template-cont">
        <div class="close">
            <i class="iconfont close-btn" @click="close">&#xe6df;</i>
        </div>
        <div class="img-list">
            <swiper :options="swiperOption" ref="mySwiper">
                <!-- slides -->
                <swiper-slide v-for=" (item,index) of caseImg" :key="index">
                    <div class="img-frame">
                        <img :src="item" alt="">
                    </div>
                </swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    CxrjCaseBrowse:"CxrjCaseBrowse",
    data(){
        return {
            swiperOption: {
                loop : true,
                effect : 'coverflow',
                slidesPerView: 3,
                pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction'
                },
            }
        }
    },
    methods:{
        close(){
            this.$store.commit("close");
        }
    },
    computed:{
        caseImg(){
            return  this.$store.state.caseBrows.showImgList
        }
    }
}
</script>

<style lang="stylus" scoped>
.template-cont
    position :fixed;
    height :100%;
    width :100%;
    background :#000;
    top :0;
    z-index :2;
    .close
        padding:1.5rem 1rem;
        text-align :right;
        .close-btn
            color:#fff;
            font-size:0.7rem;
            cursor :pointer;
.swiper-container
    overflow:visible;
    .swiper-pagination
        position :absolute;
        bottom :-1rem;
        left :0;
        color :#fff;
        z-index :invert;
    .img-frame
        margin : 0 auto;
        height :9.2rem;
        text-align :center;
    .img-frame img
        padding:0.2rem;
        background :#fff;
</style>
