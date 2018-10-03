<template>
    <div class="cont">
        <xcrj-header></xcrj-header>
        <carousel-map-home></carousel-map-home>
        <xcrj-design-home></xcrj-design-home>
        <xcrj-team></xcrj-team>
        <xcrj-case></xcrj-case>
        <xcrj-slogan></xcrj-slogan>
        <xcrj-news></xcrj-news>
        <xcrj-footer></xcrj-footer>
        <transition name="fade">
            <xcrj-back-top @showBackTopFn="showBackTopFn" v-show="showHideBackTop"></xcrj-back-top>
        </transition>
        <!-- <xcrj-case-browse v-if="true"></xcrj-case-browse> -->
    </div>
</template>

<script>
import XcrjHeader from "@/components/navHeader.vue"
import XcrjFooter from "@/components/foot.vue"
import XcrjBackTop from "@/components/backTop.vue"
import CarouselMapHome from "@/pages/home/component/carouselMapHome.vue"
import XcrjDesignHome from "@/pages/home/component/designHome.vue"

import XcrjTeam from "@/pages/home/component/teamHome.vue"
import XcrjCase from "@/pages/home/component/caseHome.vue"
import XcrjSlogan from "@/pages/home/component/sloganHome.vue"
import XcrjNews from "@/pages/home/component/newsHome.vue"
import XcrjCaseBrowse from "@/components/totalCaseBrowse.vue"
export default {
    data(){
        return{
            showHideBackTop:false
        }
    },
    components:{
        XcrjHeader,
        XcrjFooter,
        CarouselMapHome,
        XcrjDesignHome,
        XcrjTeam,
        XcrjCase,
        XcrjSlogan,
        XcrjNews,
        XcrjCaseBrowse,
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
.fade-enter-active 
  transition: all .8s ease;

.fade-leave-active 
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
.fade-enter, .fade-leave-to
  opacity: 0;
</style>