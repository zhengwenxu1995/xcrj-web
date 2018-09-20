<template>
    <div class="template-cont">
        <div class="close">
            <i class="iconfont close-btn" @click="close">&#xe6df;</i>
        </div>
        <div class="img-list">
            
        </div>
    </div>
</template>

<script>
export default {
    CxrjCaseBrowse:"CxrjCaseBrowse",
    data(){
        return {

        }
    },
    methods:{
        close(){
            this.$store.commit("switch");
        }
    }
}
</script>

<style lang="stylus" scoped>
.template-cont
    position :fixed;
    height :100%;
    width :100%;
    background :#000;
    top :0;
    z-index :2;
    .close
        padding:1.5rem 1rem;
        text-align :right;
        .close-btn
            color:#fff;
            font-size:0.7rem;
            cursor :pointer;
</style>
