<template>
    <div class="cont">
        <cxrj-header></cxrj-header>
        <cxrj-total-carouse></cxrj-total-carouse>
        <cxrj-case-list></cxrj-case-list>
        <cxrj-footer></cxrj-footer>
        <cxrj-case-browse v-if="false"></cxrj-case-browse>
    </div>
</template>

<script>
import CxrjFooter from "@/components/foot.vue"
import CxrjHeader from "@/components/navHeader.vue"
import CxrjTotalCarouse from "@/components/totalCarouse.vue"
import CxrjCaseBrowse from "@/components/totalCaseBrowse.vue"
import CxrjCaseList from "@/pages/case/component/caseList.vue"
export default {
    data(){
        return{

        }
    },
    components:{
        CxrjHeader,
        CxrjFooter,
        CxrjTotalCarouse,
        CxrjCaseBrowse,
        CxrjCaseList
    }
}
</script>

<style lang="stylus" scoped>

</style>
