<template>
  <div class="space-y-8 p-2 toolbar">
    <div class="flex justify-between">
      <button @click="drawings.setIsEraser(!drawings.isEraser)">
        <Eraser
          :size="24"
          :class="{
            'bg-gray-500': drawings.isEraser,
            'bg-green-500': !drawings.isEraser,
          }"
          class="flex w-[50px]"
        />
      </button>
   
      <Paintbrush :size="24" class="bg-blue-400 w-[50px]" />
    </div>
    <div>
      <label for="Couleur">Couleur</label>
      <input
        type="color"
        v-model="drawings.color"
        @change="drawings.setColor(drawings.color)"
        id="favcolor"
        name="favcolor"
        class="w-56"
      />
    </div>
    <div>
      <!-- <label for=""></label> -->
    </div>
    <div>
      <label for="myRange">Slider</label>
      <input
        type="range"
        v-model="drawings.lineWidth"
        @change="drawings.setLineWidth(drawings.lineWidth)"
        min="1"
        max="100"
        value="50"
        class="slider"
        id="myRange"
      />
    </div>
    <div>
      <button>
        <Download
          :size="24"
          color="blue"
          class="bg-yellow-300 text-4xl w-56 h-12 border rounded-3xl"
        />
      </button>
    </div>
    <div>
      <button>
        <RotateCcw        
          :size="24"
          color="red"
          class="bg-blue-500 text-4xl w-56 h-12 border rounded-3xl"
        />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Eraser, Paintbrush, Download, RotateCcw } from "lucide-vue-next";
import { useDrawingStore } from "../stores/useDrawingStore";
import { clearCanvas } from "../utiles/canvas";
const drawings = useDrawingStore();

const clear = () => {
  const canvasElement = document.querySelector(".canvas") as HTMLCanvasElement;
  if (!canvasElement) return;
  const ctx = canvasElement.getContext("2d");
  if (!ctx) return;
  clearCanvas(ctx, canvasElement.width, canvasElement.height);
};
</script>

<style scoped>
</style>