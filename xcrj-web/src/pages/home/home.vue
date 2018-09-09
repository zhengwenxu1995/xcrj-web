<template>
    <div class="cont">
        <cxrj-header></cxrj-header>
        <cxrj-footer></cxrj-footer>
    </div>
</template>

<script>
import CxrjHeader from "@/components/navHeader.vue"
import CxrjFooter from "@/components/foot.vue"
export default {
    data(){
        return{

        }
    },
    components:{
        CxrjHeader,
        CxrjFooter
    }
}
</script>

<style lang="stylus" scoped>

</style>
