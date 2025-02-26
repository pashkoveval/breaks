<script setup lang="ts">
import { type PropType } from 'vue'
import { type BaseClassModel } from '@/api/Model/BaseClass/BaseClassModel'
import { BaseViewListModel } from '@/breaks/ConstructorForm/models/BaseViewListModel'

defineOptions({ name: 'UiTable' })
const props = defineProps({
  list: {
    type: Array as PropType<BaseClassModel[]>,
    default: () => [],
    required: true,
  },
  settings: {
    type: Object as PropType<BaseViewListModel>,
    default: BaseViewListModel.create,
    required: false,
  },
})
</script>

<template>
  <div class="ui-table">
    UiTable
    <pre>{{ props.list }}</pre>
    <pre>{{ props.settings }}</pre>
  </div>
</template>

<style scoped lang="scss"></style>
