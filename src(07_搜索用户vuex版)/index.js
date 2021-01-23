import Vue from 'vue'
import App from './App.vue'
import store from './store'
Vue.config.productionTip = false //关闭vue开发模式下的提示
new Vue({
    el:'#root',
    store,
    render:h=>h(App),
})