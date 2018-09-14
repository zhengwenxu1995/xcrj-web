<template>
    <div class="template-cont">
        <div class="close">
            <i class="iconfont close-btn">&#xe6df;</i>
        </div>
        
    </div>
</template>

<script>
export default {
    CxrjCaseBrowseHome:"CxrjCaseBrowseHome",
    data(){
        return {

        }
    },

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
