<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { ModelBaseClass } from '../models/ModelBaseClass'
import { BaseFieldsTypeList } from '@/breaks/ConstructorForm/models/BaseViewFieldModel'
import type { ModelBaseAttr } from '../models/ModelBaseAttr'
import UiCard from '@/ui/UiCard/UiCard.vue'
import { ViewColor } from '@/enums/View'

defineOptions({ name: 'ItemComponent' })
// const props = defineProps({
//   mode: {
//     type: String,
//     default: 'create',
//   },
// })

const creationClassModel = reactive<ModelBaseClass>(ModelBaseClass.empty())
const inputTypes = ref<BaseFieldsTypeList>(BaseFieldsTypeList.create())
const selectedAttr = ref<ModelBaseAttr>()
const selectAttr = (attr: ModelBaseAttr) => {
  selectedAttr.value = attr
}

onMounted(() => {
  creationClassModel.setCreateUserId()
})
</script>

<template>
  <div class="constructor-class-element">
    <UiCard class="constructor-class-element--table">
      <template #header>
        <span>Атрибуты класса</span>
      </template>

      <!-- <div class="constructor-class-element--table__body"> -->
      <el-scrollbar class="constructor-class-element--table__body-list">
        <div class="flex-column gap-2">
          <UiCard
            v-for="attr in creationClassModel.attrs"
            :key="attr.guid"
            shadow="hover"
            class="attr"
            :bg-color="ViewColor.BASE"
          >
            <div class="flex-column gap-2">
              <el-input v-model="attr.name" placeholder="атрибут" class="dark" size="small" clearable>
                <template #prepend>Название:</template>
              </el-input>

              <el-input v-model="attr.code" placeholder="SOME_CODE" dark size="small" clearable>
                <template #prepend>Код:</template>
              </el-input>

              <el-input
                v-model="attr.description"
                placeholder="Описание атрибута"
                type="textarea"
                size="small"
                :rows="1"
              />

              <el-select
                v-model="attr.type"
                placeholder="Select"
                type="primary"
                size="small"
                clearable
                :empty-values="[null, undefined]"
                :value-on-clear="null"
              >
                <el-option v-for="item in inputTypes.list" :key="item.type" :label="item.name" :value="item.type" />
              </el-select>
            </div>

            <template #footer>
              <div class="flex gap-1">
                <el-button type="primary" size="small" icon="Setting" @click="selectAttr(attr)"> Настройки </el-button>

                <el-button type="danger" size="small" icon="Delete" @click="creationClassModel.removeAttribute(attr)">
                  Удалить атрибут
                </el-button>
              </div>
            </template>
          </UiCard>
        </div>

        <pre>{{ creationClassModel }}</pre>
      </el-scrollbar>
      <!-- </div> -->
    </UiCard>

    <UiCard class="constructor-class-element--table">
      <template #header>
        <span>Настройки класса</span>
      </template>

      <div class="flex-column gap-2">
        <el-input v-model="creationClassModel.name" placeholder="класса" size="small" clearable>
          <template #prepend>Название:</template>
        </el-input>

        <el-input v-model="creationClassModel.code" placeholder="SOME_CODE" size="small" clearable>
          <template #prepend>Код:</template>
        </el-input>

        <el-input
          v-model="creationClassModel.description"
          placeholder="Описание класса"
          type="textarea"
          size="small"
          :rows="1"
        />

        <el-button class="m-0" type="primary" size="small" icon="plus" @click="creationClassModel.addAttribute()">
          Добавить атрибут
        </el-button>

        <el-button
          v-if="creationClassModel.attrs.length"
          class="m-0"
          type="danger"
          size="small"
          icon="Delete"
          @click="creationClassModel.clearAttributes()"
        >
          Удалить все атрибуты
        </el-button>
      </div>
    </UiCard>

    <!-- <SettingsView class="constructor-class-element--table">
      <div class="constructor-class-element--table__header">Права доступа класса</div>
    </SettingsView>

    <SettingsView class="constructor-class-element--table">
      <div class="constructor-class-element--table__header">Права доступа атрибута</div>
    </SettingsView> -->
  </div>
</template>

<style scoped lang="scss">
.constructor-class-element {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  gap: var(--p-4);

  &--table {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--gap-1);

    &__body-list {
      overflow: auto;
    }
  }
}
</style>
