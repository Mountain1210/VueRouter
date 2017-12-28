<template>
<div id="app">
    <form @submit.prevent="submit">
        <div class="field">
            Name：<input type="text" v-model="user.name">
            Labelname：<input type="text" v-model="user.labelname">
        </div>
        
    <!--   <div class="field">
            性別：
            <label>
                <input type="radio" value="男" v-model="user.gender"> 男
            </label>
            <label>
                <input type="radio" value="女" v-model="user.gender"> 女
            </label>
        </div>*/-->
        
        <input type="submit" value="提交">
    </form>
</div>
</template>
<style>

.books p{border:1px solid #ff0000; padding:4px 0; margin:4px 0}
</style>
<script type="text/ecmascript-6">

export default{ 
data(){
    return {
      user: {
                 name: '',
                 labelname: ''
             }
    }
  }
  ,created () {

      this.bookService = this.$resource('/api/books')
     this.bookService.query()
          .then((res) => {
            this.books = res.body.data
            this.totalBooks = res.body.total_records
            console.log(this.books);
            console.log(this.totalBooks);
          }, (error) => {
            console.log(error)
          })
    }
  ,methods:{
    submit: function() {
            var formData = JSON.stringify(this.user); // 这里才是你的表单数据
            
            this.$http.post('/api/books', formData).then((response) => {
                console.log(response)
                // success callback
            }, (response) => {
                // error callback
            });


            this.bookServices = this.$resource('/api/books');
            this.bookServices.query({page: 1, size: 160})
          .then((res) => {
            this.books = res.body.data
            this.totalBooks = res.body.total_records
            console.log(this.books);
            console.log(this.totalBooks);
          }, (error) => {
            console.log(error)
          })

          }
  }


}
</script>