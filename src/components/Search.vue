<template>
    <header>
        <h1 class="mui-title">用户搜索</h1>
        <input type="text" placeholder="key_word" v-model="searchName"/>
        <button type="button" @click="search">Search</button>
    </header>
</template>

<script>
export default {
    data(){
        return{
            searchName:''
        }
    },
    methods:{
        search(){
            const searchName = this.searchName
            if(searchName){
                this.$globalEventBus.$emit('search',searchName)
                this.searchName = ''
            }
            
        }
    }
}
</script>

<style>
h1,h2{
	margin: 0;
	padding: 20px;
}
html,body{
	width: 100%;
	height: 100%;
	overflow-x: hidden;
}
header {
	margin: 0 auto;
	width: 95vw;
	height: 200px;
	background-color: skyblue;
	border-radius: 10px 10px 0px 0px;
}
header input {
	margin: 20px 0px 0px 20px;
	height: 40px;
	width: 240px;
	outline: none;
	border: 1px solid gray;
	border-radius: 4px 0px 0px 4px;
	font-size: 18px;
}
header button {
	height: 40px;
	width: 70px;
	border: 1px solid gray;
	border-radius: 0px 4px 4px 0px;
	font-size: 18px;
}
</style>