import Rectangle from './primitives/rectangle';

/**
 * Initialize the program
 * @param {HTMLElement} canvas - canvas element
 */
function initCanvasProgram(canvas) {
  const ctx = canvas.getContext('2d');
  drawRectangles(ctx);
  drawSmiley(ctx);
  drawTriangles(ctx);
  drawCircles(ctx);
  drawWithPath2D(ctx);
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

  ctx.fillStyle = 'palevioletred';
  ctx.fill();

  ctx.stroke();
  ctx.closePath();
}

/**
 * @param {CanvasRenderingContext2D} ctx
 */
function drawTriangles(ctx) {
  // Colored triangle
  ctx.beginPath();
  ctx.moveTo(260, 10);
  ctx.lineTo(350, 10);
  ctx.lineTo(260, 100);
  ctx.fillStyle = 'green';
  ctx.fill();

  // Stroked Path
  ctx.beginPath();
  ctx.moveTo(280, 100);
  ctx.lineTo(360, 100);
  ctx.lineTo(360, 10);
  ctx.closePath();
  ctx.stroke();
}

/**
 * @param {CanvasRenderingContext2D} ctx
 */
function drawCircles(ctx) {
  // Colored triangle
  ctx.beginPath();
  ctx.moveTo(260, 10);
  ctx.lineTo(350, 10);
  ctx.lineTo(260, 100);
  ctx.fillStyle = 'green';
  ctx.fill();

  // Stroked Path
  ctx.beginPath();
  ctx.moveTo(280, 100);
  ctx.lineTo(360, 100);
  ctx.lineTo(360, 10);
  ctx.closePath();
  ctx.stroke();
}

/**\
 * This is experimental feature. Use in dev only
 * @param {CanvasRenderingContext2D} ctx
 */
function drawWithPath2D(ctx) {
  const rectangle = new Path2D();
  rectangle.rect(400, 10, 100, 100);

  const circle = new Path2D();
  circle.arc(580, 60, 50, 0, Math.PI * 2);

  ctx.stroke(rectangle);
  ctx.fill(circle);
}

export { initCanvasProgram };
