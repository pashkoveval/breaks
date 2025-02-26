<script setup lang="ts">
import { ViewSize } from '@/base/View'
import { computed } from 'vue'

defineOptions({ name: 'WorkView' })
// const props = defineProps({});

const classes = computed(() => ({
  [`view`]: true,
  [`constructor-form-work-view_rounded-${ViewSize.XS}`]: true,
  [`constructor-form-work-view_padding-${ViewSize.S}`]: true,
}))
</script>

<template>
  <div class="constructor-form-work-view" :class="classes"></div>
</template>

<style scoped lang="scss">
.constructor-form-work-view {
  height: 100%;
  width: 100%;
  background-color: var(--color-background-mute);

  @include round;
  @include padding;
  @include scrollbar;
}
</style>
