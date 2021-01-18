<template>
  <ul>
      <li  @mouseenter="handEnter(true,$event)" @mouseleave="handEnter(false,$event)" v-for="todo in todos" :key="todo.id" >
        <input v-model="todo.complete" type="checkbox">{{todo.title}}
        <button class="btn" @click="delet(todo.id)">删除</button>
      </li>
     
  </ul>
</template>

<script>
export default {
  props:['todos','delet'],
  methods:{
    handEnter(isEnter,e){
        const dom = e.target
        const btn = dom.getElementsByClassName('btn')[0]
        if (isEnter) {
          dom.style.background = '#888'
          btn.style.display = 'block'
        }
        else {
          dom.style.background = ''
          btn.style.display = 'none'
        }
    }
  }
}
</script scoped>

<style>
  ul{
    padding: 0;
    margin: 0 0 70px 0;
    width: 100%;
    list-style: none;
  }
  li{
    height: 30px;
    margin-bottom:4px;
    border: 1px solid #999;
    border-radius: 4px;
    line-height: 30px;
  }
  li .btn{
    display: none;
    outline: none;
    float: right;
    margin: 4px;
    cursor: pointer;
    border: 1px solid aqua;
    border-radius: 4px;
    color: #444;
  }
  .btn:hover{
    color:red;
  }
</style>