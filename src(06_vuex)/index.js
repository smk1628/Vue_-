import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'
new Vue({
    el:'#root',
    store,   //所有的组件对象都能有一个指定store属性：$store
    render:h=>h(App)
})