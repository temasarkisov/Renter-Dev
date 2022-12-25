<template>
  <div class="grid xl:grid-cols-3 gap-4 mt-10">
    <div v-for="i in 9"
      class="flex justify-between items-center bg-black p-6 w-full rounded-lg"
         :key="`card-${i}`"
    >
      <!-- left -->
      <div class="w-1/2">
        <div class="w-44 h-44 bg-white rounded-xl" />
        <p class="p-0 pr-2 text-white-70 m-0 mt-4">Studio located 50&nbsp;meters from Gran Via, next to&nbsp;the Plaza de&nbsp;Callao.</p>
      </div>
      <!-- right -->
      <ul class="list-style-none text-white text-md font-medium text-right pl-4">
        <li v-for="(param, paramIdx) in params" :key="`params-${paramIdx}`" class="py-1 border-b-2 border-white-70" v-html="param" />
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component, Vue
} from 'nuxt-property-decorator';
import TheInnerHeader from '../components/TheInnerHeader.vue';


@Component({
  components: {
    TheInnerHeader
  }
})
export default class List extends Vue {
  params: string[] = [
      'Gran Via Studio Madrid',
      'Entire home/apt',
      'Hispanoam&eacute;rica',
      '04/15/22&mdash;08/15/22',
      '80$'
  ];
}
</script>

<style scoped>

</style>