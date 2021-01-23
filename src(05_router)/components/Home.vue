<template>
    <div>
        <ul class="nav nav-tabs">
            <h2>Home组件的内容</h2>
            <li>
                <router-link  to="/home/news" active-class="ac">News</router-link>
            </li>
            <li>
                <router-link to="/home/message" active-class="ac">Message</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .ac{
        color: blue;
    }
</style>