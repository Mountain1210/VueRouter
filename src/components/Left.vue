<template>

 <div class="left">
    <h4>{{msg}}</h4>
    <p>当前状态为：<span>{{leftuser}}</span></p>
        <ul>
        <router-link :to="{ name : 'Home'}" tag="li" exact>
          <div> 首页</div>
        </router-link>
        <router-link :to="{ name : 'Me'}" tag="li">
          <div> 我的书</div>
        </router-link>
        <router-link :to="{ name : 'ValiddateDemo'}" tag="li">
          <div> ValiddateDemo</div>
        </router-link>

        <router-link :to="{ name : 'myWeChat'}" tag="li">
          <div> myWeChat</div>
        </router-link>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>7</li>
        </ul>
    </div>

</template>

<script>

export default {
  name: 'Left',
  data () {
    return {
      msg: '左边x导航',
      user:''
    }
  },
  props:['leftuser'],
  mounted(){
    this.user=this.$route.params.username;
  },

  methods:{
    ck:function(){
       this.$emit('add','123')
    }
  },
  events:{
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}


a {
  color: #42b983;
}

#leftContent li{
    
    padding:8px 0px;
    border-bottom:1px solid #ececec;
    cursor: pointer;
}

.left{width:280px; float:left;}

</style>

