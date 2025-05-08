<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3" v-for="fd,key in foods.food_data.fd" :key="key">
        <div class="thumbnail">
          <a href="#">
            <img :src="'https://www.menupan.com'+fd.poster" style="width:230px;height: 150px;">
            <div class="caption">
              <p>{{fd.name}}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="row text-center">
      <ul class="pagination">
        <li v-if="foods.food_data.startPage>1"><a class="link" @click="foods.foodListData(foods.food_data.startPage-1)">&lt;</a></li>
        <li v-for="i,key in foods.range(foods.food_data.startPage,foods.food_data.endPage)" :key="key" 
        :class="i===foods.food_data.curpage?'active':''" @click="foods.foodListData(i)">
          <a class="">{{ i }}</a>
        </li>
        <li v-if="foods.food_data.endPage<foods.food_data.totalpage"><a class="link" @click="foods.foodListData(foods.food_data.endPage+1)">&gt;</a></li>
      </ul>
    </div>
  </div>
</template>
<script>
 import { defineComponent,onMounted } from 'vue';
 import { useFoodsStore } from '@/stores/foods';
 /*
    data(){
    },
    mounted(){
    },
    methods:{
    }
 */
 export default defineComponent({
   setup(){
     const foods=useFoodsStore()
     // onload 
     onMounted(()=>{
       foods.foodListData(1)
     })
     return {
        foods
     }
   }
 })
</script>
<style scoped>
.container{
  margin-top:50px;
}
.row{
  margin: 0px auto;
  width: 960px;
}
a.link:hover{
  cursor: pointer;
}
</style>
