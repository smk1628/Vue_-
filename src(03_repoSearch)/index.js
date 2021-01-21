import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
Vue.config.productionTip = false //关闭vue开发模式下的提示
//声明使用插件
Vue.use(VueResource)
new Vue({
    el:'#root',
    render:h=>h(App)
})