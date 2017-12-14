<template>
    <div class="right">




    <div class="column is-12">
    <label class="label" for="email">Email</label>
    <p :class="{ 'control': true }">
        <input v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" name="email" type="text" placeholder="Email">
        <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
    </p>


    <hr >
    <p :class="{ 'control': true }">
        <input v-validate="'required|phone'" :class="{'input': true, 'is-danger': errors.has('phone') }" name="phone" type="text" placeholder="请输入手机号">
        <span v-show="errors.has('phone')" class="help is-danger">{{ errors.first('phone') }}</span>
    </p>
</div>
<hr >
<form class="uk-form uk-form-horizontal"
          v-if="current">

            <FormField v-for="field in fields"
                        :name="field.name"
                        :labelname="field.labelname"
                        :rules="field.rules"
                        :input-type="field.type"
                        :value="current[field.name]">
            </FormField>

    </form>



    </div>
</template>
<style>
</style>
<script>

import Vue from 'vue'
import VeeValidate , {Validator} from 'vee-validate'
import messages from './vee-local-fixed'

Vue.config.productionTip = false
/*确定要使用Veevalidate的验证*/
Vue.use(VeeValidate, {
  locale: 'zh_CN',
  dictionary: {
    zh_CN: {messages}
  }
})

/*追加新的属性*/
const dictionary = {
   zh_CN: {
      messages: {
        email: () => '请输入正确的邮箱格式',
        phone:()=>'请输入正确的手机号码',
        required: ( field )=> "请输入" + field
      },
      attributes:{
        email:'邮箱',
        password:'密码',
        name: '账号',
        phone: '手机号'
      }
  }
};

Validator.updateDictionary(dictionary);


/*验证信息开始*/
/**
 * [messages description]
 * 追加
 * 每个验证都要写一个,例如：
 * Validator.extend('名称',{
 *    message:{},
 *    validate:value=>{
 *      return value.length
 *    }
 * })
 * @type {Object}
 */
Validator.extend('phone', {
  messages: {
    zh_CN:field => field + '必须是11位手机号码',
  },
  validate: value => {
    return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
  }
});
import FormField from './components/form-field'
  export default {
    data () {
      return {
        current: {},
         fields: [
          {name: 'name', label: '书名', rules: 'required',type:'text'},
          {name: 'isbn', label: '书号', rules: 'required',type:'text'},
          {name: 'price', label: '售价', rules: 'required|numeric|min:0',type:'number'},
          {name: 'category', label: '类别', rules: 'required',type:'text'},
          {name: 'published', label: '出版日期', rules: 'required',type:'date'},
          {name: 'pages', label: '页数', rules: 'required|numeric|min:20',type:'number'},
          {name: 'authors', label: '作者', rules: 'required',type:'text'}
        ]
      }
    },
    components: {
      FormField
    }
    }


</script>