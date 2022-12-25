<template>
  <div :class="[
      'min-h-screen',
      { 'bg-white': isHome },
      { 'bg-login': isAuth }
  ]">
    <div class="container mx-auto sm:pl-0 px-5">
      <the-text-header
          v-if="isAuth || isHome"
          :content="authHeaderContent"
          class="md:pt-12 pt-6"
      />
      <the-inner-header v-else-if="isList" />
      <template v-if="isAuth || isHome">
        <div :class="[
            'flex justify-center pt-20 pb-52',
            { 'lg:overflow-hidden': isAuth }
        ]">
          <div :class="[
              'sm:relative sm:w-max w-full',
              { 'sm:min-w-800': isHome }
          ]">
            <img v-if="isAuth" class="rounded-3xl absolute top-32 lg:-left-80 -left-32 lg:min-w-600 lg:min-h-400 sm:block hidden" src="../assets/images/background-auth.jpg" alt="Background Auth">
            <nuxt />
          </div>
        </div>
      </template>
      <nuxt v-else />
    </div>
  </div>
</template>

<script lang="ts">
import TheTextHeader from '../components/TheTextHeader.vue';
import TheInnerHeader from '../components/TheInnerHeader.vue';


import {
  Vue,
  Component
} from "nuxt-property-decorator";

@Component({
  components: {
    TheTextHeader,
    TheInnerHeader,
  },
})
export default class Default extends Vue {
  get isAuth(): boolean {
    return Boolean(this.$route.name && (this.$route.name === 'login' || this.$route.name === 'register'));
  }
  get isHome(): boolean {
    return Boolean(this.$route.name && (this.$route.name === 'index'));
  }
  get isList(): boolean {
    return Boolean(this.$route.name && (this.$route.name === 'list'));
  }

  get authHeaderContent(): string {
    switch (String(this.$route.name)) {
      case 'login':
        return 'Hello, how<br>are you?';
      case 'register':
        return 'Welcome';
      case 'index':
        return 'Describe your<br>dream apartment';
      default: return 'Hello';

    }
  }
}
</script>

<style scoped>

</style>