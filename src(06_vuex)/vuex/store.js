import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
/* 
相当于data的对象，包含n个可变的属性数据 
*/
const state = {
    count:1, //初始化状态数据
}
/* 
一个包含n个用于直接更新状态数据的方法的对象 
*/
const mutations = {
    //增加的mutations
    INCREMENT(state){
        state.count++
    },
    //减少的mutations
    DECREMENT(state){
        state.count--
    }
}
/* 
包含n个用于间接更新状态数据的方法的对象（写异步和逻辑的）
*/
const actions = {
    // increment(context){
    //     context.commit('INCREMENT')
    // },
    increment({commit}){ //简化写法
        commit('INCREMENT')
    },
    decrement({commit}){ 
        commit('DECREMENT')
    },
    incrementIfOdd({commit,state}){
        if(state.count %2 === 1){
            commit('INCREMENT')
        }
    },
    incrementAsync({commit}){
        setTimeout(()=>{
            commit('INCREMENT')
        },1000)
    }
}
/* 
一个包含n个基于state数据的getter计算属性
*/
const getters = {
    evenOrOdd(state){
        return state.count %2 ===1 ? '奇数':'偶数'
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})