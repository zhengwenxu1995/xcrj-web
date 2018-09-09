<template>
    <div class="foot">
        <div class="foot-frame">
            <div class="foot-cont">
                <div class="cont-top">
                    <div class="foot-web-frame">
                        <dl class="foot-web">
                            <dt class="title">网页</dt>
                            <dd class="item"><span>服务项目</span></dd>
                            <dd class="item"><span>关于我们</span></dd>
                            <dd class="item"><span>新闻动态</span></dd>
                            <dd class="item"><span>联系我们</span></dd>
                        </dl>
                    </div>
                    <div class="foot-server-frame">
                        <dl class="foot-server">
                            <dt class="title">服务</dt>
                            <dd class="item"><span>在线金融</span></dd>
                            <dd class="item"><span>相关资讯</span></dd>
                            <dd class="item"><span>互动新闻</span></dd>
                            <dd class="item"><span>数据分析</span></dd>
                        </dl>
                    </div>
                    <div class="foot-case-frame">
                        <dl class="foot-case">
                            <dt class="title">案例</dt>
                            <dd class="item"><span>全部</span></dd>
                            <dd class="item"><span>网站</span></dd>
                            <dd class="item"><span>APP</span></dd>
                        </dl>
                    </div>
                    <div class="foot-contact-frame">
                        <dl class="foot-contact">
                            <dt class="title">联系</dt>
                            <dd class="item">电话:<span>010-6852388</span></dd>
                            <dd class="item">传真:<span>010-6852485</span></dd>
                            <dd class="item">邮箱:<span>cxrj@126.com</span></dd>
                            <dd class="item">地址:<span>北京市海淀区上地五路000号</span></dd>
                        </dl>
                    </div>
                </div>
                <div class="cont-bottom">
                    <p class="copy-cont">Copyright&nbsp;&copy;&nbsp;2018&nbsp;All&nbsp;Rights&nbsp;Reserved.&nbsp;北京信长仁捷科技有限公司&nbsp;版权所有</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    CxrjFooter:"CxrjFooter",
    data(){
        return{

        }
    }
}
</script>

<style lang="stylus" scoped>
.foot
    width :100%;
    padding :0.8rem 0 0.7rem 0;
    background:rgba(23,23,23.0.89);
    .foot-frame
        width :90%;
        margin :0 auto ;
        .cont-top
            width :100%;
            box-sizing :border-box;
            color:#fff;
            display :flex;
            padding:0 2.5rem 0.5rem 2.5rem;
            justify-content :space-around;
            .title
                font-size :0.27rem;
                padding:0.25rem 0;
                text-align :center;
                color :#666665;
            .item
                padding:0.1rem 0;
                font-size:0.24rem;
                color :#666665;
            .item:hover span
                color:#fff;
                cursor :pointer;
        .cont-bottom
            width :100%;
            text-align :center;
            border-top:0.02rem solid #666665;
            padding-top :0.3rem ;
            .copy-cont
                color :#666665; 

</style>
