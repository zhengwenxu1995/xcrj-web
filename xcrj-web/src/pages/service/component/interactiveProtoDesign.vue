<template>
    <div class="template-cont">
        <div class="ipd-frame">
            <div class="ipd-cont">
                <div class="ipd-left">
                    <ul class="ipd-list">
                        <li class="ipd-item">
                            <div class="title">
                                <h1>交互原型设计</h1><span>/ INTERACTIVE PROTOTYPE DESIGN</span>
                            </div>
                            <p class="content">
                                原型设计是交互设计师与PD、PM、网站开发工程师沟通的好工具。而该块的设计在原则上必须是交 互设计师的产物，交互设计以用户为中心的理念会贯穿整个产品。利用交互设计师专业的眼光与经验 直接导至该产品的可用性
                            </p>
                        </li>
                        <li class="ipd-item">
                            <div class="title">
                                <h1>产品视觉设计</h1><span>/ PRODUCT VISUAL DESIGN</span>
                            </div>
                            <p class="content">
                                产品视觉设计是针对眼睛功能的主观形式的表现手段和结果。与视觉传达设计的异同，视觉传达设计属 于视觉设计的一部分，主要针对被传达对象即观众而有所表现，缺少对设计者自身视觉需求因素的诉求。 视觉传达既传达给视觉观众也传达给设计者本人，因此深入的视觉
                            </p>
                        </li>
                    </ul>
                </div>
                <div class="ipd-right">
                    <img src="/static/image/ipd.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    XcrjInteractiveProtoDesign:"XcrjInteractiveProtoDesign",
    data(){
        return {

        }
    },
    methods:{

    }
}
</script>

<style lang="stylus" scoped>
@import "~@/assets/style/varibles.styl";
.template-cont
    width :100%;
    padding:0.4rem 0;
    .ipd-frame
        width :90%;
        margin :0 auto;
        overflow :hidden;
        .ipd-left
            float :left;
            width :11.9rem;
            margin-left:5rem;
        .ipd-right
            float:right;
            margin-right :2rem;
        .ipd-list .ipd-item
            padding :0.4rem 0;
        .ipd-item .title
            padding:0.4rem 0;
        .ipd-item .title h1
            font-size :0.7rem;
            color :$blueColor;
            display :inline-block;
        .ipd-item span
            color:$garyColor;
            font-size :0.28rem;
        .ipd-item .content
            line-height :0.6rem;
            color:$garyColor;
            text-indent :0.5rem;
</style>
