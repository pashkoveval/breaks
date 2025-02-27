<script setup lang="ts">
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import type { ModelBaseMenu } from '@/api/Model/ModelBaseMenu'

const route = useRoute()
defineOptions({ name: 'UiMenuItem' })
const props = defineProps<{
  item: ModelBaseMenu
}>()

const collapse = () => {
  if (props.item?.children?.length) {
    props.item.collapse()
  }
}

watch(
  () => route.name,
  (v) => {
    if (props.item.open && props.item.checkCanCollapse(v || '') && v !== props.item.name) {
      collapse()
    }
  },
  { immediate: true, deep: true },
)
</script>

<template>
  <!-- <div class="ui-menu-item"> -->
  <RouterLink
    :to="props.item"
    class="ui-menu-item__link"
    :class="{
      'ui-menu-item__link__open': props.item.open,
      'ui-menu-item__link__parent': props.item?.children?.length,
      'ui-menu-item__link__child': props.item?.meta?.parent,
    }"
    :data-path="props.item.path"
    @click="collapse"
  >
    <span>{{ item.meta?.button || item.meta?.title }}</span>
  </RouterLink>

  <div v-if="props.item.open && props.item.children" class="ui-menu-item__children">
    <UiMenuItem v-for="child in item.children" :key="child.name" :item="child" />
  </div>
  <!-- </div> -->
</template>

<style scoped lang="scss">
.ui-menu-item {
  // display: flex;
  // flex-direction: column;
  // gap: 16px;

  &__link {
    width: fit-content;
    display: flex;
    gap: 16px;

    &.router-link-active {
      text-decoration: underline;
    }

    &__parent {
      display: flex;
      gap: 16px;

      &.router-link-active::after {
        content: '\21B4';
        display: block;
      }
    }
  }

  &__children {
    margin-left: 40px;
    width: fit-content;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}
</style>
