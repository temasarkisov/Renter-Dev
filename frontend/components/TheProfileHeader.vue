<template>
  <div class="profile__header" v-html="String(username).toLowerCase()" />
</template>

<script lang="ts">
import {
  Component, Vue
} from 'nuxt-property-decorator';
import {
  Getter
} from 'vuex-class';

@Component
export default class TheProfileHeader extends Vue {
  @Getter('user/name') username: any
}
</script>

<style lang="scss">
.profile {
  &__header {
    font-weight: 900;
    font-size: 23px;
    line-height: 35px;
    color: #000000;
    border-bottom: 0.5px solid #000000;
    margin-top: 50px;
    font-family: 'ALSHauss-BlackExpanded', sans-serif;
  }
}
</style>