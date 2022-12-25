<template>
  <the-form
      class="relative z-1 sm:w-full"
      ref="form"
      v-model="form"
      @submit="validateForm(false, null, 'index')"
      @blur="(payload) => validateForm(true, payload, 'index')"
  />
</template>

<script lang="ts">
import TheForm from '../components/TheForm.vue';
import Validates from '../mixins/Validates.vue';
import { searchType } from '../assets/types/forms';

import {
  Vue,
  Component
} from 'nuxt-property-decorator';

@Component({
  components: {
    TheForm
  },
  mixins: [
    Validates
  ]
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

  // @ts-ignore
  submitForm(type: string) {
    // @ts-ignore
    if (this.isValidForm(type)) {
      console.log('next');
    }
  }
}
</script>