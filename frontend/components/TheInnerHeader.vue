<template>
  <div class="the-inner-header flex sm:flex-nowrap flex-wrap justify-start items-center border-b-2 border-black md:pb-6 pb-2 md:pt-4 pt-2">
    <div class="lg:w-1/2 sm:w-1/3 w-full">
      <the-text-header
          content="Renter"
          :inner="true"
      />
    </div>
    <form class="lg:w-1/2 w-full border-black flex sm:justify-end justify-center sm:mt-0 mt-6">
      <input
          type="text"
          :class="[
              'border-2 outline-none px-4 py-1 text-black border-black bg-transparent w-1/3 focus:ring-transparent focus:border-black',
              'rounded-tl-xl rounded-bl-xl',
          ]"
          placeholder="Name"
          autocomplete=""
      >
      <input
          type="text"
          :class="[
              'border-2 px-4 py-1 outline-none border-l-0 text-black border-black w-1/3 focus:ring-transparent focus:border-black',
          ]"
          placeholder="Neighbourhood"
          autocomplete=""
      >
      <div
          class="border-2 rounded-tr-xl rounded-br-xl border-l-0 border-black relative pr-0"
      >
        <input
            type="date"
            :class="[
              'w-100 block px-3 py-1 border-0 outline-none text-black bg-transparent focus:ring-transparent focus:border-transparent',
          ]"
            placeholder="Neighbourhood"
            autocomplete=""
        >
        <button type="submit" class="rounded-full bg-brand absolute z-1 left-auto submit-search">
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
  top: 2px;
  right: 4px;
  height: calc(100% - 4px);
  width: 28px;
}
</style>