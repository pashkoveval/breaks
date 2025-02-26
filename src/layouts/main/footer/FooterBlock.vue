<script setup lang="ts">
defineOptions({ name: 'FooterBlock' })
// const props = defineProps({});
</script>

<template>
  <footer class="footer-block">
    <slot name="footer" />
  </footer>
</template>

<style scoped lang="scss">
.footer-block {
  width: 100%;
  overflow: auto;
  grid-area: footer;
  padding: var(--p-1);
}
</style>
