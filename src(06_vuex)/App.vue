<template>
  <div>
        <p>count:{{count}} 是:{{evenOrOdd}}</p>
        <button @click="increment()">+</button>
        <button @click="decrement()">-</button>
        <button @click="incrementIfOdd()">奇数+</button>
        <button @click="incrementAsync()">异步+</button>
  </div>
</template>

<script>
import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'
export default {
    mounted(){
        console.log(this.$store)
    },
    computed:{
        ...mapState(['count']),
        ...mapGetters(['evenOrOdd'])
    },

    methods:{
        // increment(){
        //     //this.$store.commit('INCREMENT')
        //     this.$store.dispatch('increment')
        // },
        // decrement(){
        //     //this.$store.commit('DECREMENT')
        //     this.$store.dispatch('decrement')   
        // },
        // incrementIfOdd(){
        //     this.$store.dispatch('incrementIfOdd')
        // },
        // incrementAsync(){
        //     this.$store.dispatch('incrementAsync')
        // }
        ...mapActions(['incrementIfOdd','incrementAsync']),
        ...mapMutations({increment:'INCREMENT',decrement:'DECREMENT'})
    }
}
</script>

<style>

</style>