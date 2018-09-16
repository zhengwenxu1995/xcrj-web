<template>
    <div class="template-cont">
        <div class="iappd-frame">
            <div class="iappd-cont">
                <div class="iappd-left">
                    <img src="/static/image/iappd.jpg" alt="">
                </div>
                <div class="iappd-right">
                    <ul class="iapp-list">
                        <li class="iappd-item">
                            <div class="title">
                                <h1>软件界面设计</h1><span>/ SOFTWARE INTERFACEDESIGN</span>
                            </div>
                            <p class="content">UI(User Interface)即用户界面，也称人机接口。是指用户和某些系统进行交互方法的集合，这些系统不单单指电脑程序，还包括某种特定的机器，设备，复杂的工具等。</p>
                        </li>
                        <li class="iappd-item">
                            <div class="title">
                                <h1>移动产品设计</h1><span>/ MOBILE PRODUCT DESIGN</span>
                            </div>
                            <p class="content">移动手机ui设计是手机软件的人机交互、操作逻辑、界面美观的整体设计。置身于手机操作系统中人机交互的窗口，设计界面必须基于手机的物理特性和软件的应用特性进行合理的设计，界面设计师首先应对手机的系统性能有所了解。</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    CxrjInterfaceAppDesign:"CxrjInterfaceAppDesign",
    data(){
        return {

        }
    },
    methods:{

    },

}
</script>

<style lang="stylus" scoped>
@import "~@/assets/style/varibles.styl"
.template-cont
    width :100%;
    padding :0.2rem 0 0.8rem 0;
    .iappd-frame
        width :90%;
        margin :0 auto ;
        .iappd-cont
            width :100%;
            overflow :hidden;
            .iappd-left
                float :left;
                margin-left:5rem;
            .iappd-right
                float :right;
                width :11.9rem;
                margin-right :2rem;
                margin-top :0.7rem;
                .iappd-list .iappd-item
                    padding :0.4rem 0;
                .iappd-item .title
                    padding:0.4rem 0;
                .iappd-item .title h1
                    font-size :0.7rem;
                    color :$blueColor;
                    display :inline-block;
                .iappd-item span
                    color:$garyColor;
                    font-size :0.28rem;
                .iappd-item .content
                    line-height :0.6rem;
                    color:$garyColor;
                    text-indent :0.5rem;

</style>
