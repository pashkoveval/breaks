<script setup lang="ts">
import { ViewSize } from '@/enums/View'
import { computed } from 'vue'

defineOptions({ name: 'SettingsView' })
// const props = defineProps({});

const classes = computed(() => ({
  [`view`]: true,
  [`constructor-form-settings-view_rounded-${ViewSize.XS}`]: true,
  [`constructor-form-settings-view_padding-${ViewSize.S}`]: true,
}))
</script>

<template>
  <div class="constructor-form-settings-view" :class="classes"></div>
</template>

<style scoped lang="scss">
.constructor-form-settings-view {
  height: 100%;
  width: 100%;
  background-color: var(--color-background-mute);

  @include round;
  @include padding;
  @include scrollbar;
}
</style>
