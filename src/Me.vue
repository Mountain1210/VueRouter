<template>
        <div class="right">
        <h4>我的</h4>
        <div class="section">
            <book-list :books="page_data.promotions"
                       heading="最新更新"
                       @select="preview($event)">
            </book-list>
        </div>
        <modal-dialog ref="dialog">
            <div slot="heading"></div>
            <div>
                <div v-if="selected">
                    <h2>{{ selected.title }}</h2>
                </div>
            </div>
        </modal-dialog>
        </div>
        
</template>
<style></style>
<script type="text/ecmascript-6">
import BookList from './components/list'
import faker from "./fixtures/faker"
import ModalDialog from "./components/dialog.vue"
export default{    
    data () {
            return {
                page_data: undefined,
                selected:undefined
            }
        },
      components:{BookList,ModalDialog}
      ,created(){
        this.page_data=faker.getHomeData();
      }
      ,methods:{
        preview(book){
            this.selected=book;
            this.$refs.dialog.open()
        }
      }
}
</script>