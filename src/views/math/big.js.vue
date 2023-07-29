<template>
  <div class="container">
    <div>big.js</div>
  </div>
</template>

<script setup lang="ts">
import Big from 'big.js'
const num = new Big(1234567890.0123456789)
// console.log('toFormat:', num.toFormat()) // 格式化； 1,234,567,890.0123458 保留了七位小数，第七位依据第八位四舍五入
// console.log('toFormat:', num.toFormat(3)) // 格式化； 1,234,567,890.012 保留三位小数
// console.log('toFormat:', num.toFormat(13)) // 格式化； 1,234,567,890.012 保留十三位小数，实际还是保留了七位小数，第七位依据第八位四舍五入，然后位数用0补足
const num1 = new Big(123.123)
console.log('plus:', num1.plus(1.1)) // 加法
console.log('minus:', num1.minus(1.1)) // 减法
console.log('times:', num1.times(2)) // 乘法
console.log('div:', num1.div(2)) // 除法
console.log('mod:', num1.mod(2)) // 取余
console.log('x.eq(y):', num.eq(num1)) // isEqualTo--是否相等--false
console.log('x.gt(y):', num.gt(num1)) // isGreaterThan--是否大于--true
console.log('x.gte(y):', num.gte(num1)) // isGreaterThanOrEqualTo--是否大于等于--true
console.log('x.lt(y):', num.lt(num1)) // isLessThan--是否小于--false
console.log('x.lte(y):', num.lte(num1)) // isLessThanOrEqualTo--是否小于等于--false
// console.log('negated:', num.negated()) // 取非，改变数字的正负号


</script>

<style scoped lang="less">

</style>
