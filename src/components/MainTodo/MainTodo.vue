<template>
    <div class="main-todo">
        <input 
        type="text" 
        class="add-todo" 
        placeholder="What to do?" 
        autofocus 
        @keyup.enter="addTodo"
        v-model="content"
        />
        <todo-item 
        v-for="(item , index) in filterData" 
        :key="index" 
        :todo="item"
        @del="handleDeleteItem"
         ></todo-item>
         <todo-info :total="total" @toggleState="handleToggleState" @clearCompleted="handleClear"></todo-info>
    </div>
</template>
<script>
    import TodoItem from './coms/TodoItem.vue'
    import TodoInfo from './coms/TodoInfo.vue'

    let id=0;
    export default{
        name: 'MainTodo',
        components:{
            TodoItem,
            TodoInfo
        },
        data(){
            return {
                todoData:[],
                content:'',
                total: 0,
                filter: 'all'
            }
        },
        methods:{
            addTodo(){
                if(this.content === ''){
                    return;
                }else{
                    this.todoData.unshift({
                        id: id++,
                        content: this.content,
                        completed: false
                    });
                    this.content = ''
                }
            },
            handleDeleteItem(id){
                this.todoData.splice(this.todoData.findIndex(item => item.id === id))
            },
            handleToggleState(state){
                this.filter = state
            },
            handleClear(){
                this.todoData = this.todoData.filter(item=>item.completed==false)
            }
        },
        computed:{
            filterData(){
                switch(this.filter){
                    case 'all':{
                        return this.todoData;
                        break;
                    }
                    case 'active':{
                        return this.todoData.filter(item=>item.completed == false)
                        break;
                    }
                    case 'completed':{
                        return this.todoData.filter(item=>item.completed == true)
                        break;
                    }
                }
            }
        },
        watch:{
            todoData:{
                deep: true,
                handler(){
                    this.total = this.todoData.filter(item=>item.completed== false).length
                }
            }
        }
    }
    
</script>

<style scoped lang="stylus">
    .main-todo
        margin 0 auto
        width 600px
        background-color #fff
        box-shadow 0 0 5px #666
        .add-todo
            padding 16px 16px 16px 36px
            width 100%
            font-size 24px
            font-weight inherit
            font-family inherit
            color inherit
            border none
            outline none
            box-sizing  border-box
</style>