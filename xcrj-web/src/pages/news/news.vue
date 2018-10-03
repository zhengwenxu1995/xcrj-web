<template>
    <div class="cont">
        <xcrj-header></xcrj-header>
        <xcrj-total-carouse></xcrj-total-carouse>
        <router-view></router-view>
        <xcrj-footer></xcrj-footer>
        <transition name="fade">
            <xcrj-back-top @showBackTopFn="showBackTopFn" v-show="showHideBackTop"></xcrj-back-top>
        </transition>
    </div>
</template>

<script>
import XcrjFooter from "@/components/foot.vue"
import XcrjHeader from "@/components/navHeader.vue"
import XcrjTotalCarouse from "@/components/totalCarouse.vue"
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
