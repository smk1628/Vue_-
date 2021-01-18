<template>
  <input id="Add" type="text" placeholder="请输入计划名称" v-model="values" @keyup.enter='toDoAdd(values)'>
</template>

<script>
export default {
    props:{
        doAdd:Function
    },
    data(){
        return{
            values:''
        }
    },
    methods:{
        toDoAdd(values){
            this.doAdd(values)
            this.values = ''
        }
    }
}
</script>

<style scoped>
    #Add{
        box-sizing: border-box;
        width: 100%;
        height: 40px;
        border-radius: 4px;
        border: 1px solid #333;
        margin-bottom:4px;
    }
</style>