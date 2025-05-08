import { createRouter,createWebHistory } from "vue-router";
import FoodListView from "@/views/FoodListView.vue";
import FoodDetailView from "@/views/FoodDetailView.vue";

const routes=[
  {
    path:"/",
    name:'foodList',
    component:FoodListView
  },
  {
    path:'/food/detail/:fno',
    name:'FoodDetailView',
    component:FoodDetailView
  }
]
const router=createRouter({
  history:createWebHistory(process.env.BASE_URL),
  routes
})

export default router

