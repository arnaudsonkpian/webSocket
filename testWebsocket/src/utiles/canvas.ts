import type { Point } from "@/types/canvas";

export const drawLine=(ctx:CanvasRenderingContext2D,
    startPoint:Point,
    endPoint:Point,
    color:string,
    lineWidth:number,
    
)=>{
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth; 
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.moveTo(startPoint.x,startPoint.y);
    ctx.lineTo(endPoint.x, endPoint.y);
    ctx.stroke();
    // startPoint = currentPoint;

    }
    export const clearCanvas = (
        ctx: CanvasRenderingContext2D,
        width: number,
        height: number
      ) => {
        ctx.clearRect(0, 0, width, height);
      };

    
