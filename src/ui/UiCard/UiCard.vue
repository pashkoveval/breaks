<script setup lang="ts">
import { computed, type PropType } from 'vue'
import { ViewSize } from '@/base/View'

defineOptions({ name: 'UiCard' })
const props = defineProps({
  rounded: {
    type: String as PropType<ViewSize>,
    default: ViewSize.L,
  },
  padding: {
    type: String as PropType<ViewSize>,
    default: ViewSize.L,
  },
  linkData: {
    type: Object as PropType<{ name: string; params: { id: string | undefined } }>,
    default: null,
  },
})

const classes = computed(() => ({
  [`ui-card_rounded-${props.rounded}`]: !!props.rounded,
  [`ui-card_padding-${props.padding}`]: !!props.padding,
}))

const elementComponent = computed(() => {
  if (props.linkData) {
    return 'RouterLink'
  }
  return 'div'
})
</script>

<template>
  <component :is="elementComponent" :to="linkData" class="ui-card" :class="classes">
    <slot />
  </component>
</template>

<style scoped lang="scss">
.ui-card {
  width: 100%;
  min-width: 50px;
  height: 100%;
  min-height: 50px;

  @include padding;
  @include round;
}
</style>
