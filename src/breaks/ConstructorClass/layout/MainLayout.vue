<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { ClassRoutsNames } from '../constants'

defineOptions({ name: 'ConstructorClassMainLayout' })
// const props = defineProps({});

const route = useRoute()
const isMain = computed(() => route.name === ClassRoutsNames.BASE)
</script>

<template>
  <div class="constructor-class-main-layout">
    <div v-if="isMain" class="">
      ConstructorClass
      <pre>{{ route }}</pre>
    </div>
    <KeepAlive>
      <RouterView />
    </KeepAlive>
  </div>
</template>

<style scoped lang="scss"></style>
