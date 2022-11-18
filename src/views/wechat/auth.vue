<template>
  <div class="contmian">
    <div>
      微信网页授权
    </div>
  </div>
</template>
<script setup lang="ts">
// 微信网页授权
// 判断是否是微信环境
const isWechat = ()=> {
    return String(navigator.userAgent.toLowerCase().match(/MicroMessenger/i)) === "micromessenger";
}
console.log('26isWechat', isWechat())

// 获取url里code值
const getUrlCode = (name: string)=> {
    let reg = ((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)') as any).exec(location.href) || [, ''])[1].replace(/\+/g, '%20')
    return decodeURIComponent(reg) || null
}

// 判断字符串是否为空，没有值返回true，有值，返回false
const stringIsEmpty = function (obj: any){
    if(typeof obj == "undefined" || obj == null || obj == ""){
        return true;
    }else{
        return false;
    }
}
// 获取微信code
const getWxCode = (redirect_path: String) =>{
	console.log('31', redirect_path);
	if(isWechat()) {
		console.log('getWxCode33');
		// 截取地址中的code，如果没有code就去微信授权，如果已经获取到code了就直接把code传给后台获取openId  redirect_uri 是你的站点域名，一定要encodeURIComponent
		let code = getUrlCode('code')
    console.log('37code', code)
		if (stringIsEmpty(code)) {
      console.log('39code', code)
			window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxcc1124d410d52e8b&redirect_uri=' + encodeURIComponent('https://md.heng-tai.com.cn/'+redirect_path) + '&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect'
			//redirect_uri地址里面不能多/，如果多一个/就会跳转不成功，所以redirect_path要注意是/pages/clue/cule
			// redirect_uri是授权成功后，跳转的url地址，微信会帮我们跳转到该链接，并且通过？的形式拼接code，这里需要用encodeURIComponent对链接进行处理。
			// 如果配置参数一一对应，那么此时已经通过回调地址刷新页面后，你就会再地址栏中看到code了。
			// http://127.0.0.1/pages/views/profile/login/login?code=001BWV4J1lRzz00H4J1J1vRE4J1BWV4q&state=1
		}
	} else {
		console.log('请在微信客户端打开！');
	}
}
// 调用
getWxCode('auth')

</script>
<style scoped lang="less">
</style>
