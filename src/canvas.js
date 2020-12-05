import Rectangle from './primitives/rectangle';

/**
 * Initialize the program
 * @param {HTMLElement} canvas - canvas element
 */
function initCanvasProgram(canvas) {
  const ctx = canvas.getContext('2d');
  drawRectangles(ctx);
  drawSmiley(ctx);
}

/**
 * @param {CanvasRenderingContext2D} ctx
 */
function drawRectangles(ctx) {
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

/**
 * @param {CanvasRenderingContext2D} ctx
 */
function drawSmiley(ctx) {
  ctx.beginPath();
  // Outer circle
  ctx.arc(180, 60, 50, 0, Math.PI * 2, false);

  // Mouth
  ctx.moveTo(215, 60);
  ctx.arc(180, 60, 35, 0, Math.PI, false);

  // Left eye
  ctx.moveTo(170, 40);
  ctx.arc(165, 40, 5, Math.PI * 2, false);

  // right eye
  ctx.moveTo(200, 40);
  ctx.arc(195, 40, 5, Math.PI * 2, false);

  ctx.stroke();
  ctx.closePath();
}

export { initCanvasProgram };
