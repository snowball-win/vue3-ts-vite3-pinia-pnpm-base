<template>
  <div class="contmian">
    <div>
      微信网页授权
    </div>
  </div>
</template>
<script setup lang="ts">
import wx from 'weixin-js-sdk-ts'
console.log('10wx', wx)

// 这里通过调用接口获取参数
// wx.config({
//   debug: true, // 开启调试模式,调用的所有 api 的返回值会在客户端 alert 出来，若要查看传入的参数，可以在 pc 端打开，参数信息会通过 log 打出，仅在 pc 端时才会打印。
//   appId: 'wxcc1124d410d52e8b', // 必填，公众号的唯一标识
//   timestamp: 123, // 必填，生成签名的时间戳
//   nonceStr: '', // 必填，生成签名的随机串
//   signature: '', // 必填，签名
//   jsApiList: ['previewImage', 'hideAllNonBaseMenuItem'] // 必填，需要使用的 JS 接口列表
// });

wx.ready(function(){
  console.log('21wx', wx)
  // config信息验证后会执行 ready 方法，所有接口调用都必须在 config 接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在 ready 函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在 ready 函数中。
});
wx.error(function(res){
  console.log('25res', res)
  // config信息验证失败会执行 error 函数，如签名过期导致验证失败，具体错误信息可以打开 config 的debug模式查看，也可以在返回的 res 参数中查看，对于 SPA 可以在这里更新签名。
});


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
getWxCode('#/login')

console.log()

</script>
<style scoped lang="less">
</style>
