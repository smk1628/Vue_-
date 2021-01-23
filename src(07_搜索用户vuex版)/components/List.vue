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
import {mapState} from 'vuex'
export default {
    components:{
        Item
    },
    computed:{
        ...mapState(['firstView','loading','users','err'])
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