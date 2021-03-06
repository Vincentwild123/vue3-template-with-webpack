//导入声明文件，声明vue类型模块
/// <reference path = "./globalDeclare.d.ts" />
import {
    createApp
} from 'vue' // Vue 3.x 引入 vue 的形式
import App from './src/App.vue' // 引入 APP 页面组建

const app = createApp(App) // 通过 createApp 初始化 app
app.mount('#root') // 将页面挂载到 root 节点