<template>
  <div class="ref-reactive">
    <!-- ref -->
    <el-button v-debounce="debounceClick">debounce-button ref</el-button>
    <div>{{ a }}</div>
    <div>{{ a2 }}</div>
    <div>{{ a3 }}</div>
    <div>{{ a4 }}</div>
    <el-button v-debounce="debounceClick2">debounce-button reactive</el-button>
    <!-- reactive -->
    <!-- <div>{{ b }}</div> -->
    <div>{{ b2 }}</div>
    <div>{{ b3 }}</div>
    <div>{{ b4 }}</div>
  </div>
</template>

<script setup lang="ts">
let a = ref(0)
let a2 = ref({
  name: 'name',
  age: 'age'
})
let a3 = ref({
    list: [{
    name: 'name',
    age: 'age'
  }]
})
let a4 = ref([{
  name: 'name',
  age: 'age'
}])
const debounceClick = () => {
  console.log('1s触发一次')
  a.value = 5
  a2.value.name = 'snow'
  a3.value.list[0].name = 'snow'
  a4.value[0].name = 'snow'
  console.log('33', a)
  console.log('34', a2)
  console.log('35', a3)
  console.log('36', a4)
}
// let b = reactive(0)
let b2 = reactive({
  name: 'name',
  age: 'age'
})
let b3 = reactive({
    list: [{
    name: 'name',
    age: 'age'
  }]
})
let b4 = reactive([{
  name: 'name',
  age: 'age'
}])
const debounceClick2 = () => {
  console.log('1s触发一次')
  // b = 5
  b2.name = 'snow'
  b3.list[0].name = 'snow'
  b4[0].name = 'snow'
  // console.log('33', valr)
  console.log('34', b2)
  console.log('35', b3)
  console.log('36', b4)
}
</script>

<style scoped lang="less">
</style>
