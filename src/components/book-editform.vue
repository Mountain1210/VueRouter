<template>
  <div>
    <form class="uk-form uk-form-horizontal"
          v-if="current">
   <form-field label="类别"
                        name="category">
              <input id="category"
                     name="category"
                     :class="{
                         'uk-form-width-large':true,
                         'uk-form-success':!errors.has('category'),
                         'uk-form-danger': errors.has('category')
                       }"
                     v-validate
                     data-rules="required|category"
                     data-as="类别"
                     v-model="current.category"/>
              <small class="uk-text-danger" v-show="errors.has('category')">{{errors.first('category')}}</small>
            </form-field>
    </form>
  </div>
</template>
<script type="text/ecmascript-6">

  import FormField from './form-field'

  export default {
    props: ['book'],
    data () {
      return {
        current:true
      }
    },
    created () {
      this.reset()
    },
    computed: {
      is_published: {
        get () {
          return this.current.status === '上市销售'
        },
        set (val) {
          this.current.status = val ? '上市销售' : ''
        }
      },
      authors: {
        get () {
          return this.current.authors ? this.current.authors.join(',') : ''
        },
        set (val) {
          this.current.authors = val.split(',')
        }
      }
    },
    methods: {
      handleValidate () {
        this.$validator.validateAll()
      },
      reset () {
        this.current = this.book ? this.book : {}
      }
    },
    components: {
      FormField
    }
  }
</script>
