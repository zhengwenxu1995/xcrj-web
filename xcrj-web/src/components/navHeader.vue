<template>
    <div class="header">
        <div class="header-frame">
            <div class="header-cont">
                <div class="cxrj-logo">
                    <router-link to="/">
                        <img src="/static/image/logo.jpg" class="logo-img" >
                    </router-link>
                </div>
                <div class="cxrj-name">
                    <h1 class="cxrj-name-title">信长仁捷科技有限公司</h1>
                </div>
                <div class="nav">
                    <ul class="nav-cont">
                        <li :class="{ select:index == nowSelect}" 
                        class="nav-item" v-for="(item,index) in navMenu" 
                        :key="index" 
                        @click="selectNav(index)">
                            <router-link :to="item.path">{{item.navName}}</router-link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    CxrjHeader:"CxrjHeader",
    data(){
        return{
            
        }
    },
    computed:{
        navMenu(){
            return this.$store.state.nav.navMenu;
        },
        nowSelect(){
            return this.$store.state.nav.nowSelect;
        }
    },
    methods:{
        selectNav(index){
            this.$store.commit("changSelect",index)
        }
        
    }

}
</script>

<style lang="stylus" scoped>
.header
    width 100%;
    height :1.5rem;
    background :#fff;
    padding:0.5rem 0;
    .header-frame
        width :90%;
        margin :0 auto;
        .header-cont
            width :100%;
            overflow :hidden;
            .cxrj-logo
                float :left;
                padding :0 ;
                width :1.5rem
                .logo-img
                    vertical-align :middle; 
                    height :1.5rem;
            .cxrj-name
                float :left;
                padding : 0 0.4rem;
                .cxrj-name-title
                    font-size :0.5rem;
                    line-height :1.5rem;
                    width :5rem;
            .nav
                padding : 0.3rem 1rem;
                float :left;
                margin-left :2rem;
            .nav-cont
                display :flex;
                .nav-item
                    margin-left :0.35rem;
                    line-height :0.5rem;
                    //text-align :center;
                    border :0.02rem solid #fff;
                    border-radius :0.7rem;
                    transition :border-color 0.3s;
                .nav-item a
                    display :inline-block;
                    padding:0.1rem 0.5rem;
                    height :0.5rem;
                    color:#009fe9;
                .nav-item:hover
                    border-color : #009fe9;
                .select
                    background: #009fe9;
                .select a
                    color :#fff;
</style>
