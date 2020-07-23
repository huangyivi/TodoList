import Vue from 'vue'
// 导入App
import App from './App.vue'

// 实例化vue 的根实例
new Vue({
    el: '#app',
    components:{
        // 组件名：组件对象
        App: App   //可简写App
    },
    template: '<App/>'

})
