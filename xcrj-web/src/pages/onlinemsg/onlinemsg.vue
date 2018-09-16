<template>
    <div class="cont">
        <cxrj-header></cxrj-header>
        <cxrj-total-carouse></cxrj-total-carouse>
        <cxrj-msg-from></cxrj-msg-from>
        <cxrj-msg-list></cxrj-msg-list>
        <cxrj-footer></cxrj-footer>
    </div>
</template>

<script>
import CxrjFooter from "@/components/foot.vue"
import CxrjHeader from "@/components/navHeader.vue"
import CxrjTotalCarouse from "@/components/totalCarouse.vue"
import CxrjMsgFrom from "@/pages/onlinemsg/component/leaveMsgFrom.vue"
import CxrjMsgList from "@/pages/onlinemsg/component/msgList.vue"
export default {
    data(){
        return{

        }
    },
    components:{
        CxrjHeader,
        CxrjFooter,
        CxrjMsgFrom,
        CxrjMsgList,
        CxrjTotalCarouse
    }
}
</script>

<style lang="stylus" scoped>

</style>
