<script setup lang="ts">
import type { ConstructorClassModel } from '@/breaks/ConstructorClass/models/ConstructorClassModel'
import type { BaseViewFieldModel } from '@/breaks/ConstructorForm/models/BaseViewFieldModel'
import { computed, type PropType } from 'vue'
import { breakpointsSematic, useBreakpoints } from '@vueuse/core'
import { ClassRoutsNames } from '@/breaks/ConstructorClass/constants'
import { BaseViewListModel } from '@/breaks/ConstructorForm/models/BaseViewListModel'
import UiCard from '../UiCard/UiCard.vue'

defineOptions({ name: 'UiElementsList' })
const props = defineProps({
  list: {
    type: Array as PropType<ConstructorClassModel[]>,
    default: () => [],
    required: true,
  },
  settings: {
    type: Object as PropType<BaseViewListModel>,
    default: BaseViewListModel.create,
    required: false,
  },
})

const breakpoints = useBreakpoints(breakpointsSematic)
const activeBreakpoints = breakpoints.active()

const viewStyles = computed(() => {
  const foundPoint = (props.settings.breakPoints || []).find((point) => {
    return point.point === activeBreakpoints.value
  })

  const { viewSingleElementCount = 1, viewSingleElementGap = 0 } = props.settings
  const gap = foundPoint ? foundPoint?.viewSingleElementGap || viewSingleElementGap : 0
  const count = foundPoint ? foundPoint?.viewSingleElementCount || viewSingleElementCount : 0
  const gapCalc = gap ? `${gap * 4}px` : 0
  return { gap, count, gapCalc }
})

const gap = computed(() => {
  return viewStyles.value.gap || 1
})
const count = computed(() => {
  return viewStyles.value.count || 0
})
const gapCalc = computed(() => {
  return viewStyles.value.gapCalc
})
const listClasses = computed(() => {
  return {
    'flex-cell': true,
    [`gap-${gap.value}`]: gap.value,
  }
})

const getAttrByField = (element: ConstructorClassModel, field: BaseViewFieldModel) => {
  return element.attrs.find((attr) => attr.code === field.attrCode)
}

console.log('props.settings', props.settings)
</script>

<template>
  <div class="ui-elements-list" :class="listClasses">
    <!-- UiElementsList
    <pre>{{ props.list }}</pre>
    <pre>{{ props.settings }}</pre> -->

    <UiCard
      v-for="element in props.list"
      :key="element.id"
      class="cell"
      :link-data="{ name: ClassRoutsNames.EDIT, params: { id: element.id } }"
    >
      <div v-for="field in props.settings.fields" :key="field.id" class="cell-field">
        <div class="cell-field__header">
          {{ getAttrByField(element, field)?.name }}

          <span class="info">
            {{ getAttrByField(element, field)?.description }}
          </span>
        </div>
        <div class="cell-field__value">
          {{ getAttrByField(element, field)?.value }}
        </div>
      </div>
      <!-- {{ gap }}
      {{ count }}
      {{ gapCalc }}
      <pre>{{ element }}</pre>
      <pre>{{ props.settings.fields }}</pre> -->
    </UiCard>
  </div>
</template>

<style scoped lang="scss">
.cell {
  background-color: var(--color-background-mute);
  width: grid-width(12, v-bind(count), v-bind(gapCalc));
  overflow: hidden;
}
</style>
