<template>
  <div>
    {{ $auth.$state }} 1
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$auth);//
  }
}
</script>

<style lang="scss">

</style>