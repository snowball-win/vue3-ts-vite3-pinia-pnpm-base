<template>
  <div class="container">
    <div id="google_translate_element" style="position:absolute;bottom:10px;right:10px;z-index:2000;opacity:0.7"></div>
    <div>google_translate_element</div>
    <div>国庆节快乐</div>
  </div>
</template>

<script setup lang="ts" name="keepalive">
// 加载script
const loadScript = () => {
  let script = document.createElement('script')
  script.setAttribute("language", "javascript")
  script.setAttribute("type", "text/javascript")
  script.setAttribute("src", 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit')
  document.getElementsByTagName('head')[0].appendChild(script)
  script.onload = script.onreadystatechange = ((res:any)=>{
    check()
  })
}
loadScript()

// 检测是否获取到google
const check = () => {
  console.log("10", google.translate.TranslateElement)
  if(!google.translate.TranslateElement){
    // document.cookie = "googtrans=/zh-CN"
    // document.cookie = "googtrans=/zh-CN/en"
    // document.cookie = "googtrans=/zh-CN/iw"
    const langDefault = navigator.language || navigator.userLanguage
    const list = 'en,zh-CN,hr,cs,da,nl,fr,de,el,iw,hu,ga,it,ja,ko,pt,ro,ru,sr,es'
    const lang = list.includes(langDefault) ? langDefault : 'en'
    document.cookie = "googtrans=/zh-CN/" + lang
    setTimeout(()=>{
      check()
    }, 200)
  } else {
    translate()
  }
}

// 翻译
const translate = () => {
  new google.translate.TranslateElement(
    {
        // pageLanguage: 'zh-CN',
        // 需要翻译的语言，比如你只需要翻译成英语，这里就只写en
        includedLanguages: 'en,zh-CN,hr,cs,da,nl,fr,de,el,iw,hu,ga,it,ja,ko,pt,ro,ru,sr,es',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        // 自动显示翻译横幅，就是翻译后顶部出现的那个
        autoDisplay: true,
        // 还有些其他参数
        // defaultLanguage: "zh-CN"
    },
    'google_translate_element' // 触发元素的id
  )
}
</script>

<style scoped lang="less">
</style>
