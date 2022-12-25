<template>
  <form class="bg-black rounded-3xl px-8 pt-16 pb-12 sm:w-96 w-full" @submit.prevent="$emit('submit')">
    <template v-for="item in formItems">

      <template v-if="isInput(value[item])">
        <label class="block">
          <input
              v-model="value[item].value" :type="value[item].type"
              :class="[
                  'border-2  outline-none text-white bg-transparent mb-8 w-full rounded-xl focus:ring-transparent focus:border-white',
                  { 'border-white': value[item].validate },
                  { 'border-red': !value[item].validate }
              ]"
              :placeholder="value[item].placeholder"
              autocomplete=""
              @focus="$emit('inputFocus', item)"
          >
        </label>
      </template>

      <template v-else-if="isSubmit(value[item])">
        <button
            class="block text-white mx-auto border-white border-2 rounded-lg px-8 py-2 font-medium hover:bg-brand hover:border-brand"
            :type="value[item].type"
            v-html="value[item].text"
        />
      </template>
      <template v-else-if="item === 'route'">
        <nuxt-link
            class="block text-white border-0 mx-auto w-max mt-4 hover:text-brand"
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