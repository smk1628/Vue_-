<template>
  <div id="clear">
    <label class="left">
      <input type="checkbox" v-model="isCheckAll">
      已完成{{countCompleted}}/{{todos.length}}
    </label>
    <button  class="btn right" @click="deletCompleted" v-show="countCompleted>0">清除已完成</button>  
  </div>
</template>

<script>
export default {
  props:{
    todos:Array,
    deletCompleted:Function,
    checkAllTodos:Function
  },
  computed:{
    countCompleted(){
        const {todos} = this
        return todos.reduce((a,c)=>c.complete? a+1:a+0,0)
        
    },
    isCheckAll:{
      get(){
        return this.todos.length === this.countCompleted
      },
      set(value){ //代表当前勾选状态
        this.checkAllTodos(value)
      }
    }
  }
  
};
</script>

<style scoped>
  #clear{
    position: absolute;
    width: 100%;
    height: 70px;
    line-height: 70px;
    left: 0;
    bottom: 0;
  }
  .left{
    float: left;
  }
  .right{
    float: right;
  }
  .btn{
    height: 30px;
    width: 100px;
    background: red;
    border-radius: 4px;
    border: 1px solid #888;
    outline: none;
    cursor: pointer;
    margin: 20px;
  }
  .btn:hover{
    background: blueviolet;
  }
</style>