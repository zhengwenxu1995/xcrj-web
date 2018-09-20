<template>
    <div class="cont">
        <xcrj-header></xcrj-header>
        <xcrj-total-carouse></xcrj-total-carouse>
        <!-- <router-view></router-view> -->
        <xcrj-case-list></xcrj-case-list>
        <xcrj-footer></xcrj-footer>
        <transition name="fade">
            <xcrj-case-browse v-if="showCaseList"></xcrj-case-browse>
        </transition>
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
    },
    computed:{
        showCaseList(){
            //return true;
            return this.$store.state.caseBrows.showCaseLise
        }
    },
    watch:{
        //侦听属性
    },
    methods:{
        //方法
    }
}
</script>

<style lang="stylus" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
