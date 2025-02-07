<template>
  <div class="flex h-screen">
    <div ref="toolbarRef" class="w-[25%] border-2 ">
      <Toolbare  />
    </div>
    <div class="flex-2 border-2">
      <canvasComponentVue  class=" border-2 border-red-600 h-full"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UserPen } from 'lucide-vue-next'
import { RouterLink, RouterView } from 'vue-router'
import canvasComponentVue from './CanvasComponent.vue'
import Toolbare from './ToolbareComponent.vue'
//  const toolbaref = ref<HTMLCanvasElement | null>(null);
</script>

<style scoped>

</style>
