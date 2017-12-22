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
  },
  created () {

      this.bookService = this.$resource('/api/books')
		 this.bookService.query({page: 1, size: this.pageSize})
          .then((res) => {
            this.books = res.body.data
            this.totalBooks = res.body.total_records
			console.log(this.books);
			console.log(this.totalBooks);
          }, (error) => {
            console.log(error)
          })
    }
  ,computed: {
            comage: function() { //computed下的函数也可以在绑定到html中去
                return parseInt(this.age) +10;
            }
    }

}
</script>