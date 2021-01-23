import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false //关闭vue开发模式下的提示
new Vue({
    el:'#root',
    render:h=>h(App),
    beforeCreate(){
        Vue.prototype.$globalEventBus = this
    }
})