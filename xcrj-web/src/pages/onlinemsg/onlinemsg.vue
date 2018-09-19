<template>
    <div class="cont">
        <xcrj-header></xcrj-header>
        <xcrj-total-carouse></xcrj-total-carouse>
        <xcrj-msg-from></xcrj-msg-from>
        <xcrj-msg-list></xcrj-msg-list>
        <xcrj-footer></xcrj-footer>
    </div>
</template>

<script>
import XcrjFooter from "@/components/foot.vue"
import XcrjHeader from "@/components/navHeader.vue"
import XcrjTotalCarouse from "@/components/totalCarouse.vue"
import XcrjMsgFrom from "@/pages/onlinemsg/component/leaveMsgFrom.vue"
import XcrjMsgList from "@/pages/onlinemsg/component/msgList.vue"
export default {
    data(){
        return{

        }
    },
    components:{
        XcrjHeader,
        XcrjFooter,
        XcrjMsgFrom,
        XcrjMsgList,
        XcrjTotalCarouse
    }
}
</script>

<style lang="stylus" scoped>

</style>
