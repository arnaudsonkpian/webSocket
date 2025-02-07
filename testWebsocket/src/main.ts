import './assets/main.css'
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import {io} from 'socket.io-client';

const app = createApp(App);
const pinia = createPinia();

    app.use(pinia);
app.use(router);
app.mount('#app');

// const socket = io('http://localhost:3000');
// Create a socket connection to the server
// const clientWs=new WebSocket('ws://localhost:3000');



