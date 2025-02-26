<script setup lang="ts">
import MainView from '../constructor/View/MainView.vue'

defineOptions({ name: 'ConstructorFormItemComponent' })
// const props = defineProps({});
</script>

<template>
  <div class="constructor-form-element">
    <MainView />
    <!-- <PreviewView /> -->
    <!-- <CodeView /> -->
  </div>
</template>

<style scoped lang="scss">
.constructor-form-element {
  width: 100%;
  height: 100%;
}
</style>
