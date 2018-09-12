<template>
    <div class="template-cont">
        <div class="slogan-frame">
            <div class="slogan-cont">
                <h1 class="slogan-title">鼠标一按马上体验</h1>
                <p class="slogan-word">提供专业的交互原型设计、产品视觉设计、移动产品设计、软件界面设计，为你提供解决方法.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    CxrjSlogan:"CxrjSlogan",
    data(){
        return{

        }
    }
}    
</script>

<style lang="stylus" scoped>
.template-cont
    background-image :url('/static/image/slogan.png');
    background-size :100%;
    background-repeat :no-repeat
    height :4.6rem;
    overflow :hidden;
    .slogan-frame
        padding-bottom :4.6rem;
        width :90%;
        margin :0 auto;
        .slogan-cont
            padding:1rem 1rem;
            text-align :center;
            .slogan-title
                font-size :0.6rem;
                color:#fff;
                font-weight :600;
                height :1rem;
                line-height :1rem;
                margin-bottom  :0.7rem;
                cursor :pointer;
            .slogan-word
                color:#fff;
                font-size:0.3rem;
                line-height :0.7rem;
                height :0.7rem;
                cursor :pointer;

</style>
