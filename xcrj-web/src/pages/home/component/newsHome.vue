<template>
    <div class="template-cont">
        <div class="news-frame">
            <div class="news-cont">
                <div class="title">
                    <h1>新闻资讯/</h1><span>NEW</span>
                </div>
                <div class="news-list">
                    <ul class="news-top">
                        <li class="news-img">
                            <img src="/static/image/news.jpg" alt="">
                        </li>
                        <li class="news-msg">
                           <a href="javascript:;">
                                <h2>科学家：看3D电影能让你的大脑更灵活</h2>
                           </a>
                            <div>
                                <p>
                                据新华社看3D电影让人享受新奇的视觉体验，英国伦敦戈德史密斯大学一项研究显示，这还有助脑力提升。讯科技讯（范晓东）5月26日，实时社交视频平台天鸽互动控股今日公布截至2015年截止3月31日度季度业绩。腾讯科技讯（范晓东）5月26日，实时社交视频平台天鸽互动控股今日公布截至2015年截止3月31日度季度业绩。...讯科技讯（范晓东）5月26日，实时社交视频平台天鸽互动控股今日公布截至2015年截止3月31日度季度业绩。腾讯科技讯（范晓东）5月26日，实时社交视频平台天鸽互动控股今日公布截至2015年截止3月31日度季度业绩。...讯科技讯（范晓东）5月26日，实时社交视频平台天鸽互动控股今日公布截至2015年截止3月31日度季度业绩。腾讯科技讯（范晓东）5月26日，实时社交视频平台天鸽互动控股今日公布截至2015年截止3月31日度季度业绩。
                            </p>
                            </div>
                        </li>
                    </ul>
                    <ul class="news-bottom">
                        <li class="time">
                            <ul class="time-list">
                                <li>2017/03/27</li>
                                <li>2017/03/27</li>
                                <li>2017/03/27</li>
                            </ul>
                        </li>
                        <li class="detail">
                            <ul class="detail-list">
                                <li>
                                    <a href="javascript:;">
                                        <h1>
                                            永洪科技创始人何春涛：金融机构在大数据时代应如何进步
                                        </h1>
                                    </a>
                                    <p>
                                        在人类社会进入到 大数据时代 后，金融活动对数据的依赖有增无减，众多的金融环节都需要依赖对数据的收集和分析而完成。...
                                    </p>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                        <h1>
                                           看球之余聊聊它 体育行业大数据做了哪些贡献？
                                        </h1>
                                    </a>
                                    <p>
                                        我们都知道，大数据在数据管理、存储、分析等领域具有得天独厚的优势，这些数据管理技术对于体育赛事的很多细节，对于比赛...
                                    </p>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                        <h1>
                                            如何避免自嗨型的数据分析？你必知的三大法则
                                        </h1>
                                    </a>
                                    <p>
                                        近日，京东宣布与沃尔玛达成战略合作，在这两家电商和零售巨头的战略合作中，沃尔玛将获得京东增发的约5%股份，而京东将...
                                    </p>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default{
    XcrjNews:"XcrjNews",
    data(){
        return{
            
        }
    }
}    
</script>

<style lang="stylus" scoped>
.template-cont
    width :100%;
    height :21rem;
    overflow :hidden;
    .news-frame
        height :0;
        padding-bottom :21rem;
        width :90%;
        margin :0 auto;
        .news-cont
            width :100%;
            padding:2rem 1.5rem 1rem;
            .title h1
                color:rgb(26, 41, 102);
                font-size :0.62rem;
                font-weight :600;
                display :inline-block;
            .title span
                color:rgb(102, 102, 102);
                font-weight :600;
                font-size :0.4rem;
            .news-list
                margin-top :1rem;
                width:100%;
                height :100%;
                .news-top
                    width :100%;
                    display :flex;
                    margin-bottom :1.5rem;
                    .news-img
                        width :10rem;
                        flex :0.7;
                        padding:0 2rem 0 0;
                    .news-msg
                        flex :1.3
                        padding:0 4rem 0 0;
                        box-sizing :border-box;
                    .news-msg a h2
                        font-size :0.33rem;
                        color :#333;
                        font-weight :600;
                        font-family: "微软雅黑";
                        vertical-align :top; 
                        padding-bottom :0.5rem;
                    .news-msg p
                        line-height :0.8rem;
                        letter-spacing :0.05rem;
                        text-indent :0.6rem;
                        text-align :justify;
                        color: rgb(102, 102, 102);
                .news-bottom
                    display :flex;
                    .time
                        flex :0.4;
                        .time-list
                            border-right :0.02rem solid #ccc;
                        .time-list li
                            color:#666;
                            position :relative;
                            height :2rem
                            padding:00 0.6rem;
                            box-sizing :border-box;
                            line-height :2rem;
                        .time-list li:after
                            content  :"";
                            display :block;
                            width :0.2rem;
                            height :0.2rem;
                            background :#bababa;
                            border:0.05rem solid #f4f4f4;
                            border-radius :100%;
                            position :absolute;
                            right :-0.15rem;
                            top:50%;
                            margin-top:-0.1rem;
                    .detail
                        flex :4.6;
                        padding-left :0.8rem;
                        .detail-list li
                            height :2rem;
                        .detail-list li a h1
                            font-size :0.32rem;
                            color:#666;
                            padding:0.4rem 0.2rem 0.4rem 0;
                        .detail-list li a h1:hover
                            color:#f13a3a;   
                        .detail-list li p
                            color #333;
</style>
