<template>
  <div class="login bg-login min-h-screen">
    <div class="container mx-auto sm:pl-0 px-5">
      <the-text-header
          content="Welcome"
          class="md:pt-12 pt-6"
      />
      <div class="flex justify-center pt-20 pb-52 lg:overflow-hidden">
        <div class="sm:relative sm:w-max w-full">
          <img class="rounded-3xl absolute top-32 lg:-left-80 -left-32 lg:min-w-600 lg:min-h-400 sm:block hidden" src="../assets/images/background-auth.jpg" alt="Background Auth">
          <the-form
              class="relative z-1"
              ref="form"
              v-model="form"
              @submit="submitForm"
              @inputFocus="inputFocus"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import TheTextHeader from '../components/TheTextHeader.vue';
import TheForm from '../components/TheForm.vue';
import { Vue, Component } from 'nuxt-property-decorator';
import { registerType } from '../assets/types/forms';


@Component({
  components: {
    TheTextHeader,
    TheForm,
  }
})

export default class Register extends Vue {
  form: registerType = {
    login: {
      type: 'email',
      placeholder: 'Login',
      value: null,
      validate: true,
    },
    password: {
      type: 'password',
      placeholder: 'Password',
      value: null,
      validate: true,
    },
    password2: {
      type: 'password',
      placeholder: 'Repeat password',
      value: null,
      validate: true,
    },
    submit: {
      type: 'submit',
      text: 'Sign Up'
    },
    route: {
      text: 'Sign in',
      to: {
        name: 'login'
      }
    }
  }

  get isValidForm() {
    return Boolean(
        Object.entries(this.form).reduce((acc, [, item]): any => (item && item.validate ? [...acc, item.validate] : acc), []).length === 2
    );
  }

  submitForm() {
    this.validateForm();

    if (this.isValidForm) {
      console.log('to API');
    }
  }

  validateForm() {
    this.form.login.validate = Boolean(/^([a-z0-9-!#$%&'*+/=?^_`]+\.)*[a-z0-9-!#$%&'*+/=?^_`]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,}$/i.test(String(this.form.login.value)));
    this.form.password.validate = Boolean(this.form.password.value && this.form.password.value.length >= 6);
    this.form.password2.validate = Boolean(this.form.password.value && this.form.password.value.length >= 6);
  }

  inputFocus(key: string) {
    switch (key) {
      case 'login': {
        this.form.login.validate = true;
        break;
      }
      case 'password': {
        this.form.password.validate = true;
        break;
      }
      case 'password2': {
        this.form.password2.validate = true;
        break;
      }
      default: break;
    }
  }
}
</script>