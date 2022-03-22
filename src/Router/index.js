import Vue from "vue";
import Router from'vue-router'

Vue.use(Router)


const routes = [{
    path:'/',
    redirect:'/project/home'
    },{
    path:'/project/home',
    name:'home',
    components:()=>
        import("@/View/Home/index")
}]

const router = new Router({
    module: "hash",
    base: process.env.BASE_URL,
    routes
})
export default router