<template>
    <div class="right">
	{{msgs}}
            <p>当前状态为：<span>{{user}}</span></p>
            <login :puname="p1" :ppwd="p2" @cChild="homehandler"></login>    

    </div>
</template>
<style>
.right{}
    .announcement {
        font-size: 12px;
        padding:5px;
        background:#fff;
    }

    .announcement > label {
        padding: 3px 10px;
        margin: 3px 10px;
        background: #FACCB7;
        border-radius: 3px;
        color: #FF5102;

    }

    .announcement > span {
        padding: 3px 10px;
        color: #333;
        display:inline-block;
    }


</style>
<script>
import Login from './syscom/login'

export default {
  data () {
    return {
      msgs:'父组s件',
      user:'',
      is_user:false,
      pusername:'优质会员',
      p1:"PP1",
      p2:"PP2"
    }
  },
  props:['loginname'],
  components:{Login}
  ,created (){
      //this.$emit('appToHome',"asdfasdf");
    },
  methods:{
    homehandler:function(d1,d2){
        this.user=d1;
        console.log(d1+"   ===Home.vue");
        //console.log(this)
        this.$emit('appToHome',d1)
    }
  }
}
</script>