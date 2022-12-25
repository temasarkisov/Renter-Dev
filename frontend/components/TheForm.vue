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
      <div v-else-if="isInputGroup(item)" class="flex justify-between sm:flex-nowrap flex-wrap">
        <label v-for="child in Object.keys(value[item])"
               :class="[
                   'block sm:w-1/2 w-full border-2 mb-8 first:sm:rounded-l-xl first:sm:rounded-tr-none first:sm:rounded-br-none last:sm:rounded-r-xl last:sm:border-l-0 last:sm:rounded-tl-none last:sm:rounded-bl-none rounded-xl',
                    { 'border-white': value[item][child].validate },
                    { 'border-red': !value[item][child].validate }
               ]"
        >
          <input
              v-model="value[item][child].value" :type="value[item][child].type"
              class="border-0 outline-none text-white bg-transparent mb-0 w-full focus:ring-transparent"
              :placeholder="value[item][child].placeholder"
              autocomplete=""
              @focus="$emit('inputFocus', { item, child })"
          >
        </label>
      </div>

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

  isInputGroup(item: string) {
    return Boolean(item === 'price' || item === 'date');
  }
}
</script>

<style scoped lang="scss">

</style>