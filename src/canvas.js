import Rectangle from './primitives/rectangle';

/**
 * Initialize the program
 * @param {HTMLElement} canvas - canvas element
 */
function initCanvasProgram(canvas) {
  const ctx = canvas.getContext('2d');
  Rectangle.draw({
    ctx,
    matrices: [10, 10, 100, 100],
    color: 'rgba(120, 200, 100, 0.5)',
  });
  Rectangle.stroke({
    ctx,
    matrices: [20, 20, 80, 80],
    color: 'rgba(200, 0, 100, 0.5)',
  });
  Rectangle.clear({
    ctx,
    matrices: [40, 40, 40, 40],
  });
}

export { initCanvasProgram };
