<template>
  <div class="the-text-header relative md:pb-12 pb-4">
    <div
        :class="[
            'the-text-header-circle absolute z-0 m-0 bg-brand rounded-full',
            'md:w-40 md:h-40 w-20 h-20', // width
        ]"
    />
    <h2
        :class="[
            'the-text-header-content',
            'relative z-1 md:h-32 h-16 flex items-center justify-start flex-row', // relative
            'md:pt-10 md:pl-12 pt-4 pl-8', // positions
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
}
</script>

<style scoped lang="scss">

</style>