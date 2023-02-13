import App from './App.vue';
import { game } from './game';
import { createApp } from './runtime-canvas';

createApp(App).mount(game.stage)
