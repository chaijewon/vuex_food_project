import { defineStore } from "pinia";
import axios from "axios";

export const useFoodsStore=defineStore('foods',{
   state:()=>({
    // 데이터 저장 
    food_data:{}
    // food_detail:{}
   }),

   actions:{
     foodListData(page){
       axios.get('http://127.0.0.1:8000/web/food_list/',{
         params:{
            page:page
         }
       }).then(res=>{
           this.food_data=res.data
       })
     },
     range(start,end){
      let arr=[]
      let len=end-start
      for(let i=0;i<=len;i++)
      {
        arr[i]=start
        start++
      }
      return arr
    }
   }
})