<script setup lang="ts">
defineOptions({ name: 'MainLayout' })
// const props = defineProps({});
</script>

<template>
  <div class="main-layout">
    <KeepAlive>
      <RouterView />
    </KeepAlive>
  </div>
</template>

<style scoped lang="scss"></style>
