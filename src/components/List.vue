<template>
  <div>
        <h2 v-if="firstView">请输入关键字以搜索....</h2>
        <h2 v-else-if="loading">Loading....</h2>
        <h2 v-else-if="err" class='err'>{{err}}</h2>
        <ul v-else id="list">
            <Item v-for="(user,index) in users" :key="index" :user='user'/>
        </ul>
  </div>
</template>

<script>
import Item from './Item'
import axios from 'axios'
export default {
    components:{
        Item
    },
    data(){
        return{
            firstView:true,
            loading:false,
            err:'',
            users:[]
        }
    },
    methods:{
        async searchByName(name){
            try{
                this.firstView = false
                this.loading = true
                const res = await axios.get('https://api.github.com/search/users',{params:{q:name}})
                const data = res.data
                const users = data.items.map(item=>({
                        username:item.login,
                        url:item.html_url,
                        img_url:item.avatar_url
                    }))
                this.loading = false
                this.users = users
            }catch(err){
                this.loading = false
                this.err = '请求出错：'+ err.message
            }
        }
    },
    mounted(){
        this.$globalEventBus.$on('search',this.searchByName)
    }
}
</script>

<style>
    h1,h2{
        margin: 0;
        padding: 20px;
    }
    #list {
        margin: 0 auto;
        width: 95vw;
        height: 100vh;
        background-color: #eee;
    }
    .err {
        color: red;
    }
</style>