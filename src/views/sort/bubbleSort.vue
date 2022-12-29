<template>
  <div class="container">
    <span>bubbleSort</span>
  </div>
</template>

<script setup lang="ts">
  const bubbleSort = (arr: number[])=> {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = 0; j < len - 1 - i; j++) { // 每循环一次会确定一个最大的数，并放在最后，所以“len-1-i”
            console.log('i,j:', i, j)
            console.log('arr[j],arr[j+1]:', arr[j], arr[j+1])
            if (arr[j] > arr[j+1]) {        // 相邻元素，两两对比
                var temp = arr[j+1];        // 元素交换，所以一次循环会确定一个最大的数，并放在了最后
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
        console.log('arr-1:', arr)
    }
    console.log('arr-2:', arr)
  }

  bubbleSort([6,5,4,3,2,1])
</script>

<style scoped lang="less">
</style>
