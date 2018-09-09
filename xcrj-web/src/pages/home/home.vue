<template>
    <div class="cont">
        <cxrj-header></cxrj-header>
        <carousel-map-home></carousel-map-home>
        <cxrj-footer></cxrj-footer>
    </div>
</template>

<script>
import CxrjHeader from "@/components/navHeader.vue"
import CxrjFooter from "@/components/foot.vue"
import CarouselMapHome from "@/pages/home/component/carouselMapHome.vue"
export default {
    data(){
        return{

        }
    },
    components:{
        CxrjHeader,
        CxrjFooter,
        CarouselMapHome
    }
}
</script>

<style lang="stylus" scoped>

</style>
