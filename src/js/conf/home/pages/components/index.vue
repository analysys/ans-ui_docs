<template>
  <main-layout>
    <router-view></router-view>
  </main-layout>
</template>

<script>
import mainLayout from '@/module/components/layout/mainLayout.vue'

export default {
  name: 'components',
  components: { mainLayout }
}
</script>

<style lang="scss" scoped>

</style>
