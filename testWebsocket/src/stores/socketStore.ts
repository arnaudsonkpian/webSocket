import { defineStore } from "pinia";
import { io, Socket } from "socket.io-client";

interface SocketState {
  socket: Socket | null;
}

export const useSocketStore = defineStore("socket", {
  state: (): SocketState => ({
    socket: null as Socket|null,
  }),
  actions: {
    connect() {
      if (!this.socket) {
        this.socket = io("http://localhost:3000");

        this.socket.on("connect", () => {
          console.log("Connected to WebSocket server");
          //fonction pour emettre des donnees par emit
            // this.socket.emit("message", "Hello from client!");

        });

        // this.socket.on("disconnect", () => {
        //   console.log("Disconnected from WebSocket server");
        // });

        // this.socket.on("message", (message: string) => {
        //   console.log(`Message from server: ${message}`);
        // });
      }
    },
    emit(event: string, data:any) {
        if (this.socket) {
          this.socket.emit(event, data);
        }
      
    }
  },
});