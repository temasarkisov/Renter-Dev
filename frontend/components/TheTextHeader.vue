<template>
  <div :class="[
      'the-text-header relative',
      { 'md:pb-12 pb-4': !inner },
      { 'md:pb-4': inner },
      { 'sm:ml-0 mx-auto w-max': inner },
  ]">
    <div
        :class="[
            'the-text-header-circle absolute z-0 m-0 bg-brand rounded-full',
            { 'md:w-40 md:h-40 w-20 h-20': !inner }, // width
            { 'md:w-20 md:h-20 w-8 h-8': inner }, // width inner
        ]"
    />
    <h2
        :class="[
            'the-text-header-content',
            'relative z-1 flex items-center justify-start flex-row', // relative
            { 'md:pt-10 md:pl-12 pt-4 pl-8 md:h-32 h-16': !inner }, // positions
            { 'md:pt-4 md:pl-6 pt-1 pl-4 md:h-16 h-8': inner }, // positions inner
            'font-mono font-black', // font
            'md:text-4xl text-xl text-black leading-tight', // text
        ]"
        v-html="content"
    />
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'nuxt-property-decorator';

@Component
export default class TheTextHeader extends Vue {
  @Prop({ type: String, required: true }) content: string
  @Prop({ type: Boolean, required: false, default: false }) inner: boolean
}
</script>

<style scoped lang="scss">

</style>