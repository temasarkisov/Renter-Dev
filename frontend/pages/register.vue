<template>
  <the-form
      class="relative z-1"
      ref="form"
      v-model="form"
      @submit="validateForm(false, null, 'register')"
      @blur="(payload) => validateForm(true, payload, 'register')"
  />
</template>

<script lang="ts">
import TheForm from '../components/TheForm.vue';
import Validates from '../mixins/Validates.ts';
import { Action, Component } from 'nuxt-property-decorator';
import { registerType } from '../assets/types/forms';

@Component({
  components: {
    TheForm,
  }
})
export default class Register extends Validates {
  @Action('user/REGISTER') userRegister: any
  /**
   * @name form
   * @type object
   * @description Форма регистрации
   */
  form: registerType = {
    login: { type: 'text', placeholder: 'Login', value: null, validate: true },
    password: { type: 'password', placeholder: 'Password', value: null, validate: true },
    password2: { type: 'password', placeholder: 'Repeat password', value: null, validate: true },
    submit: { type: 'submit', text: 'Sign Up' },
    route: { text: 'Sign in', to: { name: 'login' } }
  }

  /**
   * @function
   * @name submitForm
   * @param type
   * @description Подтверждение формы
   */
  submitForm(type: string) {
    if (this.isValidForm(type)) {
      this.userRegister().then(() => this.$router.push({ name: 'index' }));
    }
  }
}
</script>