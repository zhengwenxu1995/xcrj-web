<template>
    <div class="cont">
        <cxrj-header></cxrj-header>
        <cxrj-total-carouse></cxrj-total-carouse>
        <cxrj-news></cxrj-news>
        <cxrj-footer></cxrj-footer>
    </div>
</template>

<script>
import CxrjFooter from "@/components/foot.vue"
import CxrjHeader from "@/components/navHeader.vue"
import CxrjTotalCarouse from "@/components/totalCarouse.vue"
import CxrjNews from "@/pages/news/component/newsCont.vue"

export default {
    
    data(){
        return{

        }
    },
    components:{
        CxrjHeader,
        CxrjFooter,
        CxrjNews,
        CxrjTotalCarouse
    }
}
</script>

<style lang="stylus" scoped>

</style>
