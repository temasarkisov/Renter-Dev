<template>
  <div class="login bg-login">
      <div class="container mx-auto sm:pl-0 pl-5">
        <the-text-header
            content="Hello, how<br>are you?"
            class="md:pt-12 pt-6"
        />
        <the-form
            v-model="form"
        />
      </div>
  </div>
</template>

<script lang="ts">
import TheTextHeader from '../components/TheTextHeader.vue';
import TheForm from '../components/TheForm.vue';
import { Vue, Component } from 'nuxt-property-decorator';
import { loginType } from '../assets/types/forms';


@Component({
  components: {
    TheTextHeader,
    TheForm,
  }
})

export default class Login extends Vue {
  form: loginType = {
    login: {
      type: 'email',
      placeholder: 'Login',
      value: null,
    },
    password: {
      type: 'password',
      placeholder: 'Password',
      value: null
    },
    submit: {
      type: 'submit',
      text: 'Sign In'
    },
    route: {
      text: 'Sign up',
      to: {
        name: 'register'
      }
    }
  }
}
</script>