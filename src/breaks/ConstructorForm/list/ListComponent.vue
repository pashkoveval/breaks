<script setup lang="ts">
import { computed, ref } from 'vue'
import { BaseViewListModel, ViewElement } from '../models/BaseViewListModel'
import UiElementsList from '@/ui/UiElementsList/UiElementsList.vue'
import UiTable from '@/ui/UiTable/UiTable.vue'

defineOptions({ name: 'ConstructorFormListComponent' })
// const props = defineProps({});

const listSettings = ref(BaseViewListModel.create())

const viewElement = computed(() => {
  switch (listSettings.value.viewElement) {
    case ViewElement.LIST:
      return UiElementsList
    case ViewElement.TABLE:
      return UiTable
    default:
      return UiElementsList
  }
})
</script>

<template>
  <div class="constructor-form-list-component">
    <component :is="viewElement" :list="[]" :settings="listSettings" />
  </div>
</template>

<style scoped lang="scss"></style>
