<template>
  <div id="App">
      <TodoAdd :doAdd='doAdd'/>
      <TodoList :todos='todos' :delet='delet'/>
      <TodoClear :todos='todos' :deletCompleted='deletCompleted' :checkAllTodos='checkAllTodos'/>
  </div>
</template>

<script>
import TodoAdd from '@components/todoAdd'
import TodoList from '@components/todoList'
import TodoClear from '@components/todoClear'
import { setTodos,getTodos } from './utils/storageUtils'
export default {
    name:'App',
    data(){
        return{
            todos:[
            ]
        }
    },
    components:{
        TodoAdd,
        TodoList,
        TodoClear
    },
    methods:{
        doAdd(val){
            if(!val) return
            const {todos} = this
            todos.unshift({id:Date.now(),title:val,complete:false})
        },
        delet(id){
            const {todos} = this
            for(let i =0;i<todos.length;i++){
                if(todos[i].id === id){
                    todos.splice(i,1)
                }
            }
        },
        deletCompleted(){
            this.todos = this.todos.filter((item)=> !item.complete)
        },
        checkAllTodos(isCheck){
            this.todos.forEach(todo => todo.complete = isCheck)
        }
        
    },
    watch:{
        todos:{
            deep:true,
            handler:setTodos
        }
    },
    mounted(){
        this.todos = getTodos()
    }
}
</script>

<style scoped>
    #App{
        position: relative;
        width: 400px;
        min-height: 400px;
        background: #eee;
        margin: 0 auto;
        padding: 6px;
    }
</style>