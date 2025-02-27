<script setup lang="ts">
defineOptions({ name: 'MainLayout' })
const slots = defineSlots<{
  aside?: (props: unknown) => unknown
  header?: (props: unknown) => unknown
  main?: (props: unknown) => unknown
  footer?: (props: unknown) => unknown
}>()
</script>

<template>
  <section class="main-layout">
    <aside v-if="slots?.aside" class="aside">
      <slot name="aside" />
    </aside>

    <header v-if="slots?.header" class="header">
      <slot name="header" />
    </header>

    <main v-if="slots?.main" class="main">
      <slot name="main" />
    </main>

    <footer v-if="slots?.footer" class="footer">
      <slot name="footer" />
    </footer>
  </section>
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

.aside,
.header,
.main,
.footer {
  width: 100%;
  overflow: auto;
  padding: var(--p-1);
}

.aside {
  grid-area: aside;
}

.header {
  grid-area: header;
}

.main {
  grid-area: main;
  @include scrollbar;
}

.footer {
  grid-area: footer;
}
</style>
