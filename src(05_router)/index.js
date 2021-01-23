import Vue from 'vue'
import App from './App.vue'
import {router} from './router'
new Vue({
    el:'#root',
    router,
    render:createHtml => createHtml(App)
})