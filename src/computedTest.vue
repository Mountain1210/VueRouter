<template>
<div >
<input v-model="age" value=""  type="text" />
{{comage}}
</div>
</template>
<style></style>
<script type="text/ecmascript-6">

export default{ 
data(){
    return {
      name: '',
      age: 18
    }
  }
  ,computed: {
            comage: function() { //computed下的函数也可以在绑定到html中去
                return parseInt(this.age) +10;
            }
    }

}
</script>