<template>
    <div class="cont">
        <cxrj-header></cxrj-header>
        <cxrj-total-carouse></cxrj-total-carouse>
        <cxrj-we-sevice></cxrj-we-sevice>
        <cxrj-interactive-proto-design></cxrj-interactive-proto-design>
        <cxrj-interface-app-design></cxrj-interface-app-design>

        <cxrj-footer></cxrj-footer>
    </div>
</template>

<script>
import CxrjFooter from "@/components/foot.vue"
import CxrjHeader from "@/components/navHeader.vue"
import CxrjTotalCarouse from "@/components/totalCarouse.vue"
import CxrjInteractiveProtoDesign from "@/pages/service/component/interactiveProtoDesign.vue"
import CxrjInterfaceAppDesign from "@/pages/service/component/interfaceAppDesign.vue"
import CxrjWeSevice from "@/pages/service/component/weSevice.vue"
export default {
    data(){
        return{

        }
    },
    components:{
        CxrjHeader,
        CxrjFooter,
        CxrjTotalCarouse,
        CxrjInteractiveProtoDesign,
        CxrjInterfaceAppDesign,
        CxrjWeSevice
    }
}
</script>

<style lang="stylus" scoped>

</style>
