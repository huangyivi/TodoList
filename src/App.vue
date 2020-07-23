<template>
    <div>
        <main-header></main-header>
        <main-todo></main-todo>
        <main-footer></main-footer>
    </div>
</template>

<script>
    // import img from './assets/images/1.jpg'
    import './assets/style/global.styl'

    import MainHeader from './components/MainHeader.vue'
    import MainFooter from './components/MainFooter.vue'
    import MainTodo from './components/MainTodo/MainTodo.vue'
    export default{
        name: 'App',        
        components:{
            MainHeader,
            MainTodo,
            MainFooter

        }
    }
</script>


<style lang="stylus" scoped>


</style>