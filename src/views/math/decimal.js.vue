<template>
  <div class="container">
    <div>decimal.js</div>
  </div>
</template>

<script setup lang="ts">
import Decimal from 'Decimal.js'
const num = new Decimal(1234567890.0123456789)
const num1 = new Decimal(123.123)
console.log('plus:', num1.plus(new Decimal(1.1))) // 加法
console.log('minus:', num1.minus(new Decimal(1.1))) // 减法
console.log('times:', num1.times(new Decimal(2))) // 乘法
console.log('div:', num1.div(new Decimal(2))) // 除法
console.log('mod:', num1.mod(new Decimal(2))) // 取余
console.log('x.eq(y):', num.eq(num1)) // isEqualTo--是否相等--false
console.log('x.gt(y):', num.gt(num1)) // isGreaterThan--是否大于--true
console.log('x.gte(y):', num.gte(num1)) // isGreaterThanOrEqualTo--是否大于等于--true
console.log('x.lt(y):', num.lt(num1)) // isLessThan--是否小于--false
console.log('x.lte(y):', num.lte(num1)) // isLessThanOrEqualTo--是否小于等于--false

</script>

<style scoped lang="less">

</style>
