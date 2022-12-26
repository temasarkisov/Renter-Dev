<template>
  <div v-if="item" class="min-h-screen pb-40 pt-6">
    <nuxt-link to="/list/" class="border-b-2 border-black pb-0 block w-max hover:text-brand hover:border-brand mb-12">
      Return to list
    </nuxt-link>

    <div class="flex justify-between md:mb-20 mb-6">
      <img class="w-3/4 h-auto rounded-xl" :src="item.image" />
      <div class="w-1/4 pl-4 flex flex-wrap justify-start">
        <img v-for="(src, imgIdx) in item.images" :src="src" class="w-full h-auto mb-4 rounded-lg" :key="imgIdx">
      </div>
    </div>

    <div class="relative lg:pb-96">
      <h1 class="lg:text-5xl text-3xl text-black font-black font-mono" v-html="item.name" />
      <p class="p-0 pr-2 lg:w-3/5 text-black-50 lg:text-4xl text-lg m-0" v-html="item.description" />

      <div class="lg:absolute lg:top-0 lg:left-auto lg:right-0 flex lg:justify-end items-center lg:mt-0 mt-12">
        <ul class="list-style-none text-black-70 lg:text-3xl text-xl font-medium text-left pl-0 lg:w-max w-full">
          <li class="py-1 border-b-2 border-black mb-12" v-html="item.name" />
          <li class="py-1 border-b-2 border-black mb-12" v-html="item.apart_type" />
          <li class="py-1 border-b-2 border-black mb-12" v-html="item.neighbourhood" />
          <li class="py-1 border-b-2 border-black mb-12" v-html="`${item.date.start}&mdash;${item.date.finish}`" />
          <li class="py-1 text-right" v-html="`${item.price}$`" />
        </ul>
      </div>
    </div>

    <button class="bg-brand text-white lg:text-5xl text-xl lg:py-4 py-2 w-full relative z-999 fixed-button lg:rounded-xl rounded-lg hover:bg-black hover:text-white">Book now</button>

  </div>
</template>

<script lang="ts">
import {
  Component, Vue
} from 'nuxt-property-decorator';
import {
  Getter
} from 'vuex-class';

@Component
export default class ListItem extends Vue {
  @Getter('list/info') info: any

  get item() {
    return this.info.find(item => item.id === Number(this.$route.params.id));
  }
}
</script>

<style lang="scss">
.fixed-button {
  bottom: 1rem;
  top: auto;
  position: sticky;
  transform: scale(1.05) rotate(-0.25deg);
}
</style>