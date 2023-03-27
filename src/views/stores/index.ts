import { defineStore } from "pinia";
import { ref, computed } from "vue"
// count1 是 id 须唯一
// options方法
export const useCountStore = defineStore('count1',{
    // 在大多数情况下，state 都是你的 store 的核心。人们通常会先定义能代表他们APP 的 state。
    // 在 Pinia 中，state 被定义为一个返回初始状态的函数。这使得Pinia 可以同时支持服务端和客户端。
    state: () => { // 类似vue2的 data，data(){return{}} 防止服务端数据污染；----推荐使用箭头函数，为了完整类型推理；
        return {
            // 所有属性将自动推断出他们的类型
            counter: 0
        }
    },
    persist: { // 持久化
        enabled: true,
    },
    getters: { // 相当于computed 计算属性
        doubleCount (state){
            return state.counter * 2
        }
    },
    actions: { // 相当于methods
        addCounter(){
            // this指向对应的store仓库
            this.counter += 1
        }
    }
})
// count2 是 id 须唯一
// setup方法
export const useCount2Store = defineStore('count2', ()=> {
    const counter = ref(1) // state
    const gettersCounter = computed(()=>{
        return counter.value + 5
    })
    function addCounter(){
        counter.value += 1
    }
    return { counter, gettersCounter, addCounter}
})
