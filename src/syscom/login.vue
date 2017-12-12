<template>

<div class="login">

登录
<ul>
<li>用户名: <input type="text" value="" v-model="name" ><span v-if="error.name">{{error.name}}</span>



</li>
<li>密　码: <input type="password" value="" v-model="pwd"><span v-if="error.pwd">{{error.pwd}}</span></li>
<li><input type="button" value="登录"  @click="login"/></li>
</ul>
<p  v-model="name">用户名:{{name}}</p>
<p  v-model="pwd">密码:{{pwd}}</p>
 </form>

</div>
</template>

<style>
.login{
    
}
</style>

<script>
export default {
    data(){
        return {
            name:'',
            pwd:'',
            error:{
                name:'',
                pwd:''
            }
        }
    },
    props: ['puname','ppwd'],
    methods:{
        check(name, pwd){
            if(!name){
                this.error.name='请输入姓名';
                return false;
            }
            if(!pwd){
                this.error.name="请输入密码";
                return false;
            }

            return true;
        },
        login(){
            const {name,pwd,$router}=this;
            if(!this.check(name,pwd)) return;
            if(name=="admin" && pwd==123){
                this.$emit('cChild',name,this.pwd);
                $router.push({name:'Me', params: { username:name }})
            }else{
                alert('用户名密码错误')
            }
            


        }
    }
}
</script>