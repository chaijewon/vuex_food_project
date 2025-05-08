import { createRouter,createWebHistory } from "vue-router";
import FoodListView from "@/views/FoodListView.vue";

const routes=[
  {
    path:"/",
    name:'foodList',
    component:FoodListView
  }
]
const router=createRouter({
  history:createWebHistory(process.env.BASE_URL),
  routes
})

export default router

