<template>
  <div class="container">
    <div>pinia-options</div>
    <div>count1.counter: {{ count1.counter }}</div>
    <div>count1.doubleCount {{ count1.doubleCount }}</div>
    <div @click="count1.addCounter()"> count1.counter: addCount+=1 </div>
    <div @click="changeCount1()"> count1.counter: addCount+=2 </div>
    <div>pinia-setup</div>
    <div>count2.counter: {{ count2.counter }}</div>
    <div>count2.gettersCounter {{ count2.gettersCounter }}</div>
    <div @click="count2.addCounter()"> count2.counter: addCount++ </div>
    <div @click="changeCount2()"> count2.counter: addCount+=2 </div>
  </div>
</template>

<script setup lang="ts">
import { useCountStore, useCount2Store } from '@/views/stores/index'
const count1 = useCountStore()
const count2 = useCount2Store()

console.log('count1:', count1)
console.log('count2:', count2)

const changeCount1 = () => {
  // 方式一、需要修改数据时直接修改
  count1.counter += 2
  // 方式二、如果需要修改多个，可以使用pinia的$patch方法，推荐使用
  // count1.$patch({
  //   counter: count1.counter += 2
  // })
  // 方式三、对于复杂的方法可以封装actions的函数
  // count1.$patch((state)=>{}
  //   state.counter = count1.counter += 2
  // )
  // 方式四、对于复杂的方法可以封装actions的函数
  // count1.addCounter
}
const changeCount2 = () => {
  count2.counter += 2
}

</script>

<style scoped lang="less">

</style>
