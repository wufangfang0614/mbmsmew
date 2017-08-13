// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/Layout'
import VueRouter from 'vue-router'
import IndexPage from './pages/IndexPage'
import LiveList from './pages/live/list'
Vue.config.productionTip = false
Vue.use(VueRouter)
let router = new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/a',
            component: IndexPage
        },
        {
            path:'/live/list',
            component: LiveList
        }
    ]
})
new Vue({
    el: '#app',
    router,
    template: '<layout/>',
    components: {Layout}
})
