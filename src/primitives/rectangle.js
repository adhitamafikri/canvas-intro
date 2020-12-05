const Rectangle = {
  /**
   * draws a filled rectangle
   * @param {object} param
   * @param {CanvasRenderingContext2D} param.ctx - ctx object from canvas.getContext()
   * @param {number[]} param.matrices - sets the position and size of the rectangle
   * @param {string} param.color - color for fillStyle
   * @return {void}
   */
  draw({ ctx, matrices, color }) {
    ctx.fillStyle = color;
    ctx.fillRect(...matrices);
  },

  /**
   * draws a rectangular stroke outline
   * @param {object} param
   * @param {CanvasRenderingContext2D} param.ctx - ctx object from canvas.getContext()
   * @param {number[]} param.matrices - sets the position and size of the rectangle
   * @param {string} param.color - color for fillStyle
   * @return {void}
   */
  stroke({ ctx, matrices, color }) {
    ctx.strokeStyle = color;
    ctx.strokeRect(...matrices);
  },

  /**
   * clears a rectangular area
   * @param {object} param
   * @param {CanvasRenderingContext2D} param.ctx - ctx object from canvas.getContext()
   * @param {number[]} param.matrices - sets the position and size of the rectangle
   * @return {void}
   */
  clear({ ctx, matrices }) {
    ctx.clearRect(...matrices);
  },
};

export default Rectangle;
