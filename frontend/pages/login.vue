<template>
  <the-form
      class="relative z-1"
      ref="form"
      v-model="form"
      @submit="validateForm(false, null, 'login')"
      @blur="(payload) => validateForm(true, payload, 'login')"
  />
</template>

<script lang="ts">
import TheForm from '../components/TheForm.vue';
import Validates from '../mixins/Validates.ts';
import { Action, Component } from 'nuxt-property-decorator';
import { loginType } from '../assets/types/forms';

@Component({
  components: {
    TheForm,
  },
})

export default class Login extends Validates {
  @Action('user/LOGIN') userLogin: any
  /**
   * @name form
   * @type object
   * @description Форма авторизации
   */
  form: loginType = {
    login: { type: 'text', placeholder: 'Login', value: null, validate: true },
    password: { type: 'password', placeholder: 'Password', value: null, validate: true },
    submit: { type: 'submit', text: 'Sign In' },
    route: { text: 'Sign up', to: { name: 'register' } },
    type: 'login'
  }

  /**
    * @function
    * @name submitForm
    * @param type
    * @description Подтверждение формы
   */
  async submitForm(type: string) {
    if (this.isValidForm(type)) {
      this.userLogin().then(() => this.$router.push({ name: 'index' }));
    }
  }
}
</script>