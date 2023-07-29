<template>
    <div class="container">
      <div>path</div>
      <a-button type="primary">
      </a-button>
    </div>
</template>
  
<script setup lang="ts">
import { getCurrentInstance } from 'vue'

let data = '' 
let internalInstance = getCurrentInstance();
let Api = internalInstance && internalInstance.appContext.config.globalProperties.$api
let params = {
  keyword:"",
}
Api.getUser(params).then((res: any)=>{
  console.log('17res', res.payload[0].companyName.name)
})

</script>
  
<style scoped lang="less">

</style>