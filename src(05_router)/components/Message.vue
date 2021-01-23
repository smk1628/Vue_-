<template>
  <div>
    <ul>
        <li v-for="message in messageArr" :key="message.id">
            <router-link :to="'/home/message/detail/'+message.id">{{message.title}}</router-link>
            <button @click="pushShow(message.id)" type="button">push查看详情</button>
            <button @click="replaceShow(message.id)" type="button">replace查看详情</button>
        </li>
    </ul>
    <button @click="$router.back()" type="button">返回</button>
    <hr/>
    <router-view></router-view>
</div>
</template>

<script>
export default {
    data(){
        return{
            messageArr:[
                    {id:'1dsdsd21',title:'message01'},
                    {id:'de34fdff',title:'message02'},
                    {id:'423edwrf',title:'message03'},
                    {id:'ewe3dedf',title:'message04'}
                ]
        }
    },
    methods:{
        pushShow(id){
            this.$router.push(`/home/message/detail/${id}`)
        },
        replaceShow(id){
            this.$router.replace(`/home/message/detail/${id}`)
        }
    }
}
</script>

<style scoped>

</style>