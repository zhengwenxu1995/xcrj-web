<template>
    <div class="template-cont">
        <div class="msg-frame">
            <div class="title">
                <h1>留言：</h1>
            </div>
            <div class="msg-list">
                <div class="none-msg" v-if="false">
                    <p>暂无留言</p>
                </div>
                <ul class="msg-list-cont">
                    <li>
                        <p>
                            <span class="msg-user">刘勇:</span>网页租的很好！！
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="msg-user">刘勇:</span>网页租的很好！！
                        </p>
                    </li>
                    <li>
                        <p>
                            <span class="msg-user">刘勇:</span>网页租的很好！！
                        </p>
                    </li>
                </ul>
            </div>
            <div class="control">
                <button class="next-btn" @click="pageTurning('+')"><i class="iconfont next">&#xe713;</i>上一页</button>
                当前&nbsp;<span>{{nowPage}}</span>&nbsp;页
                <button class="pre-btn" @click="pageTurning('-')">下一页<i class="iconfont pre">&#xe76b;</i></button>
                共&nbsp;{{totalPages}}&nbsp;页
                到第<input type="text" class="jump-page" v-model="numPage">页
                <button class="jump-ok" @click="jumpPage">确认</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    XcrjMsgList:"XcrjMsgList",
    data(){
        return{
            nowPage:1,
            totalPages:1,
            numPage:null
        }
    },
    methods:{
        init(){

        },
        pageTurning(way){
            console.log(way)
        },
        jumpPage(){
            console.log(this.numPage)
        }
    },
    mounted(){

    }
}
</script>

<style lang="stylus" scoped>
.template-cont
    width :100%;
    margin-bottom :0.8rem;
    .msg-frame
        width :90%;
        margin :0 auto;
        .title
            padding:0.5rem 0;
            border-bottom :0.02rem dashed #ccc;
        .title h1
            font-size :0.3rem;
            color :rgb(102,102,102);
        .none-msg
            margin-top :0.2rem;
            padding:0.4rem 0;
        .none-msg p
            text-align :center;
            font-size :0.28rem;
            color:rgb(102,102,102);
        .msg-list-cont
            padding : 0.4rem 1.2rem;
        .msg-list-cont li
            padding-top:0.4rem;
        .msg-list-cont li p
            font-size :0.3rem;
            .msg-user
                letter-spacing :0.1rem;
                display :inline-block;
                width :1.5rem;
        .control
            border-top :0.02rem dashed #ccc;
            text-align :center;
            padding:0.2rem 0;
            margin-top :0.4rem;
            padding-top :0.5rem;
            font-size :0.2rem;
            position :relative;
            .next-btn
                font-size :0.2rem;
                padding : 0.05rem 0.1rem;
                border :0.02rem solid #ccc;
                color:#ccc;
                background :#fff;
                cursor :pointer;
                margin-right :0.2rem;
            .next-btn i
                font-size :0.2rem;
            .pre-btn
                font-size :0.2rem;
                padding : 0.05rem 0.1rem;
                border :0.02rem solid #ccc;
                color:#ccc;
                background :#fff;
                cursor :pointer;
                margin :0 0.2rem;
            .pre-btn i
                font-size :0.2rem;
            .jump-page
                border :0.02rem solid #ccc;
                width :0.5rem;
                height :0.28rem;
                margin :0 0.15rem;
            .jump-ok
                border : 0.02rem solid #ccc;
                background :#fff;
                padding : 0.05rem 0.15rem;
                color:#333;
                margin-left :0.2rem;
                border-radius :0.05rem;
            .jump-ok:hover
                color:#fff;
                background :#ccc;
</style>
