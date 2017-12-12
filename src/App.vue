<template>
     <div id="app">
     <div id="leftContent"> <left :leftuser="parentMsg"></left></div>
     <div id="rightContent">
       <transition name="slide-fade">
        <router-view @appToHome="showMsgFromeChild"></router-view>
        </transition>
      </div>

  </div>


</template>

<style>
  #leftContent{
    width:280px;    
    float:left;
    width:280px;
    border:1px solid #ececec;
    border-bottom:none;
    text-align:center;
    }
    #rightContent{
      margin-left:290px; padding:0 20px;border:1px solid #ececec;
      overflow:hidden
    }
.slide-fade-enter-active{
  transition:all ,3s ease;
}
.slide-fade-leave-active{
  transition:all .3s cubic-bezier(1.0,0.5,0,8,1.0);
}
.slide-fade-enter,.slide-fade-leave-active{
  transform:translateX(-430px);
  opacity:0
}
</style>
<script>
  import Left from './components/left.vue'

  export default {
    data(){
      return{
        parentMsg:'Hello world   APP.vue'
      }
    },
    components: {Left},
    created (){

    },

  methods:{
    showMsgFromeChild(data){
       console.log("APP===="+data);
       this.parentMsg=data;    
      }
    }
  }

/*var vm=new Vue();
console.log(vm);
vm.$on('hhh',function(msg){
  console.log(msg)
})
console.log(vm)
vm.$emit('hhh','4444444444')*/

/*var vm1=new Vue({
   template: '<div>Hello World</div>',
  data:{
    todo:[]
  },
  methods:{
    begin:function(){
      this.$on('add',function(msg){
        this.todo.push(msg);
      })
    }
  }
});

 vm1.$mount('#app2');
var vm2=new Vue({
  el:'#app',

  data:{
    todo:[]
  },
  methods:{
    begin:function(){
      this.$on('add',function(msg){
        this.todo.push(msg);
      })
    }
  }
});


 var MyComponent = Vue.extend({
   template: '<div>Hello World</div>'
 })
 var myAppendTo = Vue.extend({
   template:'<p>appendTo</p>'
 })
 var myBefore = Vue.extend({
   template:'<p>before</p>'
 })
 var myAfter = Vue.extend({
   template:'<p>after</p>'
 })
// 创建并挂载到 #app (会替换 #app)
 new MyComponent().$mount('#app')
// 手动挂载
 new myAppendTo().$mount().$appendTo('#app');//appendTo
 new myBefore().$mount().$before('#app');//before
 new myAfter().$mount().$after('#app');//after
*/
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-left: 280px;

}
</style>
