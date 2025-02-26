<script setup lang="ts">
import AsideBlock from './aside/AsideBlock.vue'
import FooterBlock from './footer/FooterBlock.vue'
import HeaderBlock from './header/HeaderBlock.vue'
import MainBlock from './main/MainBlock.vue'

defineOptions({ name: 'MainLayout' })
const slots = defineSlots<{
  aside?: (props: unknown) => unknown
  header?: (props: unknown) => unknown
  main?: (props: unknown) => unknown
  footer?: (props: unknown) => unknown
}>()
</script>

<template>
  <div class="main-layout">
    <AsideBlock v-if="slots?.aside">
      <template #aside>
        <slot name="aside" />
      </template>
    </AsideBlock>

    <HeaderBlock v-if="slots?.header">
      <template #header>
        <slot name="header" />
      </template>
    </HeaderBlock>

    <MainBlock v-if="slots?.main">
      <template #main>
        <slot name="main" />
      </template>
    </MainBlock>

    <FooterBlock v-if="slots?.footer">
      <template #footer>
        <slot name="footer" />
      </template>
    </FooterBlock>
  </div>
</template>

<style scoped lang="scss">
.main-layout {
  width: 100dvw;
  height: 100dvh;
  display: grid;
  grid-template-columns: minmax(60px, auto) minmax(auto, 100%);
  grid-template-rows: minmax(60px, auto) minmax(auto, 100%) minmax(60px, auto);
  gap: 0px 0px;
  grid-template-areas:
    'aside header'
    'aside main'
    'aside footer';
}
</style>
