<template>
  <div class="the-inner-header flex sm:flex-nowrap flex-wrap justify-start items-center md:pb-6 pb-2 md:pt-4 pt-2">
    <div class="lg:w-1/2 sm:w-1/3 w-full">
      <the-text-header
          content="Renter"
          :inner="true"
      />
    </div>
    <form class="lg:w-1/2 w-full border-black flex sm:flex-nowrap flex-wrap sm:justify-end justify-center sm:mt-0 mt-6">
      <input
          type="text"
          :class="[
              'border-2 outline-none px-4 py-1 text-black border-black bg-transparent focus:ring-transparent focus:border-black',
              'sm:rounded-tl-xl sm:rounded-bl-xl',
              'sm:w-1/3 w-full sm:mb-0 mb-6',
          ]"
          placeholder="Name"
          autocomplete=""
      >
      <input
          type="text"
          :class="[
              'border-2 px-4 py-1 outline-none sm:border-l-0 text-black border-black focus:ring-transparent focus:border-black',
              'sm:w-1/3 w-full sm:mb-0 mb-6',
          ]"
          placeholder="Neighbourhood"
          autocomplete=""
      >
      <div
          class="border-2 sm:rounded-tr-xl sm:rounded-br-xl sm:border-l-0 border-black relative sm:pr-6 sm:w-max w-full"
      >
        <input
            type="date"
            :class="[
              'w-full block px-3 py-1 border-0 outline-none text-black bg-transparent focus:ring-transparent focus:border-transparent leading-tight',
          ]"
            placeholder="Neighbourhood"
            autocomplete=""
        >
        <button type="submit" class="sm:rounded-full bg-brand absolute z-1 left-auto submit-search">
          <img class="mx-auto" src="../assets/images/search.svg" alt="Search">
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import {
  Component, Vue
} from 'nuxt-property-decorator';
import TheTextHeader from './TheTextHeader.vue';


@Component({
  components: {
    TheTextHeader
  }
})
export default class TheInnerHeader extends Vue {

}
</script>

<style scoped lang="scss">
.submit-search {
  top: calc(50% - (28px / 2));
  @media(min-width: 640px) {
    right: 4px;
  }
  @media(max-width: 639px) {
    right: 0;
  }
  min-height: 28px;
  height: 28px;
  max-height: 28px;
  min-width: 28px;
  width: 28px;
  max-width: 28px;
}
</style>