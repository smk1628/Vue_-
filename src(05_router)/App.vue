<template>
  <div id="container">
        <div class="page-header">
            <h1>React Router Demo</h1>
        </div>
        <div class="col-md-9">
            <ul class="list-group col-md-4 col-sm-4">
                <router-link to="/home" class="list-group-item" active-class="demo">Home</router-link>
                <router-link to="/about" class="list-group-item" active-class="demo">About</router-link>
            </ul>
            <div class="text col-md-8 col-sm-4">
               <keep-alive>
                   <router-view></router-view>
               </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#container {
width: 80%;
margin: 0 auto;
}
.demo{
    color: gray !important;
    background-color: skyblue !important;
}
</style>>