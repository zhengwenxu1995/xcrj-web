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
        <transition name="fade">
            <xcrj-back-top @showBackTopFn="showBackTopFn" v-show="showHideBackTop"></xcrj-back-top>
        </transition>
    </div>
</template>

<script>
import XcrjFooter from "@/components/foot.vue"
import XcrjHeader from "@/components/navHeader.vue"
import XcrjTotalCarouse from "@/components/totalCarouse.vue"
import XcrjCaseBrowse from "@/components/totalCaseBrowse.vue"
import XcrjCaseList from "@/pages/case/component/caseList.vue"
import XcrjBackTop from "@/components/backTop.vue"
export default {
    data(){
        return{
            showHideBackTop:false
        }
    },
    components:{
        XcrjHeader,
        XcrjFooter,
        XcrjTotalCarouse,
        XcrjCaseBrowse,
        XcrjCaseList,
        XcrjBackTop
    },
    methods:{
        showBackTopFn(showHide){
            this.showHideBackTop=showHide;
            console.log(showHide)
        }
    },
    computed:{
        backTop(){
            return this.$store.state.nav.backTop;
        },
        showCaseList(){
            //return true;
            return this.$store.state.caseBrows.showCaseLise
        }
    },
    watch:{
        //侦听属性
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
