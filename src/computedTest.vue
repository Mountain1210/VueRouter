<template>
<div >
<input v-model="age" value=""  type="text" />
{{comage}}

<div>

 show:function(event){< br/>
      const self=this;< br/>
      console.log(event.target.innerHTML)< br/>
      let spanval=this.$refs.myspan.innerHTML;//获取全部的span

< br/>
    }

</div>

<div v-for="book in books" class="books">
  <p>
  <span @click="show" ref="myspan">{{book.isbn}}</span>=::::=<span>{{book.name}}</span>
  </p>
</div>
</div>
</template>
<style>

.books p{border:1px solid #ff0000; padding:4px 0; margin:4px 0}
</style>
<script type="text/ecmascript-6">

export default{ 
data(){
    return {
      name: '',
      age: 18,
      books:[]
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
  ,methods:{
    show:function(event){
      const self=this;
      console.log(event.target.innerHTML)
      let spanval=this.$refs.myspan.innerHTML;//获取全部的span
    }
  }


}
</script>