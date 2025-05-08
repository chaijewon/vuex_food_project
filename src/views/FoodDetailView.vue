<template>
  <div class="container">
     <div class="row">
       <table class="table">
        <tbody>
        <tr>
          <td width="30%" class="text-center"
            rowspan="7">
            <img :src="'http://www.menupan.com'+foods.food_detail.poster" style="width: 240px;height: 300px;">
          </td>
          <td colspan="2" width="70%">
            <h3>{{ foods.food_detail.name }}&nbsp;
              <span style="color:orange">{{ foods.food_detail.score }}</span></h3>
          </td>
        </tr>
        <tr>
          <th width="15%">주소</th>
          <td width="55%">{{ foods.food_detail.address }}</td>
        </tr>
        <tr>
          <th width="15%">전화</th>
          <td width="55%">{{ foods.food_detail.phone }}</td>
        </tr>
        <tr>
          <th width="15%">음식종류</th>
          <td width="55%">{{ foods.food_detail.type }}</td>
        </tr>
        <tr>
          <th width="15%">주차</th>
          <td width="55%">{{ foods.food_detail.parking }}</td>
        </tr>
        <tr>
          <th width="15%">영업시간</th>
          <td width="55%">{{ foods.food_detail.time }}</td>
        </tr>
        <tr>
          <th width="15%">테마</th>
          <td width="55%">{{ foods.food_detail.theme }}</td>
        </tr>
        </tbody>
       </table>
       <table class="table">
        <tbody>
        <tr>
          <td>{{ foods.food_detail.content }}</td>
        </tr>
        </tbody>
       </table>
     </div>
     
  </div>
</template>
<script setup>
import { onMounted } from 'vue';
import { useFoodsStore } from '@/stores/foods';
import { useRoute } from 'vue-router';
     const router=useRoute()
     const foods=useFoodsStore()
     // onload 
     onMounted(()=>{
       //alert(router.params.fno)
       foods.foodDetailData(router.params.fno)
     })
    
</script>
<style scoped>
.container{
  margin-top: 50px;
}
.row{
  margin: 0px auto;
  width: 800px;
}
</style>
