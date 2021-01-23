<template>
    <div>
        <ul >
        <li>ID: {{$route.params.id}}</li>
        <li>Title:{{detail.title}}</li>
        <li>Content:{{detail.content}}</li>
        </ul>
    </div>
</template>

<script>
const messageDetail=[
                {id:'1dsdsd21',title:'message01',content:'message01---1111111'},
                {id:'de34fdff',title:'message02',content:'message02---2222222'},
                {id:'423edwrf',title:'message03',content:'message03---3333333'},
                {id:'ewe3dedf',title:'message04',content:'message04---4444444'}
            ]
export default {
    data(){
        return{
             detail:{}
        }
    },
    methods:{
        getDeatilById(id){
            setTimeout(()=>{
            const detail = messageDetail.find(detail => detail.id === id)
            this.detail = detail
            },1000)
        }
    },
    watch:{
        '$route' (to,from){
            this.getDeatilById(to.params.id)
        }
    },
    mounted(){
        this.getDeatilById(this.$route.params.id)
    }
}
</script>

<style scoped>

</style>