<template>
    <div class="cont">
        <xcrj-header></xcrj-header>
        <xcrj-total-carouse></xcrj-total-carouse>
        <xcrj-news></xcrj-news>
        <xcrj-footer></xcrj-footer>
    </div>
</template>

<script>
import XcrjFooter from "@/components/foot.vue"
import XcrjHeader from "@/components/navHeader.vue"
import XcrjTotalCarouse from "@/components/totalCarouse.vue"
import XcrjNews from "@/pages/news/component/newsCont.vue"

export default {
    
    data(){
        return{

        }
    },
    components:{
        XcrjHeader,
        XcrjFooter,
        XcrjNews,
        XcrjTotalCarouse
    }
}
</script>

<style lang="stylus" scoped>

</style>
