import { createServer } from "http";
import express from "express";
import { Server } from "socket.io";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const serverHttp = createServer(app);

// Utilisation de socket.io avec configuration CORS
const io = new Server(serverHttp, {
  cors: {
    origin: 'http://localhost:5173',    
    methods: ['GET', 'POST'],
  }
});

// Définir le chemin des fichiers statiques
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.resolve(__dirname, "../testWebsocket/dist")));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../testWebsocket/dist/index.html"));
});

// Connexion WebSocket via socket.io
io.on('connection', (socket) => {
  console.log("Client connected", socket.id);

  socket.on('draw', (data) => {
    console.log('Data received from client:', data);
    // Envoie du message au client courant
    socket.broadcast.emit('draw', data);
    
  });
  

  // socket.on('disconnect', () => {
  //   console.log("Client disconnected");
  // });
});

// Lancer le serveur HTTP
const Port = 3000;
serverHttp.listen(Port, () => {
  console.log(`Server running on port ${Port}`);
});
