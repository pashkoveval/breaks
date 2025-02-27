<script setup lang="ts">
import { reactive, ref } from 'vue'
import { ModelBaseClass } from '../models/ModelBaseClass'
import SettingsView from './SettingsView.vue'
import { BaseFieldsTypeList } from '@/breaks/ConstructorForm/models/BaseViewFieldModel'
import type { ModelBaseAttr } from '../models/ModelBaseAttr'

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
</script>

<template>
  <div class="constructor-class-element">
    <SettingsView class="constructor-class-element--table">
      <div class="constructor-class-element--table__header">Атрибуты класса</div>

      <el-scrollbar class="constructor-class-element--table__body">
        <div class="flex-column gap-2">
          <el-card v-for="attr in creationClassModel.attrs" :key="attr.guid" shadow="hover" class="attr">
            <div class="flex-column gap-2">
              <el-input v-model="attr.name" placeholder="атрибут" size="small" clearable>
                <template #prepend>Название:</template>
              </el-input>
              <el-input v-model="attr.code" placeholder="SOME_CODE" size="small" clearable>
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
              <div class="flex gap-1">
                <el-button type="primary" size="small" icon="Setting" @click="selectAttr(attr)"> Настройки </el-button>
                <el-button type="danger" size="small" icon="Delete" @click="creationClassModel.removeAttribute(attr)">
                  Удалить атрибут
                </el-button>
              </div>
            </div>
          </el-card>
        </div>

        <pre>{{ creationClassModel }}</pre>
      </el-scrollbar>
    </SettingsView>

    <SettingsView class="constructor-class-element--table">
      <div class="constructor-class-element--table__header">Настройки класса</div>

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
          v-if="creationClassModel.attrs.length > 3"
          class="m-0"
          type="danger"
          size="small"
          icon="Delete"
          @click="creationClassModel.clearAttributes()"
        >
          Удалить все атрибуты
        </el-button>
      </div>
    </SettingsView>

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
  gap: var(--p-1);

  &--table {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--gap-1);
    overflow: auto;

    &__header {
      padding-bottom: var(--p-1);
      margin-bottom: var(--p-3);
      border-bottom: 1px solid var(--color-secondary);
    }
  }
}
</style>
