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
import Validates from '../mixins/Validates.vue';
import { Vue, Component } from 'nuxt-property-decorator';
import { registerType } from '../assets/types/forms';


@Component({
  components: {
    TheForm,
  },
  mixins: [
    Validates,
  ]
})

export default class Register extends Vue {
  form: registerType = {
    login: { type: 'email', placeholder: 'Login', value: null, validate: true },
    password: { type: 'password', placeholder: 'Password', value: null, validate: true },
    password2: { type: 'password', placeholder: 'Repeat password', value: null, validate: true },
    submit: { type: 'submit', text: 'Sign Up' },
    route: { text: 'Sign in', to: { name: 'login' } }
  }

  submitForm(type: string) {
    // @ts-ignore
    if (this.isValidForm(type)) {
      console.log('next');
    }
  }
}
</script>