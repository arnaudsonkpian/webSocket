<template>
  <div class="space-y-8 p-2 toolbar">
    <div class="flex justify-between">
      <Eraser size="24" class="bg-green-500 flex w-[50px]" />
      <Paintbrush size="24" class="bg-blue-400 w-[50px]" />
    </div>
    <div>
      <label for="Couleur">Couleur</label>
      <input type="color" id="favcolor" name="favcolor" class="w-56" />
    </div>
    <div>
      <!-- <label for=""></label> -->
    </div>
    <div>
      <label for="">slider</label>
      <input type="range" min="1" max="100" value="50" class="slider" id="myRange" />
    </div>
    <div>
      <button>
        <Download size="24" color="blue" class="bg-yellow-300 text-4xl w-56 h-12 border rounded-3xl" />
      </button>
    </div>
    <div>
      <button>
        <RotateCcw size="24" color="red" class="bg-blue-500 text-4xl w-56 h-12 border rounded-3xl" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Eraser, Paintbrush, Download, RotateCcw } from "lucide-vue-next";
</script>

<style scoped>
</style>