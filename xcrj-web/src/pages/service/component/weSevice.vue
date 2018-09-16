<template>
    <div class="template-cont">
        <div class="weService-frame">
            <div class=weService-cont>
                <div class="weService-left">
                    <img src="/static/image/weservice.jpg" alt="">
                </div>
                <div class="weService-right">
                    <div class="title">
                        <h1>我们的服务</h1><span>/ OUT SERVICE</span>
                    </div>
                    <p>
                        IT服务，是指在信息技术领域服务商为其用户提供信息咨询、软件升级、硬件维修等全方位的服务。具体业务包括：产品维护服务、IT专业服务、集成和开发服务、IT管理外包服务等。
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    CxrjWeSevice:"CxrjWeSevice",
    data(){
        return {

        }
    },
    methods:{

    }
}
</script>

<style lang="stylus" scoped>
@import "~@/assets/style/varibles.styl"
.template-cont
    width :100%;
    .weService-frame
        padding : 0.2rem 0;
        width :100%;
        overflow :hidden;
        .weService-left
            float :left;
        .weService-right
            float :left;
            margin-left :1rem;
            width :11rem;
            padding:2rem 0 0.2rem 0;
            margin-top :2rem;
            .title
                padding:0.2rem 0 0.5rem 0;
            .title h1
                font-size :0.7rem;
                display :inline-block;
                color:$blueColor;
            .title  span
                color:$garyColor;
                font-size:0.3rem;
        .weService-right p
            font-size :0.3rem;
            line-height :0.6rem;
            text-indent :0.4rem;
            color:$garyColor;
</style>
