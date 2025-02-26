<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import { ConstructorClassModel } from '../models/ConstructorClassModel'

defineOptions({ name: 'ItemComponent' })
const props = defineProps({
  mode: {
    type: String,
    default: 'create',
  },
})

const creationClassModel = ref<ConstructorClassModel>()

onBeforeMount(() => {
  if (props.mode === 'create') {
    creationClassModel.value = ConstructorClassModel.create()
  }
})
</script>

<template>
  <div class="constructor-class-element">
    <pre>{{ creationClassModel }}</pre>
  </div>
</template>

<style scoped lang="scss"></style>
