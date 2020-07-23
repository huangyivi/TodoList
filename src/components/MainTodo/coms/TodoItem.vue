<template>
    <div :class="['todo-item',todo.completed ? 'completed' : '']">
        <input type="checkbox" v-model="todo.completed">
        <label>{{todo.content}}</label>
        <button @click="delItem"></button>
    </div>
</template>
<script>
    export default{
        name: 'TotoItem',
        props:{
            todo: Object
        },
        methods:{
            delItem(){
                this.$emit('del',this.todo.id)
            }
        }
    }
</script>
<style scoped lang="stylus">
    @import '~style/theme.styl'
    @import '~style/mixins.styl'
    .todo-item 
        display flex
        justify-content space-between
        padding 10px  
        font-size 20px
        border-top 1px solid rgba(0,0,0,.1)
        &:hover
            button:after
                content: 'x'
                color: $lightred 
        &.completed
            label 
                color #d9d9d9
                text-decoration line-through
        input
            width 50px
            height 30px
            text-align center
            cleanDefaultStyle()
            &:after
                content url('~images/uncheck.svg')
            &:checked:after
                content url('~images/checked.svg')
        label 
            flex 1
            transition color .4s
        button 
            width 40px
            background-color transparent
            cleanDefaultStyle()
            cursor pointer
        

</style>