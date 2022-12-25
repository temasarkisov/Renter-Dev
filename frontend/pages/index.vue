<template>
  <div class="search bg-white min-h-screen">
    <div class="container mx-auto sm:pl-0 px-5">
      <the-text-header class="md:pt-12 pt-6" content="Describe your<br>dream apartment" />

      <div class="flex justify-center pt-20 pb-52">
        <div class="sm:relative sm:w-max w-full sm:min-w-800">
          <the-form
              class="relative z-1 sm:w-full"
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
import {loginType, searchType} from '../assets/types/forms';

import {
  Vue,
  Component
} from 'nuxt-property-decorator';

@Component({
  components: {
    TheTextHeader,
    TheForm
  }
})

export default class Index extends Vue {
  form: searchType = {
    name: { type: 'text', value: null, placeholder: 'Name', validate: true },
    neighbourhood: { type: 'text', value: null, placeholder: 'Neighbourhood', validate: true },
    price: {
      min: { type: 'text', value: null, placeholder: '10$', validate: true },
      max: { type: 'text', value: null, placeholder: '1000$', validate: true }
    },
    date: {
      start: { type: 'date', value: null, placeholder: 'DD/MM/YYYY', validate: true },
      finish: { type: 'date', value: null, placeholder: 'DD/MM/YYYY', validate: true }
    },
    submit: { type: 'submit', text: 'Search' }
  }

  submitForm() {
    if (this.isValidForm) {
      console.log('next');
    }
  }

  validateForm(blur = false, payload: any) {
    const minValue: number = parseInt(this.form.price.min.value);
    const maxValue: number = parseInt(this.form.price.max.value);

    if (blur) {
      Object.entries(this.form).forEach(([key, item]) => {
        if (typeof payload === 'string' && (key === payload)) {
          item.validate = true;
        } else if (typeof payload === 'object' && (typeof payload.item === 'string' && typeof payload.child === 'string') && (key === payload.item && item[payload.child])) {
          item[payload.child].validate = true;
        }
      });
    } else {
      this.form.name.validate = Boolean(this.form.name.value && this.form.name.value.length >= 3);
      this.form.neighbourhood.validate = Boolean(this.form.neighbourhood.value && this.form.neighbourhood.value.length >= 3);

      this.form.price.min.validate = Boolean(Number.isInteger(minValue) && (minValue > 0));
      this.form.price.max.validate = Boolean(Number.isInteger(maxValue) && (maxValue > 0));

      this.form.date.start.validate = (this.form.date.start.value);
      this.form.date.finish.validate = (this.form.date.finish.value);

      this.submitForm();
    }
  }

  get isValidForm() {
    return Boolean(this.form.name.validate && this.form.neighbourhood.validate && this.form.price.min.validate &&
        this.form.price.max.validate && this.form.date.start.validate && this.form.date.finish.validate)
  }
}
</script>

<style scoped>

</style>