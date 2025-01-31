<template>
  <div>
    <canvas ref="canvasRef" class="border-2 border-red-400 " @mousedown="startDrawing" @mousemove="draw"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const lastPoint = ref<{ x: number; y: number } | null>(null);
const canvasRef = ref<HTMLCanvasElement | null>(null);

const resize = () => {
  const canvas = canvasRef.value;
  const toolbar = document.querySelector(".toolbar");
  if (!canvas || !toolbar) {
    return;
  }
  canvas.width = window.innerWidth - toolbar.clientWidth;
  canvas.height = window.innerHeight - toolbar.clientHeight;
};

const draw = (e: MouseEvent) => {
  console.log("draw", e);
  if (!lastPoint.value) {
    return;
  }
  const rect = canvasRef.value?.getBoundingClientRect();
  const currentPoint = {
    x: e.clientX - (rect?.left || 0),
    y: e.clientY - (rect?.top || 0)
  };

  const ctx = canvasRef.value?.getContext("2d");
  if (!ctx) {
    return;
  }

  ctx.beginPath();
  ctx.strokeStyle = "blue";
  ctx.moveTo(lastPoint.value.x, lastPoint.value.y);
  ctx.lineTo(currentPoint.x, currentPoint.y);
  ctx.stroke();

  lastPoint.value = currentPoint;
};

const startDrawing = (e: MouseEvent) => {
  console.log("startDraw", e);
  lastPoint.value = {
    x: e.offsetX,
    y: e.offsetY
  };
};

onMounted(() => {
  const canvas = canvasRef.value;
  if (!canvas) {
    return;
  }
  resize();
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "green";
  ctx.fillRect(10, 10, 100, 100);
  ctx.strokeStyle = "red";
  ctx.strokeRect(150, 10, 100, 100);

  console.log(canvasRef.value);
});
</script>

<style scoped>
</style>