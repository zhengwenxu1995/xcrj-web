<template>
    <div class="template-cont">
        <div class="show-frame">
            <div class="show-cont">
                <h1 class="news-title">{{news.title}}</h1>
                <div class="phase-cont" v-html="news.phaseCont">
                </div>
                <div class="control">
                    <ul class="newsSwitch">
                        <li><p v-if="news.preStatus" class="control-cont"><span class="article">上一篇</span>{{news.nextTitle}}</p></li>
                        <li><p v-if="news.nextStatus" class="control-cont"><span class="article">下一篇</span>{{news.preTitle}}</p></li>
                    </ul>
                    <div class="share">
                        <h1 class="share-title">分享到：</h1>
                        <ul class="shareBtn">
                            <li><button title="分享到微信" class="wx">微信</button></li>
                            <li><button title="分享到微博" class="wb">微博</button></li>
                            <li><button title="分享到QQ空间" class="qq">QQ空间</button></li>
                            <li><button title="分享到豆瓣" class="db">豆瓣</button></li>
                            <li><button title="分享到贴吧" class="tb">贴吧</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            news:{
                title:"永洪科技创始人何春涛：金融机构在大数据时代应如何进步",
                phaseCont:`<p>在人类社会进入到大数据时代后，金融活动对数据的依赖有增无减，众多的金融环节都需要依赖对数据的收集和分析而完成。金融机构已经越发认识到了数据对于经营的重要性，但在如何利用数据为自身服务上还存在着诸多的盲区</p>
                            <p>近期，围绕着如何利用大数据技术更好地为金融机构服务等一系列问题，中国金融信息网 专访 了大数据技术专家、永洪商智科技公司(以下简称永洪科技)创始人兼CEO何春涛以及他的核心团队人员。</p>`,
                nextStatus:true,
                nextTitle:"如何避免自嗨型的数据分析？你必知的三大法则",
                preStatus:true,
                preTitle:"永洪科技创始人何春涛：金融机构在大数据时代应如何进步"
            }
        }
    },
    methods:{
        url(){
            this.title= decodeURIComponent(this.$route.query.title);
            // console.log(this.title+'NIHAO')
        }
    },
    computed:{

    },
    mounted(){
        this.url()
    }
}
</script>

<style lang="stylus" scoped>
@import "~@/assets/style/varibles.styl"
.template-cont
    width :100%;
    padding : 1rem 0 0.6rem 0;
    .show-frame
        width :90%;
        margin :0 auto;
    .show-cont
        width :100%;
        padding : 0 2rem;
        box-sizing :border-box;
    .news-title
        font-size :0.5rem;
        color:#333;
        font-family :'微软雅黑';
        padding-bottom :1.2rem;
    .phase-cont
        border-top :1px dashed #f0efef;
        border-bottom :1px dashed #f0efef;
        padding : 0.6rem 0;
        color :#999999;
        text-indent :0.6rem;
        font-size :0.3rem;
        line-height :0.5rem;
        letter-spacing :0.01rem;
    .control
        margin-top :0.3rem;
        overflow :hidden;
        .newsSwitch
            float :left;
        .newsSwitch li
            padding : 0.3rem 0;
            .control-cont
                font-size :0.3rem;
                color :#333;
            .article
                padding-right :0.8rem;
        .share
            float :right;
            .share-title
                float :left;
                line-height :1.65rem;
                color :#333;
                font-size :0.3rem;
            .shareBtn
                float :left;
            .shareBtn li
                line-height :1.65rem;
                float :left;
                margin-left :0.3rem;
            .shareBtn li button
                border-radius :100%;
                text-indent :1rem;
                white-space :nowrap;
                overflow :hidden;
                height :0.66rem;
                width :0.66rem;
                background :url("/static/image/smallIcon.png");
        .share .shareBtn li .wx
                    background :url("/static/image/smallIcon.png") -1302px -100px no-repeat;
        .share .shareBtn li .wb
                    background :url("/static/image/smallIcon.png") -1302px -190px no-repeat;
        .share .shareBtn li .qq
                    background :url("/static/image/smallIcon.png") -1302px -235px no-repeat
        .share .shareBtn li .db
                    background :url("/static/image/smallIcon.png") -1302px -730px no-repeat
        .share .shareBtn li .tb
                    background :url("/static/image/smallIcon.png") -1302px -595px no-repeat
</style>
