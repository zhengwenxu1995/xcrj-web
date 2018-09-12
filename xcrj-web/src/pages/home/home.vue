<template>
    <div class="cont">
        <cxrj-header></cxrj-header>
        <carousel-map-home></carousel-map-home>
        <cxrj-design-home></cxrj-design-home>
        <cxrj-team></cxrj-team>
        <cxrj-case></cxrj-case>
        <cxrj-slogan></cxrj-slogan>
        <cxrj-news></cxrj-news>
        <cxrj-footer></cxrj-footer>
    </div>
</template>

<script>
import CxrjHeader from "@/components/navHeader.vue"
import CxrjFooter from "@/components/foot.vue"
import CarouselMapHome from "@/pages/home/component/carouselMapHome.vue"
import CxrjDesignHome from "@/pages/home/component/designHome.vue"

import CxrjTeam from "@/pages/home/component/teamHome.vue"
import CxrjCase from "@/pages/home/component/caseHome.vue"
import CxrjSlogan from "@/pages/home/component/sloganHome.vue"
import CxrjNews from "@/pages/home/component/newsHome.vue"
export default {
    data(){
        return{

        }
    },
    components:{
        CxrjHeader,
        CxrjFooter,
        CarouselMapHome,
        CxrjDesignHome,
        CxrjTeam,
        CxrjCase,
        CxrjSlogan,
        CxrjNews
    }
}
</script>

<style lang="stylus" scoped>

</style>
