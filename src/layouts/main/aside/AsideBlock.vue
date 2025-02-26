<script setup lang="ts">
defineOptions({ name: 'AsideBlock' })
// const props = defineProps({});
</script>

<template>
  <aside class="aside-block">
    <slot name="aside" />
  </aside>
</template>

<style scoped lang="scss">
.aside-block {
  width: 100%;
  overflow: auto;
  grid-area: aside;
  padding: var(--p-1);
}
</style>
