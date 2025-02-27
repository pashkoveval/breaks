<script setup lang="ts">
import { computed, ref } from 'vue'
import { BaseViewListModel, ViewElement } from '@/breaks/ConstructorForm/models/BaseViewListModel'
import UiElementsList from '@/ui/UiElementsList/UiElementsList.vue'
import UiTable from '@/ui/UiTable/UiTable.vue'
import { ModelBaseClass } from '../models/ModelBaseClass'

defineOptions({ name: 'ListComponent' })
// const props = defineProps({});

const listClasses = ref<ModelBaseClass[]>([])
const listSettings = ref<BaseViewListModel>(BaseViewListModel.create())

for (let i = 0; i < 10; i++) {
  const classElement = ModelBaseClass.empty()
  classElement.code = 'class-code' + i
  classElement.name = 'class-name' + i
  classElement.description = 'class-description' + i
  classElement.addAttribute()
  classElement.attrs[0].code = 'attr-code1'
  classElement.attrs[0].name = 'attr-name' + 1
  classElement.attrs[0].value = 'attr-value' + 1
  classElement.attrs[0].description = 'attr-description' + 1
  classElement.addAttribute()
  classElement.attrs[1].code = 'attr-code2'
  classElement.attrs[1].name = 'attr-name' + i + 1
  classElement.attrs[1].value = 'attr-value' + i + 1
  classElement.attrs[1].description = 'attr-description' + i + 1
  listClasses.value.push(classElement)

  if (listSettings.value.fields.length === 0) {
    listSettings.value.addField(classElement.attrs[0])
    listSettings.value.addField(classElement.attrs[1])
  }
}

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
  <div class="constructor-class-list">
    <component :is="viewElement" :list="listClasses" :settings="listSettings" />
  </div>
</template>

<style scoped lang="scss"></style>
