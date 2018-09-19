<template>
    <div class="cont">
        <xcrj-header></xcrj-header>
        <xcrj-total-carouse></xcrj-total-carouse>
        <xcrj-case-list></xcrj-case-list>
        <xcrj-footer></xcrj-footer>
        <xcrj-case-browse v-if="false"></xcrj-case-browse>
    </div>
</template>

<script>
import XcrjFooter from "@/components/foot.vue"
import XcrjHeader from "@/components/navHeader.vue"
import XcrjTotalCarouse from "@/components/totalCarouse.vue"
import XcrjCaseBrowse from "@/components/totalCaseBrowse.vue"
import XcrjCaseList from "@/pages/case/component/caseList.vue"
export default {
    data(){
        return{

        }
    },
    components:{
        XcrjHeader,
        XcrjFooter,
        XcrjTotalCarouse,
        XcrjCaseBrowse,
        XcrjCaseList
    }
}
</script>

<style lang="stylus" scoped>

</style>
