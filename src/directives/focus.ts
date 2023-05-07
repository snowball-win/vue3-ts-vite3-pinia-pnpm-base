// 获取焦点
export default function(app: any) {
app.directive("focus", {
    mounted(el: any) {
      console.log("focus mounted");
      el.focus();
    }
  })
}