<template>
    <div class="right">




    <div class="column is-12">
    <label class="label" for="email">Email</label>
    <p :class="{ 'control': true }">
        <input v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" name="email" type="text" placeholder="Email">
        <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
    </p>
</div>

<hr>
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

    import FormField from './components/form-field'

  export default {

    data () {
      return {
        current: {},
         fields: [
          {name: 'name', labelname: '书名', rules: 'required',type:'text'}
        ]
      }
    },
    components: {
FormField
    }
  }
</script>