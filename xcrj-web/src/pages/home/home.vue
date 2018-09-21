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
        <xcrj-back-top v-if="backTop"></xcrj-back-top>
        <xcrj-case-browse v-if="false"></xcrj-case-browse>
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
        return {

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
    computed:{
        backTop(){
            return this.$store.state.nav.backTop;
        }
    },
}
</script>

<style lang="stylus" scoped>

</style>