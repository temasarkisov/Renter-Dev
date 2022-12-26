<template>
  <div class="grid xl:grid-cols-3 gap-4 mt-10">
    <nuxt-link :to="`/list/${item.id}/`" v-for="item in info"
               class="flex justify-between items-center bg-black p-6 w-full rounded-lg md:flex-nowrap flex-wrap"
               :key="`item-${item.id}`"
    >
      <!-- left -->
      <div class="md:w-1/2 w-full">
        <img class="md:w-44 w-full md:h-44 h-auto rounded-xl" :src="item.image" />
        <p class="p-0 pr-2 text-white-70 m-0 mt-4" v-html="item.description" />
      </div>
      <!-- right -->
      <ul class="list-style-none text-white text-md font-medium text-left pl-4 md:w-max w-full">
        <li class="py-1 border-b-2 border-white-70" v-html="item.name" />
        <li class="py-1 border-b-2 border-white-70" v-html="item.apart_type" />
        <li class="py-1 border-b-2 border-white-70" v-html="item.neighbourhood" />
        <li class="py-1 border-b-2 border-white-70" v-html="`${item.date.start}&mdash;${item.date.finish}`" />
        <li class="py-1 border-b-2 border-white-70 text-right" v-html="`${item.price}$`" />
      </ul>
    </nuxt-link>
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
export default class List extends Vue {
  @Getter('list/info') info: any
}
</script>