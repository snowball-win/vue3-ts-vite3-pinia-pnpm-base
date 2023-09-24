<template>
  <div class="container">
    <div id="google_translate_element" style="position:absolute;bottom:10px;right:10px;z-index:2000;opacity:0.7"></div>
    <div>google_translate_element</div>
  </div>
</template>

<script setup lang="ts" name="keepalive">
const translate = () => {
  new google.translate.TranslateElement(
    {
        // pageLanguage: 'zh-CN',
        // 需要翻译的语言，比如你只需要翻译成越南和英语，这里就只写en,vi
        includedLanguages: 'en,zh-CN,hr,cs,da,nl,fr,de,el,iw,hu,ga,it,ja,ko,pt,ro,ru,sr,es',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        // 自动显示翻译横幅，就是翻译后顶部出现的那个
        autoDisplay: true,
        // 还有些其他参数，由于原插件不再维护，找不到详细api了，将就了，实在不行直接上dom操作
    },
    'google_translate_element' // 触发元素的id
  );
}
setTimeout(()=>{
  translate()
},3000)
</script>

<style scoped lang="less">
</style>
