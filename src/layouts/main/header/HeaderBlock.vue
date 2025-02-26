<script setup lang="ts">
defineOptions({ name: 'HeaderBlock' })
// const props = defineProps({});
</script>

<template>
  <header class="header-block">
    <slot name="header" />
  </header>
</template>

<style scoped lang="scss">
.header-block {
  width: 100%;
  overflow: auto;
  grid-area: header;
  padding: var(--p-1);
}
</style>
