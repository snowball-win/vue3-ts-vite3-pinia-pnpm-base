import { defineStore } from "pinia";
import { ref, computed } from "vue"
// count1 是 id 须唯一
// options方法
export const useKeepStore = defineStore('keepalive',{
    state: () => {
        return {
            counter: 0,
            includeArr: ['keepalive','keepalivesnow'],
            excludeArr: []
        }
    },
    persist: { // 持久化
        enabled: true,
    },
    getters: { // 相当于computed 计算属性
        clearExcludeArr (state){
            return state.excludeArr = []
        }
    },
    actions: { // 相当于methods
        addCounter(){
            // this指向对应的store仓库
            this.counter += 1
        }
    }
})