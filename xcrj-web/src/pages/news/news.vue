<template>
    <div class="cont">
        <xcrj-header></xcrj-header>
        <xcrj-total-carouse></xcrj-total-carouse>
        <router-view></router-view>
        <xcrj-footer></xcrj-footer>
    </div>
</template>

<script>
import XcrjFooter from "@/components/foot.vue"
import XcrjHeader from "@/components/navHeader.vue"
import XcrjTotalCarouse from "@/components/totalCarouse.vue"


export default {
    
    data(){
        return{

        }
    },
    components:{
        XcrjHeader,
        XcrjFooter,
        XcrjTotalCarouse
    }
}
</script>

<style lang="stylus" scoped>

</style>
