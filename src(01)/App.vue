<template>
    <div>
        {{msg}}
        <Hello/>
    </div>
    
</template>

<script>
//import Hello from './components/hello'
import Hello from '@components/hello'
export default {
    data(){
        return{
            msg:'first vue component'
        }
    },
    components:{
        Hello
    }
}
</script>

<style>
    div{
        color: red;
    }
</style>