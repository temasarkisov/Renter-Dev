<template>
  <form class="the-form" @submit.prevent="$emit('submit')">
    <template v-for="item in formItems">

      <template v-if="isInput(value[item])">
        <label class="block">
          <input
              v-model="value[item].value" :type="value[item].type"
              class="form-input mt-1 block w-full"
              :placeholder="value[item].placeholder"
              autocomplete=""
          >
        </label>
      </template>

      <template v-else-if="isSubmit(value[item])">
        <button
            class="block"
            :type="value[item].type"
            v-html="value[item].text"
        />
      </template>
      <template v-else-if="item === 'route'">
        <nuxt-link
            class="block"
            :to="value[item].to"
            v-html="value[item].text"
        />
      </template>

    </template>
  </form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import {
  loginType, submitTypes, typeFormElement
} from '../assets/types/forms';

@Component
export default class TheForm extends Vue {
  @Prop({ type: Object, required: true }) value: loginType

  get formItems() {
    return Object.keys(this.value);
  }

  isInput(item: typeFormElement) {
    const validInputTypes = [
      'text', 'password', 'email', 'number', 'url', 'date', 'datetime-local', 'month', 'week', 'time', 'search', 'tel', 'checkbox', 'radio', 'select', 'select-multiple'
    ];
    return Boolean(validInputTypes.indexOf(item.type) > -1);
  }

  isSubmit(item: submitTypes) {
    return Boolean(item.type === 'submit' || item.type === 'button');
  }
}
</script>

<style scoped lang="scss">

</style>