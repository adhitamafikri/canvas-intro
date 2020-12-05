import { initCanvas } from './canvas'

const canvas = document.getElementById('app-canvas');

if (canvas.getContext) {
  const ctx = canvas.getContext('2d');
  initCanvas();
} else {
  alert('Your browser does not support canvas');
}
