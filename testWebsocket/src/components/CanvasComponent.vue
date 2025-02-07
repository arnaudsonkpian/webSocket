<template>
  <div>
    <canvas ref="canvasRef" class="border-2 border-red-400 canvas " @mousedown="startDrawing" @mousemove="draw" @mouseup="stopDrawing" ></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import {drawLine} from "../utiles/canvas";
import { useDrawingStore } from "../stores/useDrawingStore";
import { useSocketStore } from "../stores/socketStore";
const socketStore = useSocketStore();
const drawings = useDrawingStore();
const lastPoint = ref<{ x: number; y: number } | null>(null);
const canvasRef = ref<HTMLCanvasElement | null>(null);
const isDrawing = ref(false);



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


  // if (!isDrawing.value) {
  //   return;
  // }
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
  //appel de la fonction drawLine
  drawLine(ctx, lastPoint.value, currentPoint, drawings.color, drawings.lineWidth);
  socketStore.emit("draw", 
  {
    points: [lastPoint.value, currentPoint],
    color: drawings.color,
    lineWidth: drawings.lineWidth,
    isEraser: drawings.isEraser,
  });
    lastPoint.value = currentPoint;
};


const startDrawing = (e: MouseEvent) => {
    drawings.setIsDrawing(true);

  console.log("startDraw", e);
  lastPoint.value = {
    x: e.offsetX,
    y: e.offsetY
  };
};

const stopDrawing = () => {
  console.log("stopDraw");
   drawings.setIsDrawing(false);
  // isDrawing.value = false;
  lastPoint.value = null;
};
// const drawOrErase = (ctx, x, y) => {
//   if (drawings.isEraser) {
//     ctx.clearRect(x, y, drawings.lineWidth, drawings.lineWidth);
//   } else {
//     ctx.fillStyle = drawings.color;
//     ctx.fillRect(x, y, drawings.lineWidth, drawings.lineWidth);
//   }
// };



onMounted(() => {
  
  
  window.addEventListener("resize", resize);
    resize();
  const canvas = canvasRef.value;
  if (!canvas) {
    return;
  }
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return;
  }


  ctx.fillStyle = "green";
  ctx.fillRect(10, 10, 100, 100);

  ctx.strokeStyle = "red";
  ctx.strokeRect(150, 10, 100, 100);
  
  console.log(canvasRef.value);
});

socketStore.connect();
socketStore.socket?.on("draw", (data) => {

 console.log("les données dans le navigateur ecoutant",(data));  
 const ctx = canvasRef.value?.getContext("2d");
    if (!ctx) {
      return;
    }
    const { points, color, lineWidth, isEraser } = data;
    if (isEraser) {
      ctx.clearRect(points[1].x, points[1].y, lineWidth, lineWidth);
    } else {
      drawLine(ctx, points[0], points[1], color, lineWidth);
    }     

});
</script>

<style scoped>
</style>