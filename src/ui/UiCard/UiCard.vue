<script setup lang="ts">
import { computed, type PropType } from 'vue'
import { ViewColor, ViewSize } from '@/enums/View'
import guid from '@/helpers/guid'

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
  bgColor: {
    type: String as PropType<ViewColor>,
    default: ViewColor.MUTE,
  },
})
const slots = defineSlots<{
  header?: (props: unknown) => unknown
  footer?: (props: unknown) => unknown
  default?: (props: unknown) => unknown
}>()

const classes = computed(() => ({
  [`ui-card_bg-color-${props.bgColor}`]: true,
}))

const elementComponent = computed(() => {
  if (props.linkData) {
    return 'RouterLink'
  }
  return 'el-card'
})
</script>

<template>
  <component
    :is="elementComponent"
    :id="guid()"
    :to="linkData"
    :body-class="$attrs.class"
    class="ui-card"
    :class="classes"
  >
    <template v-if="slots.header" #header>
      <slot name="header" />
    </template>

    <slot />

    <template v-if="slots.footer" #footer>
      <slot name="footer" />
    </template>
  </component>
</template>

<style scoped lang="scss">
.ui-card {
  width: 100%;
  height: 100%;
  min-height: 50px;

  :deep(.el-card) {
    overflow: hidden;
  }

  :deep(.el-card__body) {
    overflow: hidden;
  }

  @include bg_color;
}
</style>
