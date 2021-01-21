<template>
  <div>
      <p v-if="!repo">loading...</p>
      <p v-else>关键字为 {{key}} ，最受欢迎的库：<a :href="url">{{repo}}</a></p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            key:'j',
            url:'',
            repo:''
        }
    },
    methods:{
        //使用vue-resource发ajax请求
        getByVueResource(){
            this.$http.get(`https://api.github.com/search/repositories?q=${this.key}&sort=stars`)
            .then(data=>{
                const res = data.data
                const {name,html_url} = res.items[0]
                this.repo = name
                this.url = html_url
            })
            .catch(err=>{
                alert('请求出错！')
            })
        },
        //使用axios发ajax请求
        getByAxios(){
            axios.get(`https://api.github.com/search/repositories`,{params:{q:this.key,sort:'stars'}})
            .then(data=>{
                const res = data.data
                const {name,html_url} = res.items[0]
                this.repo = name
                this.url = html_url
            })
            .catch(err=>{
                alert('请求出错！')
            })
        }
    },
    mounted(){
        this.getByAxios()
    }
}
</script>

<style>

</style>