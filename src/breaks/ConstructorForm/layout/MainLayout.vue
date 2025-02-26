<script setup lang="ts">
defineOptions({ name: 'ConstructorFormMainLayout' })
// const props = defineProps({});
</script>

<template>
  <div class="constructor-form-main-layout">
    <KeepAlive>
      <RouterView />
    </KeepAlive>
  </div>
</template>

<style scoped lang="scss">
.constructor-form-main-layout {
  width: 100%;
  height: 100%;
}
</style>
