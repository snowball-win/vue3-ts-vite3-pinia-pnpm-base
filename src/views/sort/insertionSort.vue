<template>
  <div class="container">
    <span>insertionSort</span>
  </div>
</template>

<script setup lang="ts">
  const insertionSort = (arr: number[])=> {
    var len = arr.length;
    var preIndex, current;
    for (var i = 1; i < len; i++) {
        preIndex = i - 1;
        current = arr[i];
        while(preIndex >= 0 && arr[preIndex] > current) {
            console.log('preIndex,current:', preIndex, current)
            arr[preIndex+1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex+1] = current;
        console.log('arr-1:', arr)
    }
    console.log('arr-2:', arr)
  }

  insertionSort([6,5,4,3,2,1])
</script>

<style scoped lang="less">
</style>
