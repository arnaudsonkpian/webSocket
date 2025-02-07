// filepath: /c:/Users/beni.sonkpian/Documents/webSocket/testWebsocket/src/stores/useDrawingStore.ts
import { defineStore } from "pinia";

interface DrawingState {
  color: string;
  lineWidth: number;
  isDrawing: boolean;
  isEraser: boolean;
}

export const useDrawingStore = defineStore("drawing", {
  state: (): DrawingState => ({
    color: 'red',
    lineWidth: 5,
    isDrawing: false,
    isEraser: false,
  }),
  actions: {
    setColor(color: string) {
      this.color = color;
    },
    setLineWidth(lineWidth: number) {
      this.lineWidth = lineWidth;
    },
    setIsDrawing(isDrawing: boolean) {
      this.isDrawing = isDrawing;
    },
    setIsEraser(isEraser: boolean) {
      this.isEraser = isEraser;
    },
  }
});