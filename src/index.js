import { initCanvasProgram } from './canvas';

const canvas = document.getElementById('app-canvas');

if (canvas.getContext) {
  window.onload = () => {
    initCanvasProgram(canvas);
  };
} else {
  alert('Your browser does not support canvas');
}
