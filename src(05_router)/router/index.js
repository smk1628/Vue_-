import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home.vue'
import About from '../components/About.vue'
import News from '../components/News.vue'
import Message from '../components/Message.vue'
import Detail from '../components/Detail.vue'
Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        redirect:'/home',
    },
    {
        path:'/home',
        
        component:Home,
        
        children:[
            {
                path:'news',
                component:News
            },
            {
                path:'message',
                component:Message,
                children:[
                    {
                        path:'/home/message/detail/:id',
                        component:Detail,
                    }
                ]
            }
        ]
    },
    {
        path:'/about',
        component:About
    }
]

export const router = new VueRouter({
    mode:'history',
    routes
})
