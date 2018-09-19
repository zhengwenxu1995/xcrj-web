<template>
    <div class="template-cont">
        <div class="case-frame">
            <div class="case-cont">
                <div class="menu-list">
                    <ul class="case-menu">
                        <li class="item" :class="{actived:indexm==menuSelect}" @mouseover="changeMenu(indexm)" v-for="(itemm,indexm) of menuList" :key="indexm">{{itemm}}</li>
                    </ul>
                </div>
                <div class="show-case">
                    <ul class="show-case-frame">
                        <li  v-for="(items,index) of caseImg" :key="index"  v-if="menuSelect==index" >
                            <ul class="case-img">
                                <li v-for="(items,indexs) of items.imgPath" :key="indexs" @click="viewCase(menuSelect,indexs)">
                                    <div class="img-frame">
                                        <img :src="items" alt="">
                                    </div>
                                </li>
                               

                            </ul>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: ["交互设计", "网页设计", "APP设计"],
      menuSelect: 0,
      caseImg:[
          {
              imgPath:[
              "/static/image/caseInter1.jpg",
              "/static/image/caseInter2.jpg",
              "/static/image/caseInter3.jpg",
              "/static/image/caseInter4.jpg",
              "/static/image/caseInter5.jpg",
              "/static/image/caseInter2.jpg",
          ]},
          {
              imgPath:[
              "/static/image/caseweb1.jpg",
              "/static/image/caseweb2.jpg",
              "/static/image/caseweb3.jpg",
              "/static/image/caseweb4.jpg",
              "/static/image/caseweb5.jpg",
              "/static/image/caseweb2.jpg",
          ]},
          {
              imgPath:[
              "/static/image/caseapp1.jpg",
              "/static/image/caseapp2.jpg",
              "/static/image/caseapp3.jpg",
              "/static/image/caseapp4.jpg",
              "/static/image/caseapp5.jpg",
              "/static/image/caseapp2.jpg",
          ]}
      ]
    };
  },
  methods: {
    changeMenu(index) {
      this.menuSelect = index;
    },
    viewCase(select,index){
        console.log("我是第"+select+"组的第"+index+"张图片")
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/varibles.styl';

.template-cont 
    width: 100%;
    padding: 0.5rem;
    .case-frame 
        width: 90%;
        margin: 0 auto;
        .case-cont 
            width: 90%;
            margin: 0 auto;
            .menu-list 
                width: 10rem;
                margin: 0.2rem auto;
                .case-menu 
                    display: flex;
                    justify-content: space-around;
                .case-menu li 
                    background: #fff;
                    color: #333;
                    border: 0.02rem solid $garyColor;
                    letter-spacing: 0.05rem;
                    border-radius: 0.6rem;
                    padding: 0.3rem 0.6rem;
                    font-family: '微软雅黑';
                    font-size: 0.32rem;
                    transition: all 0.5s;
                    cursor: pointer;
                .case-menu .actived 
                    color: #fff;
                    background: $blueColor;
            .show-case 
                width: 100%;
                margin-top: 0.6rem;
                overflow: hidden;
                .show-case-frame 
                    width: 24.72rem;
                    margin: 0 auto;
                    .case-img 
                        display: flex;
                        flex-wrap: wrap;
                    .case-img li 
                        width: 7.2rem;
                        height: 7.2rem;
                        padding: 0.5rem;
                        .img-frame 
                            width: 7.2rem;
                            height: 7.2rem;
                            overflow: hidden;
                            cursor :pointer;
                        .img-frame img 
                            width: 7.4rem;
                            height: 7.2rem;
                            transition: all 0.4s;
                        .img-frame:hover img 
                            margin-left: -0.2rem;

</style>
