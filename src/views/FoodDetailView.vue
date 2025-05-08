<template>
  <div>
     <h3>{{ $route.params.fno }}</h3>
  </div>
</template>
<script>
import { defineComponent,onMounted } from 'vue';
 import { useFoodsStore } from '@/stores/foods';
export default defineComponent({
  setup() {
    const foods=useFoodsStore()
     // onload 
     onMounted(()=>{
       foods.foodDetailData(this.$route.params.fno)
     })
     return {
        foods
     }
  },
})
</script>
<style scoped>

</style>
