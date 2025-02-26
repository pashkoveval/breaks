<script setup lang="ts">
import WorkView from './WorkView.vue'
import SettingsView from './SettingsView.vue'

defineOptions({ name: 'MainView' })
// const props = defineProps({});
</script>

<template>
  <div class="constructor-form-main-view gap-1">
    <WorkView />
    <SettingsView />
  </div>
</template>

<style scoped lang="scss">
.constructor-form-main-view {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr minmax(400px, 30%);
}
</style>
