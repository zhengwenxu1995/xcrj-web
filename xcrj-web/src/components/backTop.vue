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
            showBackTop:false
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
        },
        backTop(){
            let distance=document.body.scrollTop || document.documentElement.scrollTop;
            if(distance>300){
                //父子组件传值
                this.showBackTop=true;
            }else{
                this.showBackTop=false;
            }
            this.$emit("showBackTopFn", this.showBackTop)
        }
    },
    mounted(){
        window.addEventListener("scroll",this.backTop)

    }
};
</script>

<style lang="stylus" scoped>
.back-top
    height :1rem;
    width :1rem;
    position :fixed;
    z-index :30;
    right:1rem;
    bottom :2rem;
    cursor :pointer;
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
