import Vue from 'vue'
import App from './App.vue'
import "@/assets/css/main.css"
import "@/assets/icon/iconfont.css"
import ElementUI from "element-ui"
Vue.config.productionTip = false
import VueRouter from "@/Router";

Vue.use(ElementUI)
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
}).$mount('#app')
