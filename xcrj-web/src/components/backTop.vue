<template>
    <div class="back-top" @click="rollback" >
        <i class="iconfont bt">&#xe63a;</i>
    </div>
</template>

<script>

export default {
    XcrjBackTop:"XcrjBackTop",
    data(){
        return {

        }
    },
    
    methods:{
        rollback(){
            let scrollToptimer = setInterval(function () {
            let top = document.body.scrollTop || document.documentElement.scrollTop;
            let speed = top / 10;
            if (document.body.scrollTop!=0) {
                document.body.scrollTop -= speed;
            }else {
                document.documentElement.scrollTop -= speed;
            }
            if (top == 0) {
                clearInterval(scrollToptimer);
            }
        }, 30)
        }

    },
    mounted(){
        window.addEventListener("scroll",function (e){
            let distance=document.body.scrollTop || document.documentElement.scrollTop;
            if(distance>100){
                this.$store.commit("backTopStatus",true);
            }else{
               this.$store.commit("backTopStatus",false);
            }
            console.log(distance)
            console.log("a")
        })
        
    }
};
</script>

<style lang="stylus" scoped>
.back-top
    height :1rem;
    width :1rem;
    position :fixed;
    z-index :30;
    right:0.5rem;
    bottom :1rem;
    .bt
        width :100%;
        height :100%;
        display :inline-block;
        text-align :center;
        line-height :1rem;
        border-radius :0.1rem;
        background :#009fe9;
        color:#fff;
        font-size :0.32rem;
</style>
