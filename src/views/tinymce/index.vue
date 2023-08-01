<template>
  <div class="container">
    <div class="container-tinymce">
      <Editor ref="tinymceEle" id="tinymceEle" :init="{plugins: 'link image code table'}" v-model="content"></Editor>
    </div>
  </div>
</template>

<script setup lang="ts">
import Editor from '@tinymce/tinymce-vue'
let content:any = ref('')
</script>

<style scoped lang="less">
</style>
