<template>
  <div class="container">
    <div>keep-alive-list-列表页面</div>
    <div>
      <span>接口数据：</span>
      <span v-for="(item, index) in nameList" :key="index">{{ item }}</span>
    </div>
    <div class="keep-table">
      <el-table :data="tableData" style="width: 500px">
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="address" label="Address" />
      </el-table>
    </div>
    <div class="keep-pagination">
      <el-pagination
        layout="prev, pager, next"
        v-model:current-page="currentPage"
        :page-size="1"
        :total="total"
        @current-change="handleCurrentChange"
      />
    </div>
    <div>
      <span>输入框：</span>
      <el-input v-model="KValue"></el-input>
    </div>
    <div>
      <!-- <router-link to='/menu/keepalivesnow'>
        <button>查看详情页keep-aliva-details</button>
      </router-link> -->
      <button @click="toList">查看详情页keep-aliva-details</button>
      <button @click="getTableList('add1')">获取表格数据</button>
    </div>
  </div>
</template>

<script setup lang="ts" name="keepalive">
import { useRouter } from "vue-router"
import { useKeepStore } from '@/views/stores/keepalive'
import { getCurrentInstance } from 'vue'
const router = useRouter()
let keepStoreData = useKeepStore()
const KValue = ref('')
// 跳转详情
const toList = ()=>{
    // if(keepStoreData.includeArr.indexOf('keepalive') < 0){ // 没有缓存该组件就增加该组件的缓存
    //   keepStoreData.includeArr.push('keepalive')
    // }
    keepStoreData.includeArr = ['keepalive']
    router.push({
      path: '/menu/keepalivesnow'
    })
  }
// 表格
let tableData = ref([])
let total = ref(2)
let currentPage = ref(1)
const handleCurrentChange = (val:number)=>{
  console.log('81',val)
}
// 测试接口
let internalInstance = getCurrentInstance();
let Api = internalInstance && internalInstance.appContext.config.globalProperties.$api
let params = {}
let nameList = ref([])
let getTableList = (add:string)=>{
  Api.getVideoList(params).then((res: any)=>{
    nameList.value = res.payload || []
    tableData.value = res.payload.map((item:any)=>{
      return {
        name: item,
        address: add
      }
    })
  })
}
getTableList('add2')
// keep生命周期
onActivated(() => {
  // 调用时机为首次挂载
  // 以及每次从缓存中被重新插入时
  console.log('a-onActivated')
})
onDeactivated(() => {
  // 在从 DOM 上移除、进入缓存
  // 以及组件卸载时调用
  console.log('a-onDeactivated')
})
</script>

<style scoped lang="less">
.el-input{
  width: 300px;
}
.keep-table{
  display: flex;
  justify-content: center;
}
.keep-pagination{
  display: flex;
  justify-content: center;
}
</style>
