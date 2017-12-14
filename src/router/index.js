import Vue from 'vue'
import Router from 'vue-router'
import Me from '../Me.vue'
import ValiddateDemo from '../Myvaliddate.vue'
import myWeChat from '../myWeChat.vue'
import computedTest from '../computedTest.vue'
const Home = resolve => require(['../Home.vue'], resolve)
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/me',
      name: 'Me',
      component: Me,
      children:[
         {
          path: '/me/:username',
          name: 'Me',
          component: Me
        }
      ]
    }
    ,{
      path: '/validdatedemo',
      name: 'ValiddateDemo',
      component: ValiddateDemo
    }
    ,{
      path: '/myWeChat',
      name: 'myWeChat',
      component: myWeChat
    }
    ,{
      path: '/computedTest',
      name: 'computedTest',
      component: computedTest
    }

  ]
})
