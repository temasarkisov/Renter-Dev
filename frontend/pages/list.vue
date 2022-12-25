<template>
  <div>
    List Columns
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

}
</script>

<style scoped>

</style>