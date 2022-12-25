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
              @submit="validateForm"
              @inputFocus="(payload) => validateForm(true, payload)"
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
    login: { type: 'email', placeholder: 'Login', value: null, validate: true },
    password: { type: 'password', placeholder: 'Password', value: null, validate: true },
    password2: { type: 'password', placeholder: 'Repeat password', value: null, validate: true },
    submit: { type: 'submit', text: 'Sign Up' },
    route: { text: 'Sign in', to: { name: 'login' } }
  }

  submitForm() {
    if (this.isValidForm) {
      console.log('next');
    }
  }

  validateForm(blur = false, payload: any) {
    if (blur) {
      Object.entries(this.form).forEach(([key, item]) => {
        if (typeof payload === 'string' && (key === payload)) {
          item.validate = true;
        }
      });
    } else {
      this.form.login.validate = Boolean(/^([a-z0-9-!#$%&'*+/=?^_`]+\.)*[a-z0-9-!#$%&'*+/=?^_`]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,}$/i.test(String(this.form.login.value)));
      this.form.password.validate = Boolean(this.form.password.value && this.form.password.value.length >= 6);
      this.form.password2.validate = Boolean(this.form.password2.value && this.form.password2.value.length >= 6);
      this.submitForm();
    }
  }

  get isValidForm() {
    return Boolean(this.form.login.validate && this.form.password.validate && this.form.password2.validate)
  }
}
</script>