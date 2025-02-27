<script setup lang="ts">
import { ViewColor, ViewSize } from '@/enums/View'
import { computed, type PropType } from 'vue'

defineOptions({ name: 'SettingsView' })
const props = defineProps({
  bgColor: {
    type: String as PropType<ViewColor>,
    default: ViewColor.BG_MUTE,
  },
})

const classes = computed(() => ({
  [`view`]: true,
  [`settings-view_rounded-${ViewSize.XS}`]: true,
  [`settings-view_padding-${ViewSize.S}`]: true,
  [`settings-view_bg-color-${props.bgColor}`]: true,
}))
</script>

<template>
  <div class="settings-view" :class="classes">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.settings-view {
  height: 100%;
  width: 100%;
  background-color: var(--color-background-mute);

  @include round;
  @include padding;
  @include bg_color;
  @include scrollbar;
}
</style>
