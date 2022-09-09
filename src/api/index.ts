import { axios } from './http/axios'
const files:any = import.meta.globEager("./modules/*.ts") // 导入文件
let api:any = {}
let apiGenerators:any = [] // modules目录下文件内容的数组，每一个文件是一个{}
for (const key in files) {
  if (Object.prototype.hasOwnProperty.call(files, key)) {
    apiGenerators.push(files[key].default)
  }
}
console.log('12apiGenerators', apiGenerators)
apiGenerators.forEach((generator:any) => {
  const apiInstance = generator({ // 创建axios实例
    axios
  })
  for (const apiName in apiInstance) {
    if (apiInstance.hasOwnProperty(apiName)) { // 通过名称找到定义的接口地址
      api[apiName] = apiInstance[apiName]
    }
  }
})

export { api }
