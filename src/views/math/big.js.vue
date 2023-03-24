<template>
    <div class="container">
      <div>big.js</div>
    </div>
</template>
  
<script setup lang="ts">
import {
  add, // 加法
  subtract, // 减法
  multiply, // 乘法
  divide, // 除法
  bignumber, // 告诉mathjs 这个值是个 浮点数，不使用这个，mathjs精度还是有误差的
  atan2, // 所求角的弧度值并且在[π,-π]之间
  chain, // 链式操作
  derivative, // ??
  matrix, // 矩阵操作
  e, // 欧拉常数和自然对数的基数，约为 2.718
  evaluate, // 直接运算表达式
  log, // 返回给定数字的自然Log值(即e的底数)
  pi,
  pow, // 指数计算
  round, // 四舍五入
  sqrt // 平方根计算
} from 'mathjs'

console.log('add:',add(1, 2))
console.log('subtract:',subtract(2, 1))
console.log('multiply:',multiply(2, 2))
console.log('divide:',divide(4, 2))
console.log('bignumber:',bignumber(4.01))
console.log('round:',round(4.01))
console.log('evaluate:',evaluate('(4.01 + 3) / 2'))
console.log('sqrt:',sqrt(4))
console.log('pow:',pow(3,3))
console.log('chain:',chain(3).add(4).multiply(2).done())
console.log('atan2:',atan2(15,30))
console.log('log:',log(9))
console.log('pi:',pi)
console.log('e:',e)
console.log('derivative:',derivative('x^2 + x', 'x'))
console.log('matrix:',matrix([0, 1, 2,  3, 4]))



</script>
  
<style scoped lang="less">

</style>