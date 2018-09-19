<template>
    <div class="template-cont">
        <div class="from-frame">
            <div class="msg-from">
                <div class="title">
                    <h1>发表您的留言：</h1>
                </div>
                <div class="msg-from-cont">
                    <ul class="user-details">
                        <li><span class="user-name">姓名：</span><input type="text"><span class="error">姓名不能为空！</span></li>
                        <li><span class="user-name">邮箱：</span><input type="text"><span class="error">邮箱不能为空</span></li>
                        <li><span class="user-name">电话：</span><input type="text"><span class="error">电话不能为空</span></li>
                    </ul>
                    <div class="msg-cont">
                        <span>
                            内容：
                        </span>
                        <textarea placeholder="留言需审核后才会显示" cols="100" rows="10"></textarea>
                    </div>
                    <div class="submit">
                        <button class="btn">提交留言</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    XcrjMsgFrom:"XcrjMsgFrom",
    data(){
        return {

        }
    },

}
</script>

<style lang="stylus" scoped>
.template-cont
    width :100%;
    .from-frame
        width :90%;
        margin :0 auto ;
        .msg-from
            padding:1rem 0;
            .title h1
                font-size :0.28rem;
                color :rgb(102,102,102);
                margin-bottom :1rem;
            .msg-from-cont
                width :100%;
                padding-left :1rem;
                box-sizing :border-box;
                .user-details
                    width :100%;
                    display :flex;
                    height :1.2rem;
                .user-details li
                    flex :1;
                    padding :0.2rem 0.5rem;
                .user-details li .user-name
                    font-size :0.28rem;
                    letter-spacing :0.1rem;
                    padding-right :0.1rem;
                    color :rgb(102,102,102);
                .user-details li input
                    border :0.02rem solid #ccc;
                    height :0.6rem;
                    width :4rem;
                .user-details li input:focus
                    border :0.03rem solid #009fe9;
                .user-details li .error
                    display :inline-block;
                    margin-left :0.1rem;
                    font-size :0.24rem;
                    color:#f00;
                .msg-cont
                    height :3rem;
                    padding:0.5rem 0.2rem;
                .msg-cont span
                    font-size :0.28rem;
                    color :rgb(102,102,102);
                    letter-spacing :0.1rem;
                .msg-cont textarea
                    height :3rem;
                    width :81%;
                    margin-left :0.2rem;
                    border :0.02rem solid #ccc;
                    resize :none;
                .msg-cont textarea:focus
                    border:0.02rem solid #009fe9;
                .submit
                    padding :0.2rem 1.7rem;
                    .btn
                        padding : 0.2rem 1rem;
                        background :#009fe9;
                        color:#fff;
                        font-size :0.2rem;
                        cursor :pointer;
</style>
