<template>
    <div class="cont">
        <xcrj-header></xcrj-header>
        <xcrj-total-carouse></xcrj-total-carouse>
        <xcrj-we-sevice></xcrj-we-sevice>
        <xcrj-interactive-proto-design></xcrj-interactive-proto-design>
        <xcrj-interface-app-design></xcrj-interface-app-design>
        <transition name="fade">
            <xcrj-back-top @showBackTopFn="showBackTopFn" v-show="showHideBackTop"></xcrj-back-top>
        </transition>
        <xcrj-footer></xcrj-footer>
    </div>
</template>

<script>
import XcrjFooter from "@/components/foot.vue"
import XcrjHeader from "@/components/navHeader.vue"
import XcrjTotalCarouse from "@/components/totalCarouse.vue"
import XcrjInteractiveProtoDesign from "@/pages/service/component/interactiveProtoDesign.vue"
import XcrjInterfaceAppDesign from "@/pages/service/component/interfaceAppDesign.vue"
import XcrjWeSevice from "@/pages/service/component/weSevice.vue"
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
        XcrjInteractiveProtoDesign,
        XcrjInterfaceAppDesign,
        XcrjWeSevice,
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
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
