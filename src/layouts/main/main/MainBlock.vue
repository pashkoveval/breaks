<script setup lang="ts">
defineOptions({ name: 'MainBlock' })
// // const props = defineProps({});
</script>

<template>
  <main class="main-block">
    <slot name="main" />
  </main>
</template>

<style scoped lang="scss">
.main-block {
  width: 100%;
  overflow: auto;
  grid-area: main;
  padding: var(--p-1);
  @include scrollbar;
}
</style>
