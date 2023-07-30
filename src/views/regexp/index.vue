<template>
  <div class="container">
    <div class="regexp">
      <el-input v-model="phoneNumber"></el-input>
      <el-button @click="isPhoneNumber">正则校验手机号码</el-button>
    </div>
    <div class="regexp">
      <el-input v-model="Email"></el-input>
      <el-button @click="isValidEmail">正则校验邮箱地址</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

let phoneNumber = ref('')
const isPhoneNumber = () =>{
  const reg = /^1[3456789]\d{9}$/;
  console.log(reg.test(phoneNumber.value))
}

let Email = ref('')
const isValidEmail = () =>{
  const reg = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z]{2,4})+$/;
  console.log(reg.test(Email.value))
}

</script>

<style scoped lang="less">
.container{
  .regexp{
    display: flex;
    align-items: flex-start;
  }
}
</style>
