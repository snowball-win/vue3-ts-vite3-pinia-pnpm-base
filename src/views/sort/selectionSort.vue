<template>
  <div class="container">
    <span>selectionSort</span>
  </div>
</template>

<script setup lang="ts">
  const selectionSort = (arr: number[])=> {
    var len = arr.length;
    var minIndex, temp;
    for (var i = 0; i < len - 1; i++) {
        minIndex = i;
        for (var j = i + 1; j < len; j++) {
            console.log('i,j:',i,j)
            console.log('arr[j], arr[minIndex]',arr[j],arr[minIndex])
            if (arr[j] < arr[minIndex]) {     // 寻找最小的数
                minIndex = j;                 // 将最小数的索引保存
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
        console.log('arr-1:', arr)
    }
    console.log('arr-2:', arr)
  }

  selectionSort([6,5,4,3,2,1])
</script>

<style scoped lang="less">
</style>
