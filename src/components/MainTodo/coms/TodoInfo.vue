<template>
    <div class="todo-info">
        <span class="total">{{total}} item left</span>
        <div class="tips">
            <a 
            :class="['btn' , 'primary' , 'border' , (state == item) ? 'actived' : '']" 
            v-for="(item,index) in status" 
            :key="index"
            @click="toggleState(item)"
            >{{item}}</a>
            
        </div>
        <button class="btn info" @click="clearCompleted">clear Completed</button>
    </div>
</template>

<script>
    export default{
        name: 'TodoInfo',
        data(){
            return {
                status:['all','active','completed'],
                state: 'all'
            }
        },
        props:{
            total: Number
        },
        methods:{
            toggleState(state){
                this.state = state
                this.$emit('toggleState',state)
            },
            clearCompleted(){
                this.$emit('clearCompleted')
            }
        }
    }
</script>

<style lang="stylus" scoped>
@import '~style/theme.styl'
@import '~style/mixins.styl'
    .todo-info
        display flex
        justify-content space-between
        font-weight 400
        padding 5px 10px 
        line-height 30px
        border-top 1px solid rgba(0,0,0,.1)

        .total
            color $lightred
        .tips
            display flex
            justify-content space-between
            width 200px

            .btn.primary.border
                padding 0 10px 
                border 1px solid $lightred
                border-radius 5px
                cursor pointer
            .actived
                background-color $lightred
                color #fff
        .btn.info
            padding 0 10px
            background-color $green
            border-radius 5px
            color #fff
            appearance none
            border none
            outline none    
            cursor pointer  
</style>