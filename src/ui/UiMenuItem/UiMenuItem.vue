<script setup lang="ts">
import type { ModelBaseMenu } from '@/api/Model/ModelBaseMenu'
import { computed } from 'vue'
import { House, DocumentAdd, Document, List, Tickets, Platform } from '@element-plus/icons-vue'

defineOptions({ name: 'UiMenuItem' })
const props = defineProps<{
  item: ModelBaseMenu
  collapse: boolean
}>()

const icon = computed(() => {
  switch (props.item.meta?.icon) {
    case 'House':
      return House
    case 'DocumentAdd':
      return DocumentAdd
    case 'List':
      return List
    case 'Tickets':
      return Tickets
    case 'Platform':
      return Platform

    default:
      return Document
  }
})
</script>

<template>
  <template v-if="Boolean(props.item.children.length)">
    <el-sub-menu class="ui-menu-element" :key="props.item.name" :index="props.item.path" :router="item.name">
      <template #title>
        <el-icon><component :is="icon" /></el-icon>
        <span :class="{ ['title-collapse']: collapse }">{{ props.item.meta?.title }}</span>
      </template>

      <template #default>
        <UiMenuItem v-for="child in item.children" :key="child.name" :item="child" :collapse="props.collapse" />
      </template>
    </el-sub-menu>
  </template>

  <template v-else>
    <el-menu-item class="ui-menu-element" :index="props.item.path" :router="item.name">
      <el-icon><component :is="icon" /></el-icon>
      <template #title>
        <span>{{ props.item.meta?.title }}</span>
      </template>
    </el-menu-item>
  </template>
</template>

<style scoped lang="scss">
.title-collapse {
  overflow: hidden;
  opacity: 0;
}

.ui-menu-element {
  &.is-active {
    :deep(.el-sub-menu__title) {
      color: var(--el-menu-active-color);
    }
  }

  @media (hover: hover) {
    :deep(.el-sub-menu__title:hover),
    &:hover {
      background-color: var(--color-background-mute);
    }
  }
}
</style>
