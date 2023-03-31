<template>
  <div class="container">
    <div>keep-alive-snow-详情页面</div>
    <div>
      <span>输入框：</span>
      <el-input v-model="KValue"></el-input>
    </div>
    <div>
      <router-link to='/menu/keepalive'>
        <button>回到列表页keep-aliva-list</button>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts" name="keepalivesnow">

const KValue = ref('')

onActivated(() => {
  // 调用时机为首次挂载
  // 以及每次从缓存中被重新插入时
  console.log('b-onActivated')
})

onDeactivated(() => {
  // 在从 DOM 上移除、进入缓存
  // 以及组件卸载时调用
  console.log('b-onDeactivated')
})

</script>

<style scoped lang="less">
.el-input{
  width: 300px;
}
</style>
