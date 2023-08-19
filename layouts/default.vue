<template>
  <header class="flex w-full max-h-screen">
    <Sidebar
      class="sm:block hidden sm:w-96 w-full overflow-hidden"
    />
    <Sidebar
      class="sm:hidden w-full overflow-hidden"
      :class="!sidebar.aside ? '' : 'hidden'"
    />
    <div
      class="sm:block hidden w-full"
    >
      <slot />
    </div>
    <div
      class="sm:hidden w-full overflow-hidden"
      :class="!sidebar.aside ? 'hidden' : ''"
    >
      <slot />
    </div>
    <LeftSidebar class="z-50 absolute right-0" />
  </header>
</template>

<script setup>
import { useSidebarStore } from "../stores/sidebar";
const sidebar = useSidebarStore();
</script>

<style lang="scss" scoped></style>
