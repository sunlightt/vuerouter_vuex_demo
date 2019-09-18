import Vue from 'vue'
import VueRouter  from 'vue-router'
import App from './App.vue'
import {routes} from './router';
import store from './store/index.js';
Vue.config.productionTip = false;
Vue.use(VueRouter);
const router = new VueRouter({
  routes
});
router.beforeEach((to,from,next)=>{
  if(!window.localStorage.getItem('cache')){
    window.localStorage.setItem('cache','test');
    next('/login');
    return;
  }
  next();
})
router.beforeResolve((to,from,next)=>{
  next();
})
// router.afterEach((to,from)=>{
//   console.log('beforeEnter')
// })
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
