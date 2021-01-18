import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false //关闭vue开发模式下的提示
new Vue({
    el: '#root',
    //render: h => h(App)
    render: function (createElement) {
        return createElement(App)
    }
    // components:{
    //     App
    // },
    // template:'<App/>'
})

/* 
    render：没问题
        原因：内部使用vue-template-complier提前编译好了模板
    template：有问题
        原因：
            不使用vue-template-complier，旧不能编译template
            vue默认引入的是不带编译器的打包版本vue.runtime.common.js
        解决：让webpack打包引入带编译器的版本
              webpack里配置 'vue$':'vue/dist/vue.esm.js' 

    相比之下render比较好，第二种打包时把编译器也打包进去了，代码成本大
*/