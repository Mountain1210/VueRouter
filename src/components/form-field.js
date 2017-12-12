 import {Validator} from 'vee-validate'

export default {
  name: 'FormField',
  props: {
    name: {type: String},
    labelname: {type: String},
    rules: {type: String},
    value: {},
    inputType: {type: String, default: 'text'}
  },
  mounted () {
  console.log(2)
    if (this.rules) {
      console.log(this.rules)
      this.validator.attach(this.name, this.rules)
    }
  },
  methods: {
    onValidate (e) {
      if (this.rules) {
        this.validator.validate(this.name, e.target.value)
      }
    }
  },
  computed: {
    validator () {
console.log(1)
      if (this.$parent.$validator) {

        return this.$parent.$validator
      } else {

        if (this._validator) {
          return this._validator
        } else {
          const validator = new Validator()
          validator.attach(this.name, this.rules, this.labelname)
          this._validator = validator
          return validator
        }
      }

      
    },
    errorBag () {
      console.log(3)
      return this.validator.errors; //this.validator.errorBag
    },
    hasError () {
      console.log(4)
      return this.errorBag.has(this.name)
    },
    errorMsg () {
      console.log(5)
      this.errorBag.first("name")
    }
  },
  render (h) {
    return <div class="uk-form-row">
      <label class="uk-form-label"
             for={this.name}>{this.labelname}</label>
      <div class="uk-form-controls">
        <input id={this.name}
               name={this.name}
               type={this.inputType} 
               v-validate={this.rules}
               on-input={this.onValidate}
               value={this.value}/>
                 <small class={{
          'uk-text-danger': true,
          'uk-show': this.hasError
        }}>{ this.errorMsg }</small>
      </div>
    </div>
  }
}
